## Textarea Component

El elemento HTML textarea representa un control para edición muti-línea de texto plano. Irá dentro de una etiqueta form.

Al componente textarea le podremos pasar diferentes atributos pero el único que será obligatorio es el atributo name.

## Uso

Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:

```html
    {% include 'components/textarea.twig' with {
        component: {
            class: '',
            disabled: true/false,
            id: '',
            maxlength: '',
            name: 'nombre',
            numberRows: '',
            label: '';
            required: true/false,
            textPlaceholder: ''
        }
    } %}
```

## Opciones

class - opcional. Se puede incluir cualquier clase.
disabled - opcional. Este atributo booleano indica que el usuario no puede interactuar con el control. Por defecto será false.
id - opcional. Se puede incluir cualquier id.
maxlength - Indica el número máximo de caracteres que el usuario puede insertar. Si no se especifica, el usuario puede insertar un número ilimitado de caracteres.
numberRows - opcional. El número de líneas visibles en el control
label - opcional. Representa una etiqueta para el elemento textarea, el atributo for del label y el id del textarea deben coincidir.
required - opcional. Este atributo indica que el usuario debe rellenar el control con un valor antes de poder enviar el formulario.
textPlaceholder - opcional. Texto indicativo que define que se debe insertar en el control.

### Accesibilidad

### Ejemplos
```
    {% include 'components/textarea.twig' with {
        component: {
            class: 'extra-class',
            disabled: false,
            id: 'id',
            maxlength: '5',
            name: 'my-textarea',
            numberRows: '5',
            required: true,
            textPlaceholder: 'some text'
        }
    } %}
```
