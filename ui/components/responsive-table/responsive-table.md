# Responsive table
This component builds a table which is adapted by CSS and JS to display a different layout in mobile.
The headings are transpiled to each column so the relation between title and content is not lost.

## Use
The basic use of this component in *twig* is as follows:
```twig
{% include 'components/incremental/incremental.twig' with {
    component: {
        heading: [],
        body: [
            []
        ],
        class: ''
    }
} %}
```

## Options
* `heading`: Array containing the heading elements. They accept html tags as they are rendered _raw_.
* `body`: Array containing row elements. Row elements are as well arrays containing cell elements. They accept html tags as they are rendered _raw_.
* `class` - *Optional*: Gives option to add new classes to the responsive table component.

## Example
### Responsive table with 2 rows and 3 cells
```twig
{% include 'components/incremental/incremental.twig' with {
    component: {
        heading: [
            'Heading 1',
            'Heading 2',
            'Heading 3'
        ],
        body: [
            [
                'Body 1.1',
                'Body 1.2',
                'Body 1.3'
            ],
            [
                'Body 2.1',
                'Body 2.2',
                'Body 2.3'
            ]
        ],
        class: 'exampleClass'
    }
} %}
