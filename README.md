# chiangu.bottom - nh**7r1.top's evil twin

<h2>Default command string (just copy and paste this into the console)</h2>
const section1 = document.getElementById('videoSection');
const section2 = document.getElementById('selectionSection');
if (section1 && section2) {
  section1.classList.remove('active');
  section2.classList.add('active');
}
['contextmenu','keydown','selectstart','copy'].forEach(ev => {
  document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
});
const all = {};
for (const type of Object.keys(encryptedQuestionBank)) {
  all[type] = {};
  for (const diff of Object.keys(encryptedQuestionBank[type])) {
    all[type][diff] = getQuestions(type, diff);
  }
}
console.log(all);
<br>
<h2>Detailed commands</h2>
<h3>Decrypting answers</h3>
const all = {};
for (const type of Object.keys(encryptedQuestionBank)) {
  all[type] = {};
  for (const diff of Object.keys(encryptedQuestionBank[type])) {
    all[type][diff] = getQuestions(type, diff);
  }
}
console.log(all);

<h3>Enable shortcuts</h3>
['contextmenu','keydown','selectstart','copy'].forEach(ev => {
  document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
});

<h3>Full 100% For assignment command (Broken, don't use this.)</h3>
state.stats.total = state.stats.correct = 30

<h3>Skip video</h3>
const section1 = document.getElementById('videoSection');
const section2 = document.getElementById('selectionSection');
if (section1 && section2) {
  section1.classList.remove('active');
  section2.classList.add('active');
}

<br>
<h2>Why am I doing this?</h2>
To simply put it, 
1. I think the teaching methods used in a certain website is not effective. 
2. I believe information (some of them) should be free
=> That is why I removed the paywall to the question generator that gives you answers, so that you can revise without any restrictions.
