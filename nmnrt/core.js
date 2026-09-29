/* NMNRT 2.1 — pure question, scoring, scheduling and persistence validation.
 * Choices have stable IDs. Shuffling only changes display order, never the key.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.NMNRTCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAY = 86400000;
  const MODES = ['mcq', 'short', 'recall', 'exam'];
  const plainObject = x => !!x && typeof x === 'object' && !Array.isArray(x);
  function normalize(value, caseSensitive = false) {
    let s = String(value ?? '').normalize('NFKC').normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd')
      .replace(/[“”‘’]/g, "'").replace(/\s+/g, ' ').trim();
    if (!caseSensitive) s = s.toLowerCase();
    return s.replace(/[.,;!?]+$/g, '').trim();
  }
  function matches(answer, accepted, caseSensitive = false) {
    const a = normalize(answer, caseSensitive);
    return !!a && accepted.some(x => normalize(x, caseSensitive) === a);
  }
  function shuffle(items, random = Math.random) {
    const a = [...items];
    for (let i = a.length - 1; i > 0; i--) {
      const n = random();
      if (!(n >= 0 && n < 1)) throw new Error('Invalid random source');
      const j = Math.floor(n * (i + 1)); [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function validateBank(data) {
    if (!data || data.version !== 2 || !data.bankId || !Array.isArray(data.cards)) throw new Error('Sai phiên bản ngân hàng.');
    const ids = new Set();
    for (const c of data.cards) {
      if (!c.id || ids.has(c.id) || c.type !== 'qa' || !c.prompt || !c.explanation || ![9,10,11,12].includes(c.grade)) throw new Error('Câu hỏi không hợp lệ: ' + c.id);
      ids.add(c.id);
      if (!Array.isArray(c.choices) || c.choices.length !== 4 || new Set(c.choices.map(x=>x.id)).size !== 4 ||
          c.choices.some(x=>!x.id || !x.text) || new Set(c.choices.map(x=>normalize(x.text))).size !== 4 ||
          !c.choices.some(x=>x.id === c.correctChoice) || !Array.isArray(c.accepted) || !c.accepted.length)
        throw new Error('Phương án/đáp án không hợp lệ: ' + c.id);
      const right = c.choices.find(x=>x.id === c.correctChoice).text;
      if (!matches(right,c.accepted,c.caseSensitive)) throw new Error('Đáp án ngắn lệch khóa: ' + c.id);
      if (c.choices.some(x=>x.id !== c.correctChoice && matches(x.text,c.accepted,c.caseSensitive))) throw new Error('Trùng đáp án sau chuẩn hóa: ' + c.id);
    }
    return true;
  }
  function checkChoice(card, choiceId) {
    if (choiceId !== null && choiceId !== '' && !card.choices.some(o=>o.id === choiceId)) throw new Error('Lựa chọn không thuộc câu hỏi.');
    const chosen = card.choices.find(o=>o.id === choiceId);
    const skipped = !chosen;
    return { id:card.id, selectedChoice:chosen?.id || null, answer:chosen?.text || '',
      correct:!skipped && choiceId === card.correctChoice, skipped,
      status:skipped ? 'skipped' : choiceId === card.correctChoice ? 'correct' : 'wrong', self:false };
  }
  function checkShort(card, value, skip = false) {
    const answer = String(value ?? '').trim();
    const skipped = skip || !answer;
    const correct = !skipped && matches(answer,card.accepted,card.caseSensitive);
    return { id:card.id, answer:skipped ? '' : answer, selectedChoice:null, correct, skipped,
      status:skipped ? 'skipped' : correct ? 'correct' : 'wrong', self:false };
  }
  function rate(previous, rating, now = Date.now()) {
    if (![0,1,2,3].includes(rating)) throw new Error('Invalid rating');
    const p = previous || {};
    const interval = Math.min(120, rating === 0 ? 10/1440 : rating === 1 ? 1 : rating === 2 ? Math.max(3,(p.interval || 1)*2) : Math.max(7,(p.interval || 1)*2.5));
    return {attempts:(p.attempts||0)+1, successes:(p.successes||0)+(rating>=2?1:0), lapses:(p.lapses||0)+(rating===0?1:0),
      rating,interval,lastAt:now,dueAt:now+interval*DAY};
  }
  function priority(c,records,now = Date.now()) {
    const r = records[c.id];
    return !r ? 2 : r.rating < 2 ? 0 : r.dueAt <= now ? 1 : 3;
  }
  function select(cards,records,count,mode='mixed',now=Date.now()) {
    let pool = cards;
    if (mode === 'weak') pool = pool.filter(c=>records[c.id]?.rating<2);
    if (mode === 'due') pool = pool.filter(c=>records[c.id] && records[c.id].dueAt<=now);
    const a = shuffle(pool);
    if (mode !== 'random') a.sort((x,y)=>priority(x,records,now)-priority(y,records,now));
    return a.slice(0, Math.max(0, Math.min(300, Number(count)||0)));
  }
  function gradeExam(ids,answers,index) {
    const cards = index instanceof Map ? index : new Map(index.map(c=>[c.id,c]));
    const results = ids.map(id=>{
      const c = cards.get(id); if (!c) throw new Error('Unknown question');
      return checkChoice(c,answers[id] ?? null);
    });
    return {results,total:results.length,correct:results.filter(r=>r.correct).length,
      wrong:results.filter(r=>r.status==='wrong').length,skipped:results.filter(r=>r.skipped).length};
  }
  function makeSession(ids,index,mode,bankId,minutes=0,now=Date.now()) {
    if (!MODES.includes(mode) || !ids.length || ids.length>300 || new Set(ids).size!==ids.length) throw new Error('Phiên không hợp lệ.');
    const orders = {};
    for (const id of ids) {
      const c = index.get(id); if (!c) throw new Error('Câu hỏi không tồn tại.');
      orders[id] = shuffle(c.choices.map(o=>o.id));
    }
    return {bankId,mode,kind:mode==='exam'?'exam':'drill',ids:[...ids],orders,index:0,answers:{},results:[],revealed:[],
      startedAt:now,deadline:mode==='exam'&&minutes>0?now+minutes*60000:null};
  }
  function validateSession(s,index,bankId) {
    if (!plainObject(s) || s.bankId!==bankId || !MODES.includes(s.mode) || s.kind !== (s.mode==='exam'?'exam':'drill') ||
      !Array.isArray(s.ids) || !s.ids.length || s.ids.length>300 || new Set(s.ids).size!==s.ids.length ||
      !s.ids.every(id=>index.has(id)) || !Number.isInteger(s.index) || s.index<0 || s.index>=s.ids.length ||
      !plainObject(s.answers) || !plainObject(s.orders) || !Array.isArray(s.results) || !Array.isArray(s.revealed) ||
      !Number.isFinite(s.startedAt) || s.startedAt<0 ||
      (s.deadline!==null && (!Number.isFinite(s.deadline) || s.deadline<s.startedAt))) return null;
    for (const id of s.ids) {
      const allowed=index.get(id).choices.map(o=>o.id), a=s.orders[id];
      if (!Array.isArray(a) || a.length!==4 || new Set(a).size!==4 || !a.every(x=>allowed.includes(x))) return null;
    }
    for (const [id,a] of Object.entries(s.answers)) {
      if (!s.ids.includes(id) || typeof a!=='string' || a.length>2000) return null;
      if (['mcq','exam'].includes(s.mode) && a!=='' && !index.get(id).choices.some(o=>o.id===a)) return null;
    }
    if (s.revealed.some(id=>!s.ids.includes(id)) || new Set(s.revealed).size!==s.revealed.length ||
       s.results.some(r=>!plainObject(r)||!s.ids.includes(r.id)) || new Set(s.results.map(r=>r.id)).size!==s.results.length ||
       (s.mode==='exam' && s.results.length)) return null;
    // Never trust a cached 'correct' flag; reconstruct it from the current key.
    const results=[];
    for (const r of s.results) {
      const c=index.get(r.id);
      if (s.mode==='mcq') results.push(checkChoice(c,s.answers[r.id]||null));
      else if (s.mode==='short') results.push(checkShort(c,s.answers[r.id]||'',r.skipped));
      else {
        if (![0,1,2,3].includes(r.rating)) return null;
        results.push({id:r.id,answer:s.answers[r.id]||'',selectedChoice:null,rating:r.rating,
          correct:r.rating>=2,skipped:false,status:r.rating>=2?'self-good':'self-review',self:true});
      }
    }
    return {...s,results};
  }
  function validateProgress(input,ids,bankId) {
    if (!plainObject(input) || input.format!=='nmnrt-progress' || input.version!==2 || input.bankId!==bankId || !plainObject(input.records))
      throw new Error('Tệp phải thuộc ngân hàng 2.1 này. Không gán mức thành thạo cũ cho câu đã đổi nghĩa.');
    const records = {};
    for (const [id,x] of Object.entries(input.records)) {
      if (!ids.has(id)) throw new Error('Tệp chứa ID câu không thuộc ngân hàng.');
      const keys=['attempts','successes','lapses','rating','interval','lastAt','dueAt'];
      if (!plainObject(x) || keys.some(k=>typeof x[k]!=='number'||!Number.isFinite(x[k])||x[k]<0) ||
        ![0,1,2,3].includes(x.rating) || !Number.isInteger(x.attempts) || !Number.isInteger(x.successes) || !Number.isInteger(x.lapses) ||
        x.successes>x.attempts || x.lapses>x.attempts || x.attempts>1e7 || x.interval>120 || x.dueAt<x.lastAt)
        throw new Error('Bản ghi tiến độ không hợp lệ.');
      records[id]=Object.fromEntries(keys.map(k=>[k,x[k]]));
    }
    return records;
  }
  return {DAY,MODES,normalize,matches,shuffle,validateBank,checkChoice,checkShort,rate,priority,select,gradeExam,makeSession,validateSession,validateProgress};
});
