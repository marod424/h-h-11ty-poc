(function () {
    'use strict';

    let nav = document.querySelector('#nav');
    let openBtn = document.querySelector('#nav-open-btn');
    let closeBtn = document.querySelector('#nav-close-btn');
    let isMobile;

    function openNav() {
        openBtn.classList.remove('show');
        closeBtn.classList.add('show');
        nav.classList.add('open');
    }

    function closeNav() {
        openBtn.classList.add('show');
        closeBtn.classList.remove('show');
        nav.classList.remove('open');
    }

    function setupEventListeners() {
        openBtn.addEventListener('click', openNav);
        closeBtn.addEventListener('click', closeNav);
        openBtn.addEventListener('keypress', event => event.key === 'Enter' && openNav());
        closeBtn.addEventListener('keypress', event => event.key === 'Enter' && closeNav());
    }

    function handleResponsiveLayout() {
        const currentIsMobile = window.matchMedia('(max-width: 768px)').matches;

        if (currentIsMobile !== isMobile) {
            isMobile = currentIsMobile;

            isMobile ? nav.classList.add('mobile') : nav.classList.remove('mobile');
            isMobile ? openBtn.classList.add('show') : openBtn.classList.remove('show');
            closeBtn.classList.remove('show');
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

