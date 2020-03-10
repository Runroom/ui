## Skip links Component

Los skip links son enlaces que ayudan a navegar por la página actual. Los usuarios de lectores de pantalla los utilizan principalmente para omitir o "saltar" el contenido repetitivo de la página.

El componente Skip Links estará oculto por defecto, pero se hará visible al recibir keyboard focus.
Este componente debe incluirse justo después de la etiqueta body (debe ser lo primero que un usuario de teclado encuentre en la página).

El mínimo contenido que necesita es un array que contenga al menos un elemento. 
Cada elemento del array contiene un texto y un ancla que enlaza con una sección de la página que tiene un determinado id.

## Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:

```html
    {% include 'components/skip-links.twig' with {
        component: {
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
            class: '',
            title: ''
        }
    } %}
```
## Opciones

class - opcional Se puede incluir cualquier clase.

### Accesibilidad
El lector de pantalla utiliza los encabezados de nivel 2 para identificar las principales secciones de un página. Por este motivo añadimos las skip-links dentro de una sección con un h2.

Las diferentes anclas que enlazan a diferentes partes de el contenido irán dentro de una lista no ordenada. Esta lista tendrá el atributo 'aria-labelledby' que asocia la lista al texto del h2, haciendo que el lector de pantalla lea el texto del h2 al pasar por la lista.

### Ejemplos
```
    {% include 'components/skip-links.twig' with {
        component: {
            links: [
                {
                    anchor: '#nav',
                    text: 'Skip to main navigation',
                },
                {
                    anchor: '#content',
                    text: 'Skip to main content',
                }
            ],
            class: 'extra-class',
            title: 'Skip links navigation'
        }
    } %}
```

