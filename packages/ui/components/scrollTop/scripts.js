import animateTo from '@runroom/purejs/lib/animateTo';
import safeScrollTop from '@runroom/purejs/lib/safeScrollTop';

const ELEMENT_ID = 'scroll-top';
const scrollTopBtn = document.getElementById(ELEMENT_ID);
let opts = {
    showOffset: 0,
    scrollOffset: 0,
    speed: 300
}

const hideShowButton = () => {
    const shouldBeVisible = safeScrollTop() > opts.showOffset;
    scrollTopBtn.classList[shouldBeVisible ? 'add' : 'remove']('is-active');
};

const init = params => {
    if (scrollTopBtn) {
        opts = { ...opts, ...params };
        hideShowButton();
        scrollTopBtn.addEventListener('click', () => animateTo({ element: opts.scrollOffset, speed: opts.speed }));
        window.addEventListener('scroll', () => hideShowButton());
    }
};

init({ showOffset: 100 });
