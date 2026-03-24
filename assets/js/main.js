document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-nav-toggle');
  var menu = document.getElementById('mobileMenu');

  if (!toggle || !menu) return;

  function setOpen(open) {
    if (open) {
      menu.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.style.overflow = 'hidden';
    } else {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(menu.hasAttribute('hidden'));
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Ensure menu starts closed
  setOpen(false);
});