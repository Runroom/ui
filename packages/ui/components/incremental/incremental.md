# Component Incremental
Use the `incremental` component when you want the user to increase/decrease a number. It can be used inside or outside a form.

The input from the component is readonly and it only allows `[0-9]+` type of value.
This component needs javascript to work properly.

## Use
The basic use of this component in *twig* is as follows:
```twig
{% include 'components/incremental/incremental.twig' with {
    component: {
        name: 'incremental'
    }
} %}
```

## Options
+ `name`: Input name.
+ `id1` & `id2` - *Optional*: Has default values. Used for A11y, sets the id from the buttons as `aria-controls` for the input.
+ `max` - *Optional*: Defaults to 100. Maximum value of the increment.
+ `min` - *Optional*: Defaults to 0. Mínimum value of the increment.
+ `initialValue` - *Optional*: Defaults to 0. Initial value, can be overriden in case the element starts with a value.
+ `incrementSize` - *Optional*: Defaults to 1. Increment value that will be applied in each one of the interactions.
+ `title` - *Optional*: Defaults to 'Numero de elementos'. Used for Ally, the voice reader will read this title after the value of the input.

## A11y
+ The component is defined as `aria-live: polite` so the voice reader reads the changes each time the component is updated.
+ It is also defined as `aria-atomic: true` so the voice reader reads when any changes is applied to the component.
+ The buttons are linked with the input through `aria-controls`.
+ The input has `aria-valuemin` and `aria-valuemax` defined.

## Examples
### Incremental with *max* and *min* values
```twig
{% include 'components/incremental/incremental.twig' with {
    component: {
        name: 'incremental',
        max: 5,
        min: 1
    }
} %}
```

### Incremental with *initialValue* and *incrementSize*
```twig
{% include 'components/incremental/incremental.twig' with {
    component: {
        name: 'incremental',
        initialValue: 20,
        incrementSize: 5
    }
} %}
```
