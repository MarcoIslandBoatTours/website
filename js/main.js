// ── FAQ ACCORDION ─────────────────────────────────────────────
function initFaq() {
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-trigger').forEach(b => {
        b.classList.remove('active');
        const ic = b.querySelector('.faq-icon');
        if (ic) ic.textContent = '+';
      });
      if (!isOpen) {
        answer.classList.add('open');
        this.classList.add('active');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

// ── MOBILE NAV ────────────────────────────────────────────────
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
  }
}

// ── SMOOTH SCROLL ─────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── HERO IMAGE FALLBACK ───────────────────────────────────────
function initImgFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFaq();
  initNav();
  initSmoothScroll();
  initImgFallbacks();
});
