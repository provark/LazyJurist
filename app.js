'use strict';
const $ = id => document.getElementById(id);
const SOURCES = Object.keys(TRACKS).filter(k => k !== 'mixed');
const ALL_MOTIONS = SOURCES.flatMap(k => TRACKS[k].motions.map(m => ({ ...m, _srcTrack: k })));
const BY_ID = new Map(ALL_MOTIONS.map(m => [m.id, m]));
const storage = { getItem(k) { try { return localStorage.getItem(k); } catch { return null; } }, setItem(k,v) { try { localStorage.setItem(k,v); } catch {} } };
const progress = Jurist.createProgress(storage, ALL_MOTIONS);
let mode = storage.getItem('lazyjurist:mode') === 'challenge' ? 'challenge' : 'study';
let currentTrackKey = null, currentTopicFilter = null, missedOnly = false;
let gameDeck = [], currentIndex = 0, phase = 'menu', state = Jurist.initialState();
let sessionHistory = [], reviewHistory = [], reviewFromMenu = false;
let cardTimer = null, cardStartTime = 0, pausedAt = null;
let activeDialog = null, dialogReturnFocus = null, feedbackMotion = null;
let lastSession = null;
try {
  const saved = JSON.parse(storage.getItem('lazyjurist:lastSession') || 'null');
  if (saved && Array.isArray(saved.history) && TRACKS[saved.track]) {
    saved.history = saved.history.filter(e => e && BY_ID.has(e.id) && ['grant','deny'].includes(e.direction));
    if (saved.history.length) lastSession = saved;
  }
} catch {}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function focusElement(el) { el?.focus({ preventScroll: true }); }
function announce(s) { $('announcer').textContent = s; }
function motionPool(key, topic = null) {
  return ALL_MOTIONS.filter(m => (key === 'mixed' || m._srcTrack === key) && (!topic || m.topic === topic));
}
function accuracy(correct, wrong) {
  return correct + wrong ? `${Math.round(100 * correct / (correct + wrong))}%` : '—';
}
function sessionLabel() {
  const topic = TOPICS[currentTrackKey]?.find(t => t.key === currentTopicFilter)?.label;
  return [TRACKS[currentTrackKey].name, topic, missedOnly ? 'MISSED MOTIONS' : null].filter(Boolean).join(' · ');
}
function setMode(next) {
  mode = next === 'challenge' ? 'challenge' : 'study';
  storage.setItem('lazyjurist:mode', mode);
  $('modeStudy').setAttribute('aria-pressed', String(mode === 'study'));
  $('modeChallenge').setAttribute('aria-pressed', String(mode === 'challenge'));
  $('modeDescription').textContent = mode === 'study'
    ? 'Take your time. No timer or early removal. Learn from every ruling.'
    : '45 / 55 / 65 seconds by difficulty. Reputation and warnings can end your docket.';
}
function clearCardTimer() { clearInterval(cardTimer); cardTimer = null; }
function elapsedSeconds() { return Math.max(0, ((pausedAt ?? Date.now()) - cardStartTime) / 1000); }
function pauseTimer() {
  if (phase === 'answering' && pausedAt === null) { pausedAt = Date.now(); clearCardTimer(); }
}
function resumeTimer() {
  if (pausedAt !== null) { cardStartTime += Date.now() - pausedAt; pausedAt = null; }
  if (phase === 'answering' && mode === 'challenge') { updateTimerDisplay(); cardTimer = setInterval(updateTimerDisplay, 200); }
}

/* Modal focus and background isolation, including nested game results. */
function showDialog(id, className = 'show') {
  if (activeDialog) closeDialog(false);
  dialogReturnFocus = document.activeElement;
  const el = $(id);
  el.classList.add(className);
  activeDialog = { el, className, isolated: [] };
  for (let parent = el; parent && parent !== document.body; parent = parent.parentElement) {
    for (const sibling of parent.parentElement.children) {
      if (sibling !== parent && !['SCRIPT','STYLE','LINK'].includes(sibling.tagName)) {
        activeDialog.isolated.push([sibling, sibling.inert]); sibling.inert = true;
      }
    }
  }
  const preferred = el.querySelector('[data-initial-focus]') || el.querySelector('button, input:not([type="hidden"]), textarea, a');
  focusElement(preferred || el);
}
function closeDialog(restore = true) {
  if (!activeDialog) return;
  activeDialog.el.classList.remove(activeDialog.className);
  for (const [el, inert] of activeDialog.isolated) el.inert = inert;
  activeDialog = null;
  if (restore && dialogReturnFocus?.isConnected) focusElement(dialogReturnFocus);
  dialogReturnFocus = null;
}
function showIntro() { pauseTimer(); showDialog('introOverlay'); }
function closeIntro() { closeDialog(); storage.setItem('judge9:introSeen','1'); resumeTimer(); }
function resetResultUI() {
  $('consequence').className = 'consequence'; $('consequence').replaceChildren();
  $('gameScreen').classList.remove('showing-result');
  announce('');
}
function goToSelector() {
  clearCardTimer(); pausedAt = null; closeDialog(false); resetResultUI(); phase = 'menu';
  $('gameScreen').style.display = 'none'; $('reviewScreen').style.display = 'none';
  $('trackSelector').style.display = 'flex';
  updateTrackProgress(); window.scrollTo(0,0); focusElement($('selectorHeading'));
}
function selectTrack(key, topic = null, missed = false) {
  if (!TRACKS[key]) return;
  const pool = motionPool(key, topic);
  if (missed && !progress.missed(pool).length) { announce('No missed motions in this track yet.'); return; }
  currentTrackKey = key; currentTopicFilter = topic; missedOnly = missed;
  initSession();
}
function initSession() {
  clearCardTimer(); closeDialog(false); resetResultUI(); pausedAt = null;
  let pool = motionPool(currentTrackKey, currentTopicFilter);
  if (missedOnly) pool = progress.missed(pool);
  if (!pool.length) { goToSelector(); announce('All missed motions in this docket have been resolved.'); return; }
  gameDeck = Jurist.sampleDeck(pool, progress.seen());
  currentIndex = 0; state = Jurist.initialState(); sessionHistory = [];
  $('trackSelector').style.display = 'none'; $('reviewScreen').style.display = 'none'; $('gameScreen').style.display = 'flex';
  $('gameHeader').className = TRACKS[currentTrackKey].headerClass;
  $('gameScreen').classList.toggle('study-mode', mode === 'study');
  $('trackTitle').textContent = `// ${sessionLabel()} //`;
  $('sessionMode').textContent = mode === 'study' ? 'STUDY · UNTIMED' : 'CHALLENGE';
  updateStats(); renderCard();
}
function authorityHtml(m) {
  const links = m.authorities.map(a => `<a href="${escapeHtml(a.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(a.label)} ↗</a>`).join(' · ');
  return `<div class="authority-links">${links}</div><div class="review-date">${escapeHtml(m.jurisdiction)} · ${m.lastReviewed ? `Card reviewed ${escapeHtml(m.lastReviewed)}` : 'Substantive review pending'}</div>`;
}
function renderCard() {
  if (currentIndex >= gameDeck.length) { endGame(); return; }
  phase = 'answering'; resetResultUI();
  const m = gameDeck[currentIndex];
  $('caseCounter').textContent = `CASE ${currentIndex+1} OF ${gameDeck.length}`;
  $('feedbackFloat').style.display = 'block';
  $('cardArea').innerHTML = `<article class="card ${TRACKS[m._srcTrack].cardClass}" aria-labelledby="motionTitle">
    <span class="swipe-label deny" aria-hidden="true">DENY</span><span class="swipe-label grant" aria-hidden="true">GRANT</span>
    <div class="card-meta"><div class="card-tag">MOTION BEFORE THE COURT</div><div class="difficulty-pill ${m.difficulty}">${m.difficulty.toUpperCase()}</div></div>
    <div class="card-party">${escapeHtml(m.party.toUpperCase())}'S COUNSEL</div>
    <h2 class="card-title" id="motionTitle" tabindex="-1">${escapeHtml(m.title)}</h2>
    <div class="card-section"><span class="card-label">RECORD</span><div class="card-flavor">${escapeHtml(m.flavor)}</div></div>
    <div class="card-ruling-hint">
      <button class="side deny decision-option" type="button" data-ruling="deny"><span class="label">← DENY</span><span class="action">${escapeHtml(m.ruling.deny)}</span></button>
      <button class="side grant decision-option" type="button" data-ruling="grant"><span class="label">GRANT →</span><span class="action">${escapeHtml(m.ruling.grant)}</span></button>
    </div><div class="card-hint">Choose a ruling, swipe horizontally, or use ← / →</div></article>`;
  const card = $('cardArea').firstElementChild;
  card.querySelectorAll('[data-ruling]').forEach(b => b.addEventListener('click', () => rule(b.dataset.ruling)));
  attachSwipe(card);
  cardStartTime = Date.now(); pausedAt = null; lastTickSec = -1;
  clearCardTimer(); updateTimerDisplay();
  if (mode === 'challenge') cardTimer = setInterval(updateTimerDisplay, 200);
  window.scrollTo(0,0); focusElement($('motionTitle'));
}
function attachSwipe(card) {
  let gesture = null;
  const reset = () => { gesture = null; card.style.transform = ''; card.classList.remove('leaning-left','leaning-right'); };
  card.addEventListener('pointerdown', e => {
    if (phase !== 'answering' || activeDialog || !e.isPrimary || e.button !== 0 || e.target.closest('button,a')) return;
    gesture = { x:e.clientX, y:e.clientY, id:e.pointerId, horizontal:false };
  });
  card.addEventListener('pointermove', e => {
    if (!gesture || gesture.id !== e.pointerId || phase !== 'answering') return;
    const dx = e.clientX-gesture.x, dy=e.clientY-gesture.y;
    if (!gesture.horizontal && Math.abs(dy)>12 && Math.abs(dy)>=Math.abs(dx)) { reset(); return; }
    if (Math.abs(dx)>16 && Math.abs(dx)>1.5*Math.abs(dy)) {
      gesture.horizontal=true; card.setPointerCapture(e.pointerId);
    }
    if (!gesture.horizontal) return;
    card.style.transform=`translateX(${Math.max(-110,Math.min(110,dx))}px) rotate(${dx*0.025}deg)`;
    card.classList.toggle('leaning-left',dx < -40); card.classList.toggle('leaning-right',dx > 40);
  });
  card.addEventListener('pointerup', e => {
    if (!gesture || gesture.id !== e.pointerId) return;
    const dx=e.clientX-gesture.x, dy=e.clientY-gesture.y;
    const commit=gesture.horizontal && Math.abs(dx)>80 && Math.abs(dx)>1.5*Math.abs(dy);
    reset(); if (commit) rule(dx<0?'deny':'grant');
  });
  card.addEventListener('pointercancel',reset);
  card.addEventListener('lostpointercapture',reset);
}
function rule(direction) {
  if (phase !== 'answering' || activeDialog || !['grant','deny'].includes(direction)) return;
  const m=gameDeck[currentIndex]; if (!m) return;
  const elapsed=elapsedSeconds(); clearCardTimer(); pausedAt=null;
  state=Jurist.scoreRuling(state,m,direction,elapsed,mode); phase='result';
  progress.record(m,state.result);
  sessionHistory.push({ id:m.id, ...state.result }); saveSession(false);
  updateStats(); playGavel(state.result.split?'split':state.result.isCorrect?'correct':'wrong');
  $('cardArea').firstElementChild.classList.add('collapsed');
  showConsequence(m,state.result);
}
function updateStats() {
  $('repBar').style.width=state.rep+'%'; $('repValue').textContent=state.rep;
  $('repBar').className='rep-bar-fill'+(state.rep<=25?' low':state.rep<=50?' medium':'');
  $('tallyCorrect').textContent=state.correct; $('tallyWrong').textContent=state.wrong; $('tallySplit').textContent=state.splits;
  $('streakDisplay').textContent=state.streak>0?`▲ ${state.streak} CORRECT`:state.streak<0?`▼ ${-state.streak} WRONG`:'—';
  $('streakDisplay').className='streak-val '+(state.streak>0?'positive':state.streak<0?'negative':'');
  $('streakBadge').textContent=mode==='study'?'':state.authority?'JUDICIAL AUTHORITY · BASE REP LOSS HALVED':state.warning?'WARNING · NEXT WRONG = REMOVED':'';
  $('streakBadge').className='streak-badge '+(state.authority?'authority':state.warning?'warning':'');
}
function updateTimerDisplay() {
  if (mode==='study') { $('timerNumber').textContent='∞'; $('timerSub').textContent='UNTIMED'; $('timerNumber').className='timer-number green'; return; }
  const limit=Jurist.LIMITS[gameDeck[currentIndex]?.difficulty] || 55;
  const remaining=limit-elapsedSeconds();
  const seconds=Math.ceil(remaining);
  $('timerNumber').textContent=remaining>0?seconds:'OT';
  $('timerSub').textContent=remaining>0?'SEC':`−${Math.floor(-remaining/2)} FROM AWARD / EXTRA LOSS`;
  $('timerNumber').className='timer-number '+(remaining>limit*.6?'green':remaining>limit*.3?'yellow':'red');
  if (seconds>0 && seconds<=10 && seconds!==lastTickSec) { playTick(); lastTickSec=seconds; }
}
function showConsequence(m,r) {
  const status=r.split?'SPLIT · EITHER RULING DEFENSIBLE':r.isCorrect?`CORRECT · ${m.correctRuling.toUpperCase()}`:`MISSED · SHOULD BE ${m.correctRuling.toUpperCase()}`;
  const cls=r.split?'ambiguous':r.isCorrect?'positive':'negative';
  $('consequence').innerHTML=`<div class="result-summary"><h2 id="resultHeading" tabindex="-1" class="result-line ${r.split?'split':r.isCorrect?'correct':'wrong'}">${status}</h2>
    ${mode==='challenge'?`<div class="rep-delta">${r.delta>0?'+':''}${r.delta} REP</div>`:''}</div>
    <div class="result-rulings">You ruled: ${r.direction.toUpperCase()} · ${escapeHtml(m.ruling[r.direction])}</div>
    <div class="result-text">${escapeHtml(m.consequence[r.direction])}</div>
    <div class="result-why"><strong>Why:</strong> ${escapeHtml(m.explanation)}<div class="result-cite">Ref: ${escapeHtml(m.citation)}</div>${authorityHtml(m)}</div>
    ${r.split?'<p class="result-note">Split decisions are tracked separately and do not affect accuracy or streaks.</p>':''}
    ${r.penalty&&!r.split?`<p class="result-note">Overtime: ${r.penalty} points deducted from the award or added to the loss. A correct answer cannot lose reputation.</p>`:''}
    <details class="reflection"><summary>Check your reasoning</summary><p>Which fact drove your ruling? Compare it with the rule above before moving on.</p><label for="reflectionNote">Your note (saved with this docket)</label><textarea id="reflectionNote" rows="3" maxlength="2000"></textarea></details>
    <button class="result-next-btn" id="nextMotionBtn">${state.removed||currentIndex+1>=gameDeck.length?'VIEW RESULTS':'NEXT MOTION'} ▶</button>`;
  $('consequence').className=`consequence show ${cls}`; $('gameScreen').classList.add('showing-result');
  $('nextMotionBtn').addEventListener('click',advanceMotion);
  $('reflectionNote').addEventListener('input',e=>{ sessionHistory.at(-1).note=e.target.value; saveSession(false); });
  announce(status); $('consequence').scrollIntoView({block:'start'}); focusElement($('resultHeading'));
}
function advanceMotion() {
  if (phase!=='result' || activeDialog || sessionHistory.length!==currentIndex+1) return;
  resetResultUI(); currentIndex++;
  if (state.removed || currentIndex>=gameDeck.length) endGame(); else renderCard();
}
function saveSession(complete) {
  lastSession={ track:currentTrackKey, label:sessionLabel(), mode, complete, total:gameDeck.length, history:sessionHistory, date:new Date().toISOString() };
  storage.setItem('lazyjurist:lastSession',JSON.stringify(lastSession));
}
function endGame() {
  phase='complete'; clearCardTimer(); $('feedbackFloat').style.display='none'; saveSession(true);
  const pct=accuracy(state.correct,state.wrong);
  $('overlayTitle').textContent=state.removed?'REMOVED FROM THE BENCH':mode==='study'?'STUDY DOCKET COMPLETE':'DOCKET CLEARED';
  $('overlayTitle').className='overlay-title '+(state.removed?'bad':'good');
  $('overlaySub').textContent=`${sessionLabel()} · ${sessionHistory.length} of ${gameDeck.length} motions decided${state.removed?(state.rep<=0?' · Reputation reached zero.':' · Removal after consecutive wrong rulings.') : '.'}`;
  $('overlayScore').textContent=`${state.correct} correct · ${state.wrong} missed · ${state.splits} split · Accuracy ${pct}`;
  $('overlayRestartBtn').textContent=missedOnly?'PRACTICE REMAINING MISSES':'PLAY AGAIN';
  $('overlayRestartBtn').onclick=initSession;
  showDialog('gameOverlay');
}
function showReview(fromMenu=false) {
  if (!lastSession) return;
  clearCardTimer(); closeDialog(false); reviewFromMenu=fromMenu; phase='review';
  reviewHistory=lastSession.history;
  $('gameScreen').style.display='none'; $('trackSelector').style.display='none'; $('reviewScreen').style.display='block';
  const counts=reviewHistory.reduce((s,e)=>{s[e.split?'splits':e.isCorrect?'correct':'wrong']++;return s;},{correct:0,wrong:0,splits:0});
  $('reviewSub').textContent=`${lastSession.label || TRACKS[lastSession.track].name} · ${lastSession.mode==='challenge'?'Challenge':'Study'} · ${reviewHistory.length} decided · ${counts.correct} correct · ${counts.wrong} missed · ${counts.splits} split · Accuracy ${accuracy(counts.correct,counts.wrong)}`;
  $('reviewList').innerHTML=reviewHistory.map((entry,i)=>{
    const m=BY_ID.get(entry.id);
    return `<article class="review-item ${entry.split?'split':entry.isCorrect?'correct':'wrong'}"><div class="review-head"><span class="review-num">CASE ${i+1}</span><span class="review-status">${entry.split?'SPLIT':entry.isCorrect?'CORRECT':'MISSED'}</span></div>
    <h2 class="review-case-title">${escapeHtml(m.title)}</h2><div class="review-rulings">You: ${entry.direction.toUpperCase()} · Answer: ${m.correctRuling.toUpperCase()}</div>
    <details><summary>Original record and ruling options</summary><p>${escapeHtml(m.flavor)}</p><p><strong>DENY:</strong> ${escapeHtml(m.ruling.deny)}<br><strong>GRANT:</strong> ${escapeHtml(m.ruling.grant)}</p></details>
    <div class="review-why"><strong>Why:</strong> ${escapeHtml(m.explanation)}</div><div class="review-cite">Ref: ${escapeHtml(m.citation)}</div>${authorityHtml(m)}
    ${entry.note?`<p class="saved-note"><strong>Your reasoning:</strong> ${escapeHtml(entry.note)}</p>`:''}
    <button class="tool-btn review-flag" data-motion-id="${m.id}">⚑ FLAG THIS MOTION</button></article>`;
  }).join('');
  $('reviewList').querySelectorAll('.review-flag').forEach(b=>b.addEventListener('click',()=>openFeedbackModal(b.dataset.motionId)));
  $('reviewBackBtn').hidden=fromMenu;
  window.scrollTo(0,0); focusElement($('reviewHeading'));
}
function closeReview() {
  if (reviewFromMenu) { goToSelector(); return; }
  $('reviewScreen').style.display='none'; $('gameScreen').style.display='flex'; phase='complete'; showDialog('gameOverlay');
}
function closeReviewToSelector() { goToSelector(); }
function openFeedbackModal(id) {
  const m=typeof id==='string'?BY_ID.get(id):gameDeck[currentIndex];
  if (!m) return;
  if (feedbackMotion?.id!==m.id) $('fbMessage').value='';
  feedbackMotion=m; pauseTimer();
  $('fbMotionTitle').value=m.title; $('fbTrack').value=TRACKS[m._srcTrack].name;
  $('fbCorrectRuling').value=m.correctRuling; $('fbCitation').value=m.citation; $('fbMotionId').value=m.id;
  $('fbContext').textContent=`RE: “${m.title}” (${TRACKS[m._srcTrack].name})${phase==='answering'?' · Timer paused':''}`;
  $('feedbackStatus').textContent=''; showDialog('feedbackModal','open');
}
function closeFeedbackModal() { closeDialog(); resumeTimer(); }
$('feedbackForm').addEventListener('submit',async e=>{
  e.preventDefault(); const btn=$('feedbackFormSubmit'); const status=$('feedbackStatus');
  btn.disabled=true; btn.textContent='SENDING…'; status.textContent='';
  const formData=new FormData(e.target);
  try {
    const res=await fetch('https://formspree.io/f/xpqyygpq',{method:'POST',headers:{Accept:'application/json'},body:formData});
    if (!res.ok) throw new Error('Unable to send');
    status.textContent='Thanks! Your feedback was sent.'; status.className='success';
    // Keep context fields intact for a follow-up about the same motion.
    $('fbMessage').value='';
  } catch { status.textContent='Could not send. Your comment is still here; please try again.'; status.className='error'; }
  finally { btn.disabled=false; btn.textContent='SEND'; }
});
function updateTrackProgress() {
  for (const card of document.querySelectorAll('[data-track]')) {
    const key=card.dataset.track, pool=motionPool(key), s=progress.summary(pool);
    card.querySelector('.track-card-progress').textContent=`${s.seen}/${pool.length} seen · Accuracy ${accuracy(s.correct,s.wrong)} · ${s.missed} to revisit`;
    card.querySelector('.start-track').textContent=`START ${Math.min(10,pool.length)} MOTIONS →`;
    card.querySelector('.start-track').setAttribute('aria-label',`Start ${TRACKS[key].name}: ${Math.min(10,pool.length)} motions`);
    const missed=card.querySelector('.practice-missed');
    missed.textContent=`PRACTICE MISSED (${s.missed})`; missed.disabled=!s.missed;
    missed.setAttribute('aria-label',`Practice missed ${TRACKS[key].name} motions (${s.missed})`);
    if (key==='mixed') continue;
    const topics=card.querySelector('.track-card-topics'); topics.replaceChildren();
    for (const topic of TOPICS[key]) {
      const members=pool.filter(m=>m.topic===topic.key); if (!members.length) continue;
      const stats=progress.summary(members), b=document.createElement('button');
      b.className='topic-chip'; b.type='button';
      const count=Math.min(10,members.length);
      b.textContent=`${topic.label} · ${count} ${count===1?'motion':'motions'} · ${accuracy(stats.correct,stats.wrong)}`;
      b.title=`${members.length} in bank; ${stats.seen} seen; ${stats.correct} correct, ${stats.wrong} missed, ${stats.splits} split`;
      b.addEventListener('click',()=>selectTrack(key,topic.key)); topics.appendChild(b);
    }
  }
  $('reviewLastBtn').hidden=!lastSession;
}
document.addEventListener('keydown',e=>{
  if (activeDialog) {
    if (e.key==='Escape') {
      e.preventDefault();
      if (activeDialog.el.id==='feedbackModal') closeFeedbackModal();
      else if (activeDialog.el.id==='introOverlay') closeIntro();
      else goToSelector();
    } else if (e.key==='Tab') {
      const focusable=[...activeDialog.el.querySelectorAll('button,a[href],input:not([type="hidden"]),textarea,[tabindex="0"]')].filter(el=>!el.disabled&&!el.hidden&&el.getClientRects().length);
      const first=focusable[0],last=focusable.at(-1);
      if (e.shiftKey&&(document.activeElement===first||!activeDialog.el.contains(document.activeElement))) {e.preventDefault();focusElement(last);}
      else if (!e.shiftKey&&(document.activeElement===last||!activeDialog.el.contains(document.activeElement))) {e.preventDefault();focusElement(first);}
    }
    return;
  }
  if (e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input,textarea,select,[contenteditable="true"]')) return;
  if (phase==='answering'&&(e.key==='ArrowLeft'||e.key==='ArrowRight')) {e.preventDefault();rule(e.key==='ArrowLeft'?'deny':'grant');}
});
document.querySelectorAll('[data-track]').forEach(card=>{
  card.querySelector('.start-track').addEventListener('click',()=>selectTrack(card.dataset.track));
  card.querySelector('.practice-missed').addEventListener('click',()=>selectTrack(card.dataset.track,null,true));
});
$('modeStudy').addEventListener('click',()=>setMode('study'));
$('modeChallenge').addEventListener('click',()=>setMode('challenge'));
$('reviewLastBtn').addEventListener('click',()=>showReview(true));

// Theme and sound preferences keep the existing keys.
let audioCtx=null, soundOn=storage.getItem('judge9:sound')!=='off', lastTickSec=-1;
let readableTheme=storage.getItem('judge9:theme')!=='classic';
function getAudioCtx() {
  try { const AC=window.AudioContext||window.webkitAudioContext; if (!audioCtx&&AC) audioCtx=new AC(); if(audioCtx?.state==='suspended') audioCtx.resume().catch(()=>{}); return audioCtx; } catch { return null; }
}
function tone(frequency,duration,type='sine',volume=.1) {
  if (!soundOn) return; const ctx=getAudioCtx(); if (!ctx) return;
  const osc=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;
  osc.type=type; osc.frequency.setValueAtTime(frequency,now); gain.gain.setValueAtTime(volume,now); gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
  osc.connect(gain).connect(ctx.destination); osc.start(now); osc.stop(now+duration);
}
function playGavel(kind) { tone(kind==='correct'?440:kind==='wrong'?110:330,.25,'triangle',.15); }
function playTick() { tone(1200,.04,'sine',.04); }
function toggleSound() {soundOn=!soundOn;storage.setItem('judge9:sound',soundOn?'on':'off');updatePreferences();}
function toggleTheme() {readableTheme=!readableTheme;storage.setItem('judge9:theme',readableTheme?'readable':'classic');updatePreferences();}
function updatePreferences() {
  document.body.classList.toggle('theme-readable',readableTheme);
  $('soundToggle').textContent='SOUND: '+(soundOn?'ON':'OFF'); $('themeToggle').textContent='THEME: '+(readableTheme?'READABLE':'CLASSIC');
}
updatePreferences(); setMode(mode); updateTrackProgress();
if(storage.getItem('judge9:introSeen')!=='1') showIntro();
