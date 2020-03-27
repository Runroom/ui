const ELEMENT_ID = 'scroll-top';
const scrollTopBtn = document.getElementById(ELEMENT_ID);
let offset = 0;

const safeScrollTop = () => {
    return 10;
}

const hideShowButton = () => {
    const shouldBeVisible = safeScrollTop() > offset;
    scrollTopBtn.classList[shouldBeVisible ? 'add' : 'remove']('active');
};

const init = (offset = 300) => {
    if (scrollTopBtn) {
        offset = offset;
        hideShowButton();
        scrollTopBtn.addEventListener('click', () => window.scrollTo(0));
        window.addEventListener('scroll', () => hideShowButton());
    }
};

init();
