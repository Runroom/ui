import forEach from '@runroom/purejs/lib/foreach'

const TOGGLE_CLASS = 'js-toggle'
const toggles = document.querySelectorAll(`.${TOGGLE_CLASS}`);

const handleVisibility = element => {
  if (element === 'undefined' && !element.length) return;
  return element.hidden = !element.hidden;
};

const handleExpanded = element => {
  const attr = element.getAttribute('aria-expanded');

  if (!attr.length) return;
  element.setAttribute('aria-expanded', attr === 'true' ? 'false' : 'true');
};

const toggle = () => {
  if (!toggles.length) return;

  forEach(toggles, toggle => {
    toggle.addEventListener('click', () => {
      const target = toggle.getAttribute('aria-controls');
      const targetElement = document.getElementById(target);

      if (targetElement == null) return;
      if (toggle.getAttribute('aria-expanded') == null) return;

      handleVisibility(targetElement);
      handleExpanded(targetElement);
    });
  });
};

export default toggle;
