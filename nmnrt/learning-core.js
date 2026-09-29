/* Pure helpers for the learning tab. Quiz records/keys are not written here. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.NMNRTLearningCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const GRADES = [9, 10, 11, 12];
  function normalize(text) {
    return String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/\s+/g, ' ').trim();
  }
  function validateData(data, bank) {
    if (!data || data.version !== 1 || data.bankId !== bank.bankId || !Array.isArray(data.points))
      throw new Error('Tệp học nhanh không khớp ngân hàng câu hỏi.');
    const ids = new Set(bank.cards.map(c => c.id)), found = new Set();
    data.points.forEach(p => {
      if (!p || !ids.has(p.id) || found.has(p.id) || typeof p.title !== 'string' || !p.title.trim() ||
          typeof p.takeaway !== 'string' || !p.takeaway.trim() || p.takeaway.length > 360 ||
          (p.detail !== undefined && typeof p.detail !== 'string'))
        throw new Error('Ý học không hợp lệ hoặc bị lặp.');
      found.add(p.id);
    });
    if (found.size !== ids.size) throw new Error('Có câu hỏi chưa được ánh xạ thành ý học.');
    return true;
  }
  function buildCatalog(data, bank) {
    validateData(data, bank);
    const cards = new Map(bank.cards.map(c => [c.id, c]));
    const points = new Map(data.points.map(p => [p.id, {...p, card:cards.get(p.id)}]));
    const books = [], sections = new Map(), bookOf = new Map();
    bank.grades.forEach(g => g.lessons.forEach(l => l.sections.forEach(s =>
      sections.set(s.id, {...s, grade:g.grade, lesson:l.id}))));
    bank.grades.forEach(g => {
      if (g.grade === 9) {
        const pp = [...points.values()].filter(p => p.card.grade === 9);
        const sectionIds = [...new Set(pp.map(p => p.card.section))];
        const b = {id:'g9-common',grade:9,no:null,title:'Nghiên cứu và học tập Sinh học',kind:'lesson',
          shared:true,sourceLessonCount:g.lessons.length,
          sections:sectionIds.map(id => ({...sections.get(id),
            points:pp.filter(p => p.card.section === id)}))};
        b.points = pp; books.push(b); pp.forEach(p => bookOf.set(p.id,b.id)); return;
      }
      g.lessons.forEach(l => {
        const b = {id:l.id,grade:g.grade,no:l.no,title:l.title,kind:l.kind,shared:false,
          sections:l.sections.map(s => ({...sections.get(s.id),
            points:[...points.values()].filter(p => p.card.section === s.id)}))};
        b.points = b.sections.flatMap(s => s.points);
        books.push(b); b.points.forEach(p => bookOf.set(p.id,b.id));
      });
    });
    return {books,points,cards,sections,bookOf};
  }
  function allowedPoints(book, extra = false) { return book.points.filter(p => extra || !p.card.advanced); }
  function isRead(records,id) { return records?.[id]?.read === true; }
  function searchBooks(catalog, {grade=11,query='',extra=false,filter='all',records={}}={}) {
    const q = normalize(query);
    return catalog.books.filter(b => b.grade === grade && (extra || b.kind !== 'extra')).map(b => {
      const allowed = allowedPoints(b,extra);
      const titleMatch = normalize(b.title).includes(q);
      let visible = !q || titleMatch ? allowed : allowed.filter(p =>
        normalize(p.title+' '+p.takeaway+' '+catalog.sections.get(p.card.section)?.title).includes(q));
      visible = visible.filter(p => filter==='unread' ? !isRead(records,p.id) : filter==='read' ? isRead(records,p.id) : true);
      return {book:b,points:visible,allowed,readCount:allowed.filter(p=>isRead(records,p.id)).length};
    }).filter(x => x.points.length || (!x.allowed.length && filter==='all' &&
      (!q || normalize(x.book.title).includes(q))));
  }
  function validateReading(input, validIds, bankId) {
    if (!input || input.format !== 'nmnrt-reading' || input.version !== 1 || input.bankId !== bankId ||
        !input.records || typeof input.records !== 'object' || Array.isArray(input.records))
      throw new Error('Không đúng tệp tiến độ đọc của ngân hàng này.');
    const records = Object.create(null);
    for (const [id,r] of Object.entries(input.records)) {
      if (!validIds.has(id)) continue;
      if (!r || typeof r.read!=='boolean' || !Number.isSafeInteger(r.updatedAt) || r.updatedAt<0)
        throw new Error('Mốc đã đọc không hợp lệ.');
      records[id]={read:r.read,updatedAt:r.updatedAt};
    }
    return {format:'nmnrt-reading',version:1,bankId,records,
      grade:GRADES.includes(input.grade)?input.grade:11,extra:input.extra===true,
      lastCard:validIds.has(input.lastCard)?input.lastCard:null};
  }
  function mergeReading(current,incoming) {
    const merged=Object.assign(Object.create(null),current);
    Object.entries(incoming).forEach(([id,r])=>{if(!merged[id]||r.updatedAt>merged[id].updatedAt)merged[id]={...r};});
    return merged;
  }
  return {normalize,validateData,buildCatalog,allowedPoints,isRead,searchBooks,validateReading,mergeReading};
});
