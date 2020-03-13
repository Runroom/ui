const ELEMENT_ID = 'scroll-top';
const scrollTopBtn = document.getElementById(ELEMENT_ID);
let visibilityOffset = 0;

const safeScrollTop = () => {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const hideShowButton = () => {
    const shouldBeVisible = safeScrollTop() > showOffset;
    scrollTopBtn.classList[shouldBeVisible ? 'add' : 'remove']('active');
};

const init = (showOffset = 0, scrollOffset = 0) => {
    if (scrollTopBtn) {
        visibilityOffset = showOffset;
        hideShowButton();
        scrollTopBtn.addEventListener('click', () => window.scrollTo(0, scrollOffset));
        window.addEventListener('scroll', () => hideShowButton());
    }
};

init(100);
