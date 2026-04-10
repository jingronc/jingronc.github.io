// ── THEME TOGGLE ─────────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

// Persist theme across visits
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── SCROLL ANIMATIONS ────────────────────────────────────
const scrollEls = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

scrollEls.forEach((el) => observer.observe(el));

// ── NAV SMOOTH SCROLL (mobile fallback) ─────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── NAV SHRINK ON SCROLL ─────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 40 ? '0.6rem 2rem' : '1rem 2rem';
}, { passive: true });
