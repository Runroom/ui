## Componente Link
Este componente se usa para mostrar un enlace, por eso el mínimo contenido que necesita es `url`.

El contenido del mismo puede ser una línea de texto u otra información html, como por ejemplo una imagen. Así hemos decido que la variable se llame `content` y no label.

Es recomendable que el [contenido del enlace tenga sentido propio aún sacándolo de contexto](https://www.un.org/en/webaccessibility/navigation.shtml#Links). En el caso de que esto no sea así se puede complementar la información que muestre el enlace con `label` de manera que el enlace se pueda leer de forma accesible.

Se puede incluir cualquier atributo usando la variable `attr`.

Se puede incluir cualquier clase usando la variable `class`.

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
    {% include 'components/link.twig' with {
        component: {
            attr: '',
            class: '',
            content: '',
            url: 'https://example.com'
        }
    } %}
```

### Opciones
`blank`: indicar `true|false` para incluir el atributo `target="_blank"`. Por defecto es `false`.

### Ejemplos
#### Enlace con texto y url
```
    {% include 'components/link.twig' with {
        component: {
            content: 'Haz click aquí para descargar el informe de previsión de ventas para el año 2019',
            url: 'https://example.com'
        }
    } %}
```

#### Enlace con texto, imagen y url
```
    {% include 'components/link.twig' with {
        component: {
            content: '<img src="https://picsum.photos/id/184/100/100" alt=""> Haz click aquí para descargar el informe de previsión de ventas para el año 2019',
            url: 'https://example.com'
        }
    } %}
```

#### Enlace con imagen, label y url
```
    {% include 'components/link.twig' with {
        component: {
            label: 'Haz click aquí para descargar el informe de previsión de ventas para el año 2019'
            content: '<img src="https://picsum.photos/id/184/100/100" alt="">',
            url: 'https://example.com'
        }
    } %}
```

#### Enlace con imagen, texto de soporte y url
```
    {% include 'components/link.twig' with {
        component: {
            content: '<img src="https://picsum.photos/id/184/100/100" alt=""><span class="u-sr-only">Haz click aquí para descargar el informe de previsión de ventas para el año 2019</span>',
            url: 'https://example.com'
        }
    } %}
```

#### Enlace download: con texto, url y atributos
```
    {% include 'components/link.twig' with {
        component: {
            attr: 'hreflang="en" download'
            content: 'Haz click aquí para descargar el informe de previsión de ventas para el año 2019',
            url: 'https://informe-en.pdf'
        }
    } %}
```
