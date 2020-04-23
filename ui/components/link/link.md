## Component Link

Use link component to show a link in your app, therefore *mandatory* configuration is:

`url` [String] Address where the link points to.

`content` [String] Content so the link can be shown in the interface.

Please note:
* `content` can be either one string of text or any other _html_ content such as an image o more complex markup.
* Is recommended that [link's content has to be meaningful by its own even removing it from its context](https://www.un.org/en/webaccessibility/navigation.shtml#Links).

### Use

Include this component via _twig_ to use it as follows:

```twig
{% include 'components/link/link.twig' with {
    component: {
        content: 'Show me an example',
        url: 'https://example.com'
        class: '',
        label: '',
        attr: '',
        nofollow: '',
        blank: '',
    }
} %}
```

### Options
Following variables are all optional:

* `attr` [String] Use it to include any other html attribute element.
* `blank` [Boolean] Default is _false_.  Use it to include _target="blank"_ and _rel="noopoener noreferrer"_ so link will open in a new window.
* `class` [String] Use it to include any class.
* `label` Use it to add additional text information to ensure link is accessible to all users, specially when content is not meaningful by its own.
* `nofollow` [Boolean] Default is _false_. Use it to add _rel="nofollow"_ to link so search engines won't follow it.

### Examples

#### Basic usage

```twig
{% include 'components/link/link.twig' with {
    component: {
        content: 'Show me an example',
        url: 'https://example.com'
    }
} %}
```

#### Link with text, image and url

```twig
{% include 'components/link/link.twig' with {
    component: {
        content: '<img src="https://picsum.photos/id/184/100/100" alt=""> Show me an example',
        url: 'https://example.com'
    }
} %}
```

#### Link with decoration image as content, url and label to make it readable by screen readers

```twig
{% include 'components/link/link.twig' with {
    component: {
        label: 'Show me an example',
        content: '<img src="https://picsum.photos/id/184/100/100" alt="">',
        url: 'https://example.com'
    }
} %}
```

#### Download link with text, url and specific attribute

```twig
{% include 'components/link/link.twig' with {
    component: {
        attr: 'hreflang="en" download',
        content: 'Show me and example',
        url: 'https://example.com/example.pdf'
    }
} %}
```

#### Target blank link with _nofollow_ attribute

```twig
{% include 'components/link/link.twig' with {
    component: {
        content: 'Show me and example',
        url: 'https://example.com/',
        blank: true,
        nofollow: true
    }
} %}
```
