function copyCode(button) {
  const code = button.parentElement.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    const oldText = button.innerText;
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = oldText;
    }, 1500);
  });
}