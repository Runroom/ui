# Componente Picture
Este componente se usa para mostrar una imagen en formato webp mediante el uso de <picture>, con una imagen de fallback para navegadores no compatibles.

## Uso
Para usar el componente con el mínimo se tiene que incluir con /twig/ de la siguiente forma:
```
    {% include 'components/picture.twig' with {
        component: {
            path: 'images/sample.jpg'
        }
    } %}
```

## Opciones
`path`: String. default|(null). Obligatorio. Debe contener la ruta a la imagen.
`alt`: String. default|(''). Contiene el texto descriptivo de la imagen.
`class`: String. default|(''). Permite añadir cualquier clase. Se pasa como raw.

## Ejemplos
### Picture with minimal call
```
    {% include '../components/picture.twig' with {
        component: {
            path: imagesDirectory ~ '/img/foo.jpg'
        }
    } %}
```

### Picture with all elements
```
    {% include '../components/picture.twig' with {
        component: {
            path: imagesDirectory ~ '/img/foo.jpg'
            alt: 'Test image'
            class: 'picture'
        }
    } %}
```