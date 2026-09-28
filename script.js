(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const themeButton = document.getElementById('theme-toggle');
  function syncTheme() {
    const dark = root.dataset.theme === 'dark';
    themeButton?.setAttribute('aria-pressed', String(dark));
    themeButton?.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#181a19' : '#f5f3ed');
  }
  syncTheme();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('hilcar-theme', root.dataset.theme); } catch (_) { /* Theme still works without storage. */ }
    syncTheme();
  });
  const nav = document.getElementById('primary-nav');
  const navToggle = document.getElementById('nav-toggle');
  function closeMenu() {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Abrir menu');
  }
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      closeMenu(); navToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav?.contains(event.target) && !navToggle?.contains(event.target)) closeMenu();
  });
  matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

  const marquee = document.querySelector('.expertise-strip');
  const marqueeToggle = document.querySelector('.marquee-toggle');
  marqueeToggle?.addEventListener('click', () => {
    const paused = marquee.classList.toggle('is-paused');
    marqueeToggle.setAttribute('aria-pressed', String(paused));
    marqueeToggle.querySelector('span').textContent = paused ? 'Retomar' : 'Pausar';
    marqueeToggle.querySelector('path').setAttribute('d', paused ? 'M8 5l11 7-11 7Z' : 'M9 5v14M15 5v14');
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', async event => {
    event.preventDefault();
    if (form.dataset.sending === 'true' || !form.reportValidity()) return;
    const name = form.elements.namedItem('name');
    const message = form.elements.namedItem('message');
    if (!name.value.trim() || !message.value.trim()) {
      status.textContent = 'Preenche o teu nome e a mensagem antes de enviar.';
      status.dataset.state = 'error';
      (!name.value.trim() ? name : message).focus();
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    const label = document.getElementById('submit-label');
    form.dataset.sending = 'true';
    form.setAttribute('aria-busy', 'true');
    button.disabled = true;
    label.textContent = 'A enviar…';
    status.textContent = 'A enviar a tua mensagem…';
    status.dataset.state = 'pending';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission failed');
      status.textContent = 'Obrigado! A tua mensagem foi enviada. Falamos em breve.';
      status.dataset.state = 'success';
      form.reset();
    } catch (_) {
      status.textContent = 'Não foi possível confirmar o envio. Tenta novamente ou contacta-me por email ou WhatsApp.';
      status.dataset.state = 'error';
    } finally {
      clearTimeout(timeout);
      form.dataset.sending = 'false';
      form.removeAttribute('aria-busy');
      button.disabled = false;
      label.textContent = 'Enviar mensagem';
    }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
