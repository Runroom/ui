# Componente Picture
Este componente se usa para mostrar una imagen una o más imágenes adaptables en formatos modernos (webp) mediante el tag `<picture>`, con una imagen de fallback para navegadores no compatibles (IE).

Puedes usarlo para:
* Cargar una imagen en formato webp en el `<source>` teniendo un fallback en formato compatible (jpg/png) en la `<img>`.
* Cargar diferentes recursos en varios `<source>` que se muestran mediante las condiciones especificadas en el atributo media (con media-queries). Por ejemplo, podemos cargar un video en desktop y una imagen usando este componente. [Documentación de uso de <source> con media queries](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/picture#Ejemplos)
* También se pueden cargar diferentes versiones de la misma imagen (dónde varia el tamaño nativo de la propia imagen) mediante un `<source>` y los atributos srcset y size. [Documentación uso imágenes adaptables](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## Diferencias entre usar source + media y source + sizes

Aunque són similares, el comportamiento entre media y sizes es distinto:
* source + media es similar a una media query, cuando se redimensiona y se cumple condición, cargará el source correspondiente
* source + sizes actúa sólo en la carga de la página, leerá la medida del viewport y cargará la imagen que más se acerque a la condición especificada en sizes, pero no cargará otras versiones de la imagen si se redimensiona el viewport

## Uso
Para usar el componente con la mínima funcionalidad se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/100/1024.jpg',
        alt: 'Sample image',
        sources: [ 
            {
                path: 'https://picsum.photos/id/201/480.webp',
            } 
        ]
    }
} %}
```

## Opciones
`path`: String. default|(null). Obligatorio. Debe contener la ruta a la imagen que actuará como fallback.
`alt`: String. default|(''). Contiene el texto descriptivo de la imagen.
`class`: String. default|(''). Permite añadir cualquier clase. Se pasa como raw.
`attr`: String. default|(''). Permite añadir cualquier atributo. Se pasa como raw.
`sources`: Array de objetos. default(null). Cada objeto contenido en la array representa un elemento source, los atributos se especifican en las keys de cada objeto.
`sources.path`: String. Necesaria para renderizar el resto del objeto. Contiene la ruta de la imagen que se use como source. Se puede pasar más de una ruta si lo combinas con el atributo sizes.
`sources.media`: Integer. Valor en px relacionado con la media query. Se renderizan como max-width, para que coincida con la medida del source cargado.
`sources.sizes`: String. Usar para rellenar el campo sizes. Usar cuando se pase más de una ruta en el mismo sources.path.
`sources.type`: String. default|('image/webp') Indica el tipo de source que se va a cargar. [Listado de types disponibles](https://www.iana.org/assignments/media-types/media-types.xhtml#image)

> Nota importante: Ordenar la array de sources con el media de menor a mayor. El último source no debería tener media.

## Ejemplos
### Picture con llamada mínima (un source y su fallback)
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/100/640.jpg',
        alt: 'Webp image sample and fallback',
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
                path: 'https://picsum.photos/id/202/768.webp',
                media: 768
            },
            {
                path: 'https://picsum.photos/id/203/1024.webp'
            }
        ]
    }
} %}
```
> En este ejemplo, la imagen de 480px se muestra de 0 a 480px, la imagen de 768 se muestra de 481 a 768px, y la de 1024 en el resto de casos.

### Picture con un source y un listado de srcset y sizes
```
{% include 'components/picture/picture.twig' with {
    component: {
        path: 'https://picsum.photos/id/100/1024.jpg',
        alt: 'I will load the image that matches my sizes attribute on page load, and only once',
        sources: [ 
            {
                path: 'https://picsum.photos/id/301/480.webp 480w, https://picsum.photos/id/302/768.webp 768w, https://picsum.photos/id/304/1024.webp 1024w',
                sizes: '(max-width: 480px) 480px, (max-width: 768px) 768px, (min-width: 768px) 1024px'
            } 
        ]
    }
} %}
```