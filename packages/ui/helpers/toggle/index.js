import forEach from '@runroom/purejs/lib/foreach'

const TOGGLE_CLASS = 'js-toggle'
const toggles = document.querySelectorAll(`.${TOGGLE_CLASS}`);

const toggleVisibility = element => element.hidden = !element.hidden;
const toggleExpanded = element => element.setAttribute('aria-expanded', attr === 'true' ? 'false' : 'true');

const toggle = () => {
  if (!toggles.length) return;

  forEach(toggles, toggle => {
    toggle.addEventListener('click', () => {
      const target = toggle.getAttribute('aria-controls');
      const targetElement = document.getElementById(target);

      if (targetElement === null || toggle.getAttribute('aria-expanded') === null) return;

      toggleVisibility(targetElement);

      toggleExpanded(toggle);
    });
  });
};

export default toggle;
