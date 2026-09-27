/* NMNRT: pure revision logic, deliberately independent of browser APIs. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.NMNRTCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAY = 86400000;
  function normalize(value) {
    return String(value ?? '').normalize('NFKC').normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase()
      .replace(/[“”"'‘’]/g, '').replace(/\s+/g, ' ').trim().replace(/[.,;:!?]+$/g, '').trim();
  }
  function matches(answer, accepted) {
    const a = normalize(answer);
    return !!a && accepted.some(x => normalize(x) === a);
  }
  function shuffle(items, random = Math.random) {
    const a = [...items];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function rate(previous, rating, now = Date.now()) {
    if (![0, 1, 2, 3].includes(rating)) throw new Error('Invalid rating');
    const p = previous || {};
    let interval = rating === 0 ? 10 / 1440 : rating === 1 ? 1 : rating === 2 ? Math.max(3, (p.interval || 1) * 2) : Math.max(7, (p.interval || 1) * 2.5);
    interval = Math.min(interval, 120);
    return { attempts: (p.attempts || 0) + 1, successes: (p.successes || 0) + (rating >= 2 ? 1 : 0),
      lapses: (p.lapses || 0) + (rating === 0 ? 1 : 0), rating, interval,
      lastAt: now, dueAt: now + interval * DAY };
  }
  function priority(card, records, now = Date.now()) {
    const r = records[card.id];
    if (!r) return 2;
    if (r.rating < 2) return 0;
    return r.dueAt <= now ? 1 : 3;
  }
  function select(cards, records, count, mode = 'mixed', now = Date.now()) {
    let pool = cards;
    if (mode === 'weak') pool = pool.filter(c => records[c.id] && records[c.id].rating < 2);
    if (mode === 'due') pool = pool.filter(c => records[c.id] && records[c.id].dueAt <= now);
    const randomized = shuffle(pool);
    if (mode !== 'random') randomized.sort((a, b) => priority(a, records, now) - priority(b, records, now));
    return randomized.slice(0, Math.max(0, count));
  }
  function gradeExam(ids, answers, cards) {
    const index = cards instanceof Map ? cards : new Map(cards.map(c => [c.id, c]));
    const results = ids.map(id => {
      const c = index.get(id);
      if (!c || c.type !== 'cloze') throw new Error('Invalid exam card');
      const answer = String(answers[id] ?? '');
      return { id, answer, correct: matches(answer, c.accepted), skipped: !answer.trim() };
    });
    return { results, total: results.length, correct: results.filter(x => x.correct).length,
      skipped: results.filter(x => x.skipped).length };
  }
  function validateProgress(input, ids) {
    if (!input || input.format !== 'nmnrt-progress' || input.version !== 1 || typeof input.records !== 'object' || Array.isArray(input.records)) throw new Error('Không đúng định dạng tiến độ NMNRT.');
    const records = {};
    for (const [id, x] of Object.entries(input.records || {})) {
      if (!ids.has(id)) continue;
      if (!x || typeof x !== 'object') throw new Error('Bản ghi không hợp lệ.');
      const keys = ['attempts', 'successes', 'lapses', 'rating', 'interval', 'lastAt', 'dueAt'];
      if (keys.some(k => typeof x[k] !== 'number' || !Number.isFinite(x[k]) || x[k] < 0) || ![0,1,2,3].includes(x.rating) || !Number.isInteger(x.attempts) || x.successes > x.attempts || x.lapses > x.attempts || x.attempts > 1e7 || x.interval > 120) throw new Error('Bản ghi tiến độ có giá trị không hợp lệ.');
      records[id] = Object.fromEntries(keys.map(k => [k, x[k]]));
    }
    return records;
  }
  return { DAY, normalize, matches, shuffle, rate, priority, select, gradeExam, validateProgress };
});
