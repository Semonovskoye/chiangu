/* NMNRT 2.2 — explicit questions, concise explanations and stable choice IDs.
   This file does not create or modify homepage controls, branding or themes. */
(function () {
'use strict';
const D=window.NMNRT_DATA, C=window.NMNRTCore;
const $=s=>document.querySelector(s), app=$('#app');
try { C.validateBank(D); } catch (error) {
  app.textContent='Không khớp tệp ngân hàng. Hãy cập nhật core.js, data.js và app.js cùng nhau, rồi tải lại trang. '+error.message; return;
}
const PREFIX='nmnrt.v21.';
const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain=t=>String(t??'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1');
const cardMap=new Map(D.cards.map(c=>[c.id,c]));
const sectionMap=new Map(),lessonMap=new Map(),referenceMap=new Map(D.references.map(r=>[r.id,r]));
D.grades.forEach(g=>g.lessons.forEach(l=>{lessonMap.set(l.id,l);l.sections.forEach(s=>sectionMap.set(s.id,{...s,grade:g.grade,lesson:l.id}));}));
const labelMode={mcq:'Trắc nghiệm nhanh',short:'Trả lời ngắn',recall:'Thẻ nhớ · tự đánh giá',exam:'Kiểm tra trắc nghiệm',notes:'Ghi chú đã biên tập'};
const basisName={'source-rewrite':'Viết lại theo đề mục',corrected:'Đã đính chính',adapted:'Ví dụ viết mới có đối chiếu','not-quiz':'Chỉ đọc bản gốc','bank-adapted':'Biên tập từ questionbank'};
let storageOK=true;
function rawLoad(key,fallback){try{const s=localStorage.getItem(key);return s===null?fallback:JSON.parse(s);}catch(_){return fallback;}}
function load(key,fallback){return rawLoad(PREFIX+key,fallback);}
function store(key,value){try{localStorage.setItem(PREFIX+key,JSON.stringify(value));}catch(_){storageOK=false;$('#storageWarning').hidden=false;}}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>e.classList.remove('show'),4500);}
try{localStorage.setItem(PREFIX+'probe','1');localStorage.removeItem(PREFIX+'probe');}catch(_){storageOK=false;$('#storageWarning').hidden=false;}
let records={};
try{records=C.validateProgress({format:'nmnrt-progress',version:2,bankId:D.bankId,records:load('records',{})},new Set(cardMap.keys()),D.bankId);}catch(_){toast('Bản ghi 2.1 không đọc được. Dữ liệu lưu chưa bị ghi đè; xuất bản sao trước khi tiếp tục.');}
let history=load('history',[]);
if(!Array.isArray(history))history=[];
history=history.filter(h=>h&&Number.isFinite(h.at)&&Number.isInteger(h.total)&&h.total>0&&Number.isInteger(h.correct)&&h.correct>=0&&h.correct<=h.total).slice(-30);
// Copy preferences only. Old performance/session keys remain untouched.
const rawPrefs=load('prefs',rawLoad('nmnrt.prefs',{}));
const prefs=rawPrefs&&typeof rawPrefs==='object'?rawPrefs:{};
const preferredMode=prefs.mode==='cloze'?'short':prefs.mode;
const state={view:'learn',grade:[9,10,11,12].includes(prefs.grade)?prefs.grade:11,
 mode:['mcq','short','recall','exam','notes'].includes(preferredMode)?preferredMode:'mcq',count:[1,3,5,10,20,30,50].includes(prefs.count)?prefs.count:10,
 minutes:[0,5,10,15,30,45].includes(prefs.minutes)?prefs.minutes:0,order:'mixed',extra:!!prefs.extra,
 search:'',expanded:new Set(),selected:new Set(),active:false,result:null};
if(Array.isArray(prefs.selected))prefs.selected.forEach(id=>{if(sectionMap.has(id))state.selected.add(id);});
else D.grades.find(g=>g.grade===11).lessons.filter(l=>[1,2,3].includes(l.no)).forEach(l=>l.sections.filter(s=>s.cardIds.length).forEach(s=>state.selected.add(s.id)));
let session=null;
try{session=C.validateSession(load('session',null),cardMap,D.bankId);}catch(_){session=null;}
function savePrefs(){store('prefs',{grade:state.grade,mode:state.mode,count:state.count,minutes:state.minutes,extra:state.extra,selected:[...state.selected]});}
function saveSession(){store('session',session);}
function updateRecord(id,rating){records[id]=C.rate(records[id],rating);store('records',records);updateNav();}
function sourceURL(u){try{const url=new URL(u,'https://nhantri.top/');return ['http:','https:'].includes(url.protocol)?url.href:'';}catch(_){return '';}}
function rich(t){return String(t??'').split(/(\[[^\]]+\]\([^)]+\))/g).map(p=>{const m=p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(!m)return esc(p);const u=sourceURL(m[2]);return u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(m[1])} ↗</a>`:esc(m[1]);}).join('');}
function gradeData(){return D.grades.find(g=>g.grade===state.grade);}
function selectedSections(){return [...state.selected].map(id=>sectionMap.get(id)).filter(s=>s&&s.grade===state.grade&&(state.extra||!s.advanced));}
function allowed(c){return state.extra||!c.advanced;}
function scopedCards(){const ids=new Set(selectedSections().flatMap(s=>s.cardIds));return D.cards.filter(c=>ids.has(c.id)&&allowed(c));}
function modePool(pool,mode){return mode==='short'?pool.filter(c=>c.shortAnswer):pool;}
function lazyPool(){const selected=selectedSections();return selected.length?scopedCards():D.cards.filter(c=>c.grade===state.grade&&allowed(c));}
function title(id){return lessonMap.get(id)?.title||'Bài học';}
function cardRef(c){return c.sourceRefs?.find(r=>state.selected.has(r.section))||c;}
function updateNav(){ $('#weakCount').textContent=D.cards.filter(c=>records[c.id]?.rating<2).length;document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===state.view));}
function pageTop(){window.scrollTo({top:0,behavior:'instant'});}
function navigate(view){captureAnswer();state.view=view;state.active=false;state.result=null;state.search='';render();pageTop();}
function header(eye,t,sub){return `<div class="page-head"><div><span class="eyebrow">${esc(eye)}</span><h2>${esc(t)}</h2><p>${esc(sub)}</p></div><span class="snapshot">29.09.2026 · v${esc(D.release)}</span></div>`;}
function statsHTML(){const all=Object.values(records);return `<div class="stats"><div class="stat"><span>Đã thử</span><strong>${all.length}</strong><small>câu mới khác nhau</small></div><div class="stat"><span>Cần ôn lại</span><strong>${all.filter(r=>r.rating<2).length}</strong><small>sai, bỏ qua hoặc chưa chắc</small></div><div class="stat"><span>Đến lịch</span><strong>${all.filter(r=>r.dueAt<=Date.now()).length}</strong><small>gợi ý ôn, không phải hạn bắt buộc</small></div></div>`;}
function resumeHTML(){return session&&!state.active?`<div class="resume"><p><b>Phiên chưa xong · ${esc(labelMode[session.mode])}</b><br>${session.ids.length} câu · câu ${session.index+1}${session.deadline?' · thời gian vẫn chạy':''}</p><div><button class="primary" data-action="resume">Tiếp tục</button> <button class="secondary" data-action="discard">Bỏ phiên</button></div></div>`:'';}
function render(){updateNav();if(state.result)return renderResult();if(state.active&&session)return renderSession();if(state.view==='weak')return renderWeak();if(state.view==='progress')return renderProgress();if(state.view==='sources')return renderSources();renderLearn();}
function renderLearn(){
 app.innerHTML=header('CÂU HỎI ĐÃ VIẾT LẠI','Một câu rõ ràng. Một ý cần nhớ.','Chọn đáp án, đọc lí do ngắn, rồi đi tiếp. Không còn cắt ngẫu nhiên một từ trong đoạn văn.')+
 resumeHTML()+`<details class="audit-update"><summary>${D.cards.length} câu · thêm ${D.audit.questionbankConsultation.addedQuestions} câu từ questionbank</summary><p>${esc(D.audit.progressNote)} <button class="text-btn" data-view="sources">Xem sổ kiểm tra và giới hạn</button></p></details>`+statsHTML()+
 `<div class="workbench"><section class="panel"><div class="panel-head"><h3>01 / Chọn nội dung</h3><small>Sinh học</small></div><div class="grade-tabs" role="group" aria-label="Chọn lớp">${[9,10,11,12].map(g=>`<button class="grade-tab ${state.grade===g?'active':''}" data-grade="${g}" aria-pressed="${state.grade===g}">Lớp ${g}</button>`).join('')}</div><div class="search-wrap"><label class="sr-only" for="search">Tìm bài học</label><input class="search" id="search" type="search" placeholder="Tìm bài hoặc chủ đề…" value="${esc(state.search)}"></div><div class="selection-tools"><button class="text-btn" data-action="select-visible">Chọn bài đang hiện</button><button class="text-btn" data-action="clear-grade">Bỏ chọn lớp này</button><label class="tiny-check"><input type="checkbox" id="includeExtra" ${state.extra?'checked':''}>Hiện HSG / bổ sung</label></div>${state.grade===9?`<p class="grade-caveat">12 câu về ghi chú nghiên cứu sinh học. Các tiêu đề di truyền trong tệp không khớp phần ghi chú mẫu; không phải ngân hàng đầy đủ lớp 9.</p>`:''}<div class="lesson-list" id="lessonList"></div></section><section class="panel session-setup" id="setup"></section></div>`;
 renderLessonList();renderSetup();
}
function visibleLessons(){const q=C.normalize(state.search);return gradeData().lessons.filter(l=>(state.extra||l.kind!=='extra')&&(!q||C.normalize(l.title+' '+l.sections.map(s=>s.title).join(' ')+' '+l.sections.flatMap(s=>s.cardIds).map(id=>cardMap.get(id)?.prompt||'').join(' ')).includes(q)));}
function readySections(l){return l.sections.filter(s=>s.cardIds.length&&(state.extra||!s.advanced));}
function renderLessonList(){
 const target=$('#lessonList');if(!target)return;const lessons=visibleLessons();
 target.innerHTML=lessons.length?lessons.map(l=>{
  const ready=readySections(l),n=ready.filter(s=>state.selected.has(s.id)).length;
  const ids=new Set(ready.flatMap(s=>s.cardIds));
  const show=state.expanded.has(l.id);
  return `<div class="lesson"><div class="lesson-row"><label class="lesson-select" aria-label="Chọn ${esc(l.title)}"><input type="checkbox" data-lesson="${l.id}" ${ready.length&&n===ready.length?'checked':''} ${!ready.length?'disabled':''}></label><div><button class="text-btn lesson-title-btn" data-action="expand" data-id="${l.id}">${esc(l.title)}</button><div class="lesson-meta">${ids.size?`<span class="ready">${ids.size} câu</span><span>${ready.length} đề mục</span>`:'<span class="limited">Chỉ đọc nguồn; chưa có câu</span>'}${l.sections.some(s=>s.sharedCards)?'<span class="limited">Dùng chung câu của ghi chú lặp</span>':''}</div></div><button class="icon-btn" data-action="expand" data-id="${l.id}" aria-label="Mở các đề mục" aria-expanded="${show}">${show?'−':'+'}</button></div>${show?`<div class="section-choices">${l.sections.filter(s=>state.extra||!s.advanced).map(s=>`<div class="section-choice"><input id="sel-${s.id}" type="checkbox" data-section="${s.id}" ${state.selected.has(s.id)?'checked':''} ${!s.cardIds.length?'disabled':''}><label for="sel-${s.id}">${esc(s.title)} <small>${s.cardIds.length?`${s.cardIds.length} câu`:'chỉ đọc'}</small></label><a href="#" data-action="source-section" data-id="${s.id}">Ghi chú</a></div>`).join('')}<button class="text-btn" data-action="source-lesson" data-id="${l.id}">Đọc cả bài ↗</button></div>`:''}</div>`;
 }).join(''):'<p class="empty-state">Không tìm thấy bài. Thử từ khóa khác hoặc bật phần bổ sung.</p>';
 target.querySelectorAll('[data-lesson]').forEach(cb=>{const r=readySections(lessonMap.get(cb.dataset.lesson)),n=r.filter(s=>state.selected.has(s.id)).length;cb.indeterminate=n>0&&n<r.length;});
}
function renderSetup(){
 const target=$('#setup');if(!target)return;
 const pool=modePool(scopedCards(),state.mode),lp=lazyPool(),weak=lp.filter(c=>records[c.id]?.rating<2).length;
 const modes=[['mcq','●','Trắc nghiệm nhanh','4 lựa chọn · giải thích ngay'],['recall','▱','Thẻ nhớ','Tự trả lời rồi đối chiếu'],['short','＿','Trả lời ngắn','Nhập đáp án · không còn câu cắt từ'],['exam','◷','Kiểm tra','Trắc nghiệm · chấm sau khi nộp'],['notes','▤','Đọc ghi chú','Câu–đáp án–lí do đã biên tập']];
 target.innerHTML=`<span class="step">02 / BẮT ĐẦU ÔN</span><h3>Không cần làm nhiều ngay.</h3><div class="lazy-box"><div class="lazy-head"><span>QUÁ LƯỜI ĐỂ SETUP?</span><small>Ưu tiên câu cần ôn → đến lịch → chưa làm.</small></div><div class="lazy-presets" role="group" aria-label="Ôn siêu nhanh"><button class="lazy-preset" data-action="lazy-start" data-count="1"><b>1 câu thôi</b><small>literally one fucking question</small></button><button class="lazy-preset" data-action="lazy-start" data-count="3"><b>Bare minimum</b><small>3 câu rồi nghỉ cũng được</small></button><button class="lazy-preset" data-action="lazy-start" data-count="5"><b>5 câu cứu vãn</b><small>Không ép thời gian</small></button><button class="lazy-preset panic" data-action="lazy-start" data-count="10"><b>Tôi cooked rồi</b><small>10 câu · từng ý một</small></button></div><button class="lazy-mistakes" data-action="lazy-start" data-count="5" data-order="weak" ${weak?'':'disabled'}>↻ Chỉ hỏi mấy câu tôi đã fuck up (${weak})</button><p class="lazy-note">${selectedSections().length?'Chỉ dùng phần đã chọn.':`Chưa chọn bài: dùng Lớp ${state.grade}.`} ${state.extra?'Có phần bổ sung.':'Không tự lấy câu HSG.'}</p></div><div class="setup-divider"><span>hoặc tự chỉnh</span></div><div class="mode-options" role="group" aria-label="Chế độ ôn">${modes.map(([m,i,t,d])=>`<button class="mode ${state.mode===m?'active':''}" data-mode="${m}" aria-pressed="${state.mode===m}"><span class="symbol">${i}</span><span><b>${t}</b><small>${d}</small></span></button>`).join('')}</div>${state.mode!=='notes'?`<div class="fields"><div class="field"><label for="count">Số câu</label><select id="count">${[1,3,5,10,20,30,50].map(n=>`<option value="${n}" ${n===state.count?'selected':''}>${n}</option>`).join('')}</select></div><div class="field">${state.mode==='exam'?`<label for="minutes">Thời gian</label><select id="minutes">${[0,5,10,15,30,45].map(n=>`<option value="${n}" ${state.minutes===n?'selected':''}>${n?n+' phút':'Không giới hạn'}</option>`).join('')}</select>`:`<label for="order">Ưu tiên</label><select id="order"><option value="mixed" ${state.order==='mixed'?'selected':''}>Cần ôn trước</option><option value="random" ${state.order==='random'?'selected':''}>Ngẫu nhiên</option><option value="due" ${state.order==='due'?'selected':''}>Đến lịch</option></select>`}</div></div>`:''}<p class="setup-info">${selectedSections().length} mục đã chọn · <strong>${pool.length} câu</strong>${state.mode==='short'?' có đáp án đủ ngắn để gõ. So khớp thuật ngữ/biến thể được liệt kê, không chấm tự luận.':'.'}</p><button class="primary start-btn" data-action="start" ${pool.length||state.mode==='notes'&&selectedSections().length?'':'disabled'}>${state.mode==='notes'?'Mở ghi chú':'Bắt đầu'} →</button>`;
}
function begin(ids,mode){
 if(!ids.length){toast('Không có câu phù hợp trong phần này.');return;}
 if(session&&!confirm('Thay phiên chưa xong bằng phiên mới? Những câu đã hoàn thành vẫn giữ tiến độ.'))return;
 session=C.makeSession(ids,cardMap,mode,D.bankId,state.minutes);state.active=true;state.result=null;saveSession();renderSession();pageTop();
}
function start(){
 if(state.mode==='notes'){renderNotesView();return;}
 const chosen=C.select(modePool(scopedCards(),state.mode),records,state.count,state.mode==='exam'?'random':state.order);
 begin(chosen.map(c=>c.id),state.mode);
}
function startLazy(n,order='mixed'){const chosen=C.select(lazyPool(),records,n,order);if(!chosen.length){toast(order==='weak'?'Phần này chưa có câu sai/bỏ qua.':'Phần đã chọn chưa có câu; hãy chọn đề mục khác.');return;}state.mode='mcq';savePrefs();begin(chosen.map(c=>c.id),'mcq');}
function resultFor(id){return session?.results.find(r=>r.id===id);}
function displayedChoices(c,s){return s.orders[c.id].map(id=>c.choices.find(o=>o.id===id));}
function choicesHTML(c,s){
 const result=s.mode==='exam'?null:resultFor(c.id);const selected=s.answers[c.id]||'';
 return `<div class="mcq-options" role="group" aria-label="Chọn một đáp án">${displayedChoices(c,s).map((o,i)=>{
  const chosen=selected===o.id,correct=o.id===c.correctChoice;
  const cls=result?(correct?' correct':chosen?' wrong':''):(chosen?' selected':'');
  const hint=result?(chosen?'Bạn chọn':correct?'Đáp án đúng':''):(chosen?'Đã chọn':'');
  return `<button class="mcq-option${cls}" data-choice="${o.id}" aria-pressed="${chosen}" ${result?'disabled':''}><span class="mcq-letter">${String.fromCharCode(65+i)}</span><span class="choice-content">${esc(o.text)}${hint?`<small class="choice-state">${hint}${result&&correct?' ✓':''}</small>`:''}</span></button>`;
 }).join('')}</div>`;
}
function explanationHTML(c){return `<p class="mcq-answer"><span>Đáp án</span><strong>${esc(c.answer[0])}</strong></p><p class="mcq-explain"><b>Vì sao:</b> ${esc(c.explanation)}</p>`;}
function feedbackHTML(c,s){
 const r=resultFor(c.id),revealed=s.revealed.includes(c.id);
 if(!r&&!revealed)return '';
 const message=s.mode==='recall'&&!r?'Đối chiếu rồi tự đánh giá':r?.self?(r.correct?'✓ Bạn tự đánh giá: nhớ được':'↻ Bạn tự đánh giá: cần ôn'):r?.skipped?'— Chưa biết / bỏ qua':r?.correct?'✓ Đúng':'✗ Chưa đúng';
 const cls=r?.skipped?'skipped':r?.correct?'correct':r?'incorrect':'';
 return `<div class="feedback mcq-feedback"><h3 class="${cls}">${message}</h3>${r&&!r.self&&!r.skipped?`<p class="your-answer">Bạn ${s.mode==='short'?'viết':'chọn'}: <b>${esc(r.answer)}</b></p>`:''}${explanationHTML(c)}${s.mode==='short'?'<p class="input-hint">Máy chỉ so khớp các biến thể đã liệt kê; câu diễn đạt tương đương khác có thể chưa được nhận. Dùng thẻ nhớ để tự đối chiếu câu văn.</p>':''}${c.basis!=='source-rewrite'?`<details class="audit-disclosure"><summary>${esc(basisName[c.basis])} · chi tiết</summary><p>${esc(c.editorialNote)}</p></details>`:''}<div class="mcq-feedback-foot"><button class="text-btn" data-action="source-section" data-id="${cardRef(c).section}">Ghi chú & nguồn đối chiếu ↗</button>${r?`<button class="primary" data-action="next">${s.index===s.ids.length-1?'Kết quả':'Câu tiếp'} →</button>`:''}</div>${s.mode==='recall'&&!r?`<div class="rating-buttons" role="group" aria-label="Tự đánh giá"><button class="rating" data-rating="0">Chưa nhớ<small>gợi ý ôn sau 10 phút</small></button><button class="rating" data-rating="1">Chưa chắc<small>sau 1 ngày</small></button><button class="rating" data-rating="2">Nhớ được<small>sau ít nhất 3 ngày</small></button><button class="rating" data-rating="3">Rất chắc<small>sau ít nhất 7 ngày</small></button></div>`:''}</div>`;
}
function renderSession(){
 if(!session)return navigate('learn');
 const s=session,c=cardMap.get(s.ids[s.index]),exam=s.mode==='exam',result=resultFor(c.id),revealed=s.revealed.includes(c.id);
 const count=exam?Object.values(s.answers).filter(Boolean).length:s.results.length;
 app.innerHTML=`<div class="study-wrap"><div class="toolbar"><button class="secondary" data-action="pause">← Lưu & về trang ôn</button><span class="muted">${s.index+1} / ${s.ids.length}</span>${exam?'<span class="timer" id="timer"></span>':`<span class="tag">${esc(labelMode[s.mode])}</span>`}</div><div class="progress-track" role="progressbar" aria-label="Tiến độ phiên" aria-valuemin="0" aria-valuemax="${s.ids.length}" aria-valuenow="${count}"><i style="width:${Math.round(count/s.ids.length*100)}%"></i></div>${exam?`<div class="exam-grid" aria-label="Chuyển câu">${s.ids.map((id,i)=>`<button class="exam-number ${i===s.index?'active':''} ${s.answers[id]?'answered':''}" data-exam-index="${i}" aria-label="Câu ${i+1}${s.answers[id]?', đã trả lời':''}">${i+1}</button>`).join('')}</div>`:''}<section class="panel study-card mcq-card"><div class="study-meta"><span>Lớp ${c.grade} · ${esc(c.grade===9?sectionMap.get(c.section).title:title(cardRef(c).lesson))}</span><span>${c.advanced?'Vận dụng / bổ sung':'1 câu · 1 ý'}</span></div><div class="prompt-label">${exam?'KIỂM TRA · CHƯA HIỆN ĐÁP ÁN':s.mode==='recall'?'TỰ NHỚ TRƯỚC KHI XEM':s.mode==='short'?'NHẬP ĐÁP ÁN NGẮN':'CHỌN MỘT ĐÁP ÁN'}</div><h2 class="question mcq-question" id="currentQuestion" tabindex="-1">${esc(c.prompt)}</h2>${['mcq','exam'].includes(s.mode)?choicesHTML(c,s):`<label class="sr-only" for="answer">Câu trả lời</label>${s.mode==='recall'?`<textarea class="answer-input" id="answer" maxlength="2000" placeholder="Tự trả lời thành tiếng, hoặc ghi nháp ở đây…" ${revealed?'readonly':''}>${esc(s.answers[c.id]||'')}</textarea>`:`<input class="answer-input" id="answer" maxlength="200" autocomplete="off" spellcheck="false" placeholder="Nhập thuật ngữ hoặc kết quả…" value="${esc(s.answers[c.id]||'')}" ${result?'readonly':''}>`}<p class="input-hint">${s.mode==='recall'?'Không tự chấm câu văn. Bạn tự đánh giá sau khi đối chiếu.':'Chấp nhận các biến thể ghi trong đáp án; không phân biệt dấu/hoa thường, trừ khi câu quy định.'}</p>`}${!exam&&!result&&!revealed?`<div class="mcq-skip-row"><button class="text-btn" data-action="${s.mode==='recall'?'reveal':'skip'}">${s.mode==='recall'?'Xem đáp án để đối chiếu':'Chưa biết — xem đáp án'}</button>${s.mode==='short'?'<button class="primary" data-action="check-short">Kiểm tra →</button>':s.mode==='mcq'?'<span class="input-hint">Phím 1–4 để chọn.</span>':''}</div>`:''}<div id="feedback" aria-live="polite">${exam?'':feedbackHTML(c,s)}</div>${exam?`<div class="card-actions"><button class="secondary" data-action="exam-prev" ${s.index===0?'disabled':''}>← Trước</button><button class="text-btn" data-action="clear-answer">Bỏ lựa chọn</button><button class="secondary" data-action="exam-next" ${s.index===s.ids.length-1?'disabled':''}>Tiếp →</button></div>`:''}</section>${exam?`<div class="card-actions"><p class="input-hint">Đã trả lời ${count}/${s.ids.length}. Bỏ trống được ghi riêng, không được điểm.</p><button class="primary" data-action="submit-exam">Nộp bài</button></div><p class="footer-fine">Đồng hồ vẫn chạy khi đổi tab hoặc tải lại. Đây là bài tự luyện, không phải hệ thống thi bảo mật.</p>`:'<p class="footer-fine">Đáp án đúng được tô xanh khi đối chiếu. “Bạn chọn” cho biết lựa chọn thực tế; bỏ qua không bị gọi là trả lời sai.</p>'}</div>`;
 updateTimer();
}
function captureAnswer(){if(!session||!state.active)return;const e=$('#answer');if(e){session.answers[session.ids[session.index]]=e.value;saveSession();}}
function complete(r,rating){
 if(!session||resultFor(r.id))return;
 session.results.push({...r,rating});updateRecord(r.id,rating);saveSession();renderSession();
 $('#feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function chooseChoice(id){
 if(!session||!['mcq','exam'].includes(session.mode))return;
 if(expireExam())return;
 const c=cardMap.get(session.ids[session.index]);if(!c.choices.some(o=>o.id===id))return;
 if(session.mode==='mcq'&&resultFor(c.id))return;
 session.answers[c.id]=id;
 if(session.mode==='exam'){saveSession();renderSession();return;}
 const r=C.checkChoice(c,id);complete(r,r.correct?2:0);
}
function skip(){
 if(!session||session.mode==='exam'||resultFor(session.ids[session.index]))return;
 const c=cardMap.get(session.ids[session.index]);session.answers[c.id]='';
 const r=session.mode==='mcq'?C.checkChoice(c,null):C.checkShort(c,'',true);complete(r,0);
}
function checkShort(){if(!session||session.mode!=='short')return;captureAnswer();const c=cardMap.get(session.ids[session.index]);if(resultFor(c.id))return;if(!session.answers[c.id]?.trim()){toast('Nhập đáp án hoặc chọn “Chưa biết”.');return;}const r=C.checkShort(c,session.answers[c.id]);complete(r,r.correct?2:0);}
function reveal(){if(session?.mode!=='recall')return;captureAnswer();const id=session.ids[session.index];if(!session.revealed.includes(id))session.revealed.push(id);saveSession();renderSession();}
function rateRecall(rating){if(session?.mode!=='recall')return;const id=session.ids[session.index];if(!session.revealed.includes(id)||resultFor(id))return;complete({id,answer:session.answers[id]||'',selectedChoice:null,correct:rating>=2,skipped:false,status:rating>=2?'self-good':'self-review',self:true},rating);}
function next(){
 if(!session||session.mode==='exam'||!resultFor(session.ids[session.index]))return;
 if(session.index===session.ids.length-1){finish(session.results);return;}
 session.index++;saveSession();renderSession();$('#currentQuestion')?.focus({preventScroll:true});pageTop();
}
function finish(results){
 if(!session)return;
 const s=session;
 state.result={mode:s.mode,results,total:results.length,correct:results.filter(r=>r.correct).length,wrong:results.filter(r=>r.status==='wrong').length,
  skipped:results.filter(r=>r.skipped).length,minutes:Math.round((Date.now()-s.startedAt)/6000)/10};
 if(s.mode==='exam'){
  results.forEach(r=>{records[r.id]=C.rate(records[r.id],r.correct?2:0);});store('records',records);
  history.push({at:Date.now(),mode:s.mode,total:results.length,correct:state.result.correct,skipped:state.result.skipped,minutes:state.result.minutes});history=history.slice(-30);store('history',history);
 }
 session=null;saveSession();state.active=false;render();pageTop();
}
function submitExam(automatic=false){if(session?.mode!=='exam')return;if(!automatic&&!confirm('Nộp bài và xem đáp án?'))return;const r=C.gradeExam(session.ids,session.answers,cardMap);finish(r.results);if(automatic)toast('Hết giờ. Bài đã nộp; câu bỏ trống được ghi riêng.');}
function expireExam(){if(session?.mode==='exam'&&session.deadline&&Date.now()>=session.deadline){submitExam(true);return true;}return false;}
function updateTimer(){
 if(expireExam())return;const el=$('#timer');if(!el||!session)return;
 if(!session.deadline){el.textContent='Không giới hạn';return;}
 const n=Math.max(0,Math.ceil((session.deadline-Date.now())/1000));el.textContent=Math.floor(n/60)+':'+String(n%60).padStart(2,'0');
}
function examJump(i){if(session?.mode!=='exam'||expireExam()||i<0||i>=session.ids.length)return;session.index=i;saveSession();renderSession();$('#currentQuestion')?.focus({preventScroll:true});}
function renderResult(){
 const r=state.result,isSelf=r.mode==='recall';
 app.innerHTML=`<div class="study-wrap">${header('XONG PHIÊN NÀY',isSelf?'Đã tự đối chiếu.':'Xem lại đúng chỗ cần ôn.',isSelf?'Đây là tự đánh giá, không phải điểm chấm tự động.':'Bạn có thể dừng ở đây, hoặc thử lại câu sai/bỏ qua.')}<section class="panel result-hero"><strong class="result-score">${r.correct} / ${r.total}</strong><h3>${isSelf?'thẻ bạn tự đánh giá nhớ được':'câu đúng'}</h3><p>${isSelf?`${r.total-r.correct} thẻ còn chưa chắc.`:`${r.wrong} câu sai · ${r.skipped} câu bỏ qua.`}</p><div class="actions-row">${r.correct<r.total?'<button class="primary" data-action="retry-result">Ôn lại phần chưa nhớ ↻</button>':''}<button class="secondary" data-view="learn">Về chọn bài</button><button class="secondary" data-action="export-progress">Xuất tiến độ</button></div></section><h3 class="section-heading">Đối chiếu từng câu</h3><div class="review-list">${r.results.map((x,i)=>{
 const c=cardMap.get(x.id),word=x.self?(x.correct?'Tự đánh giá: nhớ':'Tự đánh giá: cần ôn'):x.skipped?'Bỏ qua':x.correct?'Đúng':'Sai';
 return `<details class="panel review-item mcq-review"><summary><span class="tag ${x.skipped?'warn':x.correct?'good':'bad'}">${i+1} · ${word}</span><span>${esc(c.prompt)}</span></summary><p class="your-answer">${x.self?'Bạn ghi nháp':x.skipped?'Bạn chưa chọn đáp án':'Bạn trả lời'}${x.skipped?'':': '+esc(x.answer||'(không ghi)')}</p>${explanationHTML(c)}<button class="text-btn" data-action="source-section" data-id="${cardRef(c).section}">Ghi chú & đối chiếu ↗</button></details>`;
 }).join('')}</div></div>`;
}
function renderWeak(){
 const weak=D.cards.filter(c=>records[c.id]?.rating<2),due=D.cards.filter(c=>records[c.id]&&records[c.id].dueAt<=Date.now());
 app.innerHTML=header('ÔN LẠI','Chỉ ôn phần còn vướng.','Câu sai, bỏ qua và thẻ tự đánh giá chưa chắc đều được ưu tiên.')+resumeHTML()+`<div class="actions-row"><button class="primary" data-action="weak-session" ${weak.length?'':'disabled'}>Ôn tối đa 20 câu (${weak.length})</button><button class="secondary" data-action="due-session" ${due.length?'':'disabled'}>Đến lịch (${due.length})</button></div>${weak.length?`<div class="panel">${weak.slice(0,100).map(c=>`<div class="weak-card"><div><h3>${esc(c.prompt)}</h3><p>Lớp ${c.grade} · ${esc(sectionMap.get(c.section).title)}</p></div><button class="secondary" data-action="one-card" data-id="${c.id}">Ôn câu này</button></div>`).join('')}</div>${weak.length>100?'<p>Đang hiện 100 câu; phiên ôn vẫn chọn từ toàn bộ danh sách.</p>':''}`:'<div class="panel empty-state"><h3>Chưa có câu cần ôn lại.</h3><button class="primary" data-view="learn">Bắt đầu ôn →</button></div>'}`;
}
function renderProgress(){
 const groups=new Map();D.cards.forEach(c=>{const key=c.grade===9?c.section:c.lesson;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(c);});
 const practiced=[...groups.values()].filter(cs=>cs.some(c=>records[c.id]));
 app.innerHTML=header('TIẾN ĐỘ','Theo dõi điều đã thử.','Đúng trắc nghiệm và tự đánh giá không phải chứng nhận nắm vững toàn bộ bài học.')+statsHTML()+`<p class="prose">${Object.values(records).reduce((a,r)=>a+r.attempts,0)} lượt thực hành trong ${D.cards.length} câu. Tiến độ 2.1 được giữ trong 2.2; dữ liệu trước 2.1 vẫn được giữ riêng.</p><div class="actions-row"><button class="primary" data-action="export-progress">Xuất tiến độ</button><button class="secondary" data-action="import-progress">Nhập tiến độ 2.1 / 2.2</button><button class="secondary" data-action="export-legacy">Sao lưu dữ liệu cũ</button></div><h3 class="section-heading">Theo bài / đề mục đã làm</h3><div class="panel">${practiced.length?practiced.map(cs=>{const seen=cs.filter(c=>records[c.id]),ok=seen.filter(c=>records[c.id].rating>=2);return `<div class="progress-row"><div><h3>Lớp ${cs[0].grade} · ${esc(cs[0].grade===9?sectionMap.get(cs[0].section).title:title(cs[0].lesson))}</h3><small>${seen.length}/${cs.length} câu đã thử · ${ok.length} ở mức đúng/nhớ gần nhất</small></div><div class="progress-track"><i style="width:${ok.length/cs.length*100}%"></i></div></div>`;}).join(''):'<p class="empty-state">Chưa có câu được hoàn thành.</p>'}</div><h3 class="section-heading">Kiểm tra gần đây</h3>${history.length?`<div class="panel table-scroll"><table class="coverage"><thead><tr><th>Ngày</th><th>Đúng</th><th>Phút</th></tr></thead><tbody>${[...history].reverse().map(h=>`<tr><td>${new Date(h.at).toLocaleDateString('vi-VN')}</td><td>${h.correct}/${h.total}</td><td>${h.minutes||0}</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Chưa nộp bài kiểm tra.</p>'}`;
}
function referencesHTML(ids){return `<ul class="reference-list">${[...new Set(ids)].map(id=>{const r=referenceMap.get(id);return r?`<li><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)} ↗</a></li>`:'';}).join('')}</ul>`;}

// Original bank text is displayed as inert text, never executed or injected as HTML.
function bankText(value){
 const stripped=String(value??'').replace(/<br\s*\/?>/gi,'\n').replace(/<sup>(.*?)<\/sup>/gi,'^$1').replace(/<sub>(.*?)<\/sub>/gi,'_$1').replace(/<[^>]*>/g,'');
 const t=document.createElement('textarea');t.innerHTML=stripped;return t.value;
}
function bankOriginHTML(c){
 const b=c.sourceBank;if(!b)return '';
 return `<details class="bank-origin"><summary>Câu gốc và phần đã biên tập</summary><p class="notice warning">Đây là nguyên bản để đối chiếu, không phải đáp án của câu đã biên tập ở trên.</p><p><b>Nguồn:</b> <a href="${esc(b.pageURL)}" target="_blank" rel="noopener noreferrer">${esc(b.page)}</a> · <code>${esc(b.file)}</code></p><p><code>${esc(b.group)}.${esc(b.level)}[${b.index}]</code> · ${esc(b.levelLabel)} (nhãn nguồn)</p><p class="source-quote">${esc(bankText(b.question))}</p><ol class="source-options">${b.options.map(o=>`<li>${esc(bankText(o))}</li>`).join('')}</ol><p><b>Khóa gốc:</b> ${esc(bankText(b.answerText))}</p><p><b>Biên tập:</b> ${esc(c.editorialNote)}</p><p><b>Lí do ngắn và phần đối chiếu:</b> do NMNRT biên soạn; không phải lời giải nguyên văn của ngân hàng.</p>${referencesHTML(c.referenceIds)}</details>`;
}
function questionbankSummaryHTML(){
 const b=D.audit.questionbankConsultation;if(!b)return '';
 return `<section class="panel panel-pad"><h3>Bổ sung chọn lọc từ ba questionbank</h3><p>Đã kiểm kê 2.893 bản ghi có hiệu lực và biên tập ${b.addedQuestions} câu bổ sung. Các mục “...” và câu lặp vẫn nằm trong số kiểm kê; không có nghĩa tất cả đều dùng được.</p><div class="table-scroll"><table class="coverage"><thead><tr><th>Lớp</th><th>Bản ghi nguồn</th><th>Câu được bổ sung</th></tr></thead><tbody>${b.counts.map(g=>`<tr><td>${g.grade}</td><td>${g.effectiveRecords}</td><td>${g.selectedAdditions}</td></tr>`).join('')}</tbody></table></div><p>Các câu mới nằm trong đề mục “Questionbank · Câu bổ sung có đối chiếu” của từng bài. Mỗi câu giữ tên tệp, nhóm, mức độ, chỉ số, đề và khóa gốc; sửa khóa hoặc thêm giả định đều được ghi rõ.</p><p><strong>Giới hạn:</strong> kiểm kê tự động không phải kiểm chứng mọi đáp án. Chỉ 96 câu được chọn và các ví dụ lỗi được rà soát nội dung trong lần bổ sung này.</p><div class="actions-row"><a class="secondary" href="audit/questionbank-consultation.json" download>Sổ nguồn questionbank (.json)</a><a class="secondary" href="audit/QUESTIONBANK_REVIEW.md" target="_blank">Báo cáo chọn lọc ↗</a></div></section>`;
}

function renderSources(){
 app.innerHTML=`<div class="source-page">${header('SỔ KIỂM TRA','Nguồn và phần đã sửa.','Không coi mọi dòng trong tệp nguồn là đúng; mọi thay đổi đều có thể truy lại.')}<div class="panel table-scroll"><table class="coverage"><thead><tr><th>Lớp</th><th>Thẻ cũ đã xét</th><th>Tổng câu</th><th>Thêm từ questionbank</th><th>Đề mục có câu</th></tr></thead><tbody>${D.audit.counts.map(g=>`<tr><td>${g.grade}</td><td>${g.oldCards}</td><td>${g.questions}</td><td>${g.bankAdditions||0}</td><td>${g.primarySections}</td></tr>`).join('')}</tbody></table></div><section class="panel panel-pad"><h3>${D.cards.length} câu có chủ đích, không sinh câu từ khoảng trống.</h3><p>${esc(D.audit.mappingNote)}</p><p>${esc(D.audit.coverageNote)}</p><p>${D.audit.basisCounts['source-rewrite']} câu viết lại theo chủ đề nguồn, ${D.audit.basisCounts.corrected} câu trong đề mục đã đính chính, ${D.audit.basisCounts.adapted} câu trong đề mục có ví dụ viết mới/bổ sung bối cảnh. Nhãn áp dụng ở mức đề mục; không có nghĩa từng câu trong nhóm đều là một lỗi khác nhau.</p><p>${esc(D.audit.method)}</p><div class="actions-row"><a class="primary" href="audit/index.html" target="_blank" rel="noopener">Sổ kiểm tra toàn bộ ↗</a><a class="secondary" href="audit/old-to-new.json" download>Sổ 1.036 ID cũ (.json)</a><a class="secondary" href="audit/questions.json" download>Toàn bộ ${D.cards.length} câu (.json)</a></div></section>${questionbankSummaryHTML()}<section class="panel panel-pad"><h3>Những giới hạn cần biết</h3>${D.limitations.map(t=>`<p>${esc(t)}</p>`).join('')}</section><section class="panel panel-pad"><h3>Chấm bài và lưu tiến độ</h3><p>Trắc nghiệm chấm theo ID phương án ổn định, không theo chữ A–D đang hiển thị. Bỏ qua được ghi riêng. Bài kiểm tra không hiện đáp án trước khi nộp. Trả lời ngắn chỉ khớp các cách viết có trong danh sách; thẻ nhớ do bạn tự đánh giá.</p><p>${esc(D.audit.progressNote)}</p><div class="actions-row"><button class="primary" data-action="export-progress">Xuất tiến độ</button><button class="secondary" data-action="import-progress">Nhập tiến độ 2.1 / 2.2</button><button class="secondary" data-action="export-legacy">Sao lưu dữ liệu cũ</button><button class="danger" data-action="reset-progress">Xóa tiến độ ngân hàng đã biên tập</button></div></section><details class="panel panel-pad"><summary>Tài liệu đối chiếu theo chủ đề</summary>${referencesHTML(D.references.map(r=>r.id))}</details></div>`;
}
function sectionHTML(s){
 const cs=[...new Set(s.cardIds)].map(id=>cardMap.get(id)).filter(Boolean);
 const note=s.audit||{note:'Chỉ giữ nguồn, chưa có câu.'};
 return `<section class="section-block" id="note-${s.id}"><h3>${esc(s.title)}</h3><small class="source-note-id">${esc(s.id)}</small>${cs.length?`<p class="audit-note">${esc(note.note)}</p><div class="reviewed-notes">${cs.map(c=>`<article class="reviewed-fact"><h4>${esc(c.prompt)}</h4><p><strong>${esc(c.answer[0])}</strong></p><p>${esc(c.explanation)}</p><small>${esc(basisName[c.basis])} · ${esc(c.id)}</small>${bankOriginHTML(c)}</article>`).join('')}</div><details class="reference-disclosure"><summary>Nguồn đối chiếu</summary>${referencesHTML(cs.flatMap(c=>c.referenceIds))}</details>`:`<p class="notice">${esc(note.note)}</p>`}${s.id.endsWith("-qb22")?'<p class="muted">Mở “Câu gốc và phần đã biên tập” ở từng câu để xem bản ghi questionbank.</p>':''}<details class="original-source" ${s.id.endsWith("-qb22")?"hidden":""}><summary>Bản gốc chưa sửa — chỉ để đối chiếu</summary><p class="notice warning">Phần dưới giữ nguyên tệp nguồn. Có thể có lỗi, ghi chú thiếu hoặc nội dung không khớp tiêu đề. Không dùng phần này làm đáp án của câu mới.</p>${s.summary.map(t=>`<p class="teacher-task">${rich(t)}</p>`).join('')}${s.task?`<h4>Nhiệm vụ gốc</h4><p class="teacher-task">${rich(s.task)}</p>`:''}${s.prompts.map(t=>`<p class="teacher-task">${rich(t)}</p>`).join('')}${s.media?.src&&sourceURL(s.media.src)?`<a href="${esc(sourceURL(s.media.src))}" target="_blank" rel="noopener noreferrer">Mở học liệu gốc ↗</a>`:''}</details></section>`;
}
function openSource(id,whole=false){
 const l=whole?lessonMap.get(id):lessonMap.get(sectionMap.get(id)?.lesson);if(!l)return;
 const ss=whole?l.sections.map(s=>sectionMap.get(s.id)):[sectionMap.get(id)];
 $('#dialogTitle').textContent=title(l.id);$('#notesBody').innerHTML=ss.map(sectionHTML).join('');$('#notesDialog').showModal();
}
function renderNotesView(){
 const ss=selectedSections();app.innerHTML=header('GHI CHÚ ĐÃ BIÊN TẬP','Câu hỏi → đáp án → lí do.','Bản gốc chưa chỉnh sửa được tách trong mục mở rộng, không lẫn với đáp án mới.')+`<div class="toolbar"><button class="secondary" data-view="learn">← Chọn bài</button><button class="secondary" data-action="print">In ghi chú đã biên tập</button></div><div class="panel panel-pad">${ss.map(sectionHTML).join('')}</div>`;
}
function download(name,text,type='application/json'){const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function exportProgress(){download('nmnrt-v21-progress.json',JSON.stringify({format:'nmnrt-progress',version:2,bankId:D.bankId,exportedAt:new Date().toISOString(),records},null,2));}
function exportLegacy(){
 const items={};try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('nmnrt.')&&!k.startsWith(PREFIX))items[k]=localStorage.getItem(k);}}catch(_){toast('Không đọc được vùng lưu cũ.');return;}
 download('nmnrt-legacy-backup.json',JSON.stringify({format:'nmnrt-legacy-backup',note:'Dữ liệu nguyên trạng; không nhập như tiến độ 2.1.',items},null,2));
}
$('#closeNotes').addEventListener('click',()=>$('#notesDialog').close());
$('#notesDialog').addEventListener('click',e=>{if(e.target!==e.currentTarget)return;const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();});
$('#importProgress').addEventListener('change',async e=>{
 const f=e.target.files[0];e.target.value='';if(!f)return;
 try{if(f.size>5*1024*1024)throw new Error('Tệp vượt 5 MB.');const incoming=C.validateProgress(JSON.parse(await f.text()),new Set(cardMap.keys()),D.bankId);if(!confirm(`Hợp nhất ${Object.keys(incoming).length} bản ghi? Bản mới hơn được giữ.`))return;for(const [id,r]of Object.entries(incoming))if(!records[id]||r.lastAt>records[id].lastAt)records[id]=r;store('records',records);render();toast('Đã nhập tiến độ.');}catch(err){toast('Không nhập: '+err.message);}
});
document.addEventListener('input',e=>{if(e.target.id==='search'){state.search=e.target.value;renderLessonList();}if(e.target.id==='answer')captureAnswer();});
document.addEventListener('change',e=>{
 const t=e.target;
 if(t.matches('[data-lesson]'))readySections(lessonMap.get(t.dataset.lesson)).forEach(s=>t.checked?state.selected.add(s.id):state.selected.delete(s.id));
 else if(t.matches('[data-section]'))t.checked?state.selected.add(t.dataset.section):state.selected.delete(t.dataset.section);
 else if(t.id==='includeExtra')state.extra=t.checked;
 else if(t.id==='count')state.count=Number(t.value);
 else if(t.id==='minutes')state.minutes=Number(t.value);
 else if(t.id==='order')state.order=t.value;
 else return;
 savePrefs();renderLessonList();renderSetup();
});
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a[data-action]');if(!b||b.disabled)return;
 if(b.dataset.view){e.preventDefault();navigate(b.dataset.view);return;}
 if(b.dataset.grade){state.grade=Number(b.dataset.grade);state.search='';savePrefs();renderLearn();return;}
 if(b.dataset.mode){state.mode=b.dataset.mode;savePrefs();renderSetup();return;}
 if(b.dataset.choice){chooseChoice(b.dataset.choice);return;}
 if(b.dataset.rating!==undefined){rateRecall(Number(b.dataset.rating));return;}
 if(b.dataset.examIndex!==undefined){examJump(Number(b.dataset.examIndex));return;}
 const action=b.dataset.action,id=b.dataset.id;if(!action)return;e.preventDefault();
 switch(action){
 case 'expand':state.expanded.has(id)?state.expanded.delete(id):state.expanded.add(id);renderLessonList();break;
 case 'select-visible':visibleLessons().forEach(l=>readySections(l).forEach(s=>state.selected.add(s.id)));savePrefs();renderLessonList();renderSetup();break;
 case 'clear-grade':[...state.selected].forEach(id=>{if(sectionMap.get(id)?.grade===state.grade)state.selected.delete(id);});savePrefs();renderLessonList();renderSetup();break;
 case 'start':start();break;
 case 'lazy-start':startLazy(Number(b.dataset.count)||3,b.dataset.order||'mixed');break;
 case 'pause':navigate('learn');break;
 case 'resume':state.active=true;state.result=null;renderSession();pageTop();break;
 case 'discard':if(confirm('Bỏ phiên này? Tiến độ của câu đã hoàn thành vẫn được giữ.')){session=null;saveSession();render();}break;
 case 'skip':skip();break;
 case 'check-short':checkShort();break;
 case 'reveal':reveal();break;
 case 'next':next();break;
 case 'submit-exam':submitExam();break;
 case 'exam-prev':if(session)examJump(session.index-1);break;
 case 'exam-next':if(session)examJump(session.index+1);break;
 case 'clear-answer':if(session?.mode==='exam'&&!expireExam()){delete session.answers[session.ids[session.index]];saveSession();renderSession();}break;
 case 'source-section':openSource(id);break;
 case 'source-lesson':openSource(id,true);break;
 case 'one-card':begin([id],'mcq');break;
 case 'weak-session':begin(C.select(D.cards,records,20,'weak').map(c=>c.id),'mcq');break;
 case 'due-session':begin(C.select(D.cards,records,20,'due').map(c=>c.id),'mcq');break;
 case 'retry-result':if(state.result)begin(state.result.results.filter(r=>!r.correct).map(r=>r.id),'mcq');break;
 case 'export-progress':exportProgress();break;
 case 'export-legacy':exportLegacy();break;
 case 'import-progress':$('#importProgress').click();break;
 case 'reset-progress':if(confirm('Chỉ xóa tiến độ/phiên của ngân hàng 2.1 / 2.2? Dữ liệu ngân hàng cũ vẫn giữ nguyên.')){records={};history=[];session=null;store('records',{});store('history',[]);saveSession();state.result=null;render();}break;
 case 'print':window.print();break;
 }
});
document.addEventListener('keydown',e=>{
 if(e.repeat||$('#notesDialog').open||!state.active||!session)return;
 if(e.target.id==='answer'&&e.key==='Enter'&&session.mode==='short'){e.preventDefault();resultFor(session.ids[session.index])?next():checkShort();return;}
 if(e.target.matches('input,textarea,select')||e.ctrlKey||e.metaKey||e.altKey)return;
 if(['mcq','exam'].includes(session.mode)&&['1','2','3','4'].includes(e.key)){
  e.preventDefault();const c=cardMap.get(session.ids[session.index]);chooseChoice(displayedChoices(c,session)[Number(e.key)-1].id);return;
 }
 if(e.key==='Enter'&&session.mode!=='exam'&&resultFor(session.ids[session.index])){e.preventDefault();next();return;}
 if(session.mode==='recall'&&session.revealed.includes(session.ids[session.index])&&['1','2','3','4'].includes(e.key)){e.preventDefault();rateRecall(Number(e.key)-1);}
});
window.addEventListener('pagehide',()=>{captureAnswer();saveSession();savePrefs();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateTimer();});
setInterval(updateTimer,1000);
render();updateTimer();
})();
