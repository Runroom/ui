const toggle = () => {
  const TOGGLE_CLASS = 'js-toggle'
  const toggles = document.querySelectorAll(`.${TOGGLE_CLASS}`);

  if (!toggles.length.length) return;

  const handleVisibility = element => {
      if (!element.length) return;
      return element.hidden = !element.hidden;
  };

  const handleExpanded = element => {
    const attr = element.getAttribute('aria-expanded');

    if (!attr.length) return;
    element.setAttribute('aria-expanded', attr === 'true' ? 'false' : 'true');
  };

  for (i = 0; i < toggles.length; i++ ) {
    let toggle = toggles[i];

    toggle.addEventListener('click', () => {
        const target = toggle.getAttribute('aria-controls');
        const targetElement = document.getElementById(target);

        handleExpanded(toggle);
        handleVisibility(targetElement);
    });
  };
};

toggle();
