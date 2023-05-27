(function () {
    'use strict';

    let nav = document.querySelector('#nav');
    let navOpenBtn = document.querySelector('#nav-open-btn');
    let navCloseBtn = document.querySelector('#nav-close-btn');

    function handleNavOpenAction() {
        navOpenBtn.style.display = 'none';
        navCloseBtn.style.display = 'flex';
        nav.classList.add('open');
    }

    function handleNavCloseAction() {
        navOpenBtn.style.display = 'flex';
        navCloseBtn.style.display = 'none';
        nav.classList.remove('open');
    }

    function handleResponsiveLayout() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        isMobile ? nav.classList.add('mobile') : nav.classList.remove('mobile');
        navOpenBtn.style.display = isMobile ? 'flex' : 'none';
        navCloseBtn.style.display = 'none';

        navOpenBtn.addEventListener('click', handleNavOpenAction);
        navCloseBtn.addEventListener('click', handleNavCloseAction);
        navOpenBtn.addEventListener('touched', handleNavOpenAction);
        navCloseBtn.addEventListener('touched', handleNavCloseAction);
        navOpenBtn.addEventListener('keypress', event => event.key === 'Enter' && handleNavOpenAction());
        navCloseBtn.addEventListener('keypress', event => event.key === 'Enter' && handleNavCloseAction());
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

    window.addEventListener('load', handleResponsiveLayout);
    window.addEventListener('resize', debounce(handleResponsiveLayout, 300));
}());

