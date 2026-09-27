"use strict";

let vantaEffect = null;

function fallbackCopy(text, callback) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    callback?.();
  } finally {
    textarea.remove();
  }
}

function copyCode(button) {
  const codeBox = button.closest(".code-box");
  if (!codeBox) return;

  const activeCode =
    codeBox.querySelector(".code-panel.active code") ||
    codeBox.querySelector(".code-view.active code") ||
    codeBox.querySelector("code");

  if (!activeCode) return;

  const text = activeCode.textContent.trim();
  const done = () => {
    const oldText = button.textContent;
    button.textContent = "Copied!";
    window.setTimeout(() => {
      button.textContent = oldText;
    }, 1500);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function showCodeTab(button, panelName) {
  const codeBox = button.closest(".code-box");
  if (!codeBox) return;

  codeBox.querySelectorAll(".code-tab").forEach(tab => tab.classList.remove("active"));
  codeBox.querySelectorAll(".code-panel, .code-view").forEach(panel => panel.classList.remove("active"));

  button.classList.add("active");
  codeBox
    .querySelector(`[data-code-panel="${CSS.escape(panelName)}"]`)
    ?.classList.add("active");
}

async function loadExternalCodeBlocks() {
  const blocks = document.querySelectorAll("code[data-code-file]");

  await Promise.all([...blocks].map(async codeBlock => {
    const file = codeBlock.dataset.codeFile;
    if (!file) return;

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      codeBlock.textContent = (await response.text()).trim();
    } catch (error) {
      codeBlock.textContent = `Could not load ${file}. Open Chiangu through a local/server URL instead of file://.`;
      console.error(`Failed to load ${file}`, error);
    }
  }));
}

function addDisplayMoreButton(container, target) {
  if (container.querySelector(":scope > .display-more-btn")) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "display-more-btn";
  button.textContent = "Display more";
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const expanded = target.classList.toggle("expanded");
    button.textContent = expanded ? "Display less" : "Display more";
    button.setAttribute("aria-expanded", String(expanded));
    window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
  });

  container.appendChild(button);
}

function setupDisplayMoreButtons() {
  document.querySelectorAll(".code-box.collapsible").forEach(codeBox => {
    const views = codeBox.querySelectorAll(".code-view");

    if (views.length) {
      views.forEach(view => addDisplayMoreButton(view, view));
    } else {
      addDisplayMoreButton(codeBox, codeBox);
    }
  });
}

function toggleTutorial(button) {
  const card = button.closest(".tutorial-card");
  const body = card?.querySelector(".tutorial-body");
  if (!body) return;

  const opening = !body.classList.contains("open");
  body.classList.toggle("open", opening);
  button.textContent = opening ? "Hide video tutorial" : "Display video tutorial";
  button.setAttribute("aria-expanded", String(opening));

  const iframe = card.querySelector("iframe[data-src]");
  if (iframe && opening && !iframe.src) iframe.src = iframe.dataset.src;

  if (!opening) {
    const video = card.querySelector("video");
    const loadedIframe = card.querySelector("iframe[data-src]");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (loadedIframe) loadedIframe.src = "";
  }

  window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
}

function showGrade(grade, button) {
  const section = button.closest(".grade-section");
  if (!section) return;

  section.querySelectorAll(".grade-tab").forEach(tab => tab.classList.remove("active"));
  section.querySelectorAll(".grade-content").forEach(content => content.classList.remove("active"));

  button.classList.add("active");
  section.querySelector(`.grade-content[data-grade="${CSS.escape(grade)}"]`)?.classList.add("active");

  try {
    localStorage.setItem("selectedGrade", grade);
  } catch (_) {}

  window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
}

function restoreGrade() {
  let savedGrade = null;
  try {
    savedGrade = localStorage.getItem("selectedGrade");
  } catch (_) {}
  if (!savedGrade) return;

  const button = [...document.querySelectorAll(".grade-tab")].find(tab =>
    tab.getAttribute("onclick")?.includes(`'${savedGrade}'`) ||
    tab.getAttribute("onclick")?.includes(`\"${savedGrade}\"`)
  );

  if (button) showGrade(savedGrade, button);
}

function setupVantaBackground() {
  const element = document.getElementById("vanta-bg");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!element || reduceMotion || !window.VANTA?.WAVES) return;

  vantaEffect?.destroy?.();
  vantaEffect = window.VANTA.WAVES({
    el: element,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x2b80ff
  });
}

window.addEventListener("resize", () => vantaEffect?.resize?.());
window.addEventListener("beforeunload", () => vantaEffect?.destroy?.());

document.addEventListener("DOMContentLoaded", async () => {
  restoreGrade();
  await loadExternalCodeBlocks();
  setupDisplayMoreButtons();
  setupVantaBackground();
});
