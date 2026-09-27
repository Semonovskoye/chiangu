(() => {
  "use strict";

  const STORAGE_KEY = "chiangu-theme";
  const LEGACY_KEYS = [
    "chiangu-theme-mode",
    "theme",
    "themePreference",
    "preferred-theme",
    "nmnrt.theme"
  ];
  const VALID = new Set(["light", "dark", "system"]);
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function normalize(mode) {
    if (mode === "bright") return "light";
    return VALID.has(mode) ? mode : "system";
  }

  function readMode() {
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      if (current) return normalize(current);

      for (const key of LEGACY_KEYS) {
        const legacy = localStorage.getItem(key);
        if (!legacy) continue;
        const normalized = normalize(legacy);
        localStorage.setItem(STORAGE_KEY, normalized);
        return normalized;
      }
    } catch (_) {
      // Storage can be blocked in private/file contexts. Theme still works for the session.
    }
    return "system";
  }

  function resolve(mode) {
    return mode === "system" ? (media.matches ? "dark" : "light") : mode;
  }

  function syncControls(mode) {
    document.querySelectorAll('input[name="theme-mode"]').forEach(input => {
      input.checked = input.value === mode;
    });

    document.querySelectorAll('select[data-theme-select], select#theme').forEach(select => {
      if (select.value !== mode) select.value = mode;
    });

    document.querySelectorAll('[data-theme-choice]').forEach(button => {
      button.classList.toggle("active", button.dataset.themeChoice === mode);
    });
  }

  function apply(mode, { save = true } = {}) {
    const normalized = normalize(mode);
    document.documentElement.dataset.theme = resolve(normalized);
    document.documentElement.dataset.themeMode = normalized;

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, normalized);
      } catch (_) {}
    }

    syncControls(normalized);
    window.dispatchEvent(new CustomEvent("chiangu:themechange", {
      detail: { mode: normalized, resolved: resolve(normalized) }
    }));
  }

  function bindMainSettings() {
    const widget = document.querySelector(".settings-widget");
    const toggle = document.getElementById("settings-toggle");
    const panel = document.getElementById("settings-panel");

    if (!widget || !toggle || !panel || toggle.dataset.themeBound === "true") return;
    toggle.dataset.themeBound = "true";

    const close = () => {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.setAttribute("aria-expanded", String(!panel.hidden));
    toggle.addEventListener("click", event => {
      event.stopPropagation();
      panel.hidden = !panel.hidden;
      toggle.setAttribute("aria-expanded", String(!panel.hidden));
    });

    document.addEventListener("click", event => {
      if (!widget.contains(event.target)) close();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") close();
    });
  }

  function bindThemeInputs() {
    document.querySelectorAll('input[name="theme-mode"]').forEach(input => {
      if (input.dataset.themeBound === "true") return;
      input.dataset.themeBound = "true";
      input.addEventListener("change", () => {
        if (input.checked) apply(input.value);
      });
    });

    document.querySelectorAll('select[data-theme-select], select#theme').forEach(select => {
      if (select.dataset.themeBound === "true") return;
      select.dataset.themeBound = "true";
      select.addEventListener("change", () => apply(select.value));
    });

    document.querySelectorAll('[data-theme-choice]').forEach(button => {
      if (button.dataset.themeBound === "true") return;
      button.dataset.themeBound = "true";
      button.addEventListener("click", () => apply(button.dataset.themeChoice));
    });
  }

  function setup() {
    bindMainSettings();
    bindThemeInputs();
    syncControls(readMode());
  }

  // Apply early to reduce light/dark flashing while the page is loading.
  apply(readMode(), { save: false });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }

  media.addEventListener("change", () => {
    if (readMode() === "system") apply("system", { save: false });
  });

  window.ChianguTheme = {
    get: readMode,
    set: mode => apply(mode),
    resolve: () => resolve(readMode())
  };
})();
