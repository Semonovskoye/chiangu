/* Chiangu homepage integration.
   NMNRT stays in .header. Chiangu keeps its own Mambo favicon/mascot; NMNRT
   owns the Rice branding only on nmnrt/index.html. The command archive keeps
   its original content, tabs, tutorials and Display more controls. */
(function () {
  'use strict';
  const self = document.currentScript;
  const base = new URL('./', self ? self.src : new URL('./nmnrt/bridge.js', location.href).href);
  const norm = x => String(x).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/\s+/g, ' ').trim();
  const boundButtons = new WeakSet();
  let generatedId = 0;

  function mountHeaderEntry(headerHost) {
    let css = document.getElementById('nmnrt-homepage-style');
    if (!css) {
      css = document.createElement('link');
      css.rel = 'stylesheet';
      css.id = 'nmnrt-homepage-style';
      document.head.append(css);
    }
    const stylesheet = new URL('homepage.css?v=1.9', base).href;
    if (css.href !== stylesheet) css.href = stylesheet;
    const entries = [...document.querySelectorAll('#nmnrt-entry, a.nmnrt-entry')];
    const entry = entries.shift() || document.createElement('a');
    if (!entry.hasChildNodes()) {
      entry.innerHTML = '<span class="nmnrt-entry-title">NMNRT <span aria-hidden="true">↗</span></span><span class="nmnrt-entry-desc">no motherfucking nonsense revision tool</span><span class="nmnrt-entry-small">Ôn theo bài · tự nhớ lại · sửa chỗ sai</span>';
    }
    entry.id = 'nmnrt-entry';
    entry.classList.add('button', 'nmnrt-entry');
    entry.href = new URL('index.html', base).href;
    if (entry.parentElement !== headerHost) headerHost.append(entry);
    entries.forEach(duplicate => duplicate.remove());
  }

  function preserveAnchor(element) {
    if (!element.id) return;
    const anchor = document.createElement('span');
    anchor.id = element.id;
    anchor.className = 'nmnrt-archive-anchor';
    anchor.setAttribute('aria-hidden', 'true');
    element.removeAttribute('id');
    element.before(anchor);
  }

  function createArchive(commands, links) {
    const archive = document.createElement('div');
    archive.id = 'nmnrt-command-archive';
    archive.className = 'nmnrt-archive';
    const content = document.createElement('div');
    content.className = 'nmnrt-archive-content';
    archive.append(content);
    const root = commands.closest('section');
    if (root && !root.contains(links)) {
      while (root.firstChild) content.append(root.firstChild);
      root.append(archive);
      root.classList.add('nmnrt-command-host');
    } else {
      // Preserve the legacy page's header, links and footer. Move nodes rather
      // than rebuilding their HTML so existing event handlers remain attached.
      let start = commands;
      while (start.parentElement && ['CENTER', 'DIV'].includes(start.parentElement.tagName) && start.parentElement.children.length === 1) start = start.parentElement;
      let end = links.closest('.buttons') || links;
      if (end.contains(start)) end = links;
      const range = document.createRange();
      range.setStartBefore(start);
      range.setEndBefore(end);
      const fragment = range.extractContents();
      fragment.querySelectorAll('[id]').forEach(el => {
        if (document.getElementById(el.id)) el.removeAttribute('id');
      });
      content.append(fragment);
      range.insertNode(archive);
    }
    return archive;
  }

  function simplifyArchive(archive) {
    // Also handles a saved homepage snapshot from a previous package.
    if (archive.tagName === 'DETAILS') {
      const replacement = document.createElement('div');
      replacement.id = archive.id;
      replacement.className = archive.className;
      while (archive.firstChild) replacement.append(archive.firstChild);
      archive.replaceWith(replacement);
      archive = replacement;
    }
    archive.classList.add('nmnrt-archive');
    archive.removeAttribute('aria-labelledby');
    archive.removeAttribute('open');
    archive.setAttribute('role', 'region');
    archive.setAttribute('aria-label', 'Archived commands');
    archive.querySelectorAll(':scope > .nmnrt-archive-header, :scope > summary').forEach(strip => {
      strip.querySelectorAll('[id]').forEach(preserveAnchor);
      // Retain deep links without retaining the removed title or badges.
      strip.querySelectorAll('.nmnrt-archive-anchor').forEach(anchor => archive.prepend(anchor));
      preserveAnchor(strip);
      strip.remove();
    });
    const content = archive.querySelector('.nmnrt-archive-content');
    if (!content) return null;
    // Keep the original heading and place it above the archive note.
    const heading = [...content.querySelectorAll('h1,h2,h3')]
      .find(h => norm(h.textContent) === 'cac cau lenh');

    if (heading) {
      archive.prepend(heading);
    }
    let notice = archive.querySelector('.nmnrt-archive-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.className = 'nmnrt-archive-notice';
      notice.innerHTML = '<strong>This section was archived on 24/09/2026.</strong><span>Read-only archive · no longer maintained. Các câu lệnh và hướng dẫn cũ được giữ để tham khảo; không còn được cập nhật.</span>';
    }
    notice.setAttribute('role', 'note');
    if (notice.nextElementSibling !== content) content.before(notice);
    const host = archive.parentElement;
    if (host && host.tagName === 'SECTION' && !host.querySelector('.buttons, footer, .header')) host.classList.add('nmnrt-command-host');
    return { archive, content };
  }

  function restoreDisplayMore(content) {
    function prepareCodeBoxes() {
      content.querySelectorAll('.code-box').forEach(box => {
        // Only undo classes imposed by our old always-expanded patch.
        // Do not reset a visitor's normal expanded/collapsed choice.
        if (box.classList.contains('nmnrt-code-static')) {
          box.classList.remove('nmnrt-code-static', 'expanded');
        }
        if (!box.classList.contains('collapsible')) box.classList.add('collapsible');
        const views = [...box.querySelectorAll('.code-view')];
        const targets = views.length ? views : [box];
        targets.forEach(target => {
          const pre = target.matches('pre') ? target : target.querySelector('pre');
          if (!pre) return;
          let button = target.querySelector(':scope > .display-more-btn');
          if (!button && typeof window.addDisplayMoreButton === 'function') {
            // Prefer the site's original implementation; it is idempotent.
            window.addDisplayMoreButton(target, target);
            button = target.querySelector(':scope > .display-more-btn');
          }
          if (!button) {
            // Older homepages may not include the helper. Match its markup and
            // behavior so a later original setup routine will not duplicate it.
            button = document.createElement('button');
            button.type = 'button';
            button.className = 'display-more-btn nmnrt-display-more-fallback';
            button.addEventListener('click', () => {
              const expanded = target.classList.toggle('expanded');
              button.textContent = expanded ? 'Display less' : 'Display more';
              window.dispatchEvent(new Event('resize'));
            });
            target.append(button);
          }
          const sync = () => {
            const expanded = target.classList.contains('expanded');
            const text = expanded ? 'Display less' : 'Display more';
            if (button.textContent !== text) button.textContent = text;
            const value = String(expanded);
            if (button.getAttribute('aria-expanded') !== value) button.setAttribute('aria-expanded', value);
          };
          if (!pre.id) {
            let id;
            do { id = 'nmnrt-code-preview-' + (++generatedId); } while (document.getElementById(id));
            pre.id = id;
          }
          button.setAttribute('aria-controls', pre.id);
          if (!boundButtons.has(button)) {
            boundButtons.add(button);
            // Let the original click handler toggle first. A serialized old
            // homepage may retain a button but lose its listener; recover that
            // case without double-toggling a working native button.
            button.addEventListener('click', () => {
              const before = target.classList.contains('expanded');
              setTimeout(() => {
                if (target.classList.contains('expanded') === before) {
                  target.classList.toggle('expanded');
                  window.dispatchEvent(new Event('resize'));
                }
                sync();
              }, 0);
            }, true);
          }
          sync();
        });
      });
    }
    prepareCodeBoxes();
    // Observe inserted/loaded code only, NOT expansion class changes. Clicking
    // Display more must never be undone by an always-expanded observer again.
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(() => { scheduled = false; prepareCodeBoxes(); });
    });
    observer.observe(content, { subtree: true, childList: true, characterData: true });
  }

  function initialize() {
    const headerHost = document.querySelector('div.header') || document.querySelector('header.header');
    if (!headerHost) {
      console.warn('NMNRT: .header container not found; the original page was left unchanged.');
      return;
    }
    if (document.documentElement.dataset.nmnrtArchiveVersion === '1.4') {
      mountHeaderEntry(headerHost);
      return;
    }
    let archive = document.getElementById('nmnrt-command-archive');
    if (!archive) {
      const headings = [...document.querySelectorAll('h1,h2,h3')];
      const commands = headings.find(h => norm(h.textContent) === 'cac cau lenh');
      const links = headings.find(h => norm(h.textContent).startsWith('cac duong lien ket'));
      if (!commands || !links) {
        console.warn('NMNRT: expected Chiangu headings not found; the original page was left unchanged.');
        return;
      }
      try { archive = createArchive(commands, links); }
      catch (error) { console.warn('NMNRT: archive integration failed.', error); return; }
    }
    mountHeaderEntry(headerHost);
    const parts = simplifyArchive(archive);
    if (!parts) { console.warn('NMNRT: archive content container not found.'); return; }
    restoreDisplayMore(parts.content);
    document.documentElement.dataset.nmnrtIntegrated = '1';
    document.documentElement.dataset.nmnrtArchiveVersion = '1.4';
    const followHash = () => {
      if (!location.hash) return;
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
      const element = document.getElementById(id);
      if (element && (element === parts.archive || parts.archive.contains(element))) element.scrollIntoView({ block: 'start' });
    };
    window.addEventListener('hashchange', followHash);
    followHash();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(initialize, 0), { once: true });
  else setTimeout(initialize, 0);
})();
