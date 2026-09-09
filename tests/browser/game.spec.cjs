const {test,expect}=require('@playwright/test');
const {TRACKS}=require('../../data.js');
const motions=Object.values(TRACKS).flatMap(t=>t.motions);
const byTitle=new Map(motions.map(m=>[m.title,m]));
async function start(page){
  await page.goto('/');
  await page.getByRole('button',{name:'TAKE THE BENCH'}).click();
}
async function experts(page){await page.getByRole('button',{name:/^Experts ·/}).click();}
async function answer(page,correct=true){
  const motion=byTitle.get(await page.locator('#motionTitle').textContent());
  const d=motion.correctRuling==='either'?'grant':correct?motion.correctRuling:motion.correctRuling==='grant'?'deny':'grant';
  await page.locator(`[data-ruling="${d}"]`).click();
  await expect(page.locator('#resultHeading')).toBeVisible();
}
test('switch tracks after ruling and prevent skipping or stale feedback',async({page})=>{
  await start(page);await experts(page);await answer(page);
  await page.getByRole('button',{name:'← MENU',exact:true}).click();
  await page.getByRole('button',{name:/^Pleading ·/}).click();
  await expect(page.locator('#consequence')).toBeHidden();
  await expect(page.locator('#caseCounter')).toHaveText('CASE 1 OF 3');
  await page.evaluate(()=>advanceMotion());
  await expect(page.locator('#caseCounter')).toHaveText('CASE 1 OF 3');
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#resultHeading')).toBeVisible();
});
test('feedback conceals the answer, pauses elapsed time and traps keyboard focus',async({page})=>{
  await start(page);await page.getByRole('button',{name:'CHALLENGE',exact:true}).click();
  await page.clock.install();await experts(page);
  await page.clock.runFor(5000);
  await page.getByRole('button',{name:'⚑ FLAG THIS MOTION',exact:true}).click();
  const timer=await page.locator('#timerNumber').textContent();
  await expect(page.locator('#fbContext')).not.toContainText(/correct ruling|DENY|GRANT/);
  await expect(page.locator('#fbMessage')).toBeFocused();
  await page.clock.runFor(120000);
  await expect(page.locator('#timerNumber')).toHaveText(timer);
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#consequence')).toBeHidden();
  await page.getByRole('button',{name:'SEND',exact:true}).focus();await page.keyboard.press('Tab');
  await expect(page.getByRole('button',{name:'Close',exact:true})).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#feedbackFloat')).toBeFocused();
  await answer(page);await expect(page.locator('.result-note')).toHaveCount(0);
});
test('phone records and controls remain in document flow without overlap',async({page})=>{
  await start(page);await experts(page);
  const positions=await page.evaluate(()=>{
    const box=s=>{const r=document.querySelector(s).getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right};};
    return {timer:box('.timer-container'),card:box('.card'),controls:box('.controls'),feedback:box('#feedbackFloat'),width:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth};
  });
  expect(positions.card.top).toBeGreaterThanOrEqual(positions.timer.bottom);
  expect(positions.controls.top).toBeGreaterThanOrEqual(positions.card.bottom);
  expect(positions.feedback.top).toBeGreaterThanOrEqual(positions.controls.bottom);
  expect(positions.card.left).toBeGreaterThanOrEqual(0);expect(positions.scrollWidth).toBeLessThanOrEqual(positions.width);
  await page.locator('#grantBtn').scrollIntoViewIfNeeded();await expect(page.locator('#grantBtn')).toBeInViewport();
});
test('missed queue survives reload, resolves on correct answer, and review retains facts and notes',async({page})=>{
  await start(page);await experts(page);await answer(page,false);
  await page.reload();await page.getByRole('button',{name:'Practice missed EVIDENCE motions (1)',exact:true}).click();
  await expect(page.locator('#caseCounter')).toHaveText('CASE 1 OF 1');await answer(page);
  await page.getByText('Check your reasoning',{exact:true}).click();
  await page.getByLabel('Your note (saved with this docket)').fill('The method matters more than disagreement with the conclusion.');
  await page.getByRole('button',{name:'VIEW RESULTS ▶',exact:true}).click();
  await page.getByRole('button',{name:'REVIEW DOCKET',exact:true}).click();
  await page.getByText('Original record and ruling options',{exact:true}).click();
  await expect(page.locator('.review-item details')).toContainText('RECORD'.toLowerCase());
  await expect(page.locator('.saved-note')).toContainText('The method matters');
  await page.getByRole('button',{name:'⚑ FLAG THIS MOTION',exact:true}).click();await expect(page.locator('#fbMessage')).toBeFocused();await page.keyboard.press('Escape');
  await page.getByRole('button',{name:'CHANGE TRACK',exact:true}).click();
  await expect(page.getByRole('button',{name:'Practice missed EVIDENCE motions (0)',exact:true})).toBeDisabled();
  await page.reload();await page.getByRole('button',{name:'REVIEW LAST DOCKET',exact:true}).click();await expect(page.locator('.saved-note')).toContainText('The method matters');
});
test('whole tracks can be started by keyboard, and Study completes all ten motions after mistakes',async({page})=>{
  await start(page);
  const mixed=page.getByRole('button',{name:'Start MIXED DOCKET: 10 motions',exact:true});await mixed.focus();await page.keyboard.press('Enter');
  for(let i=1;i<=10;i++){
    await expect(page.locator('#caseCounter')).toHaveText(`CASE ${i} OF 10`);await answer(page,false);
    await page.getByRole('button',{name:i===10?'VIEW RESULTS ▶':'NEXT MOTION ▶',exact:true}).click();
  }
  await expect(page.locator('#overlayTitle')).toHaveText('STUDY DOCKET COMPLETE');
  await page.getByRole('button',{name:'REVIEW DOCKET',exact:true}).click();await expect(page.locator('.review-item')).toHaveCount(10);
});
test('feedback success preserves metadata for a follow-up without sending real messages',async({page})=>{
  const requests=[];
  await page.route('https://formspree.io/**',async route=>{requests.push(route.request().postData());await route.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'});});
  await start(page);await experts(page);await page.getByRole('button',{name:'⚑ FLAG THIS MOTION',exact:true}).click();
  for(const message of ['First test comment','Second test comment']){
    await page.locator('#fbMessage').fill(message);await page.getByRole('button',{name:'SEND',exact:true}).click();
    await expect(page.locator('#feedbackStatus')).toContainText('Your feedback was sent');
  }
  expect(requests).toHaveLength(2);
  for(const body of requests){expect(body).toContain('name="motion_id"');expect(body).toMatch(/evidence-\d+/);expect(body).toContain('name="correct_ruling"');}
});
