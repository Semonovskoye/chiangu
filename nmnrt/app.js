(function () {
'use strict';
const D = window.NMNRT_DATA, C = window.NMNRTCore;
const $ = s => document.querySelector(s);
const app = $('#app');
if (!D || !C) { app.textContent = 'Không mở được học liệu. Giữ data.js, core.js, app.js và styles.css cạnh index.html.'; return; }
const cardMap = new Map(D.cards.map(c => [c.id, c]));
const lessonMap = new Map(), sectionMap = new Map();
D.grades.forEach(g => g.lessons.forEach(l => { lessonMap.set(l.id, l); l.sections.forEach(s => sectionMap.set(s.id, { ...s, lesson: l.id, grade: g.grade })); }));
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let storageOK = true;
function load(key, fallback) { try { const s = localStorage.getItem('nmnrt.' + key); return s ? JSON.parse(s) : fallback; } catch (_) { return fallback; } }
function store(key, value) { try { localStorage.setItem('nmnrt.' + key, JSON.stringify(value)); } catch (_) { storageOK = false; $('#storageWarning').hidden = false; } }
try { localStorage.setItem('nmnrt.probe','1'); localStorage.removeItem('nmnrt.probe'); } catch (_) { storageOK = false; $('#storageWarning').hidden = false; }
let records = {};
try { records = C.validateProgress({ format:'nmnrt-progress',version:1,records:load('records',{}) }, new Set(cardMap.keys())); } catch (_) { records = {}; toast('Tiến độ cũ không đọc được; bắt đầu với dữ liệu trống.'); }
let history = load('history',[]);
if (!Array.isArray(history)) history = [];
history = history.filter(x => x && typeof x.at === 'number' && typeof x.total === 'number' && typeof x.correct === 'number').slice(-30);
const storedPrefs = load('prefs',{}), prefs = storedPrefs && typeof storedPrefs === 'object' ? storedPrefs : {};
const state = { view:'learn', grade:[9,10,11,12].includes(prefs.grade) ? prefs.grade : 11,
 mode:['mcq','recall','cloze','exam','notes'].includes(prefs.mode) ? prefs.mode : 'mcq',
 count:[5,10,20,30,50].includes(prefs.count) ? prefs.count : 10,
 minutes:[0,5,10,15,30,45].includes(prefs.minutes) ? prefs.minutes : 10,
 search:'', extra:!!prefs.extra, expanded:new Set(), selected:new Set(), active:false, result:null };
if (Array.isArray(prefs.selected)) prefs.selected.forEach(id => { if (sectionMap.has(id)) state.selected.add(id); });
else D.grades.find(g=>g.grade===11).lessons.filter(l=>[1,2,3].includes(l.no)).forEach(l=>l.sections.filter(s=>s.cardIds.length).forEach(s=>state.selected.add(s.id)));
let session = load('session',null);
if (!validSession(session)) session = null;
function validSession(s) {
 if (!s || !['drill','exam'].includes(s.kind) || (s.mode && !['mcq','recall','cloze'].includes(s.mode)) || !Array.isArray(s.ids) || !s.ids.length || s.ids.length > 300 || !s.ids.every(id=>cardMap.has(id)) || new Set(s.ids).size !== s.ids.length) return false;
 if (s.kind==='exam' && s.ids.some(id=>cardMap.get(id).type!=='cloze')) return false;
 if (!Number.isInteger(s.index) || s.index<0 || s.index>=s.ids.length || !s.answers || typeof s.answers !== 'object' || !Array.isArray(s.results)) return false;
 if (s.deadline !== null && (!Number.isFinite(s.deadline) || s.deadline<0)) return false;
 return true;
}
function savePrefs() { store('prefs',{grade:state.grade,mode:state.mode,count:state.count,minutes:state.minutes,extra:state.extra,selected:[...state.selected]}); }
function saveSession() { store('session',session); }
function updateRecord(id,rating) { records[id]=C.rate(records[id],rating); store('records',records); updateNav(); }
function toast(message) { const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('show'),4500); }
function safeURL(u) { try { const url=new URL(u,'https://nhantri.top/'); return ['http:','https:'].includes(url.protocol)?url.href:''; } catch (_) {return '';} }
function rich(text) {
 const pieces=String(text??'').split(/(\[[^\]]+\]\([^)]+\))/g);
 return pieces.map(p=>{const m=p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(!m)return esc(p); const u=safeURL(m[2]);return u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(m[1])} ↗</a>`:esc(m[1]);}).join('');
}
function date(t) {return new Date(t).toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'});}
function gradeData() {return D.grades.find(g=>g.grade===state.grade);}
function selectedSections() {return [...state.selected].map(id=>sectionMap.get(id)).filter(s=>s && s.grade===state.grade);}
function scopedCards(type) {const ids=new Set(selectedSections().flatMap(s=>s.cardIds));return D.cards.filter(c=>ids.has(c.id)&&(!type||c.type===type));}

// --- Multiple-choice: source-derived, short, and deliberately low-friction. ---
// Correct answers come from the existing cloze cards. Distractors are other
// terms already present in the supplied biology material; nothing new is
// invented to fill source gaps.
const MCQ_BLOCKED = new Set(['phat trien','sinh truong','tao ra','xay ra','thuc hien','hoat dong','qua trinh','co','khong','giup','tang','giam']);
function plainText(t) {
 return String(t??'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ').trim();
}
function stableHash(t) {let h=2166136261;for(const ch of String(t)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function seededOrder(items,seed) {return [...items].sort((a,b)=>(stableHash(seed+'|'+a)-stableHash(seed+'|'+b)));}
function termKind(t) {
 const x=plainText(t),words=x.split(/\s+/).filter(Boolean).length;
 if(/[₀-₉0-9₂₃⁺⁻→%]/.test(x)||/^[A-Z]{2,7}$/.test(x))return 'formula';
 return words<=1?'one':words===2?'two':'multi';
}
function shortAround(text,marker,limit=154) {
 let x=plainText(text).replace('⟦blank⟧',marker);
 const parts=x.split(/;\s*|(?<=[.!?])\s+/).map(v=>v.trim().replace(/^[-–—:\s]+/, '')).filter(Boolean);
 let chosen=parts.find(v=>v.includes(marker))||x;
 if(chosen.length<35&&x.length<=limit)chosen=x;
 if(chosen.length>limit){
  const i=Math.max(0,chosen.indexOf(marker));let left=Math.max(0,i-66),right=Math.min(chosen.length,i+marker.length+70);
  if(left){const sp=chosen.indexOf(' ',left);if(sp>=0&&sp<i)left=sp+1;}
  if(right<chosen.length){const sp=chosen.lastIndexOf(' ',right);if(sp>i)right=sp;}
  chosen=(left?'… ':'')+chosen.slice(left,right).trim()+(right<chosen.length?' …':'');
 }
 return chosen;
}
function mcqQuestionText(c) {return shortAround(c.prompt,'_____',118);}
function mcqExplanationText(c) {
 const answer=plainText(c.accepted?.[0]||''),target=C.normalize(answer);
 const source=(c.answer||[]).map(plainText).join(' ');
 const parts=source.replace(/([.!?])(?=\S)/g,'$1 ').split(/(?<=[.!?])\s+|;\s*/).map(v=>v.trim().replace(/^[-–—\s]+/, '')).filter(Boolean);
 let chosen=parts.find(v=>target&&C.normalize(v).includes(target))||parts[0]||source;
 if(chosen.length>165){
  const rawAt=chosen.toLocaleLowerCase('vi').indexOf(answer.toLocaleLowerCase('vi'));
  const i=rawAt>=0?rawAt:Math.floor(chosen.length/2);let left=Math.max(0,i-68),right=Math.min(chosen.length,i+answer.length+78);
  if(left){const sp=chosen.indexOf(' ',left);if(sp>=0&&sp<i)left=sp+1;}
  if(right<chosen.length){const sp=chosen.lastIndexOf(' ',right);if(sp>i)right=sp;}
  chosen=(left?'… ':'')+chosen.slice(left,right).trim()+(right<chosen.length?' …':'');
 }
 return chosen;
}
function mcqEligible(c) {
 if(!c||c.type!=='cloze'||!c.accepted?.length)return false;
 const a=plainText(c.accepted[0]),n=C.normalize(a);
 if(a.length<2||a.length>52||a.split(/\s+/).length>6||MCQ_BLOCKED.has(n))return false;
 return mcqQuestionText(c).length>=18;
}
const MCQ_CARDS=D.cards.filter(mcqEligible);
function mcqPool() {
 const ids=new Set(selectedSections().flatMap(s=>s.cardIds));
 return MCQ_CARDS.filter(c=>ids.has(c.id));
}
function mcqOptions(c) {
 const correct=plainText(c.accepted[0]),cn=C.normalize(correct),kind=termKind(correct),words=correct.split(/\s+/).length,len=correct.length;
 const qn=C.normalize(mcqQuestionText(c));
 const uniq=new Map();
 MCQ_CARDS.forEach(x=>{
  if(x.id===c.id||x.grade!==c.grade)return;
  const a=plainText(x.accepted[0]),n=C.normalize(a);
  if(!n||n===cn||qn.includes(n)||uniq.has(n))return;
  uniq.set(n,{a,x});
 });
 const ranked=[...uniq.values()].map(({a,x})=>{
  let score=0;
  if(x.section===c.section)score+=12; else if(x.lesson===c.lesson)score+=7;
  if(termKind(a)===kind)score+=5;
  score-=Math.abs(a.split(/\s+/).length-words)*1.5;
  score-=Math.abs(a.length-len)/Math.max(8,len);
  score+=(stableHash(c.id+'|'+a)%1000)/100000;
  return {a,score};
 }).sort((a,b)=>b.score-a.score);
 const wrong=ranked.slice(0,3).map(x=>x.a);
 return seededOrder([correct,...wrong],c.id+'|choices');
}
function lessonTitle(id) {return lessonMap.get(id)?.title || 'Bài học';}
function sectionTitle(id) {return sectionMap.get(id)?.title || 'Đề mục';}
function updateNav() {
 const weak=D.cards.filter(c=>records[c.id]?.rating<2).length;
 $('#weakCount').textContent=weak;
 document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===state.view));
}
function navigate(view) {state.view=view;state.active=false;state.result=null;state.search='';render(); window.scrollTo({top:0,behavior:'instant'});}
function header(eyebrow,title,sub) {return `<div class="page-head"><div><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2><p>${esc(sub)}</p></div><span class="snapshot">25.09.2026 · v1.8</span></div>`;}
function statsHTML() {
 const vals=Object.values(records), due=vals.filter(r=>r.dueAt<=Date.now()).length;
 return `<div class="stats"><div class="stat"><span>Đã thực hành</span><strong>${vals.length}</strong><small>thẻ khác nhau trên máy này</small></div><div class="stat"><span>Cần ôn lại</span><strong>${vals.filter(r=>r.rating<2).length}</strong><small>trả lời sai hoặc chưa nhớ</small></div><div class="stat"><span>Đến lịch ôn</span><strong>${due}</strong><small>thẻ đã đến hạn xem lại</small></div></div>`;
}
function resumeHTML() {
 return session && !state.active ? `<div class="resume"><p><b>Phiên ${session.kind==='exam'?'kiểm tra':'ôn'} chưa xong</b><br>${session.ids.length} câu · đang ở câu ${session.index+1}${session.deadline?' · đồng hồ vẫn chạy':''}</p><div><button class="primary" data-action="resume">Tiếp tục</button> <button class="secondary" data-action="discard">Bỏ phiên</button></div></div>`:'';
}
function render() {
 updateNav();
 if(state.result){renderResult();return;}
 if(state.active&&session){renderSession();return;}
 if(state.view==='weak') renderWeak();
 else if(state.view==='progress') renderProgress();
 else if(state.view==='sources') renderSources();
 else renderLearn();
}
function renderLearn() {
 app.innerHTML=header('CHIANGU / ÔN THẬT, NHỚ THẬT','Chọn bài. Tự trả lời. Sửa chỗ sai.','Bám theo học liệu nhantri. Không đợi video, không mở console. Bắt đầu với đúng phần bạn cần ôn.')+
 resumeHTML()+statsHTML()+`<div class="workbench"><section class="panel"><div class="panel-head"><h3>01 / Chọn nội dung</h3><small>Sinh học</small></div><div class="grade-tabs" role="group" aria-label="Chọn lớp">${[9,10,11,12].map(g=>`<button class="grade-tab ${state.grade===g?'active':''}" data-grade="${g}" aria-pressed="${state.grade===g}">Lớp ${g}</button>`).join('')}</div><div class="search-wrap"><label class="sr-only" for="search">Tìm bài học</label><input class="search" id="search" type="search" placeholder="Tìm bài, chủ đề hoặc từ khóa…" value="${esc(state.search)}" autocomplete="off"></div><div class="selection-tools"><button class="text-btn" data-action="select-visible">Chọn các bài đang hiện</button><button class="text-btn" data-action="clear-grade">Bỏ chọn lớp này</button><label class="tiny-check"><input type="checkbox" id="includeExtra" ${state.extra?'checked':''}>Hiện phần HSG / bổ sung</label></div><div class="lesson-list" id="lessonList"></div></section><section class="panel session-setup" id="setup"></section></div><div class="bottom-note"><span aria-hidden="true">ⓘ</span><p>Ghi chú giữ theo tệp nguồn. Chỗ trống, nội dung mẫu lặp và phần chỉ có liên kết không được tự biến thành đáp án. <button class="text-btn" data-view="sources">Xem giới hạn học liệu</button></p></div>`;
 renderLessonList();renderSetup();
}
function visibleLessons() {const q=C.normalize(state.search);return gradeData().lessons.filter(l=>(state.extra||l.kind!=='extra')&&(!q||C.normalize(l.title+' '+l.sections.map(s=>s.title+' '+s.summary.join(' ')).join(' ')).includes(q)));}
function renderLessonList() {
 const target=$('#lessonList');if(!target)return;
 if(gradeData().status!=='available'){target.innerHTML=`<div class="empty-state"><span class="empty-mark">!</span><h3>Chưa có học liệu cho lớp này</h3><p>${esc(gradeData().reason)}</p><button class="secondary" data-view="sources">Xem tình trạng nguồn</button></div>`;return;}
 const lessons=visibleLessons();
 if(!lessons.length){target.innerHTML='<div class="empty-state"><h3>Không tìm thấy bài phù hợp</h3><p>Thử từ khóa ngắn hơn, hoặc bật phần HSG / bổ sung.</p></div>';return;}
 target.innerHTML=lessons.map(l=>{
  const ready=l.sections.filter(s=>s.cardIds.length),chosen=ready.filter(s=>state.selected.has(s.id)).length;
  const rc=l.sections.flatMap(s=>s.cardIds).map(id=>cardMap.get(id));
  return `<div class="lesson"><div class="lesson-row"><label class="lesson-select" aria-label="Chọn ${esc(l.title)}"><input type="checkbox" data-lesson="${l.id}" ${ready.length&&chosen===ready.length?'checked':''} ${!ready.length?'disabled':''}></label><div><label class="lesson-label" data-action="expand" data-id="${l.id}">${esc(l.title)}</label><div class="lesson-meta">${ready.length?`<span class="ready">${ready.length} mục có thẻ</span><span>${rc.filter(c=>c.type==='cloze').length} câu điền khuyết</span>`:'<span class="limited">Chưa đủ nội dung để tạo thẻ</span>'}${l.sections.some(s=>['partial','empty','template'].includes(s.status))?'<span class="limited">Có mục chỉ đọc / chưa đủ</span>':''}</div></div><button class="icon-btn" data-action="expand" data-id="${l.id}" aria-label="Mở các đề mục ${esc(l.title)}" aria-expanded="${state.expanded.has(l.id)}">${state.expanded.has(l.id)?'−':'+'}</button></div>${state.expanded.has(l.id)?`<div class="section-choices">${l.sections.map(s=>`<div class="section-choice"><input id="sel-${s.id}" type="checkbox" data-section="${s.id}" ${state.selected.has(s.id)?'checked':''} ${!s.cardIds.length?'disabled':''}><label for="sel-${s.id}">${esc(s.title)} ${s.status!=='notes'?`<span class="tag warn">${s.status==='template'?'mẫu lặp':s.status==='empty'?'trống':'thiếu'}</span>`:''}</label><a href="#" data-action="source-section" data-id="${s.id}">Ghi chú</a></div>`).join('')}<button class="text-btn" data-action="source-lesson" data-id="${l.id}">Đọc toàn bộ ghi chú bài này ↗</button></div>`:''}</div>`;
 }).join('');
 target.querySelectorAll('[data-lesson]').forEach(cb=>{const l=lessonMap.get(cb.dataset.lesson),ready=l.sections.filter(s=>s.cardIds.length);const n=ready.filter(s=>state.selected.has(s.id)).length;cb.indeterminate=n>0&&n<ready.length;});
}
function lazyMCQPool() {
 // If the learner already picked usable topics, respect that. If not, do the
 // procrastinator-friendly thing and pull from the current grade instead.
 const scoped=mcqPool();
 return scoped.length?scoped:MCQ_CARDS.filter(c=>c.grade===state.grade);
}
function startLazy(count,order='mixed') {
 const pool=lazyMCQPool();
 const chosen=C.select(pool,records,count,order);
 if(!chosen.length){toast(order==='weak'?'Chưa có câu sai / chưa nhớ để ôn lại.':'Lớp này chưa có câu trắc nghiệm ngắn phù hợp.');return;}
 state.mode='mcq';savePrefs();
 begin(chosen.map(c=>c.id),'drill','mcq');
}
function renderSetup() {
 const target=$('#setup');if(!target)return;
 const opts=[['mcq','●','Trắc nghiệm nhanh','4 lựa chọn · giải thích ngắn'],['recall','▱','Thẻ nhớ','Tự nhớ lại rồi đối chiếu'],['cloze','＿','Điền khuyết','Nhập thuật ngữ bị ẩn'],['exam','◷','Kiểm tra','Chấm sau khi nộp bài'],['notes','▤','Đọc ghi chú','Xem đúng phần cần học']];
 const type=state.mode==='recall'?'recall':'cloze',pool=state.mode==='mcq'?mcqPool():scopedCards(type),secs=selectedSections();
 const poolName=state.mode==='mcq'?'câu trắc nghiệm ngắn':type==='recall'?'thẻ nhớ':'câu điền khuyết';
 const lazyPool=lazyMCQPool(),lazyWeak=lazyPool.filter(c=>records[c.id]&&records[c.id].rating<2).length;
 target.innerHTML=`<span class="step">02 / BẮT ĐẦU ÔN</span><h3>Ôn theo cách của bạn.</h3><div class="lazy-box"><div class="lazy-head"><span>QUÁ LƯỜI ĐỂ SETUP?</span><small>Bấm một cái. Không gõ. NMNRT tự ưu tiên câu sai, câu đến hạn và câu chưa làm.</small></div><div class="lazy-presets" role="group" aria-label="Ôn siêu nhanh cho người trì hoãn"><button class="lazy-preset" data-action="lazy-start" data-count="1"><b>1 câu thôi</b><small>literally one fucking question</small></button><button class="lazy-preset" data-action="lazy-start" data-count="3"><b>Bare minimum</b><small>3 câu rồi muốn biến thì biến</small></button><button class="lazy-preset" data-action="lazy-start" data-count="5"><b>5 phút cứu vãn</b><small>5 câu · weak-first</small></button><button class="lazy-preset panic" data-action="lazy-start" data-count="10"><b>Tôi cooked rồi</b><small>10 câu panic review</small></button></div><button class="lazy-mistakes" data-action="lazy-start" data-count="5" data-order="weak" ${lazyWeak?'':'disabled'}>↻ Chỉ hỏi mấy câu tôi đã fuck up ${lazyWeak?`(${lazyWeak})`:''}</button><p class="lazy-note">Ưu tiên phần bạn đã chọn. Nếu chưa chọn gì có câu trắc nghiệm, nó tự lấy từ <b>Lớp ${state.grade}</b>.</p></div><div class="setup-divider"><span>hoặc tự chỉnh</span></div><div class="mode-options" role="group" aria-label="Chế độ ôn">${opts.map(([m,icon,t,desc])=>`<button class="mode ${state.mode===m?'active':''}" data-mode="${m}" aria-pressed="${state.mode===m}"><span class="symbol" aria-hidden="true">${icon}</span><span><b>${t}</b><small>${desc}</small></span></button>`).join('')}</div>${state.mode!=='notes'?`<div class="fields"><div class="field"><label for="count">Số câu / thẻ</label><select id="count">${[5,10,20,30,50].map(n=>`<option ${state.count===n?'selected':''}>${n}</option>`).join('')}</select></div><div class="field"><label for="${state.mode==='exam'?'minutes':'order'}">${state.mode==='exam'?'Thời gian':'Ưu tiên'}</label>${state.mode==='exam'?`<select id="minutes">${[0,5,10,15,30,45].map(n=>`<option value="${n}" ${state.minutes===n?'selected':''}>${n?n+' phút':'Không giới hạn'}</option>`).join('')}</select>`:'<select id="order"><option value="mixed">Chỗ chưa nhớ</option><option value="random">Ngẫu nhiên</option><option value="due">Đến lịch ôn</option></select>'}</div></div>`:''}<div class="pool-line"><b>${secs.length} đề mục được chọn</b><br>${state.mode==='notes'?'Mở ghi chú của các đề mục đã chọn.':`${pool.length} ${poolName} có sẵn · phiên tối đa ${Math.min(state.count,pool.length)} câu.`}</div><button class="primary full" data-action="start" ${(state.mode==='notes'?!secs.length:!pool.length)?'disabled':''}>${state.mode==='notes'?'Mở ghi chú':state.mode==='exam'?'Bắt đầu kiểm tra':state.mode==='mcq'?'Bắt đầu trắc nghiệm':'Bắt đầu ôn'} <span aria-hidden="true">→</span></button><p class="setup-foot">${state.mode==='mcq'?'Mỗi câu chỉ giữ phần cần thiết. Đáp án đúng và giải thích ngắn đều rút từ tiểu kết nguồn; phương án nhiễu là thuật ngữ khác trong cùng học liệu.':state.mode==='exam'?'Đề luyện điền khuyết từ nguồn, không phải đề thi chính thức. Chỉ hiện đáp án sau khi nộp.':state.mode==='recall'?'Bạn tự đánh giá mức nhớ sau khi đối chiếu. Đây không phải chấm tự luận bằng AI.':'Chấp nhận khác biệt chữ hoa, dấu tiếng Việt và ký tự số trên/dưới; không đoán đồng nghĩa.'}</p>`;
}
function begin(ids,kind,mode=null) {
 if(!ids.length){toast('Không có câu phù hợp với lựa chọn này.');return;}
 if(session&&!confirm('Bỏ phiên chưa hoàn thành để bắt đầu phiên mới? Các câu đã ôn vẫn giữ tiến độ.'))return;
 session={kind,mode:kind==='exam'?'cloze':mode,ids,index:0,answers:{},results:[],revealed:false,checked:false,startedAt:Date.now(),deadline:kind==='exam'&&state.minutes?Date.now()+state.minutes*60000:null};
 state.active=true;state.result=null;saveSession();renderSession();window.scrollTo({top:0,behavior:'instant'});
}
function start() {
 if(state.mode==='notes'){renderNotesView();return;}
 const type=state.mode==='recall'?'recall':'cloze';
 const pool=state.mode==='mcq'?mcqPool():scopedCards(type);const order=state.mode==='exam'?'random':$('#order')?.value||'mixed';
 const chosen=C.select(pool,records,state.count,order);
 if(!chosen.length){toast(order==='due'?'Chưa có câu đến lịch ôn trong phần đã chọn.':'Chưa có câu phù hợp.');return;}
 begin(chosen.map(c=>c.id),state.mode==='exam'?'exam':'drill',state.mode);
}
function cardSourceRef(c) {return (c.sourceRefs||[]).find(r=>state.selected.has(r.section))||c;}
function cardSources(c) {
 const ref=cardSourceRef(c);
 return `<p class="source-label">Nguồn: ${esc(c.source)} · ${esc(lessonTitle(ref.lesson))} · ${esc(sectionTitle(ref.section))}${c.sourceRefs?.length>1?' · Ghi chú lặp nguyên văn, dùng chung thẻ.':''}</p><button class="text-btn source-link" data-action="source-section" data-id="${ref.section}">Mở ghi chú của đề mục ↗</button>`;
}
function answerHTML(c) {return `<div class="source-notes">${c.answer.map(t=>`<div class="source-item"><p>${rich(t)}</p></div>`).join('')}</div>`;}
function questionHTML(c) {return c.type==='cloze'?esc(c.prompt).replace('⟦blank⟧','<span class="blank" aria-label="chỗ trống">?</span>'):esc(c.prompt);}
function mcqChoicesHTML(c,s) {
 const selected=s.answers[c.id]||'',correct=plainText(c.accepted[0]);
 return `<div class="mcq-options" role="group" aria-label="Các phương án">${mcqOptions(c).map((opt,i)=>{
  const chosen=selected===opt,isCorrect=C.matches(opt,c.accepted),cls=s.checked?(isCorrect?' correct':chosen?' wrong':''):(chosen?' selected':'');
  return `<button class="mcq-option${cls}" data-mcq-choice="${esc(opt)}" ${s.checked?'disabled':''}><span class="mcq-letter">${String.fromCharCode(65+i)}</span><span>${esc(opt)}</span></button>`;
 }).join('')}</div>`;
}
function mcqFeedbackHTML(c,s) {
 const result=s.results.find(r=>r.id===c.id),answer=plainText(c.accepted[0]);
 if(!s.checked)return '';
 return `<div class="feedback mcq-feedback"><h3 class="${result?.correct?'correct':'incorrect'}">${result?.correct?'✓ Đúng':'↻ Chưa đúng'}</h3><p class="mcq-answer"><span>Đáp án</span><strong>${esc(answer)}</strong></p><p class="mcq-explain"><b>Giải thích ngắn:</b> ${esc(mcqExplanationText(c))}</p><div class="mcq-feedback-foot"><button class="text-btn" data-action="source-section" data-id="${cardSourceRef(c).section}">Xem ghi chú nguồn ↗</button><button class="primary" data-action="next">${s.index===s.ids.length-1?'Xem kết quả':'Câu tiếp'} →</button></div></div>`;
}
function renderMCQSession() {
 const s=session,c=cardMap.get(s.ids[s.index]),prog=s.results.length;
 app.innerHTML=`<div class="study-wrap"><div class="toolbar"><button class="secondary" data-action="pause">← Lưu & về trang ôn</button><span class="muted">${s.index+1} / ${s.ids.length}</span><span class="tag">Trắc nghiệm nhanh</span></div><div class="progress-track"><i style="width:${Math.round(prog/s.ids.length*100)}%"></i></div><section class="panel study-card mcq-card"><div class="study-meta"><span>Lớp ${c.grade} · ${esc(lessonTitle(cardSourceRef(c).lesson))}</span><span>1 ý · 4 lựa chọn</span></div><div class="prompt-label">CHỌN MỘT ĐÁP ÁN</div><div class="question mcq-question">${esc(mcqQuestionText(c)).replace('_____','<span class="blank mcq-blank" aria-label="chỗ trống">?</span>')}</div>${mcqChoicesHTML(c,s)}${!s.checked?`<div class="mcq-skip-row"><button class="text-btn" data-action="mcq-skip">Chưa biết — xem đáp án</button><span class="input-hint">Phím 1–4 để chọn nhanh.</span></div>`:''}<div id="feedback">${mcqFeedbackHTML(c,s)}</div></section><p class="footer-fine">Một câu, một ý. Sai thì xem giải thích ngắn rồi đi tiếp.</p></div>`;
}
function renderSession() {
 if(!session)return navigate('learn');
 if(session.mode==='mcq'){renderMCQSession();return;}
 const s=session,c=cardMap.get(s.ids[s.index]),isExam=s.kind==='exam';
 const prog=isExam?Object.values(s.answers).filter(x=>String(x).trim()).length:s.results.length;
 app.innerHTML=`<div class="study-wrap"><div class="toolbar"><button class="secondary" data-action="pause">← ${isExam?'Về trang ôn':'Lưu & về trang ôn'}</button><span class="muted">${s.index+1} / ${s.ids.length}</span>${isExam?`<span class="timer" id="timer">${s.deadline?'--:--':'Không giới hạn'}</span>`:`<span class="tag">${c.type==='recall'?'Thẻ nhớ · tự đánh giá':'Điền khuyết'}</span>`}</div><div class="progress-track"><i style="width:${Math.round(prog/s.ids.length*100)}%"></i></div>${isExam?`<div class="exam-grid" aria-label="Chuyển câu hỏi">${s.ids.map((id,i)=>`<button class="exam-number ${i===s.index?'active':''} ${String(s.answers[id]??'').trim()?'answered':''}" data-exam-index="${i}" aria-label="Câu ${i+1}${String(s.answers[id]??'').trim()?', đã nhập đáp án':''}" ${i===s.index?'aria-current="step"':''}>${i+1}</button>`).join('')}</div>`:''}<section class="panel study-card"><div class="study-meta"><span>Lớp ${c.grade} · ${esc(lessonTitle(cardSourceRef(c).lesson))}</span><span>${c.type==='recall'?c.answer.length+' ý trong nguồn':'Theo tiểu kết nguồn'}</span></div><div class="prompt-label">${isExam?'KIỂM TRA · CHƯA HIỆN ĐÁP ÁN':c.type==='recall'?'THỬ NHỚ TRƯỚC KHI XEM':'ĐIỀN THUẬT NGỮ CÒN THIẾU'}</div><div class="question">${questionHTML(c)}</div><label class="sr-only" for="answer">Câu trả lời của bạn</label>${c.type==='recall'?`<textarea class="answer-input" id="answer" placeholder="Viết lại bằng lời của bạn, hoặc tự trả lời thành tiếng…" ${s.revealed?'readonly':''}>${esc(s.answers[c.id]||'')}</textarea>`:`<input class="answer-input" id="answer" autocomplete="off" spellcheck="false" placeholder="Nhập thuật ngữ…" value="${esc(s.answers[c.id]||'')}" ${s.checked&&!isExam?'readonly':''}>`}<p class="input-hint">${c.type==='recall'?'Ô nhập là giấy nháp. Không có hệ thống tự chấm câu văn của bạn.':'So khớp với từ trong nguồn; không phân biệt hoa/thường hoặc dấu tiếng Việt.'}</p><div id="feedback"></div>${isExam?`<div class="card-actions"><button class="secondary" data-action="exam-prev" ${!s.index?'disabled':''}>← Câu trước</button><button class="secondary" data-action="exam-next" ${s.index===s.ids.length-1?'disabled':''}>Câu tiếp →</button></div>`:!s.revealed&&!s.checked?`<div class="card-actions"><button class="text-btn" data-action="reveal">${c.type==='cloze'?'Chưa biết — xem đáp án':'Xem để đối chiếu'}</button><button class="primary" data-action="${c.type==='recall'?'reveal':'check'}">${c.type==='recall'?'Đối chiếu ghi chú':'Kiểm tra câu trả lời'} →</button></div>`:''}</section>${isExam?`<div class="card-actions"><p class="input-hint" id="answeredCount">Đã nhập ${prog}/${s.ids.length} câu. Câu bỏ trống tính là chưa đúng.</p><button class="primary" data-action="submit-exam">Nộp bài</button></div><p class="footer-fine">Đồng hồ tính theo hạn nộp thực tế, kể cả khi đổi tab hoặc tải lại trang.</p>`:'<p class="footer-fine">Nhớ được hôm nay chưa có nghĩa là sẽ nhớ mãi. Những thẻ chưa chắc sẽ được ưu tiên ở phiên sau.</p>'}</div>`;
 if(!isExam&&(s.revealed||s.checked))renderFeedback();
 updateTimer();
}
function chooseMCQ(value,skip=false) {
 if(!session||session.mode!=='mcq'||session.checked)return;
 const c=cardMap.get(session.ids[session.index]),answer=skip?'':String(value??'');
 const correct=!skip&&C.matches(answer,c.accepted);
 session.answers[c.id]=answer;session.checked=true;session.revealed=true;
 session.results.push({id:c.id,answer,correct,rating:correct?2:0,self:false,mode:'mcq'});
 updateRecord(c.id,correct?2:0);saveSession();renderSession();
}
function captureAnswer() {if(!session)return;const input=$('#answer');if(input){session.answers[session.ids[session.index]]=input.value;saveSession();}}
function reveal() {if(!session||session.kind==='exam')return;captureAnswer();const c=cardMap.get(session.ids[session.index]);if(c.type==='cloze'){check(true);return;}session.revealed=true;saveSession();renderSession();}
function check(skip=false) {
 if(!session||session.kind==='exam'||session.checked)return;captureAnswer();
 const c=cardMap.get(session.ids[session.index]);const answer=session.answers[c.id]||'';
 if(!skip&&!answer.trim()){toast('Nhập câu trả lời hoặc chọn “Chưa biết”.');return;}
 const correct=!skip&&C.matches(answer,c.accepted);session.checked=true;session.revealed=true;
 session.results.push({id:c.id,answer,correct,rating:correct?2:0,self:false});updateRecord(c.id,correct?2:0);saveSession();renderSession();
}
function renderFeedback() {
 const s=session,c=cardMap.get(s.ids[s.index]);
 const result=s.results.find(r=>r.id===c.id);
 $('#feedback').innerHTML=`<div class="feedback"><h3 class="${c.type==='recall'?'':result?.correct?'correct':'incorrect'}">${c.type==='recall'?'Đối chiếu với ghi chú nguồn':result?.correct?'✓ Khớp với thuật ngữ trong nguồn':'↻ Chưa khớp — xem lại chỗ này'}</h3>${c.type==='cloze'?`<p><b>Từ trong nguồn:</b> ${esc(c.accepted[0])}</p>`:''}${answerHTML(c)}<p class="input-hint">${esc(c.note)}</p>${cardSources(c)}${c.type==='recall'?`<div class="rating-buttons"><button class="rating" data-rating="0">Chưa nhớ<small>nhắc lại sau 10 phút</small></button><button class="rating" data-rating="1">Chưa chắc<small>ôn lại sau 1 ngày</small></button><button class="rating" data-rating="2">Nhớ được<small>giãn lịch ôn</small></button><button class="rating" data-rating="3">Rất chắc<small>giãn lịch ôn lâu hơn</small></button></div><p class="notes-mini">Mức nhớ do bạn tự đánh giá. Lịch chỉ là gợi ý của ứng dụng, không phải đo năng lực.</p>`:`<div class="card-actions"><span class="input-hint">${result?.correct?'Đã ghi nhận vào tiến độ.':'Đã thêm vào danh sách cần ôn lại.'}</span><button class="primary" data-action="next">${s.index===s.ids.length-1?'Xem kết quả':'Câu tiếp'} →</button></div>`}</div>`;
}
function rateRecall(rating) {
 if(!session||!session.revealed||session.kind==='exam')return;
 const c=cardMap.get(session.ids[session.index]);if(c.type!=='recall'||session.results.some(r=>r.id===c.id))return;
 updateRecord(c.id,rating);session.results.push({id:c.id,answer:session.answers[c.id]||'',correct:rating>=2,rating,self:true});next();
}
function next() {
 if(!session)return;
 if(session.index<session.ids.length-1){session.index++;session.checked=false;session.revealed=false;saveSession();renderSession();window.scrollTo({top:0,behavior:'instant'});}
 else finishDrill();
}
function finishDrill() {state.result={kind:'drill',mode:session.mode||null,results:[...session.results],total:session.ids.length,correct:session.results.filter(r=>r.correct).length,startedAt:session.startedAt,finishedAt:Date.now()};session=null;saveSession();state.active=false;renderResult();}
function submitExam(automatic=false) {
 if(!session||session.kind!=='exam')return;
 captureAnswer();
 if(!automatic&&!confirm('Nộp bài và hiện đáp án? Câu chưa trả lời sẽ được tính là chưa đúng.'))return;
 const graded=C.gradeExam(session.ids,session.answers,cardMap);
 const now=Date.now();
 graded.results.forEach(r=>{records[r.id]=C.rate(records[r.id],r.correct?2:0,now);});store('records',records);
 state.result={...graded,kind:'exam',startedAt:session.startedAt,finishedAt:now,automatic};
 history.push({at:now,total:graded.total,correct:graded.correct,minutes:Math.round((now-session.startedAt)/60000)});history=history.slice(-30);store('history',history);
 session=null;saveSession();state.active=false;updateNav();renderResult();
 if(automatic)toast('Đã hết giờ. Bài được nộp với những câu bạn đã nhập.');
}
function updateTimer() {
 if(!session||session.kind!=='exam'||!session.deadline)return;
 const seconds=Math.max(0,Math.ceil((session.deadline-Date.now())/1000));
 const timer=$('#timer');if(timer){timer.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');timer.classList.toggle('incorrect',seconds<=60);}
 if(seconds===0)submitExam(true);
}
function examJump(i) {if(!session||session.kind!=='exam'||i<0||i>=session.ids.length)return;captureAnswer();session.index=i;saveSession();renderSession();}
function renderMCQResult() {
 const r=state.result,missed=r.results.filter(x=>!x.correct);
 app.innerHTML=`<div class="study-wrap">${header('KẾT QUẢ TRẮC NGHIỆM',missed.length?'Sai chỗ nào, sửa đúng chỗ đó.':'Xong. Không cần đọc một bức tường chữ.','Đáp án và giải thích đều rút gọn từ học liệu nguồn.')}<section class="panel result-hero"><span class="tiny-label">TRẮC NGHIỆM NHANH</span><div class="result-score">${r.correct}<small> / ${r.total}</small></div><p>${missed.length?missed.length+' câu cần xem lại.':'Không có câu sai trong phiên này.'}</p><div class="result-actions">${missed.length?'<button class="primary" data-action="retry-result">Làm lại câu sai ↻</button>':''}<button class="secondary" data-view="learn">Chọn bài khác</button></div></section><h3 class="section-heading">Đối chiếu nhanh</h3><div class="review-list">${r.results.map((x,i)=>{const c=cardMap.get(x.id);return `<details class="panel review-item mcq-review" ${!x.correct?'open':''}><summary><span class="tag ${x.correct?'good':'bad'}">${x.correct?'✓':'↻'} ${i+1}</span><span>${esc(mcqQuestionText(c))}</span></summary><p class="your-answer">Bạn chọn: ${esc(x.answer||'(chưa biết)')}</p><p class="mcq-answer"><span>Đáp án</span><strong>${esc(plainText(c.accepted[0]))}</strong></p><p class="mcq-explain"><b>Giải thích ngắn:</b> ${esc(mcqExplanationText(c))}</p><button class="text-btn source-link" data-action="source-section" data-id="${cardSourceRef(c).section}">Xem ghi chú nguồn ↗</button></details>`;}).join('')}</div></div>`;
}
function renderResult() {
 const r=state.result;if(!r)return;if(r.mode==='mcq'){renderMCQResult();return;}const missed=r.results.filter(x=>!x.correct),self=r.results.filter(x=>x.self);
 app.innerHTML=`<div class="study-wrap">${header(r.kind==='exam'?'KẾT QUẢ KIỂM TRA':'KẾT THÚC PHIÊN ÔN',missed.length?'Biết chỗ chưa nhớ. Ôn tiếp đúng chỗ.':'Xong phiên này. Hẹn ở lượt ôn sau.',r.automatic?'Hết thời gian; bài đã được nộp tự động.':'Kết quả đã lưu trên trình duyệt này.')}<section class="panel result-hero"><span class="tiny-label">${self.length?'THẺ TỰ ĐÁNH GIÁ NHỚ ĐƯỢC / CÂU KHỚP NGUỒN':'CÂU TRẢ LỜI KHỚP NGUỒN'}</span><div class="result-score">${r.correct}<small> / ${r.total}</small></div><p>${missed.length} câu hoặc thẻ cần xem lại.${self.length?' Mức nhớ của '+self.length+' thẻ là do bạn tự đánh giá.':''}</p><p class="notes-mini">${r.kind==='exam'?'Đây là bài luyện thuật ngữ theo nguồn, không quy đổi thành điểm kiểm tra ở trường.':'Số liệu phiên ôn không phải chứng nhận đã nắm toàn bộ bài.'}</p><div class="result-actions">${missed.length?'<button class="primary" data-action="retry-result">Ôn lại phần chưa nhớ ↻</button>':''}<button class="secondary" data-view="learn">Chọn bài khác</button><button class="secondary" data-action="export-progress">Xuất tiến độ</button></div></section><h3 class="section-heading">Đối chiếu từng câu / thẻ</h3><div class="review-list">${r.results.map((x,i)=>{const c=cardMap.get(x.id);return `<details class="panel review-item" ${!x.correct?'open':''}><summary><span class="tag ${x.correct?'good':'bad'}">${x.correct?'✓':'↻'} ${i+1}</span><span>${esc(lessonTitle(cardSourceRef(c).lesson))} · ${c.type==='recall'?'Tự đánh giá':'Điền khuyết'}</span></summary><div class="question">${questionHTML(c)}</div><p class="your-answer">Bạn viết: ${esc(x.answer||'(không nhập)')}</p>${answerHTML(c)}${cardSources(c)}</details>`;}).join('')}</div></div>`;
}
function renderWeak() {
 const weak=D.cards.filter(c=>records[c.id]?.rating<2),due=D.cards.filter(c=>records[c.id]&&records[c.id].dueAt<=Date.now());
 app.innerHTML=header('ÔN LẠI CÓ MỤC ĐÍCH','Đừng ôn lại mọi thứ.','Danh sách này chỉ gồm những câu chưa đúng hoặc những thẻ bạn tự đánh giá chưa nhớ / chưa chắc.')+resumeHTML()+`<div class="actions-row"><button class="primary" data-action="weak-session" ${!weak.length?'disabled':''}>Ôn tối đa 20 thẻ chưa nhớ (${weak.length})</button><button class="secondary" data-action="due-session" ${!due.length?'disabled':''}>Ôn thẻ đến lịch (${due.length})</button></div>${weak.length?`<div class="panel">${weak.slice(0,100).map(c=>`<div class="weak-card"><div><h3>Lớp ${c.grade} · ${esc(lessonTitle(cardSourceRef(c).lesson))}</h3><p>${esc(sectionTitle(c.section))}</p><span class="tag">${c.type==='recall'?'Tự đánh giá':'Điền khuyết'}</span> <span class="tag warn">${records[c.id].rating===0?'Chưa nhớ':'Chưa chắc'}</span></div><button class="secondary" data-action="one-card" data-id="${c.id}">Ôn thẻ này</button></div>`).join('')}</div>${weak.length>100?'<p class="notes-mini">Đang hiện 100 thẻ đầu. Phiên ôn vẫn chọn từ toàn bộ danh sách.</p>':''}`:'<div class="panel empty-state"><span class="empty-mark">✓</span><h3>Chưa có thẻ cần ôn lại.</h3><p>Bắt đầu một phiên ôn. Những câu chưa đúng sẽ xuất hiện ở đây.</p><button class="primary" data-view="learn">Chọn bài để ôn →</button></div>'}`;
}
function renderProgress() {
 const attempts=Object.values(records).reduce((a,r)=>a+r.attempts,0);
 let practiced=D.grades.filter(g=>g.grade!==9).flatMap(g=>g.lessons.map(l=>({g:g.grade,l,ids:l.sections.flatMap(s=>s.cardIds)}))).filter(x=>x.ids.some(id=>records[id]));
 // Repeated Grade 9 text shares progress: show one row per source section,
 // rather than falsely implying that all 34 duplicated lesson pages were studied.
 const grade9Rows=D.grades.find(g=>g.grade===9).lessons.flatMap(l=>l.sections.map(s=>({g:9,l:{title:s.title+(s.sharedCards?' · ghi chú dùng chung':'')},ids:s.cardIds.filter(id=>cardMap.get(id).section===s.id)}))).filter(x=>x.ids.some(id=>records[id]));
 practiced=[...grade9Rows,...practiced];
 app.innerHTML=header('TIẾN ĐỘ CÁ NHÂN','Bạn đang nhớ phần nào?','Theo dõi những gì đã thực hành, không đánh đồng việc đọc qua với việc nắm vững kiến thức.')+statsHTML()+`<div class="progress-summary"><section class="panel"><h3>${attempts} lượt thực hành</h3><p>${D.cards.length} thẻ / câu có sẵn trong ngân hàng. Việc đánh giá chỉ áp dụng cho phần nguồn đã có nội dung.</p><button class="text-btn" data-view="sources">Kiểm tra độ đầy đủ của nguồn →</button></section><section class="panel"><h3>Dữ liệu nằm trên máy của bạn.</h3><p>Không tự đồng bộ giữa thiết bị. Xóa dữ liệu trình duyệt có thể làm mất tiến độ.</p><button class="text-btn" data-action="export-progress">Xuất tệp tiến độ →</button></section></div><h3 class="section-heading">Theo từng bài đã thực hành</h3>${practiced.length?`<div class="panel">${practiced.map(({g,l,ids})=>{const seen=ids.filter(id=>records[id]),ok=seen.filter(id=>records[id].rating>=2);return `<div class="progress-row"><div><h3>Lớp ${g} · ${esc(l.title)}</h3><small>${seen.length}/${ids.length} thẻ đã thử · ${ok.length} thẻ ở mức nhớ được / khớp nguồn gần nhất</small></div><div><div class="progress-track"><i style="width:${Math.round(ok.length/Math.max(1,ids.length)*100)}%"></i></div><small>${Math.round(seen.length/Math.max(1,ids.length)*100)}% ngân hàng bài đã thử</small></div></div>`;}).join('')}</div>`:'<div class="panel empty-state"><p>Chưa có phiên ôn nào. Tiến độ sẽ xuất hiện sau câu đầu tiên.</p><button class="primary" data-view="learn">Bắt đầu ôn</button></div>'}<h3 class="section-heading">Các bài kiểm tra gần đây</h3>${history.length?`<div class="panel table-scroll"><table class="coverage"><thead><tr><th>Ngày</th><th>Khớp nguồn</th><th>Thời gian làm</th></tr></thead><tbody>${[...history].reverse().slice(0,15).map(h=>`<tr><td>${date(h.at)}</td><td>${h.correct} / ${h.total}</td><td>${h.minutes||0} phút</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Chưa có bài kiểm tra đã nộp.</p>'}`;
}
function renderSources() {
 app.innerHTML=`<div class="source-page">${header('MINH BẠCH HỌC LIỆU','Nguồn có gì, NMNRT dùng nấy.','Ngân hàng được tạo từ phần tiểu kết trong tệp đã cung cấp, không tự lấy đáp án từ bài kiểm tra đang làm.')}<div class="notice"><b>Lớp 9 đã được thêm.</b> ${esc(D.grades.find(g=>g.grade===9).note)}</div><div class="panel table-scroll"><table class="coverage"><thead><tr><th>Nguồn</th><th>Mục bài*</th><th>Thẻ nhớ</th><th>Điền khuyết</th><th>Đề mục chưa đủ**</th></tr></thead><tbody>${D.sources.map(s=>`<tr><td><b>Lớp ${s.grade}</b><br><small>${esc(s.file)}</small></td><td>${s.blocked?'—':s.lessons}</td><td>${s.recall}</td><td>${s.cloze}</td><td>${s.blocked?'Chưa có dữ liệu':s.unavailable}</td></tr>`).join('')}</tbody></table></div><p class="prose">* “Mục bài” bao gồm bài chính, mục HSG và hướng dẫn bổ sung trong tệp, không phải số bài chính thức của sách. ** Bao gồm mục mở đầu, chỉ có đường dẫn, nội dung mẫu, chưa có tiểu kết hoặc để trống; các mục này vẫn có thể xem nguồn nhưng không được tạo thẻ tự động.</p><section class="panel panel-pad"><h3>Cách tạo nội dung</h3><p>Lớp 9: số thẻ và câu hỏi trong bảng là số không trùng lặp, không phải số bài đã được viết đủ. Tiêu đề bài và ghi chú được giữ riêng theo nguồn; không suy ra đáp án còn thiếu từ tiêu đề.</p><details open><summary>Ghi chú không bị viết lại thành một bộ sách khác.</summary><p>Giữ tiêu đề, trình tự đề mục, thuật ngữ và đoạn tiểu kết của nguồn. Các nhiệm vụ / câu hỏi gốc được tách riêng, không mặc định coi chúng là đáp án. Khi nguồn chỉ có hình hoặc liên kết, ứng dụng không đoán phần còn thiếu.</p></details><details><summary>Các chế độ ôn hoạt động thế nào?</summary><p>Trắc nghiệm nhanh dùng đáp án của các câu điền khuyết đã tạo từ tiểu kết; phương án nhiễu là những thuật ngữ khác đã có trong học liệu, và phần giải thích chỉ rút gọn câu nguồn. Thẻ nhớ yêu cầu bạn tự trình bày rồi tự đánh giá. Câu điền khuyết chỉ so khớp sau khi chuẩn hóa dấu, chữ hoa và chữ số trên/dưới. Không dùng AI để chấm tự luận hay tự bịa phần nguồn còn thiếu.</p></details><details><summary>Điểm và lịch ôn không phải chứng nhận học lực.</summary><p>Câu điền khuyết đúng được ghi nhận là khớp nguồn. Mức nhớ của thẻ tự luận do người học tự đánh giá. Thẻ chưa nhớ được hẹn lại sau 10 phút, chưa chắc sau 1 ngày; thẻ nhớ được hoặc rất chắc được giãn lịch. Đây là quy tắc đơn giản của phần mềm, không dự đoán điểm kiểm tra ở trường.</p></details><details><summary>Giới hạn nội dung và học liệu bên ngoài</summary>${D.limitations.map(t=>`<p>${esc(t)}</p>`).join('')}<p>Ghi chú dùng cho ôn tập, không thay thế hướng dẫn thực hành, an toàn phòng thí nghiệm hoặc tư vấn y tế. Không tiến hành thí nghiệm chỉ dựa vào một câu trên thẻ.</p></details><div class="resource-links">${D.sources.filter(s=>s.url).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Trang bài giảng lớp ${s.grade} ↗</a>`).join('')}</div></section><h3 class="section-heading">Sao lưu và chuyển tiến độ</h3><section class="panel panel-pad"><p class="prose">Tệp JSON chứa lịch ôn và số lượt thực hành, không chứa dữ liệu đăng nhập. Nhập tệp sẽ hợp nhất tiến độ, ưu tiên bản ghi có thời gian mới hơn. Không tải tệp lên máy chủ.</p><div class="actions-row"><button class="primary" data-action="export-progress">Xuất tiến độ (.json)</button><button class="secondary" data-action="import-progress">Nhập tiến độ</button><button class="danger" data-action="reset-progress">Xóa tiến độ trên máy này</button></div><p class="notes-mini">Địa chỉ web, trình duyệt và thiết bị khác nhau có vùng lưu riêng. Hãy xuất trước khi đổi máy, đổi trình duyệt hoặc đổi từ bản mở tệp sang bản trên website.</p></section></div>`;
}
function sectionHTML(s) {
 const media=s.media||{},u=media.src?safeURL(media.src):'';
 return `<section class="section-block" id="note-${s.id}"><h3>${esc(s.title)}</h3><span class="source-note-id">${esc(s.id)}</span>${s.status!=='notes'?`<div class="notice warning">${s.status==='template'?'Nội dung mẫu lặp, không dùng tạo thẻ cho bài này.':s.status==='empty'?'Nguồn chưa có nội dung ở đề mục này.':'Nguồn chưa có phần tiểu kết đủ rõ để tạo thẻ tự động. Đoạn gốc và liên kết được giữ bên dưới.'}</div>`:''}${s.summary.length?`<div class="source-notes">${s.summary.map((t,i)=>`<div class="source-item"><p>${rich(t)}</p></div>`).join('')}</div>`:'<p class="notes-mini">Không có tiểu kết bằng văn bản trong tệp.</p>'}${s.task||s.prompts.length?`<details class="resource-disclosure"><summary class="notes-mini">Nhiệm vụ / câu hỏi trong nguồn (không mặc định là đáp án)</summary>${s.task?`<p class="teacher-task">${rich(s.task)}</p>`:''}${s.prompts.map(p=>`<p class="teacher-task">${rich(p)}</p>`).join('')}</details>`:''}${u?`<div class="resource-links"><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(media.caption||'Mở hình / video / học liệu gốc')} ↗</a></div>`:''}</section>`;
}
function openSource(id,whole=false) {
 const l=whole?lessonMap.get(id):lessonMap.get(sectionMap.get(id)?.lesson);
 if(!l)return;
 const secs=whole?l.sections:[sectionMap.get(id)],g=sectionMap.get(secs[0].id).grade;
 $('#dialogTitle').textContent=`Lớp ${g} · ${l.title}`;
 $('#notesBody').innerHTML=`<p class="notes-mini">Trích từ ${esc(D.sources.find(x=>x.grade===g).file)}. Giữ theo nguồn; chưa kiểm chứng khoa học độc lập.</p>${secs.map(sectionHTML).join('')}`;
 $('#notesDialog').showModal();
}
function renderNotesView() {
 const secs=selectedSections(), groups=new Map();secs.forEach(s=>{if(!groups.has(s.lesson))groups.set(s.lesson,[]);groups.get(s.lesson).push(s);});
 app.innerHTML=header('GHI CHÚ THEO PHẦN ĐÃ CHỌN','Đọc đúng phần đang ôn.','Các đoạn bên dưới giữ theo nguồn. Mục tiêu và nhiệm vụ của giáo viên nằm trong phần mở rộng riêng.')+`<div class="toolbar"><button class="secondary" data-view="learn">← Về chọn bài</button><button class="secondary" data-action="print">In ghi chú</button></div>${[...groups.entries()].map(([id,ss])=>`<details class="panel lesson-note" open><summary>${esc(lessonTitle(id))}</summary>${ss.map(sectionHTML).join('')}</details>`).join('')}<p class="source-label">Nguồn: ${esc(D.sources.find(x=>x.grade===state.grade).file)} · Bản tệp 24/09/2026. Hình, video và bài tập liên kết không được đóng gói.</p>`;
}
function download(name,text,type='application/json') {const blob=new Blob([text],{type}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),3000);}
function exportProgress() {download('nmnrt-progress-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify({format:'nmnrt-progress',version:1,exportedAt:new Date().toISOString(),records},null,2));toast('Đã xuất tệp tiến độ.');}
$('#closeNotes').addEventListener('click',()=>$('#notesDialog').close());
$('#notesDialog').addEventListener('click',e=>{if(e.target===$('#notesDialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
$('#importProgress').addEventListener('change',async e=>{
 const f=e.target.files[0];if(!f)return;e.target.value='';
 try{if(f.size>5*1024*1024)throw new Error('Tệp lớn hơn 5 MB.');const incoming=C.validateProgress(JSON.parse(await f.text()),new Set(cardMap.keys()));if(!confirm(`Nhập ${Object.keys(incoming).length} bản ghi hợp lệ? Tiến độ mới hơn sẽ được giữ.`))return;for(const [id,r]of Object.entries(incoming)){if(!records[id]||r.lastAt>records[id].lastAt)records[id]=r;}store('records',records);toast('Đã hợp nhất tiến độ.');render();}catch(err){toast('Không nhập được: '+err.message);}
});
document.addEventListener('input',e=>{
 if(e.target.id==='search'){state.search=e.target.value;renderLessonList();}
 if(e.target.id==='answer'&&session){session.answers[session.ids[session.index]]=e.target.value;saveSession();if(session.kind==='exam'){const n=Object.values(session.answers).filter(x=>String(x).trim()).length;const num=app.querySelector(`[data-exam-index="${session.index}"]`);num?.classList.toggle('answered',!!e.target.value.trim());$('#answeredCount').textContent=`Đã nhập ${n}/${session.ids.length} câu. Câu bỏ trống tính là chưa đúng.`;}}
});
document.addEventListener('change',e=>{
 const t=e.target;
 if(t.matches('[data-lesson]')){const l=lessonMap.get(t.dataset.lesson);l.sections.filter(s=>s.cardIds.length).forEach(s=>t.checked?state.selected.add(s.id):state.selected.delete(s.id));savePrefs();renderLessonList();renderSetup();}
 if(t.matches('[data-section]')){t.checked?state.selected.add(t.dataset.section):state.selected.delete(t.dataset.section);savePrefs();renderLessonList();renderSetup();}
 if(t.id==='includeExtra'){state.extra=t.checked;savePrefs();renderLessonList();}
 if(t.id==='count'){state.count=Number(t.value);savePrefs();renderSetup();}
 if(t.id==='minutes'){state.minutes=Number(t.value);savePrefs();}
});
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a[data-action],label[data-action]');if(!b||b.disabled)return;
 if(b.dataset.view){e.preventDefault();navigate(b.dataset.view);return;}
 if(b.dataset.grade){state.grade=Number(b.dataset.grade);state.search='';savePrefs();renderLearn();return;}
 if(b.dataset.mode){state.mode=b.dataset.mode;savePrefs();renderSetup();return;}
 if(b.dataset.mcqChoice!==undefined){chooseMCQ(b.dataset.mcqChoice);return;}
 if(b.dataset.rating!==undefined){rateRecall(Number(b.dataset.rating));return;}
 if(b.dataset.examIndex!==undefined){examJump(Number(b.dataset.examIndex));return;}
 const action=b.dataset.action,id=b.dataset.id;if(!action)return;e.preventDefault();
 switch(action){
 case 'expand':state.expanded.has(id)?state.expanded.delete(id):state.expanded.add(id);renderLessonList();break;
 case 'select-visible':visibleLessons().forEach(l=>l.sections.filter(s=>s.cardIds.length).forEach(s=>state.selected.add(s.id)));savePrefs();renderLessonList();renderSetup();break;
 case 'clear-grade':selectedSections().forEach(s=>state.selected.delete(s.id));savePrefs();renderLessonList();renderSetup();break;
 case 'start':start();break;
 case 'lazy-start':startLazy(Number(b.dataset.count)||3,b.dataset.order||'mixed');break;
 case 'reveal':reveal();break;
 case 'mcq-skip':chooseMCQ('',true);break;
 case 'check':check();break;
 case 'next':next();break;
 case 'pause':captureAnswer();navigate('learn');break;
 case 'resume':state.active=true;state.result=null;renderSession();break;
 case 'discard':if(confirm('Bỏ phiên đang lưu? Tiến độ của các câu đã hoàn thành vẫn được giữ.')){session=null;saveSession();render();}break;
 case 'submit-exam':submitExam();break;
 case 'exam-prev':examJump(session.index-1);break;
 case 'exam-next':examJump(session.index+1);break;
 case 'source-section':openSource(id);break;
 case 'source-lesson':openSource(id,true);break;
 case 'one-card':begin([id],'drill');break;
 case 'weak-session':begin(C.select(D.cards,records,20,'weak').map(c=>c.id),'drill');break;
 case 'due-session':begin(C.select(D.cards,records,20,'due').map(c=>c.id),'drill');break;
 case 'retry-result':{const ids=state.result.results.filter(r=>!r.correct).map(r=>r.id);begin(ids,'drill',state.result.mode==='mcq'?'mcq':null);break;}
 case 'export-progress':exportProgress();break;
 case 'import-progress':$('#importProgress').click();break;
 case 'reset-progress':if(confirm('Xóa toàn bộ tiến độ, lịch ôn và lịch sử kiểm tra NMNRT trên trình duyệt này?')){records={};history=[];session=null;store('records',{});store('history',[]);saveSession();toast('Đã xóa tiến độ trên máy này.');render();}break;
 case 'print':{const details=[...app.querySelectorAll('details')],before=details.map(d=>d.open);details.forEach(d=>d.open=true);window.print();details.forEach((d,i)=>d.open=before[i]);break;}
 }
});
document.addEventListener('keydown',e=>{
 if($('#notesDialog').open)return;
 if(state.active&&session?.mode==='mcq'&&!e.target.matches('input,textarea,select')){const c=cardMap.get(session.ids[session.index]);if(!session.checked&&['1','2','3','4'].includes(e.key)){const opts=mcqOptions(c),pick=opts[Number(e.key)-1];if(pick){e.preventDefault();chooseMCQ(pick);return;}}if(session.checked&&e.key==='Enter'){e.preventDefault();next();return;}}
 if(e.key==='Enter'&&e.target.id==='answer'&&session&&session.kind==='drill'&&cardMap.get(session.ids[session.index]).type==='cloze'){e.preventDefault();session.checked?next():check();}
 if(!e.target.matches('input,textarea,select,button,a')&&state.active&&session?.kind==='drill'&&cardMap.get(session.ids[session.index]).type==='recall'){
  if(e.code==='Space'&&!session.revealed){e.preventDefault();reveal();}
  else if(session.revealed&&['1','2','3','4'].includes(e.key)){e.preventDefault();rateRecall(Number(e.key)-1);}
 }
});
window.addEventListener('pagehide',()=>{captureAnswer();saveSession();savePrefs();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateTimer();});
setInterval(updateTimer,1000);
render();updateTimer();
})();
