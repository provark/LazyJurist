/* Pure game rules. Shared by the browser and dependency-free Node tests. */
(function (root) {
  'use strict';
  const LIMITS = { easy: 45, medium: 55, hard: 65 };
  function shuffle(items, random = Math.random) {
    const a = [...items];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function weave(items, random) {
    const buckets = ['easy', 'medium', 'hard', 'split'].map(d =>
      shuffle(items.filter(m => (m.ambiguous ? 'split' : m.difficulty) === d), random));
    const result = [];
    while (buckets.some(b => b.length)) for (const b of buckets) if (b.length) result.push(b.shift());
    return result;
  }
  function sampleDeck(pool, seen, count = 10, random = Math.random) {
    const fresh = weave(pool.filter(m => !seen.has(m.id)), random);
    const repeats = weave(pool.filter(m => seen.has(m.id)), random);
    // Coverage has priority over difficulty quotas; shuffle the selected set
    // so neither difficulty nor answer order becomes a predictable cue.
    return shuffle([...fresh, ...repeats].slice(0, count), random);
  }
  function scoreRuling(state, motion, direction, elapsed, mode) {
    if (!['grant', 'deny'].includes(direction)) throw new Error('Invalid ruling');
    const split = motion.correctRuling === 'either';
    const isCorrect = !split && direction === motion.correctRuling;
    const limit = LIMITS[motion.difficulty] || 55;
    const penalty = mode === 'challenge' ? Math.floor(Math.max(0, elapsed - limit) / 2) : 0;
    let streak = state.streak, authority = state.authority, warning = state.warning;
    if (!split) {
      streak = isCorrect ? Math.max(0, streak) + 1 : Math.min(0, streak) - 1;
      authority = isCorrect && streak >= 3;
      warning = !isCorrect && streak <= -3;
    }
    let delta = motion.repEffect[direction];
    if (state.authority && delta < 0 && !split) delta = Math.ceil(delta / 2);
    if (!split) delta = isCorrect ? Math.max(0, delta - penalty) : delta - penalty;
    const rep = Math.max(0, Math.min(100, state.rep + delta));
    return {
      ...state, rep, streak, authority, warning,
      correct: state.correct + Number(isCorrect),
      wrong: state.wrong + Number(!isCorrect && !split),
      splits: state.splits + Number(split),
      removed: mode === 'challenge' && (rep <= 0 || (state.warning && !isCorrect && !split)),
      result: { direction, isCorrect, split, penalty, delta: rep - state.rep, earnedDelta: delta, elapsed }
    };
  }
  function initialState() {
    return { rep: 50, streak: 0, authority: false, warning: false, correct: 0, wrong: 0, splits: 0, removed: false };
  }
  function createProgress(storage, motions) {
    const key = 'lazyjurist:progress:v2';
    let stats = {};
    try {
      const parsed = JSON.parse(storage.getItem(key) || '{}');
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) stats = parsed;
    } catch {}
    const validNumber = v => Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0;
    for (const m of motions) {
      const old = stats[m.id];
      stats[m.id] = {
        seen: old?.seen === true, correct: validNumber(old?.correct), wrong: validNumber(old?.wrong),
        splits: validNumber(old?.splits), lastAttempt: typeof old?.lastAttempt === 'string' ? old.lastAttempt : null,
        lastOutcome: ['correct', 'wrong', 'split'].includes(old?.lastOutcome) ? old.lastOutcome : null
      };
      // Never delete the old keys. Import title-based coverage once and keep
      // title aliases for cards whose procedural framing has changed.
      try {
        const legacy = JSON.parse(storage.getItem(`judge9:seen:${m._srcTrack}`) || '[]');
        if (Array.isArray(legacy) && m.legacyTitles.some(t => legacy.includes(t))) stats[m.id].seen = true;
      } catch {}
    }
    const save = () => { try { storage.setItem(key, JSON.stringify(stats)); } catch {} };
    save();
    return {
      get: id => stats[id],
      seen: () => new Set(motions.filter(m => stats[m.id].seen).map(m => m.id)),
      missed: pool => pool.filter(m => stats[m.id].lastOutcome === 'wrong'),
      summary(pool) {
        return pool.reduce((s, m) => {
          const p = stats[m.id];
          s.seen += Number(p.seen); s.correct += p.correct; s.wrong += p.wrong; s.splits += p.splits;
          s.missed += Number(p.lastOutcome === 'wrong'); return s;
        }, { seen: 0, correct: 0, wrong: 0, splits: 0, missed: 0 });
      },
      record(m, result, date = new Date().toISOString()) {
        const p = stats[m.id];
        p.seen = true; p.lastAttempt = date;
        p.lastOutcome = result.split ? 'split' : result.isCorrect ? 'correct' : 'wrong';
        p[result.split ? 'splits' : result.isCorrect ? 'correct' : 'wrong']++;
        save();
      }
    };
  }
  const api = { LIMITS, shuffle, sampleDeck, scoreRuling, initialState, createProgress };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Jurist = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
