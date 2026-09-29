/* NMNRT 2.3 — teaching before testing. All UI is scoped to #learningView.
   Stores reading bookmarks only. Quiz scoring stays in app.js/core.js. */
(function (root) {
  'use strict';
  function create({bank, data, container, onPractice, onSource, toast, isActive, resumeHTML}) {
    const C=root.NMNRTLearningCore, catalog=C.buildCatalog(data,bank);
    const KEY='nmnrt.reading.v1', ids=new Set(catalog.points.keys());
    const refs=new Map(bank.references.map(r=>[r.id,r]));
    const bookMap=new Map(catalog.books.map(b=>[b.id,b]));
    const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const shortTitle=t=>t.replace(/^Bài\s*\d+[.\s-]*/i,'').trim();
    let saved={format:'nmnrt-reading',version:1,bankId:bank.bankId,records:{},grade:11,extra:false,lastCard:null};
    let storageFailed=false, parseFailed=false;
    try {const raw=localStorage.getItem(KEY);if(raw)saved=C.validateReading(JSON.parse(raw),ids,bank.bankId);}
    catch (_) {parseFailed=true;}
    const state={...saved,view:'library',query:'',filter:'all',book:null,card:null,single:false,layout:'one'};
    function persist() {
      const value={format:'nmnrt-reading',version:1,bankId:bank.bankId,
        records:state.records,grade:state.grade,extra:state.extra,lastCard:state.lastCard};
      try {localStorage.setItem(KEY,JSON.stringify(value));parseFailed=false;}
      catch (_) {storageFailed=true;toast('Không lưu được mốc đọc trên máy này. Bạn vẫn học được; hãy xuất mốc đọc.');}
      return value;
    }
    function allowed(book) {return C.allowedPoints(book,state.extra);}
    function currentBook() {return bookMap.get(state.book);}
    function readerPoints() {
      const book=currentBook();if(!book)return [];
      if(state.single)return book.points.filter(p=>p.id===state.card);
      return allowed(book);
    }
    function setCard(id,single=false) {
      const p=catalog.points.get(id);if(!p)return false;
      state.grade=p.card.grade;state.extra=state.extra||p.card.advanced;
      state.book=catalog.bookOf.get(id);state.card=id;state.lastCard=id;
      state.view='reader';state.single=single;state.layout='one';persist();return true;
    }
    function openBook(id,first=null) {
      const b=bookMap.get(id);if(!b)return;
      const pp=allowed(b);
      const p=pp.find(p=>p.id===first)||pp.find(p=>!C.isRead(state.records,p.id))||pp[0];
      if(p){setCard(p.id);render();focusHeading();}
    }
    function focusHeading() {
      container.querySelector('[data-study-heading]')?.focus({preventScroll:true});
      window.scrollTo({top:0,behavior:'instant'});
    }
    function sourceLink(ref) {
      try {const u=new URL(ref.url);return /^https?:$/.test(u.protocol)?
        `<a href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${esc(ref.title||ref.label||ref.id)} ↗</a>`:'';}
      catch(_){return '';}
    }
    function storageNotice() {
      return storageFailed||parseFailed?`<p class="learn-notice" role="status">${parseFailed?
        'Mốc đọc đã lưu không đọc được; dữ liệu cũ chưa bị ghi đè. Thao tác đánh dấu mới sẽ bắt đầu bản ghi đọc mới.':
        'Không lưu được trong trình duyệt. Xuất mốc đọc để giữ bản sao.'}</p>`:'';
    }
    function gradeHTML() {
      return `<div class="grade-tabs learn-grades" role="group" aria-label="Lớp muốn học">${[9,10,11,12].map(g=>
        `<button class="grade-tab ${state.grade===g?'active':''}" data-study-grade="${g}" aria-pressed="${state.grade===g}">Lớp ${g}</button>`).join('')}</div>`;
    }
    function coverageHTML() {
      const gg=catalog.books.filter(b=>b.grade===state.grade), pp=gg.flatMap(b=>b.points);
      const advanced=pp.filter(p=>p.card.advanced).length, gapBooks=gg.filter(b=>!b.points.length);
      const gapSections=gg.flatMap(b=>b.sections).filter(s=>!s.points.length);
      return `<details class="learn-coverage"><summary>Phạm vi học liệu · ${pp.length} ý ở Lớp ${state.grade}</summary>
        <p>Học nhanh chuyển toàn bộ ${bank.cards.length} câu đã biên tập của ngân hàng 2.4 thành các ý học trực tiếp. Đây là cách diễn đạt lại nội dung đã có, không phải một giáo trình đầy đủ cho mọi mục trong chương trình.</p>
        <p>Lớp ${state.grade}: ${pp.length-advanced} ý thông thường${advanced?` và ${advanced} ý HSG / bổ sung`:''}. ${gapBooks.length?`${gapBooks.length} tiêu đề bài chưa có ý học đã biên tập.`:''} ${gapSections.length?`${gapSections.length} mục nguồn không có ý học; một số chỉ là mục khởi động hoặc hoạt động.`:''}</p>
        ${state.grade===9?'<p><b>Lớp 9:</b> tệp gốc có 35 tiêu đề bài nhưng lặp ghi chú về phương pháp nghiên cứu. 12 ý thực có được gom thành một nhóm, không dùng tiêu đề di truyền để giả vờ đã có nội dung di truyền.</p>':''}
        <p>Thuật ngữ, điều kiện bài tính và nguồn đối chiếu đi cùng từng ý. Phần gốc chưa sửa luôn được ghi nhãn riêng; nội dung thực hành không thay thế hướng dẫn an toàn của giáo viên.</p>
      </details>`;
    }
    function libraryHTML() {
      const pp=[...catalog.points.values()].filter(p=>p.card.grade===state.grade&&(state.extra||!p.card.advanced));
      const read=pp.filter(p=>C.isRead(state.records,p.id)).length, last=catalog.points.get(state.lastCard);
      return `<div class="learn-head"><div><span class="eyebrow">HỌC TRƯỚC · ÔN SAU</span>
        <h2 data-study-heading tabindex="-1">Hiểu từng ý. Không ngợp chữ.</h2>
        <p>Đọc điều cần nhớ ngay. Không phải đoán đáp án mới được học.</p></div><span class="tag">Học nhanh · 2.4</span></div>
        ${resumeHTML?resumeHTML():''}${storageNotice()}
        <section class="learn-start panel"><div class="learn-start-copy"><h3>Hôm nay bắt đầu nhỏ thôi.</h3>
        <p>${last?'Mốc gần nhất: '+esc(last.title)+'.':'Một ý ngắn cũng là một chỗ để bắt đầu.'} Không hẹn giờ, không điểm đọc.</p></div>
        <div class="learn-start-actions">${last?`<button class="primary" data-study-action="resume">Tiếp tục học →</button>`:''}
        <button class="${last?'secondary':'primary'}" data-study-action="one">1 ý thôi →</button></div></section>
        <section class="panel learn-library"><div class="learn-library-top">${gradeHTML()}
          <p class="learn-count"><strong>${read} / ${pp.length}</strong> ý đã đánh dấu đọc trong phạm vi đang chọn</p></div>
          <div class="learn-filter-row"><label class="learn-search-label" for="learnSearch">Tìm điều muốn hiểu
          <input id="learnSearch" type="search" placeholder="Ví dụ: khí khổng, ATP, Aa × Aa…" value="${esc(state.query)}" autocomplete="off"></label>
          <label for="learnFilter">Hiển thị<select id="learnFilter"><option value="all" ${state.filter==='all'?'selected':''}>Tất cả</option><option value="unread" ${state.filter==='unread'?'selected':''}>Chưa đọc</option><option value="read" ${state.filter==='read'?'selected':''}>Đã đọc</option></select></label></div>
          <label class="learn-extra"><input id="learnExtra" type="checkbox" ${state.extra?'checked':''}>Bao gồm HSG / bổ sung</label>
          ${state.grade===9?'<p class="learn-notice">Lớp 9 hiện có ghi chú chung về nghiên cứu và học tập Sinh học; chưa có nội dung riêng cho toàn bộ các tiêu đề di truyền trong nguồn.</p>':''}
          <div id="learnCatalog" aria-live="polite"></div>
        </section>${coverageHTML()}
        <details class="learn-backup"><summary>Mốc đọc & bản sao lưu</summary><p>“Đã đọc” là bạn tự đánh dấu, không có nghĩa đã thuộc. Mốc đọc tách biệt hoàn toàn với điểm và lịch ôn.</p>
          <div class="actions-row"><button class="secondary" data-study-action="export">Xuất mốc đọc</button><button class="secondary" data-study-action="import">Nhập mốc đọc</button><button class="text-btn" data-study-action="reset">Bỏ các dấu đã đọc</button></div>
          <input id="learnImport" type="file" accept=".json,application/json" hidden>
        </details><p class="learn-footnote">Nội dung theo ngân hàng đã biên tập 2.4 · nguồn theo từng ý · không tải câu hỏi từ máy chủ.</p>`;
    }
    function renderCatalog() {
      const el=container.querySelector('#learnCatalog');if(!el)return;
      const found=C.searchBooks(catalog,{grade:state.grade,query:state.query,extra:state.extra,filter:state.filter,records:state.records});
      const q=C.normalize(state.query);
      el.innerHTML=found.length?`<div class="learn-book-grid">${found.map(({book:b,points:pp,allowed:all,readCount})=>
        `<article class="learn-book ${all.length?'':'learn-book-empty'}"><div class="learn-book-label"><span>${b.shared?'Ghi chú chung':b.kind==='extra'?'HSG / bổ sung':`Bài ${b.no}`}</span><span>${all.length?`${readCount}/${all.length} đã đọc`:'Chỉ có nguồn'}</span></div>
        <h3>${esc(b.shared?b.title:shortTitle(b.title))}</h3>
        ${pp.length?`<p>${pp.length} ý ${q||state.filter!=='all'?'phù hợp':'ngắn'} · ${new Set(pp.map(p=>p.card.section)).size} mục</p>
          ${q?`<ul class="learn-search-hits">${pp.slice(0,3).map(p=>`<li><button class="text-btn" data-study-open="${esc(p.id)}">${esc(p.title)} →</button></li>`).join('')}</ul>`:
          `<p class="learn-book-topics">${esc(pp.slice(0,3).map(p=>p.title).join(' · '))}${pp.length>3?'…':''}</p>`}
          <button class="secondary learn-open-book" data-study-book="${b.id}" ${q||state.filter!=='all'?`data-study-first="${esc(pp[0].id)}"`:''}>${readCount===all.length?'Đọc lại':readCount?'Học tiếp':'Mở bài học'} →</button>`:
          `<p>${b.points.length?'Phần này chỉ có ý HSG; bật HSG / bổ sung để xem.':'Chưa có ý học đã biên tập cho tiêu đề này. Không tự thêm kiến thức vào chỗ trống.'}</p><button class="text-btn" data-study-source-book="${b.id}">Xem nguồn hiện có ↗</button>`}
        </article>`).join('')}</div>`:
        `<div class="learn-empty"><h3>Chưa có mục phù hợp.</h3><p>Thử một từ khóa khác, đổi bộ lọc hoặc bật phần HSG.</p><button class="secondary" data-study-action="clear-search">Xóa tìm kiếm & bộ lọc</button></div>`;
    }
    function overviewHTML() {
      const b=currentBook();if(!b){state.view='library';return libraryHTML();}
      const pp=allowed(b),read=pp.filter(p=>C.isRead(state.records,p.id)).length;
      return `<div class="learn-reader learn-overview"><div class="learn-reader-toolbar"><button class="secondary" data-study-action="library">← Các bài học</button><span class="learn-position">${pp.length} ý · cả bài</span><button class="text-btn" data-study-action="view-one">Từng ý →</button></div>
        ${storageNotice()}<div class="learn-book-heading"><span class="eyebrow">LỚP ${b.grade} · ĐỌC LIỀN MẠCH</span><h2 data-study-heading tabindex="-1">${esc(b.shared?b.title:shortTitle(b.title))}</h2><p>Gom các ý theo đề mục gốc. Mở từng ý để xem giải thích và nguồn.</p></div>
        <div class="learn-read-progress"><span>${read} / ${pp.length} ý đã đánh dấu đọc</span><span>Không tự chấm điểm</span></div>
        <progress class="learn-progress" value="${read}" max="${Math.max(1,pp.length)}" aria-label="Tiến độ đọc cả bài">${read}/${pp.length}</progress>
        ${b.sections.map(sec=>{
          const sp=sec.points.filter(p=>state.extra||!p.card.advanced);
          if(!sp.length)return '';
          return `<section class="panel learn-chapter"><h3>${esc(sec.title)}</h3><div class="learn-whole-points">${sp.map(p=>
            `<article class="learn-whole-point"><h4>${esc(p.title)}</h4><p>${esc(p.takeaway)}</p><div><span class="learn-whole-state">${C.isRead(state.records,p.id)?'✓ Đã đọc':'Chưa đánh dấu'}</span><button class="text-btn" data-study-open="${esc(p.id)}">Giải thích & ôn ý này →</button></div></article>`).join('')}</div></section>`;
        }).join('')}
        ${b.sections.some(sec=>!sec.points.length)?`<details class="learn-coverage"><summary>Các mục nguồn chưa có ý học đã biên tập</summary>${b.sections.filter(sec=>!sec.points.length).map(sec=>`<p>${esc(sec.title)} <button class="text-btn" data-study-source="${esc(sec.id)}">Xem nguồn ↗</button></p>`).join('')}</details>`:''}
        <div class="learn-overview-actions"><button class="secondary" data-study-action="mark-book">Đánh dấu ${pp.length} ý đã đọc</button><button class="primary" data-study-action="practice-book">Ôn ${Math.min(3,pp.length)} câu trong bài →</button></div>
        <p class="learn-footnote">Đánh dấu đọc là tự ghi nhận, không thay đổi điểm hay lịch ôn.</p></div>`;
    }
    function readerHTML() {
      const b=currentBook(), pp=readerPoints(), p=pp.find(x=>x.id===state.card)||pp[0];
      if(!b||!p){state.view='library';return libraryHTML();}
      state.card=p.id;
      const c=p.card,s=catalog.sections.get(c.section),at=pp.findIndex(x=>x.id===p.id);
      const done=pp.filter(x=>C.isRead(state.records,x.id)).length, marked=C.isRead(state.records,p.id);
      const related=b.sections.find(x=>x.id===c.section)?.points.filter(x=>state.extra||!x.card.advanced)||[p];
      const explanation=p.detail??c.explanation;
      const refLinks=(c.referenceIds||[]).map(id=>refs.get(id)).filter(Boolean).map(sourceLink).filter(Boolean);
      const noSourceCount=b.sections.filter(s=>!s.points.length).length;
      const tag=marked?'Đã đánh dấu đọc':c.advanced?'HSG / bổ sung':'Ý cần nhớ';
      return `<div class="learn-reader"><div class="learn-reader-toolbar"><button class="secondary" data-study-action="library">← Các bài học</button>
        <span class="learn-position">Ý ${at+1} / ${pp.length}</span><button class="text-btn" data-study-action="view-all">Đọc cả bài ↗</button></div>
        ${storageNotice()}<div class="learn-book-heading"><span class="eyebrow">LỚP ${b.grade}${b.shared?' · GHI CHÚ CHUNG':b.kind==='extra'?' · HSG / BỔ SUNG':' · BÀI '+b.no}</span>
        <h2>${esc(b.shared?b.title:shortTitle(b.title))}</h2><p>${esc(s.title)}</p></div>
        <div class="learn-read-progress"><span>${done} / ${pp.length} ý đã đọc${state.single?' · phiên 1 ý':''}</span><span>Không tính điểm</span></div>
        <progress class="learn-progress" value="${done}" max="${pp.length}" aria-label="Số ý đã đánh dấu đọc">${done}/${pp.length}</progress>
        <article class="panel learn-concept"><div class="learn-concept-label"><span class="eyebrow">HIỂU ĐƠN GIẢN</span><span class="tag ${marked?'good':''}">${tag}</span></div>
          <h3 id="learnConceptTitle" data-study-heading tabindex="-1">${esc(p.title)}</h3>
          <p class="learn-takeaway">${esc(p.takeaway)}</p>
          <details class="learn-explanation"><summary>Giải thích & nguồn đối chiếu</summary>
            <p class="learn-why">${esc(explanation)}</p>
            <p class="learn-provenance">Ý học được diễn đạt lại từ đáp án và giải thích của NMNRT 2.4, không phải trích nguyên văn bài giảng.</p>
            ${c.editorialNote?`<p class="learn-provenance"><b>Ghi chú biên tập của câu nguồn:</b> ${esc(c.editorialNote)}</p>`:''}
            <details class="learn-source-question"><summary>Câu hỏi đối chiếu trong ngân hàng</summary><p>${esc(c.prompt)}</p><p><b>Đáp án:</b> ${esc(c.answer[0])}</p></details>
            ${refLinks.length?`<ul class="learn-reference-links">${refLinks.map(link=>'<li>'+link+'</li>').join('')}</ul>`:''}
            <button class="text-btn" data-study-source="${esc(c.section)}">Mở ghi chú, bản gốc và phần đã sửa ↗</button>
          </details>
          <div class="learn-concept-actions"><button class="secondary" data-study-action="previous" ${at?'':'disabled'}>← Trước</button>
            <button class="primary" data-study-action="mark-next">${marked?'Tiếp tục': 'Đã đọc · tiếp'} →</button></div>
          <div class="learn-quiet-actions"><button class="text-btn" data-study-action="toggle-read">${marked?'Bỏ dấu đã đọc':'Chỉ đánh dấu đã đọc'}</button>
            ${at<pp.length-1?'<button class="text-btn" data-study-action="next">Bỏ qua ý này →</button>':''}</div>
        </article>
        <aside class="learn-practice"><div><h3>Muốn thử xem đã nhớ chưa?</h3><p>Tùy chọn. Điểm chỉ thay đổi khi bạn trả lời câu hỏi.</p></div>
          <div class="learn-practice-actions"><button class="secondary" data-study-action="practice-one">Thử 1 câu này</button>
          <button class="primary" data-study-action="practice-section">Ôn ${Math.min(3,related.length)} câu cùng mục →</button></div></aside>
        <details class="learn-toc" id="learnTOC"><summary>Nội dung bài · ${allowed(b).length} ý${noSourceCount?' · có mục chỉ có nguồn':''}</summary>
          ${b.sections.map(sec=>{
            const sp=sec.points.filter(x=>state.extra||!x.card.advanced);
            return `<section class="learn-toc-section"><h3>${esc(sec.title)}</h3>${sp.length?
              `<ol>${sp.map(x=>`<li><button class="text-btn ${x.id===p.id?'learn-current':''}" data-study-open="${esc(x.id)}" ${x.id===p.id?'aria-current="step"':''}><span aria-hidden="true">${C.isRead(state.records,x.id)?'✓':'○'}</span> ${esc(x.title)}</button></li>`).join('')}</ol>`:
              `<p>${sec.points.length?'Có ý HSG; bật HSG ở danh mục để xem.':'Chưa có ý học đã biên tập.'} <button class="text-btn" data-study-source="${esc(sec.id)}">Xem nguồn ↗</button></p>`}</section>`;
          }).join('')}
        </details><p class="learn-footnote">Đọc không tự đánh dấu bạn đã hiểu hoặc đã thuộc. Bạn được dừng bất cứ lúc nào.</p></div>`;
    }
    function render() {
      container.innerHTML=`<div id="learningView">${state.view==='reader'?(state.layout==='all'?overviewHTML():readerHTML()):libraryHTML()}</div>`;
      if(state.view==='library')renderCatalog();
    }
    function move(delta, mark=false) {
      const pp=readerPoints(),at=pp.findIndex(p=>p.id===state.card);if(at<0)return;
      if(mark){state.records[state.card]={read:true,updatedAt:Date.now()};persist();}
      if(at+delta>=pp.length){
        state.view='library';state.query='';render();focusHeading();
        toast(state.single?'Đã đọc một ý. Nghỉ ở đây cũng được.':'Đã đến cuối bài. Bạn có thể đọc lại hoặc chọn bài khác.');
      }else if(at+delta>=0){const single=state.single;setCard(pp[at+delta].id,single);render();focusHeading();}
    }
    function downloadReading() {
      const obj={...persist(),exportedAt:new Date().toISOString()};
      const url=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}));
      const a=document.createElement('a');a.href=url;a.download='nmnrt-reading-progress.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);
    }
    container.addEventListener('click',e=>{
      if(!isActive())return;
      const b=e.target.closest('button');if(!b||b.disabled)return;
      if(b.dataset.studyGrade){state.grade=Number(b.dataset.studyGrade);state.query='';persist();render();return;}
      if(b.dataset.studyBook){openBook(b.dataset.studyBook,b.dataset.studyFirst);return;}
      if(b.dataset.studyOpen){if(setCard(b.dataset.studyOpen)){render();focusHeading();}return;}
      if(b.dataset.studySource){onSource(b.dataset.studySource,false);return;}
      if(b.dataset.studySourceBook){onSource(b.dataset.studySourceBook,true);return;}
      const a=b.dataset.studyAction;if(!a)return;
      if(a==='library'){state.view='library';render();focusHeading();}
      else if(a==='resume'){if(setCard(state.lastCard)){render();focusHeading();}}
      else if(a==='one'){
        const pp=catalog.books.filter(x=>x.grade===state.grade&&(state.extra||x.kind!=='extra')).flatMap(allowed);
        const p=pp.find(x=>!C.isRead(state.records,x.id))||pp[0];
        if(p){setCard(p.id,true);render();focusHeading();}else toast('Lớp này chưa có ý học phù hợp.');
      }
      else if(a==='clear-search'){state.query='';state.filter='all';render();container.querySelector('#learnSearch')?.focus();}
      else if(a==='view-all'){state.layout='all';state.single=false;render();focusHeading();}
      else if(a==='view-one'){state.layout='one';state.single=false;render();focusHeading();}
      else if(a==='mark-book'&&confirm('Tự đánh dấu mọi ý đang hiển thị trong bài là đã đọc? Đây không phải điểm đánh giá.')){
        const now=Date.now();allowed(currentBook()).forEach(p=>state.records[p.id]={read:true,updatedAt:now});persist();render();toast('Đã ghi nhận mốc đọc của bài.');
      }
      else if(a==='practice-book')onPractice(allowed(currentBook()).map(p=>p.id),state.card,3);
      else if(a==='previous')move(-1);
      else if(a==='next')move(1);
      else if(a==='mark-next')move(1,true);
      else if(a==='toggle-read'){state.records[state.card]={read:!C.isRead(state.records,state.card),updatedAt:Date.now()};persist();render();}
      else if(a==='toc'){const d=container.querySelector('#learnTOC');if(d){d.open=true;d.querySelector('summary').focus();d.scrollIntoView({block:'start',behavior:'smooth'});}}
      else if(a==='practice-one')onPractice([state.card],state.card);
      else if(a==='practice-section'){
        const p=catalog.points.get(state.card),sec=currentBook().sections.find(x=>x.id===p.card.section);
        const pp=sec.points.filter(x=>state.extra||!x.card.advanced);
        onPractice([state.card,...pp.filter(x=>x.id!==state.card).map(x=>x.id)].slice(0,3),state.card);
      }
      else if(a==='export')downloadReading();
      else if(a==='import')container.querySelector('#learnImport')?.click();
      else if(a==='reset'&&confirm('Bỏ các dấu đã đọc? Điểm và lịch ôn không thay đổi.')){
        const now=Date.now();Object.keys(state.records).forEach(id=>state.records[id]={read:false,updatedAt:now});persist();render();toast('Đã bỏ dấu đọc; tiến độ ôn giữ nguyên.');
      }
    });
    container.addEventListener('input',e=>{
      if(isActive()&&e.target.id==='learnSearch'){state.query=e.target.value;renderCatalog();}
    });
    container.addEventListener('change',async e=>{
      if(!isActive())return;
      if(e.target.id==='learnExtra'){state.extra=e.target.checked;persist();render();}
      else if(e.target.id==='learnFilter'){state.filter=e.target.value;renderCatalog();}
      else if(e.target.id==='learnImport'){
        const file=e.target.files[0];e.target.value='';if(!file)return;
        try{
          if(file.size>1024*1024)throw new Error('Tệp vượt 1 MB.');
          const next=C.validateReading(JSON.parse(await file.text()),ids,bank.bankId);
          if(!confirm('Hợp nhất mốc đọc? Với cùng một ý, bản mới hơn được giữ. Điểm ôn không thay đổi.'))return;
          state.records=C.mergeReading(state.records,next.records);persist();render();toast('Đã nhập mốc đọc.');
        }catch(err){toast('Không nhập được: '+err.message);}
      }
    });
    document.addEventListener('keydown',e=>{
      if(!isActive()||state.view!=='reader'||state.layout!=='one'||e.repeat||e.ctrlKey||e.metaKey||e.altKey||
          document.querySelector('dialog[open]')||e.target.closest('button,a,input,textarea,select,summary'))return;
      if(e.key==='ArrowRight'){e.preventDefault();move(1);}
      else if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}
    });
    window.addEventListener('storage',e=>{
      if(e.key!==KEY||!e.newValue)return;
      try{const next=C.validateReading(JSON.parse(e.newValue),ids,bank.bankId);
        state.records=C.mergeReading(state.records,next.records);if(isActive())render();}catch(_){}
    });
    return {mount:render,openCard:setCard,hasCard:id=>catalog.points.has(id)};
  }
  root.NMNRTLearning={create};
})(window);
