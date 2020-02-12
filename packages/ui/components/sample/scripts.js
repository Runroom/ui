const SELECTOR = 'button';

const sample = () => {
  const button = document.querySelector(SELECTOR);

  button.addEventListener('click', () => alert('Oh yeah!'));
}

(function () {
  sample();
})();