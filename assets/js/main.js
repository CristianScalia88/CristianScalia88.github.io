// Cat Bubble Island — small progressive-enhancement script
// 1) Footer year  2) Mobile nav toggle  3) Floating hero bubbles

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.right = '20px';
      navLinks.style.background = '#fff8ec';
      navLinks.style.padding = '18px 24px';
      navLinks.style.borderRadius = '16px';
      navLinks.style.boxShadow = '0 10px 24px -10px rgba(90,61,43,0.35)';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  const field = document.getElementById('bubblesField');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (field && !prefersReducedMotion) {
    const BUBBLE_COUNT = 16;
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const b = document.createElement('span');
      b.className = 'floaty';
      const size = 10 + Math.random() * 46;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
      const duration = 10 + Math.random() * 12;
      b.style.animationDuration = `${duration}s`;
      b.style.animationDelay = `-${Math.random() * duration}s`;
      field.appendChild(b);
    }
  }
});
