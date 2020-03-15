# Component Toggle
Toggle is mainly a JS component build to toggle an element when user clicks to button.
This component needs javascript to work properly.
This component works properly with the combination a button element with

+ `js-toggle` a class for the trigger element.
+ `aria-controls` an attribute for the button element with ID of the target element that is toggled. Needs a string value.
+ `aria-expanded` an attribute used for accesibility. Indicates the state of the toggle element. Needs `false` string value.

and another element that matches its `id`.

So in order to use this component there are two mandatory variables:
+ `title` Mandatory, any type of html content so the toggle button can be shown
+ `id` Mandatory, string for the element to be shown.

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
+ `titleWrapper` String of html tag to wrap the trigger button with.
+ `content` Any type of content to show inside the toggled element.

## Examples
### Toggle with all options
```twig
{% include 'components/toggle/toggle.twig' with {
    component: {
        content: 'This is the content',
        id: 'id1',
        title: 'Toggle me',
        titleWrapper: 'h2'
    }
} %}
```

### Toggle without content in it but outside it
```twig
<section>
    {% include 'components/toggle/toggle.twig' with {
        component: {
            title: 'Toggle me',
            titleWrapper: 'h2',
            id: 'id2'
        }
    } %}
    <p id="id2" hidden>This is the content</p>
</section>
```
