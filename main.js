(() => {
  const root = document.documentElement;
  root.classList.remove('no-js');

  // ---------- Utilities ----------
  const qs = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  // ---------- Year ----------
  const yearEl = qs('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- Theme Toggle (localStorage) ----------
  const THEME_KEY = 'csc_theme';
  const themeToggle = qs('[data-theme-toggle]');

  const getPreferredTheme = () => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    const metaTheme = qs('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#f6f3ec' : '#0f0f12');
  };

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // ---------- Mobile Nav ----------
  const navToggle = qs('[data-nav-toggle]');
  const navMenu = qs('[data-nav-menu]');

  const closeNav = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const openNav = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeNav() : openNav();
    });

    document.addEventListener('click', (e) => {
      const t = e.target;
      if (!navMenu.classList.contains('is-open')) return;
      if (navMenu.contains(t) || navToggle.contains(t)) return;
      closeNav();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });

    qsa('.nav-link', navMenu).forEach((a) => {
      a.addEventListener('click', () => closeNav());
    });
  }

  // ---------- Reveal on scroll (IntersectionObserver) ----------
  const revealEls = qsa('.reveal');
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Smooth scroll offset for sticky header ----------
  const header = qs('[data-header]');
  const headerOffset = () => (header ? header.getBoundingClientRect().height + 10 : 80);

  const onAnchorClick = (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (!hash || hash === '#') return;
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
    history.pushState(null, '', hash);
  };

  document.addEventListener('click', onAnchorClick);

  // ---------- FAQ Accordion (accessible JS) ----------
  const accordion = qs('[data-accordion]');
  if (accordion) {
    const items = qsa('.accordion-item', accordion);

    const closeItem = (item) => {
      item.classList.remove('is-open');
      const btn = qs('.accordion-trigger', item);
      const panel = qs('.accordion-panel', item);
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (panel) panel.style.display = 'none';
    };

    const openItem = (item) => {
      item.classList.add('is-open');
      const btn = qs('.accordion-trigger', item);
      const panel = qs('.accordion-panel', item);
      if (btn) btn.setAttribute('aria-expanded', 'true');
      if (panel) panel.style.display = 'block';
    };

    // Assign unique IDs for panels and connect ARIA attributes
    items.forEach((item, idx) => {
      const btn = qs('.accordion-trigger', item);
      const panel = qs('.accordion-panel', item);
      if (!btn || !panel) return;

      const panelId = `faq-panel-${idx + 1}`;
      const btnId = `faq-trigger-${idx + 1}`;
      panel.id = panel.id || panelId;
      btn.id = btn.id || btnId;

      btn.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', btn.id);

      // Ensure closed by default
      closeItem(item);

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close others for a tidy experience (single-open)
        items.forEach(i => i !== item && closeItem(i));
        isOpen ? closeItem(item) : openItem(item);
      });

      btn.addEventListener('keydown', (e) => {
        // Simple roving focus with arrow keys
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
        e.preventDefault();
        const triggers = items.map(i => qs('.accordion-trigger', i)).filter(Boolean);
        const currentIndex = triggers.indexOf(btn);
        if (currentIndex < 0) return;

        let nextIndex = currentIndex;
        if (e.key === 'ArrowDown') nextIndex = (currentIndex + 1) % triggers.length;
        if (e.key === 'ArrowUp') nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        if (e.key === 'Home') nextIndex = 0;
        if (e.key === 'End') nextIndex = triggers.length - 1;
        triggers[nextIndex].focus();
      });
    });
  }

  // ---------- Contact form validation + success + payload logging ----------
  const form = qs('#inquiry-form');
  const success = qs('#form-success');

  const setError = (name, msg) => {
    const err = qs(`[data-error-for="${name}"]`);
    if (err) err.textContent = msg || '';
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);

  const validateForm = (data) => {
    let ok = true;

    if (!data.name.trim()) { setError('name', 'Please enter your name.'); ok = false; } else setError('name', '');
    if (!data.email.trim()) { setError('email', 'Please enter your email.'); ok = false; }
    else if (!validateEmail(data.email)) { setError('email', 'Please enter a valid email address.'); ok = false; }
    else setError('email', '');

    if (!data.interest) { setError('interest', 'Please select what you’re interested in.'); ok = false; } else setError('interest', '');
    if (!data.message.trim()) { setError('message', 'Please add a short message so we can help.'); ok = false; } else setError('message', '');

    return ok;
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (success) success.hidden = true;

      const fd = new FormData(form);
      const payload = {
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || ''),
        interest: String(fd.get('interest') || ''),
        message: String(fd.get('message') || ''),
        context: {
          page: 'Crimson SparrowCollective (static)',
          timestamp: new Date().toISOString()
        }
      };

      const ok = validateForm(payload);
      if (!ok) return;

      console.log('Crimson SparrowCollective Inquiry Payload:', JSON.stringify(payload, null, 2));

      // Faux submit success (offline site)
      form.reset();
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest' });
      }
    });
  }

  // ---------- Social placeholders ----------
  qsa('[data-social]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      // Offline placeholder
      const label = a.textContent.trim() || 'Social';
      console.log(`[Placeholder link] ${label} clicked.`);
    });
  });

  // ---------- Featured view toggle + carousel ----------
  const featured = qs('[data-featured]');
  if (featured) {
    const grid = qs('[data-featured-grid]', featured);
    const carousel = qs('[data-featured-carousel]', featured);
    const track = qs('[data-carousel-track]', featured);
    const status = qs('[data-carousel-status]', featured);
    const prevBtn = qs('[data-carousel-prev]', featured);
    const nextBtn = qs('[data-carousel-next]', featured);
    const viewBtns = qsa('[data-view]');

    const state = { view: 'grid', index: 0, slides: [] };

    const buildSlides = () => {
      if (!grid || !track) return;
      track.innerHTML = '';
      const products = qsa('.product', grid);
      state.slides = products.map((p) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.appendChild(p.cloneNode(true));
        track.appendChild(slide);
        return slide;
      });
      state.index = 0;
      updateCarousel();
    };

    const updateStatus = () => {
      if (!status) return;
      const total = Math.max(1, state.slides.length);
      status.textContent = `${state.index + 1} / ${total}`;
    };

    const scrollToIndex = (i) => {
      if (!track) return;
      const slide = state.slides[i];
      if (!slide) return;
      const left = slide.offsetLeft;
      track.scrollTo({ left, behavior: prefersReduced ? 'auto' : 'smooth' });
    };

    const updateCarousel = () => {
      const total = state.slides.length || 1;
      state.index = ((state.index % total) + total) % total;
      updateStatus();
      scrollToIndex(state.index);
    };

    const setView = (view) => {
      state.view = view;
      viewBtns.forEach((b) => {
        const active = b.getAttribute('data-view') === view;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      if (view === 'carousel') {
        if (carousel) carousel.hidden = false;
        if (grid) grid.hidden = true;
        if (!state.slides.length) buildSlides();
        // Ensure index aligns after layout
        requestAnimationFrame(updateCarousel);
      } else {
        if (carousel) carousel.hidden = true;
        if (grid) grid.hidden = false;
      }
    };

    viewBtns.forEach((b) => b.addEventListener('click', () => setView(b.getAttribute('data-view') || 'grid')));

    if (prevBtn) prevBtn.addEventListener('click', () => { state.index -= 1; updateCarousel(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { state.index += 1; updateCarousel(); });

    if (track) {
      let raf = 0;
      track.addEventListener('scroll', () => {
        if (state.view !== 'carousel') return;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          // Determine nearest slide
          const scrollLeft = track.scrollLeft;
          let closest = 0;
          let best = Infinity;
          state.slides.forEach((s, idx) => {
            const d = Math.abs(s.offsetLeft - scrollLeft);
            if (d < best) { best = d; closest = idx; }
          });
          state.index = closest;
          updateStatus();
        });
      });
    }

    // default view is grid
    setView('grid');

    // Rebuild on resize for offset recalculation
    window.addEventListener('resize', () => {
      if (state.view === 'carousel') {
        buildSlides();
        requestAnimationFrame(updateCarousel);
      }
    });
  }

  // ---------- Inquire modal + form prefilling ----------
  const modal = qs('[data-modal]');
  const modalCloseEls = modal ? qsa('[data-modal-close]', modal) : [];
  const modalToForm = modal ? qs('[data-modal-to-form]', modal) : null;
  let lastFocus = null;
  let inquireItem = '';

  const openModal = () => {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = qs('[data-modal-close]', modal);
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  if (modal) {
    modalCloseEls.forEach((el) => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (modal.classList.contains('is-open')) closeModal();
    });

    // trap focus
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;
      const focusables = qsa('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
        .filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    if (modalToForm) {
      modalToForm.addEventListener('click', () => {
        // Prefill message with inquire item
        const message = qs('#message');
        if (message && inquireItem) {
          const prefix = `Interested in: ${inquireItem}\n`;
          const existing = message.value.trim();
          message.value = existing ? `${prefix}\n${existing}` : `${prefix}\n`;
        }
        closeModal();
      });
    }
  }

  qsa('[data-inquire]').forEach((btn) => {
    btn.addEventListener('click', () => {
      inquireItem = btn.getAttribute('data-inquire') || '';
      const title = qs('#modal-title');
      if (title) title.textContent = inquireItem ? `Inquire — ${inquireItem}` : 'Inquire';
      openModal();
    });
  });

  // If user clicks outside in backdrop, close (already handled via data-modal-close)
})();