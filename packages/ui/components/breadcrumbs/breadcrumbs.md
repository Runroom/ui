## Componente Breadcrumbs
El componente Breadcrumbs consiste en un elemento de navegación que indican al usuario su posición en la jerarquía de un sitio web. Se trata de un listado de elementos que contienen links donde el último, que apunta ala página actual, aparecerá disabled.

El mínimo contenido que necesita es un array que contenga al menos un elemento, que tenga un label y una url.
breadcrumbs: [
    {
        "label": "Home",
        "url": "#"
    }
]

Se puede incluir cualquier clase usando la variable `class`.

Debemos incluir justo después del componente Breadcrumbs el componente breadcrumbs-microdata.

El BreadcrumbList schema ayuda a Google a ver exactamente lo que hay en las breadcrumbs en una página web específica. Como resultado Google muestra estas breadcrumbs en los resultados de búsqueda.

### Uso
Para usar el componente Breadcrumbs se tiene que incluir con /twig/ de la siguiente forma.

```
    {% include 'components/breadcrumbs.twig' with {
        breadcrumbs: [
            {
                "label": "",
                "url": ""
            },
            {
                "label": "",
                "url": ""
            }
        ],
        ariaLabel: 'migas de pan'
    } %}

    {% include 'components/breadcrumbs-microdata.twig' with {
        breadcrumbs: [
            {
                "label": "",
                "url": ""
            },
            {
                "label": "",
                "url": ""
            }
        ]
    } %}
```

### Opciones

### Accesibilidad
Usamos role="navigation" en el ol para indicar que es un elemento de navegación y aria-label="breadcrumbs" para describir el tipo de navegación.

Añadimos aria-current="page" en el último link, que apunta a la página actual.

### Ejemplos
#### Breadcrumbs con tres elementos
```
    {% include 'components/breadcrumbs.twig' with {
        breadcrumbs: [
            {
                "label": "Home",
                "url": "#"
            },
            {
                "label": "Breadcrumb 1",
                "url": "#"
            },
            {
                "label": "Breadcrumb 2",
                "url": "#",
            }
        ],
        ariaLabel: 'migas de pan'
    } %}

    {% include 'components/breadcrumbs-microdata.twig' with {
        breadcrumbs: [
            {
                "label": "Home",
                "url": "#"
            },
            {
                "label": "Breadcrumb 1",
                "url": "#"
            },
            {
                "label": "Breadcrumb 2",
                "url": "#",
            },
            {
                "label": "Breadcrumb 3",
                "url": "#"
            }
        ]
    } %}
```