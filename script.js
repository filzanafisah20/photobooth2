/* ═══════════════════════════════════════════
   JUMINO - Navigation Logic
   (Tutorial sekarang pakai Trinket Python embed,
    jadi slideshow JS lama sudah dihapus.)
   ═══════════════════════════════════════════ */

// ─── Navigation ───
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    target.style.animation = 'none';
    target.offsetHeight; // force reflow
    target.style.animation = '';
  }

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(pageId)) {
      a.classList.add('active');
    }
  });

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Mobile Menu ───
function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('open');
}

// ─── Navbar Scroll Effect ───
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', function() {
  navigateTo('page-home');
});
