const COMPONENT_CLASS = 'js-incremental';
const BUTTON_CLASS = 'js-incremental-button';

const calculateNewQuantity = (value, change, max, min) => {
  const newQuantity = parseInt(value) + parseInt(change) || 0;

  if (newQuantity <= parseInt(max) && newQuantity >= parseInt(min)) return newQuantity;
  return parseInt(value);
};

const incremental = callback => {
  const components = document.querySelectorAll(`.${COMPONENT_CLASS}`);

  for (let i = 0; i < components.length; i++) {
    const buttons = components[i].querySelectorAll(`.${BUTTON_CLASS}`);
    const componentMax = parseInt(components[i].getAttribute('data-max'));
    const componentMin = parseInt(components[i].getAttribute('data-min'));
    const input = components[i].querySelector('input[type="text"]');

    for (let z = 0; z < buttons.length; z++) {
      buttons[z].addEventListener('click', event => {
        const increment = event.target.getAttribute('data-increment');
        const value = calculateNewQuantity(input.value, increment, componentMax, componentMin);

        input.value = value;

        for (let j = 0; j < buttons.length; j++) {
          const shouldDisable = (value === componentMax && buttons[j].dataset.plus !== undefined)
            || (value === componentMin && buttons[j].dataset.minus !== undefined);

          if (shouldDisable) {
            buttons[j].setAttribute('disabled', true);
            buttons[j].setAttribute('aria-disabled', true);
          } else {
            buttons[j].removeAttribute('disabled');
            buttons[j].removeAttribute('aria-disabled');
          }
        }

        if (typeof callback === 'function') callback();
      });
    }
  };
};

incremental(() => {
  console.log('Click!');
});
