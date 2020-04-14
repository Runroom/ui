# Conventions
[CSS](#when-writing-css) and [JS](#when-writing-js) code agreements for this library.
## When writing CSS
### Naming and Class conventions
* Use BEM and kebab-case when necessary.
```
scroll-top
scroll-top__button
scroll-top__button-title
```

* Don't style `status classes`, just when used in combination with another one.
```
[incorrect] .is-active { border: 1px solid; }
[correct]   .component.is-active { font-weight: bold; }
```
* Component's class name for styles is the same as Component's name.

Component file:
```
toggle.twig
```
Component's Style file:
```
.toggle {
  // some style here
}
```

## When writing JS
### Naming and declaration conventions
* Use capital letter for `const` name declarations unless it stores an element.
* Don't include markup (such as `.`) when storing DOM element selectors. Instead use template literals when they are necessary.
```
const TOGGLE_CLASS = 'js-toggle';
const toggle = document.querySelector(`.${TOGGLE_CLASS}`);
```

### Functions, declarations and exporting
* If possible place `const` or `let` declarations outside functions.
* If possible don't nest functions, declare helper functions outside the main one.
* Name Component's main function the same name as the component's name.
* Export component's function without executing it. Execute the function when importing.


Component script file:
```
const COMPONENT_CLASS = 'toggle';

const handleToggle = () => {
  // helper function
};

const toggle = () => {
  // main function

  handleToggle();
};

export default toggle;
```
Import script file:
```
import toggle from toggle.js

toggle();
```

### Class Constructor
* Use `PascalCase` for  when using `class` constructor, and `camelCase` for instances inside it.

```
class MyClass {
	constructor() {}
	handleEvent() {}
}
```
