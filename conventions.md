# Conventions
[CSS](#when-writting-css) and [JS](#when-writting-js) code agreements for this library.
## When writting CSS
### Naming and Class conventions
* Use BEM and kebab-case when necessary.
````
scroll-top
scroll-top__button
scroll-top__button-title
````

* Don't style `status classes`, just when used in combination with another one.
````
.is-active {}
.component.is-active { font-weight: bold; }
````
* Component's class name for styles is the same as Component's name.

Component file
````
'toggle.twig';
````
Component's Style file
````
.toggle {
  // some style here
}
````

## When writting JS
### Naming and declaration convenitons
* Use capital letter for `const` name declarations unless it stores an element.
* Don't include `.` when stoying class names, instead use template literals when a dot is necessary.
`````
const COMPONENT_CLASS = 'button';
const component = document.querySelector(`.${COMPONENT_CLASS}`);
`````

### Functions, declarations and exporting
* Place `const` or `let` declarations outside functions.
* Don't nest functions, declare helper functions outside the main one.
* Name Component's main function the same name as the component's name.
* Export component's function without executing it. Execute the function when importing.


Component script file
````
const COMPONENT_CLASS = 'toggle';

const handleToggle = () => {
  // helper function
};

const toggle = () => {
  // main function

  handleToggle();
};

export default toggle;
````
Import script file
````
import toggle from toggle.js
toggle();
````

### Class Constuctor
* Use `PascalCase` for  when using `class` constructor, and `camelCase` for instances inside it.

````
class MyClass {
	constructor() {}
	handleEvent() {}
}
````
