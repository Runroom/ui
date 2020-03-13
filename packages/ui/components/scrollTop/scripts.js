import animateTo from '@runroom/purejs/lib/animateTo';

const ELEMENT_ID = 'scroll-top';
const scrollTopBtn = document.getElementById(ELEMENT_ID);
let visibilityOffset = 0;

const safeScrollTop = () => {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const hideShowButton = () => {
    const shouldBeVisible = safeScrollTop() > visibilityOffset;
    scrollTopBtn.classList[shouldBeVisible ? 'add' : 'remove']('is-active');
};

const init = (showOffset = 0, scrollOffset = 0) => {
    if (scrollTopBtn) {
        visibilityOffset = showOffset;
        hideShowButton();
        scrollTopBtn.addEventListener('click', () => animateTo({ element: scrollOffset }));
        window.addEventListener('scroll', () => hideShowButton());
    }
};

init(100);
