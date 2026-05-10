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

  // ---------- 7. SINGLE-OPEN FAQ (par groupe) ----------
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
