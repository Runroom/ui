# Component Scroll Top

Use the `scrollTop` component to navigate to the top of a page or to the position indicated. The `scrollTop` button can be configured to hide/show from a certain scrolling point from the page.

## Usage

The basic use of this component in *twig* is as follows:

```twig
{% include 'components/scrollTop/scrollTop.twig' with {
  component: {
      text: '',
      class: ''
  }
} %}
```

## Options (Twig)

+ `text` - *Optional*: Defaults to Top. Button content. It accepts html characters as it's parsed as raw.
+ `class` - *Optional*: Allows the addition of custom classes.

## Options (JS)

+ `selector` - *Optional*: Defaults to `#scroll-top`. Offset from which the button will be toggled visible / not visible.
+ `showOffset` - *Optional*: Defaults to 0. Offset from which the button will be toggled visible / not visible.
+ `scrollOffset` - *Optional*: Defaults to 0. Offset added to the scrolling top position.
+ `speed` - *Optional*: Defaults to 300. Time in _milliseconds_ to perform the animation.

## Examples

### Basic example

```twig
{% include 'components/scrollTop/scrollTop.twig' %}
```

### HTML content inside the button

```twig
{% include 'components/scrollTop/scrollTop.twig' with {
  component: {
      text: '<b>Top</b>'
  }
} %}
```

## Dependencies

This component uses as a dependency the vanillajs library [purejs](https://github.com/Runroom/purejs):

+ Animating the scroll position
+ Calculating scroll distance to page top
