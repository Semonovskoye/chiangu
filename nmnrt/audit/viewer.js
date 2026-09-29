/* Read-only audit browser; it never changes learning records. */
(function(){'use strict';
const D=window.NMNRT_DATA,$=s=>document.querySelector(s),esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=t=>String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
const refs=new Map(D.references.map(r=>[r.id,r])), lessons=new Map(D.grades.flatMap(g=>g.lessons.map(l=>[l.id,l])));
const names={'source-rewrite':'Viết lại theo đề mục',corrected:'Đề mục đã đính chính',adapted:'Ví dụ viết mới có đối chiếu'};
let page=0,ledger=null;const size=30;
function render(){const q=norm($('#auditSearch').value),g=$('#auditGrade').value,b=$('#auditBasis').value;
 const cs=D.cards.filter(c=>(g==='all'||String(c.grade)===g)&&(b==='all'||c.basis===b)&&(!q||norm(c.id+' '+c.prompt+' '+c.answer.join(' ')+' '+c.explanation+' '+lessons.get(c.lesson).title).includes(q)));
 page=Math.max(0,Math.min(page,Math.ceil(cs.length/size)-1));
 $('#auditCount').textContent=cs.length+' câu khớp bộ lọc.';
 $('#auditItems').innerHTML=cs.slice(page*size,(page+1)*size).map(c=>`<article class="panel audit-card" id="${c.id}"><small>Lớp ${c.grade} · ${esc(lessons.get(c.lesson).title)} · ${names[c.basis]}</small><h3>${esc(c.prompt)}</h3><ol type="A">${c.choices.map(o=>`<li class="${o.id===c.correctChoice?'audit-correct':''}">${esc(o.text)}${o.id===c.correctChoice?' ✓':''}</li>`).join('')}</ol><p class="mcq-explain"><strong>Vì sao:</strong> ${esc(c.explanation)}</p><details><summary>Đính chính / nguồn / ID</summary><p>${esc(c.editorialNote)}</p><p><code>${c.id}</code></p><p>Biến thể trả lời ngắn: ${c.accepted.map(esc).join(' · ')}</p><ul class="reference-list">${c.referenceIds.map(id=>{const r=refs.get(id);return `<li><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)} ↗</a></li>`;}).join('')}</ul></details></article>`).join('');
 $('#auditPage').textContent=(page+1)+' / '+Math.max(1,Math.ceil(cs.length/size));$('#auditPrev').disabled=page===0;$('#auditNext').disabled=(page+1)*size>=cs.length;
}
['#auditSearch','#auditGrade','#auditBasis'].forEach(id=>$(id).addEventListener(id==='#auditSearch'?'input':'change',()=>{page=0;render();}));
$('#auditPrev').onclick=()=>{page--;render();$('#auditCount').scrollIntoView();};$('#auditNext').onclick=()=>{page++;render();$('#auditCount').scrollIntoView();};
$('#oldFind').onclick=async()=>{const el=$('#oldResult'),q=norm($('#oldSearch').value.trim());if(!q){el.textContent='Nhập ID cũ hoặc một phần của ID.';return;}
 try{if(!ledger){const r=await fetch('old-to-new.json');if(!r.ok)throw new Error();ledger=(await r.json()).records;}
 const rows=ledger.filter(r=>norm(r.oldId).includes(q));el.innerHTML=rows.length?rows.slice(0,40).map(r=>`<article class="reviewed-fact"><h3>${esc(r.oldId)}</h3><p><b>Câu cũ:</b> ${esc(r.oldPrompt)}</p><p>${esc(r.reason)}</p><p>${r.action==='retired'?'Đã loại khỏi bài tập.':'Thay theo đề mục; không phải ánh xạ tương đương 1:1.'}</p>${r.replacementIds.map(id=>`<button class="text-btn" data-find-new="${id}">${id}</button><br>`).join('')}</article>`).join(''):'Không tìm thấy ID này.';if(rows.length>40)el.insertAdjacentHTML('beforeend','<p>Đang hiện 40 kết quả đầu; tải JSON để xem toàn bộ.</p>');}
 catch(_){el.textContent='Không đọc được sổ qua fetch. Mở bằng máy chủ web hoặc tải tệp “Toàn bộ ID cũ → mới” ở trên.';}
};
document.addEventListener('click',e=>{const b=e.target.closest('[data-find-new]');if(!b)return;$('#auditSearch').value=b.dataset.findNew;$('#auditGrade').value='all';$('#auditBasis').value='all';page=0;render();$('#auditCount').scrollIntoView();});render();
})();
