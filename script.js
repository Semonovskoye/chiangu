function copyCode(button) {
  const codeBox = button.closest(".code-box");

  const activeCode =
    codeBox.querySelector(".code-panel.active code") ||
    codeBox.querySelector("code");

  if (!activeCode) return;

  const code = activeCode.textContent.trim();

  navigator.clipboard.writeText(code).then(() => {
    const oldText = button.innerText;
    button.innerText = "Copied!";

    setTimeout(() => {
      button.innerText = oldText;
    }, 1500);
  });
}

function showCodeTab(button, panelName) {
  const codeBox = button.closest(".code-box");

  codeBox.querySelectorAll(".code-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  codeBox.querySelectorAll(".code-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  button.classList.add("active");

  const selectedPanel = codeBox.querySelector(
    `.code-panel[data-code-panel="${panelName}"]`
  );

  if (selectedPanel) {
    selectedPanel.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const codeBlocks = document.querySelectorAll("code[data-code-file]");

  for (const codeBlock of codeBlocks) {
    const file = codeBlock.dataset.codeFile;

    try {
      const response = await fetch(file);
      const text = await response.text();

      codeBlock.textContent = text.trim();
    } catch (error) {
      codeBlock.textContent = `Could not load ${file}`;
      console.error(error);
    }
  }
});

function setupDisplayMoreButtons() {
  document.querySelectorAll(".code-box.collapsible").forEach(codeBox => {
    const codeViews = codeBox.querySelectorAll(".code-view");

    if (codeViews.length > 0) {
      codeViews.forEach(codeView => {
        addDisplayMoreButton(codeView, codeView);
      });
    } else {
      addDisplayMoreButton(codeBox, codeBox);
    }
  });
}

function addDisplayMoreButton(container, target) {
  if (container.querySelector(":scope > .display-more-btn")) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "display-more-btn";
  button.innerText = "Display more";

  button.addEventListener("click", () => {
    const expanded = target.classList.toggle("expanded");
    button.innerText = expanded ? "Display less" : "Display more";
  });

  container.appendChild(button);
}

document.addEventListener("DOMContentLoaded", async () => {
  const codeBlocks = document.querySelectorAll("code[data-code-file]");

  for (const codeBlock of codeBlocks) {
    const file = codeBlock.dataset.codeFile;

    try {
      const response = await fetch(file);
      const text = await response.text();

      codeBlock.textContent = text.trim();
    } catch (error) {
      codeBlock.textContent = `Could not load ${file}`;
      console.error(error);
    }
  }

  setupDisplayMoreButtons();
});
