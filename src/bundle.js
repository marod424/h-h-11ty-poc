(function () {
    'use strict';

    let nav = document.querySelector('#nav');
    let navToggle = document.querySelector('#nav-toggle');
    let bars = document.querySelectorAll('#nav-toggle .bar');
    let isMobile;

    function toggleNav() {
        bars.forEach(bar => bar.classList.toggle('x'));
        nav.classList.toggle('open');
    }

    function setupEventListeners() {
        navToggle.addEventListener('click', toggleNav);
        navToggle.addEventListener('keypress', event => event.key === 'Enter' && toggleNav());
    }

    function handleResponsiveLayout() {
        const currentIsMobile = window.matchMedia('(max-width: 768px)').matches;

        if (currentIsMobile !== isMobile) {
            isMobile = currentIsMobile;
            isMobile ? nav.classList.add('mobile') : nav.classList.remove('mobile');
            nav.classList.remove('open');
        }
    }

    function debounce(func, wait) {
        let timeout;

        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        }
    }

    window.addEventListener('load', () => {
        setupEventListeners();
        handleResponsiveLayout();
    });

    window.addEventListener('resize', debounce(handleResponsiveLayout, 300));
}());

