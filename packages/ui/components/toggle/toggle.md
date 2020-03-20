# Component Toggle
Toggle is mainly a JS component build to toggle an element when user clicks to a button.
This component needs javascript to work properly.
This component works properly with the combination of a `button` element with

+ `js-toggle` a class for the trigger element.
+ `aria-controls` an attribute for the button element with ID of the target element that is toggled. Needs a string value.
+ `aria-expanded` an attribute used for accesibility. Indicates the state of the toggle element. Needs `false` string value.

and another element that matches its `id`.

So in order to use this component there are two mandatory variables:
+ `title` Mandatory, any type of html content as the title for the button
+ `content` Mandatory, any type of html content to be shown.

## Use
The basic use of this component in *twig* is as follows:

### Basic Toggle usage
```twig
{% include 'components/toggle/toggle.twig' with {
    component: {
        title: 'Toggle me',
        id: 'showme',
        content: 'This is the content to be shown'
    }
} %}
```

## Options
+ `id` Optional, ID for the content div and the button

## Examples
```twig
{% include 'components/toggle/toggle.twig' with {
    component: {
        content: '',
        id: '',
        title: '',
    }
} %}
```
