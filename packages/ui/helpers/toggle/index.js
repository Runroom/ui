import forEach from '@runroom/purejs/lib/foreach'

const TOGGLE_CLASS = 'js-toggle'
const toggles = document.querySelectorAll(`.${TOGGLE_CLASS}`);

const toggleVisibility = element => element.hidden = !element.hidden;
const toggleExpanded = element => element.setAttribute('aria-expanded', attr === 'true' ? 'false' : 'true');

const toggle = () => {
  if (!toggles.length) return;

  forEach(toggles, element => {
    element.addEventListener('click', () => {
      const target = element.getAttribute('aria-controls');
      const targetElement = document.getElementById(target);

      if (targetElement === null || element.getAttribute('aria-expanded') === null) return;

      toggleVisibility(targetElement);
      toggleExpanded(element);
    });
  });
};

export default toggle;
