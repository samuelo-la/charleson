document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('is-active');
        body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : 'auto';
    });

    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('is-active');
            body.style.overflow = 'auto';
        });
    });
});