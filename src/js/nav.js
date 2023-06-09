import { debounce } from './util.js';

export default (function() {
    let nav = document.querySelector('#nav');
    let navBtns = document.querySelectorAll('#nav .btn');
    let navToggle = document.querySelector('#nav-toggle');
    let bars = document.querySelectorAll('#nav-toggle .bar');
    let isMobile;

    function toggleNav() {
        bars.forEach(bar => bar.classList.toggle('x'));
        nav.classList.toggle('open');
        navBtns.forEach(btn => btn.tabIndex = btn.tabIndex === 0 ? -1 : 0);
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
            navBtns.forEach(btn => btn.tabIndex = isMobile ? -1 : 0);
            bars.forEach(bar => bar.classList.remove('x'))
        }
    }

    window.addEventListener('load', () => {
        setupEventListeners();
        handleResponsiveLayout();
    });

    window.addEventListener('resize', debounce(handleResponsiveLayout, 300));
})();