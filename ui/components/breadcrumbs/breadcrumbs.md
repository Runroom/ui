## Componente Breadcrumbs
El componente Breadcrumbs consiste en un elemento de navegación que indican al usuario su posición en la jerarquía de un sitio web. Se trata de un listado de elementos que contienen links donde el último, que apunta ala página actual, aparecerá disabled.

El mínimo contenido que necesita es un array que contenga al menos un elemento, que tenga un label y una url.

Debemos incluir justo después del componente Breadcrumbs el componente breadcrumbs-microdata.

El BreadcrumbList schema ayuda a Google a ver exactamente lo que hay en las breadcrumbs en una página web específica. Como resultado Google muestra estas breadcrumbs en los resultados de búsqueda.

### Uso
Para usar el componente Breadcrumbs se tiene que incluir con /twig/ de la siguiente forma.

```
    {% include 'components/breadcrumbs.twig' with {
        component: {
            breadcrumbs: [
                {
                    "label": "",
                    "url": ""
                }
            ],
            ariaLabel: 'migas de pan',
            class: 'brea'
        }
    }%}

    {% include 'components/breadcrumbs-microdata.twig' with {
        component: {
            breadcrumbs: [
                {
                    "label": "",
                    "url": ""
                }
            ]
        }
    }%}
```

### Opciones
Las opciones que se pueden pasar al componente son la clase y el aria-label.

`class` - *opcional* Se puede incluir cualquier clase.
`ariaLabel` - *opcional* Si no se incluye el aria-label por defecto será 'Breadcrumb'.

Estas opciones se pasan de la siguiente manera:

{% include 'components/breadcrumbs.twig' with {
    component: {
        breadcrumbs: [
            {
                "label": "",
                "url": ""
            }
        ],
        ariaLabel: '',
        class: ''
    }
}%}

### Accesibilidad
Usamos aria-label="breadcrumbs" para describir el tipo de navegación.

Añadimos aria-current="page" en el último link, que apunta a la página actual.

Para evitar que el lector de pantalla anuncie los separadores visuales entre enlaces los agregaremos usando css.

### Ejemplos
#### Breadcrumbs con tres elementos
```
    {% include 'components/breadcrumbs.twig' with {
        component: {
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
            ariaLabel: 'migas de pan',
            class: 'extra-class'
        }
    }%}

    {% include 'components/breadcrumbs-microdata.twig' with {
        component: {
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
        }
    } %}
```
