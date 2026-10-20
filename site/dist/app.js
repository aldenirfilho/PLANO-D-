'use strict';

(() => {
  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = 'plano-d:leituras-favoritas:v1';
  const PAGE_SIZE = 9;
  const state = { readings: [], categories: {}, category: 'todos', query: '', favoritesOnly: false, visible: PAGE_SIZE, favorites: new Set(), current: null, trigger: null, storageAvailable: true };
  const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function readFavorites() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) state.favorites = new Set(saved.filter((id) => state.readings.some((reading) => reading.id === id)));
    } catch {
      state.storageAvailable = false;
      $('storage-status').textContent = 'O armazenamento está indisponível ou foi bloqueado. Seus favoritos ficam apenas nesta sessão.';
      document.querySelector('.privacy-note').textContent = '♡ Seus favoritos ficam apenas nesta sessão.';
    }
  }

  function persistFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.favorites]));
      state.storageAvailable = true;
      document.querySelector('.privacy-note').textContent = '♡ Seus favoritos ficam apenas neste navegador.';
    } catch {
      state.storageAvailable = false;
      $('storage-status').textContent = 'Não foi possível guardar a seleção neste navegador. Os favoritos ficam disponíveis apenas nesta sessão.';
      document.querySelector('.privacy-note').textContent = '♡ Seus favoritos ficam apenas nesta sessão.';
    }
  }

  function setFavorite(id) {
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    persistFavorites();
    render();
    updateDialogFavorite();
  }

  function updateDialogFavorite() {
    if (!state.current) return;
    const saved = state.favorites.has(state.current.id);
    $('dialog-favorite').textContent = saved ? '♥ Leitura salva' : '♡ Salvar leitura';
    $('dialog-favorite').setAttribute('aria-pressed', String(saved));
  }

  function openReading(reading, trigger) {
    state.current = reading;
    state.trigger = trigger;
    $('dialog-category').textContent = state.categories[reading.categoria];
    $('dialog-id').textContent = reading.id;
    $('dialog-title').textContent = reading.titulo;
    $('dialog-situation').textContent = reading.situacao;
    $('dialog-summary').textContent = reading.resumo;
    $('dialog-reference').textContent = `${reading.referencia_biblica} · ${reading.edicao_biblica}`;
    $('dialog-context').textContent = reading.unidade_de_leitura;
    $('dialog-full').href = reading.url_leitura;
    $('dialog-feedback').textContent = '';
    updateDialogFavorite();
    $('reading-dialog').showModal();
    $('dialog-close').focus();
  }

  function makeCard(reading) {
    const card = element('article', 'reading-card');
    card.dataset.readingId = reading.id;
    const top = element('div', 'card-top');
    top.append(element('span', 'card-category', state.categories[reading.categoria]), element('span', 'card-number', reading.id));
    const heading = element('h3', 'card-title', reading.titulo);
    const summary = element('p', 'card-summary', reading.resumo);
    const reference = element('p', 'card-reference', reading.referencia_biblica);
    const footer = element('div', 'card-footer');
    const open = element('button', 'read-button', 'Explorar leitura ↗');
    open.type = 'button';
    open.setAttribute('aria-label', `Explorar leitura ${reading.id}: ${reading.titulo}`);
    open.addEventListener('click', () => openReading(reading, open));
    const isSaved = state.favorites.has(reading.id);
    const favorite = element('button', 'favorite-button', isSaved ? '♥' : '♡');
    favorite.type = 'button';
    favorite.setAttribute('aria-label', `${isSaved ? 'Remover' : 'Salvar'} ${reading.id} ${isSaved ? 'dos' : 'nos'} favoritos`);
    favorite.setAttribute('aria-pressed', String(isSaved));
    favorite.addEventListener('click', () => {
      setFavorite(reading.id);
      const replacement = document.querySelector(`[data-reading-id="${reading.id}"] .favorite-button`);
      if (replacement) replacement.focus();
      else $('favorite-filter').focus();
    });
    footer.append(open, favorite);
    card.append(top, heading, summary, reference, footer);
    return card;
  }

  function categoryFilters() {
    const container = $('category-filters');
    const entries = [['todos', 'Todos os temas'], ...Object.entries(state.categories)];
    for (const [id, title] of entries) {
      const count = id === 'todos' ? state.readings.length : state.readings.filter((r) => r.categoria === id).length;
      const button = element('button', 'category-chip', `${title} · ${count}`);
      button.type = 'button';
      button.dataset.category = id;
      button.setAttribute('aria-pressed', String(id === state.category));
      button.addEventListener('click', () => {
        state.category = id;
        state.visible = PAGE_SIZE;
        render();
      });
      container.append(button);
    }
  }

  function matches(reading) {
    if (state.category !== 'todos' && state.category !== reading.categoria) return false;
    if (state.favoritesOnly && !state.favorites.has(reading.id)) return false;
    const haystack = normalize([reading.titulo, reading.resumo, reading.situacao, reading.referencia_biblica, reading.unidade_de_leitura, reading.id, state.categories[reading.categoria]].join(' '));
    return normalize(state.query).trim().split(/\s+/).filter(Boolean).every((word) => haystack.includes(word));
  }

  function render() {
    const matched = state.readings.filter(matches);
    const shown = matched.slice(0, state.visible);
    const fragment = document.createDocumentFragment();
    shown.forEach((reading) => fragment.append(makeCard(reading)));
    $('reading-grid').replaceChildren(fragment);
    $('results-count').textContent = `${matched.length} ${matched.length === 1 ? 'leitura encontrada' : 'leituras encontradas'}${shown.length < matched.length ? ` · ${shown.length} exibidas` : ''}`;
    $('empty-state').hidden = matched.length > 0;
    $('empty-description').textContent = state.favoritesOnly && state.favorites.size === 0 ? 'Você ainda não salvou leituras. Use o coração de uma leitura para encontrá-la aqui depois.' : 'Experimente outra palavra ou escolha outro tema.';
    $('load-more').hidden = shown.length >= matched.length;
    $('load-more').textContent = `Mostrar mais leituras (${matched.length - shown.length}) ↓`;
    $('clear-filters').hidden = state.category === 'todos' && !state.query && !state.favoritesOnly;
    $('favorite-count').textContent = state.favorites.size;
    $('favorite-filter').setAttribute('aria-pressed', String(state.favoritesOnly));
    document.querySelectorAll('[data-category]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.category === state.category)));
  }

  function resetFilters() {
    state.category = 'todos';
    state.query = '';
    state.favoritesOnly = false;
    state.visible = PAGE_SIZE;
    $('search').value = '';
    render();
  }

  function bindEvents() {
    $('search').addEventListener('input', (event) => {
      state.query = event.target.value;
      state.visible = PAGE_SIZE;
      render();
    });
    $('favorite-filter').addEventListener('click', () => {
      state.favoritesOnly = !state.favoritesOnly;
      state.visible = PAGE_SIZE;
      render();
    });
    $('clear-filters').addEventListener('click', resetFilters);
    $('reset-empty').addEventListener('click', () => { resetFilters(); $('search').focus(); });
    $('load-more').addEventListener('click', () => {
      const oldCount = document.querySelectorAll('.reading-card').length;
      state.visible += PAGE_SIZE;
      render();
      document.querySelectorAll('.read-button')[oldCount]?.focus();
    });
    $('dialog-close').addEventListener('click', () => $('reading-dialog').close());
    $('reading-dialog').addEventListener('close', () => {
      if (state.trigger?.isConnected) state.trigger.focus();
      else {
        const replacement = state.current && document.querySelector(`[data-reading-id="${state.current.id}"] .read-button`);
        (replacement || $('favorite-filter')).focus();
      }
    });
    $('reading-dialog').addEventListener('click', (event) => {
      const rect = $('reading-dialog').getBoundingClientRect();
      if (event.target === $('reading-dialog') && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) $('reading-dialog').close();
    });
    $('dialog-favorite').addEventListener('click', () => {
      if (!state.current) return;
      setFavorite(state.current.id);
      $('dialog-feedback').textContent = state.favorites.has(state.current.id) ? (state.storageAvailable ? 'Leitura salva neste navegador.' : 'Leitura salva apenas nesta sessão.') : 'Leitura removida dos favoritos.';
    });
    $('dialog-share').addEventListener('click', async () => {
      if (!state.current) return;
      try {
        await navigator.clipboard.writeText(state.current.url_leitura);
        $('dialog-feedback').textContent = 'Link do texto completo copiado.';
      } catch {
        $('dialog-feedback').textContent = 'A cópia automática está indisponível. Abra o texto completo e copie o endereço do navegador.';
      }
    });
    $('clear-favorites').addEventListener('click', () => {
      state.favorites.clear();
      let removed = true;
      try { localStorage.removeItem(STORAGE_KEY); } catch { removed = false; }
      render();
      updateDialogFavorite();
      $('storage-status').textContent = removed ? 'Favoritos apagados deste navegador.' : 'A seleção desta sessão foi apagada. O navegador não permitiu confirmar a remoção dos favoritos guardados.';
    });
  }

  const menuToggle = $('menu-toggle');
  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    $('main-nav').classList.remove('is-open');
  }
  menuToggle.addEventListener('click', () => {
    const opened = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!opened));
    $('main-nav').classList.toggle('is-open', !opened);
  });
  $('main-nav').addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !$('reading-dialog').open && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      event.preventDefault();
      $('search').focus();
      $('search').scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  });

  async function initialize() {
    try {
      const response = await fetch('dados/catalogo.json');
      if (!response.ok) throw new Error('Catálogo indisponível');
      const data = await response.json();
      if (data.total_leituras !== 24 || !Array.isArray(data.leituras) || data.leituras.length !== 24 || new Set(data.leituras.map((r) => r.id)).size !== 24 || Object.keys(data.categorias || {}).length !== 6) throw new Error('Catálogo incompatível');
      for (const reading of data.leituras) {
        if (!/^GF-\d{3}$/.test(reading.id) || !data.categorias[reading.categoria] || !['titulo', 'resumo', 'situacao', 'referencia_biblica', 'unidade_de_leitura', 'edicao_biblica'].every((key) => typeof reading[key] === 'string')) throw new Error('Leitura inválida');
        const url = new URL(reading.url_leitura);
        if (url.origin !== 'https://biblia-crista-guerreiros-de-fe.aldenirmed.chatgpt.site' || !url.pathname.startsWith('/leituras/')) throw new Error('Rota inválida');
      }
      state.readings = data.leituras;
      state.categories = data.categorias;
      readFavorites();
      categoryFilters();
      bindEvents();
      render();
    } catch {
      $('results-count').textContent = 'Catálogo temporariamente indisponível.';
      $('load-error').hidden = false;
      $('favorite-filter').disabled = true;
      $('search').disabled = true;
    }
  }
  initialize();
})();
