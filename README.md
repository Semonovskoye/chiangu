# chiatri.bottom
nhantri.top's evil twin brother, chiatri.bottom

Console command for decryption
const all = {};
for (const type of Object.keys(encryptedQuestionBank)) {
  all[type] = {};
  for (const diff of Object.keys(encryptedQuestionBank[type])) {
    all[type][diff] = getQuestions(type, diff);
  }
}
console.log(all);

Enable shortcuts
['contextmenu','keydown','selectstart','copy'].forEach(ev => {
  document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
});

Full 100% For assignment command - Full điểm (Lưu ý: Không cho điểm phần chi tiết)
state.stats.total = state.stats.correct = 30

<h3>Skip video</h3>
// Section 1 (đang active)
const section1 = document.getElementById('videoSection');

// Section 2 (muốn chuyển sang)
const section2 = document.getElementById('selectionSection');

if (section1 && section2) {
  section1.classList.remove('active');
  section2.classList.add('active');
}
