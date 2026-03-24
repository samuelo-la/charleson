document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleButton = document.querySelector('.mobile-nav-toggle');
  const body = document.body;

  if (!toggleButton || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('is-active');
    toggleButton.setAttribute('aria-expanded', 'true');
    toggleButton.setAttribute('aria-label', 'Close navigation menu');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-active');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Open navigation menu');
    body.style.overflow = '';
  }

  toggleButton.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('is-active');
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMenu();
      toggleButton.focus();
    }
  });
});
