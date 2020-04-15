import animateTo from '@runroom/purejs/lib/animateTo';
import safeScrollTop from '@runroom/purejs/lib/safeScrollTop';

class ScrollTop {
  constructor({ selector = '#scroll-top', showOffset = 0, scrollOffset = 0, speed = 300 }) {
    this.scrollTopBtn = document.querySelector(selector);
    this.showOffset = showOffset;
    this.scrollOffset = scrollOffset;
    this.speed = speed;

    this.hideShowButton();

    this.scrollTopBtn.addEventListener('click', () => animateTo({ element: this.scrollOffset, speed: this.speed }));
    window.addEventListener('scroll', () => this.hideShowButton());
  }

  _hideShowButton() {
    const shouldBeVisible = safeScrollTop() > this.showOffset;
    this.scrollTopBtn.classList[shouldBeVisible ? 'add' : 'remove']('is-active');
  }
}

// ScrollTop({ showOffset: 100 });
const scrollTopButton = new ScrollTop({ showOffset: 100 });
