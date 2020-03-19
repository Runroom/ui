# Componente Picture
Este componente se usa para mostrar una imagen una o más imágenes adaptables en formatos modernos (webp) mediante el tag `<picture>`, con una imagen de fallback para navegadores no compatibles (IE).

Puedes usarlo para:
* Cargar una imagen en formato webp en el `<source>` teniendo un fallback en formato compatible (jpg/png) en la `<img>`.
* Cargar diferentes recursos en varios `<source>` que se muestran mediante las condiciones especificadas en el atributo media (con media-queries). Por ejemplo, podemos cargar un video en desktop y una imagen usando este componente. [Documentación de uso de <source> con media queries](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/picture#Ejemplos)

## Uso
Para usar el componente con la mínima funcionalidad se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/100/640.jpg',
        sources: [ 
            {
                path: 'https://picsum.photos/id/100/640.webp'
            } 
        ]
    }
} %}
```

## Estilo
El componente no lleva estilos por defecto. Tener en cuenta que los estilos de las imágenes deben aplicarse al tag `<img>` dentro del componente.

## Opciones
`path`: String. default|(null). Obligatorio. Debe contener la ruta a la imagen que actuará como fallback.
`alt`: String. default|(''). Contiene el texto descriptivo de la imagen.
`class`: String. default|(''). Permite añadir cualquier clase. Se pasa como raw.
`attr`: String. default|(''). Permite añadir cualquier atributo. Se pasa como raw.
`sources`: Array de objetos. default(null). Cada objeto contenido en la array representa un elemento source, los atributos se especifican en las keys de cada objeto.
`sources.path`: String. Necesaria para renderizar el resto del objeto. Contiene la ruta de la imagen que se use como source.
`sources.media`: Integer. Valor en px relacionado con la media query. Se renderizan como max-width, para que coincida con la medida del source cargado.
`sources.type`: String. default|('image/webp') Indica el tipo de source que se va a cargar. [Listado de types disponibles](https://www.iana.org/assignments/media-types/media-types.xhtml#image)

> Nota importante: Ordenar la array de sources con el media de menor a mayor. El último source no debería tener media.

## Ejemplos
### Picture con llamada mínima (un source y su fallback)
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/100/640.jpg',
        sources: [ 
            {
                path: 'https://picsum.photos/id/100/640.webp'
            } 
        ]
    }
} %}
```

### Picture con tres sources controlados por el atributo media
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/203/1024.jpg',
        alt: 'I show different images depending on screen width',
        sources: [ 
            {
                path: 'https://picsum.photos/id/201/480.webp',
                media: 480
            },
            {
                path: 'https://picsum.photos/id/202/960.webp',
                media: 960
            },
            {
                path: 'https://picsum.photos/id/203/1280.webp'
            }
        ]
    }
} %}
```
> En este ejemplo, la imagen de 480px se muestra de 0 a 480px, la imagen de 960px se muestra de 481 a 960px, y la de 1280 en el resto de casos.