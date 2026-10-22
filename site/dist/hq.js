/* Progressive enhancement: every page remains readable without JavaScript. */
(() => {
  'use strict';
  const reader = document.querySelector('#leitor');
  if (!reader) return;
  const pages = [...reader.querySelectorAll('.comic-page')];
  const tools = reader.querySelector('#reader-tools');
  const bottom = reader.querySelector('#reader-bottom');
  const select = reader.querySelector('#page-select');
  const mode = reader.querySelector('#reading-mode');
  const enlarge = reader.querySelector('#text-size');
  const status = reader.querySelector('#reader-status');
  const progress = reader.querySelector('#reader-progress');
  const bottomStatus = reader.querySelector('#reader-bottom-status');
  if (!pages.length || !tools || !bottom || !select || !mode || !enlarge || !status || !progress || !bottomStatus) return;

  let continuous = false;
  let current = 0;
  const historyState = index => ({
    ...(history.state && typeof history.state === 'object' ? history.state : {}),
    planoDHqPage: index
  });
  const fromHash = () => {
    const match = /^#pagina-(\d+)$/.exec(window.location.hash);
    if (!match) return null;
    const index = Number(match[1]) - 1;
    return index >= 0 && index < pages.length ? index : null;
  };

  function show(index, { focus = false, writeHash = false } = {}) {
    current = Math.max(0, Math.min(pages.length - 1, index));
    pages.forEach((page, i) => { page.hidden = !continuous && i !== current; });
    select.value = String(current + 1);
    reader.querySelectorAll('[data-previous]').forEach(button => { button.disabled = current === 0; button.hidden = continuous; });
    reader.querySelectorAll('[data-next]').forEach(button => { button.disabled = current === pages.length - 1; button.hidden = continuous; });
    bottom.hidden = continuous;
    const name = pages[current].dataset.title;
    const label = `Página ${current + 1} de ${pages.length} · ${name}`;
    status.textContent = continuous ? `Leitura contínua · ${pages.length} páginas disponíveis` : label;
    progress.hidden = continuous;
    bottomStatus.textContent = `${current + 1} / ${pages.length}`;
    progress.value = current + 1;
    progress.setAttribute('aria-label', label);
    if (writeHash && window.location.hash !== `#pagina-${current + 1}`) {
      history.pushState(historyState(current), '', `#pagina-${current + 1}`);
    }
    if (focus) {
      const heading = pages[current].querySelector('h3');
      heading.focus({ preventScroll: true });
      pages[current].scrollIntoView({ block: 'start', behavior: 'auto' });
    }
  }

  reader.querySelectorAll('[data-previous]').forEach(button => {
    button.addEventListener('click', () => show(current - 1, { focus: true, writeHash: true }));
  });
  reader.querySelectorAll('[data-next]').forEach(button => {
    button.addEventListener('click', () => show(current + 1, { focus: true, writeHash: true }));
  });
  select.addEventListener('change', () => show(Number(select.value) - 1, { focus: true, writeHash: true }));
  mode.addEventListener('click', () => {
    continuous = !continuous;
    mode.setAttribute('aria-pressed', String(continuous));
    show(current);
  });
  enlarge.addEventListener('click', () => {
    const large = document.body.classList.toggle('text-large');
    enlarge.setAttribute('aria-pressed', String(large));
  });
  window.addEventListener('hashchange', () => {
    const index = fromHash();
    if (index !== null) show(index, { focus: true });
    else if (!window.location.hash) show(0);
    history.replaceState(historyState(current), '');
  });
  window.addEventListener('popstate', event => {
    const remembered = event.state?.planoDHqPage;
    const valid = Number.isInteger(remembered) && remembered >= 0 && remembered < pages.length;
    show(fromHash() ?? (valid ? remembered : 0));
  });
  reader.addEventListener('keydown', event => {
    if (continuous) return;
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (!reader.contains(document.activeElement)) return;
    if (event.target.closest('input, textarea, select, [contenteditable="true"], [role="slider"], [role="textbox"]')) return;
    const change = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!change || current + change < 0 || current + change >= pages.length) return;
    event.preventDefault();
    show(current + change, { focus: true, writeHash: true });
  });

  tools.hidden = false;
  bottom.hidden = false;
  const initial = fromHash();
  show(initial ?? 0, { focus: initial !== null });
  history.replaceState(historyState(current), '');
})();
