# Toggle Helpers
Toggle is mainly a JS helper build to toggle an element when user clicks to a button.
This helper needs javascript to work properly.
This helper works properly with the combination of a `button` element (or and element that dispatches a click event) with

+ `js-toggle` a class for the trigger element.
+ `aria-controls` an attribute for the button element with ID of the target element that is toggled. Needs a string value.
+ `aria-expanded` an attribute used for accesibility. Indicates the state of the toggle element. Needs `false` string value.

and another element that matches its `id` (`hidden` attribute by default is recommended).

## Basic Toggle usage
```
<button
  class="js-toggle"
  aria-controls="information"
  aria-expanded="false">
  Toggle Me
</button>
<div id="information" hidden>
  Some information here
</div>
```
