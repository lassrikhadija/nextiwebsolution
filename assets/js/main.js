/* =========================================================
   NEXTIWEB SOLUTIONS — main.js
   Vanilla JS, zero dependencies, defer-loaded.
   ========================================================= */
(function () {
  'use strict';

  // ---------- 1. MOBILE NAV ----------
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.setAttribute('data-open', String(!open));
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- 2. SCROLL REVEAL ----------
  const revealable = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealable.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    revealable.forEach((el) => io.observe(el));
  } else {
    revealable.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- 3. CARD POINTER GLOW ----------
  document.querySelectorAll('.card, .card-sector').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });

  // ---------- 4. HEADER SHADOW ON SCROLL ----------
  const header = document.querySelector('.header');
  if (header) {
    let ticking = false;
    const update = () => {
      const scrolled = window.scrollY > 8;
      header.style.boxShadow = scrolled ? '0 4px 16px -8px rgba(0, 0, 0, 0.6)' : 'none';
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ---------- 5. SMOOTH ANCHOR (avec offset header) ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- 6. CURRENT YEAR ----------
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // ---------- 7. GESTIONNAIRE COOKIES (Loi 25) ----------
  // 3 niveaux : Accepter tout / Refuser / Personnaliser (granular)
  const CONSENT_KEY = 'nws-consent';
  const CONSENT_VERSION = '2'; // bump car format granulaire
  const banner = document.getElementById('cookie-banner');

  if (banner) {
    const stored = localStorage.getItem(CONSENT_KEY);
    const isValid = stored && stored.startsWith(CONSENT_VERSION + ':');

    if (!isValid) {
      requestAnimationFrame(() => banner.setAttribute('data-open', 'true'));
    } else {
      // Restaure l'état des checkboxes depuis le choix précédent
      try {
        const payload = stored.split(':').slice(1, -1).join(':'); // au cas où JSON contient ':'
        const choice = JSON.parse(payload);
        const analyticsBox = banner.querySelector('[data-cookie="analytics"]');
        const marketingBox = banner.querySelector('[data-cookie="marketing"]');
        if (analyticsBox) analyticsBox.checked = !!choice.analytics;
        if (marketingBox) marketingBox.checked = !!choice.marketing;
      } catch (e) { /* ignore */ }
    }

    const analyticsBox = banner.querySelector('[data-cookie="analytics"]');
    const marketingBox = banner.querySelector('[data-cookie="marketing"]');

    const recordChoice = (level) => {
      let analytics = false;
      let marketing = false;
      if (level === 'accept-all') {
        analytics = true;
        marketing = true;
        if (analyticsBox) analyticsBox.checked = true;
        if (marketingBox) marketingBox.checked = true;
      } else if (level === 'save') {
        analytics = !!(analyticsBox && analyticsBox.checked);
        marketing = !!(marketingBox && marketingBox.checked);
      } // 'refuse' garde tout à false

      const choice = { essential: true, analytics, marketing };
      const value = CONSENT_VERSION + ':' + JSON.stringify(choice) + ':' + Date.now();
      localStorage.setItem(CONSENT_KEY, value);
      banner.setAttribute('data-open', 'false');
      document.dispatchEvent(new CustomEvent('nws:consent', { detail: choice }));
    };

    const acceptAllBtn = banner.querySelector('[data-consent="accept-all"]');
    const refuseBtn = banner.querySelector('[data-consent="refuse"]');
    const customizeBtn = banner.querySelector('[data-consent="customize"]');
    const saveBtn = banner.querySelector('[data-consent="save"]');

    if (acceptAllBtn) acceptAllBtn.addEventListener('click', () => recordChoice('accept-all'));
    if (refuseBtn) refuseBtn.addEventListener('click', () => recordChoice('refuse'));
    if (saveBtn) saveBtn.addEventListener('click', () => recordChoice('save'));

    // "Personnaliser" — met le focus sur la première checkbox active (signal visuel)
    if (customizeBtn && analyticsBox) {
      customizeBtn.addEventListener('click', () => {
        analyticsBox.focus();
      });
    }

    // "Gérer mes cookies" — boutons dans le footer ou la politique de cookies
    const manageBtns = document.querySelectorAll('#manage-cookies-btn, #manage-cookies-cta, [data-consent="manage"]');
    manageBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        banner.setAttribute('data-open', 'true');
      });
    });
  }

  // ---------- 8. SINGLE-OPEN FAQ (par groupe) ----------
  document.querySelectorAll('.faq-list').forEach((list) => {
    const items = list.querySelectorAll('.faq-item');
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });
})();
