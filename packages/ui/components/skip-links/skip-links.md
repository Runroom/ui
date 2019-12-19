## Skip links Component

Los skip links son enlaces que ayudan a navegar por la página actual. Los usuarios de lectores de pantalla los utilizan principalmente para omitir o "saltar" el contenido repetitivo de la página.

El componente Skip Links estará oculto por defecto, pero se hará visible al recibir keyboard focus.
Este componente debe incluirse justo después de la etiqueta body (debe ser lo primero que un usuario de teclado encuentre en la página).

El mínimo contenido que necesita es un array que contenga al menos un elemento. 
Cada elemento del array contiene un texto y un ancla que enlaza con una sección de la página que tiene un determinado id.

links: [
    {
        anchor: '',
        text: '',
    }
]

Se puede incluir cualquier clase usando la variable `class`.

## Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:

```html
    {% include 'components/skip-links.twig' with {
        links: [
        {
            anchor: '',
            text: '',
        },
        {
            anchor: '',
            text: '',
        },
        ],
        ariaLabel: ''
    } %}
```
## Opciones

### Accesibilidad
Usamos aria-label="skip links" para describir el tipo de navegación.

### Ejemplos
```
    {% include 'components/skip-links.twig' with {
        links: [
            {
                anchor: '#content',
                text: 'Skip to main content',
            },
            {
                anchor: '#nav',
                text: 'Skip to main navigation',
            },
        ],
        ariaLabel: 'skip links'
    } %}
```

