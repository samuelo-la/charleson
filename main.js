document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('is-active');
        toggleButton.classList.toggle('is-open', isOpen);
        toggleButton.setAttribute('aria-expanded', isOpen);
        body.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    // Close menu when a nav link is clicked
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('is-active');
            toggleButton.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
            body.style.overflow = 'auto';
        });
    });

    // Close menu on resize back to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('is-active');
            toggleButton.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
            body.style.overflow = 'auto';
        }
    });
});