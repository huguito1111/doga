document.addEventListener('DOMContentLoaded', function () {

    const toggleNav = document.querySelector('.nav-toggle');
    const menuNav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        if (menuNav) menuNav.classList.toggle('active');
        if (toggleNav) toggleNav.classList.toggle('active');
    }

    if (toggleNav) {
        toggleNav.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuNav) menuNav.classList.remove('active');
            if (toggleNav) toggleNav.classList.remove('active');
        });
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

   
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const services = document.querySelector('#services');
            if (services) {
                services.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    console.log('Primera versión funcional del sitio cargada');
});
