const test=require('node:test');
const assert=require('node:assert/strict');
const {TRACKS,TOPICS}=require('../data.js');
const J=require('../core.js');
const motions=Object.entries(TRACKS).flatMap(([k,t])=>t.motions.map(m=>({...m,_srcTrack:k})));
function storage(seed={}) { const map=new Map(Object.entries(seed)); return {getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)}; }
const random=()=>.37;

test('all 155 motions have permanent unique IDs, valid metadata, options, links and scoring',()=>{
  assert.equal(motions.length,155); assert.equal(new Set(motions.map(m=>m.id)).size,155);
  for(const m of motions){
    for(const key of ['id','title','flavor','explanation','citation','party','jurisdiction'])assert.ok(typeof m[key]==='string'&&m[key].length,m.id+': '+key);
    assert.ok(TOPICS[m._srcTrack].some(t=>t.key===m.topic),m.id);
    assert.ok(['easy','medium','hard'].includes(m.difficulty));
    assert.equal(m.ambiguous,m.correctRuling==='either');
    if(m.ambiguous)assert.ok(m.ambiguityReason);
    assert.ok(m.lastReviewed===null||/^\d{4}-\d{2}-\d{2}$/.test(m.lastReviewed));
    assert.ok(m.legacyTitles.length); assert.ok(m.authorities.length,m.id);
    for(const a of m.authorities){const url=new URL(a.url);assert.equal(url.protocol,'https:');assert.ok(!url.href.includes('undefined'));}
    for(const d of ['grant','deny']){
      assert.ok(m.ruling[d]&&m.consequence[d]);
      assert.equal(Math.sign(m.repEffect[d]),m.ambiguous||d===m.correctRuling?1:-1,m.id);
    }
  }
});
test('unseen cards take priority even when an entire difficulty bucket is exhausted',()=>{
  const pool=motions.filter(m=>m._srcTrack==='evidence');
  const seen=new Set(pool.filter(m=>m.difficulty==='easy').map(m=>m.id));
  const deck=J.sampleDeck(pool,seen,10,random);
  assert.equal(deck.length,10); assert.ok(deck.every(m=>!seen.has(m.id)));
});
test('mixed decks are unique and use all remaining unseen cards before repeats',()=>{
  const unseen=motions.slice(0,4),seen=new Set(motions.slice(4).map(m=>m.id));
  const deck=J.sampleDeck(motions,seen,10,random);
  assert.equal(new Set(deck.map(m=>m.id)).size,10);
  for(const m of unseen)assert.ok(deck.some(n=>n.id===m.id));
});
test('short and empty topic pools have their actual length',()=>{
  for(const count of [0,1,2,7])assert.equal(J.sampleDeck(motions.slice(0,count),new Set()).length,count);
});
test('legacy title history migrates without deleting unrelated coverage on replay',()=>{
  const experts=motions.filter(m=>m._srcTrack==='evidence'&&m.topic==='experts');
  const hearsay=motions.find(m=>m._srcTrack==='evidence'&&m.topic==='hearsay');
  const store=storage({'judge9:seen:evidence':JSON.stringify([...experts,hearsay].map(m=>m.title))});
  const p=J.createProgress(store,motions);
  J.sampleDeck(experts,p.seen());
  assert.equal(p.summary([...experts,hearsay]).seen,3);
  assert.ok(J.createProgress(store,motions).seen().has(hearsay.id));
});
test('renamed motions retain coverage through legacy aliases',()=>{
  const m=motions.find(m=>m.id==='recentScotus-002');
  const p=J.createProgress(storage({'judge9:seen:recentScotus':JSON.stringify(m.legacyTitles)}),motions);
  assert.ok(p.seen().has(m.id)); assert.notEqual(m.title,m.legacyTitles[0]);
});
test('missed practice persists across reload and resolves on a later correct ruling',()=>{
  const store=storage(), p=J.createProgress(store,motions),m=motions[0];
  p.record(m,{split:false,isCorrect:false},'2026-09-08T12:00:00Z');
  assert.equal(J.createProgress(store,motions).missed(motions).length,1);
  p.record(m,{split:false,isCorrect:true});
  assert.equal(p.missed(motions).length,0); assert.equal(p.get(m.id).wrong,1);assert.equal(p.get(m.id).correct,1);
});
test('corrupt or unavailable storage never stops a playable session',()=>{
  const corrupt=storage({'lazyjurist:progress:v2':'{"evidence-001":{"correct":-2,"wrong":"x"}}'});
  assert.equal(J.createProgress(corrupt,motions).get('evidence-001').correct,0);
  const blocked={getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}};
  const p=J.createProgress(blocked,motions); p.record(motions[0],{isCorrect:false,split:false}); assert.equal(p.missed(motions).length,1);
});
test('a late correct ruling breaks a wrong streak and clears the warning',()=>{
  const m=motions.find(m=>!m.ambiguous);
  const r=J.scoreRuling({...J.initialState(),streak:-3,warning:true},m,m.correctRuling,100,'challenge');
  assert.equal(r.streak,1); assert.equal(r.warning,false);assert.equal(r.removed,false);
  const next=J.scoreRuling(r,m,m.correctRuling==='grant'?'deny':'grant',0,'challenge');
  assert.equal(next.streak,-1);assert.equal(next.warning,false);
});
test('the fourth consecutive wrong answer removes a Challenge player despite positive reputation',()=>{
  const m=motions.find(m=>!m.ambiguous);
  const r=J.scoreRuling({...J.initialState(),rep:100,streak:-3,warning:true},m,m.correctRuling==='grant'?'deny':'grant',0,'challenge');
  assert.ok(r.rep>0);assert.equal(r.removed,true);
});
test('Study mode has no time penalty or early removal',()=>{
  const m=motions.find(m=>!m.ambiguous);
  const r=J.scoreRuling({...J.initialState(),rep:1,streak:-3,warning:true},m,m.correctRuling==='grant'?'deny':'grant',5000,'study');
  assert.equal(r.rep,0);assert.equal(r.removed,false);assert.equal(r.result.penalty,0);
});
test('split rulings stay separate from accuracy, streaks and the missed queue',()=>{
  const m=motions.find(m=>m.ambiguous),initial={...J.initialState(),streak:-3,warning:true};
  const r=J.scoreRuling(initial,m,'grant',5000,'challenge');
  assert.equal(r.splits,1);assert.equal(r.correct,0);assert.equal(r.wrong,0);assert.equal(r.streak,-3);assert.equal(r.removed,false);
  const p=J.createProgress(storage(),motions);p.record(m,r.result);assert.equal(p.missed(motions).length,0);
});
test('authority halves base loss; overtime adds separately and correct rulings cannot lose rep',()=>{
  const m=motions.find(m=>!m.ambiguous),d=m.correctRuling==='grant'?'deny':'grant';
  const r=J.scoreRuling({...J.initialState(),authority:true},m,d,J.LIMITS[m.difficulty]+4,'challenge');
  assert.equal(r.result.earnedDelta,Math.ceil(m.repEffect[d]/2)-2);
  const good=J.scoreRuling(J.initialState(),m,m.correctRuling,5000,'challenge'); assert.equal(good.rep,50);
});
test('recent Supreme Court bank is balanced without changing bank size',()=>{
  assert.equal(TRACKS.recentScotus.motions.filter(m=>m.correctRuling==='grant').length,15);
  assert.equal(TRACKS.recentScotus.motions.filter(m=>m.correctRuling==='deny').length,15);
  for(const d of ['easy','medium','hard'])assert.equal(TRACKS.recentScotus.motions.filter(m=>m.difficulty===d&&m.correctRuling==='grant').length,5);
});
