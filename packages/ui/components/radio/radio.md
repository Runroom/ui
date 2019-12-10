## Componente Radio
Este componente permite al usuario seleccionar una opción de un conjunto. Se recomienda su uso cuando el usuario necesita ver todas las opciones disponibles.

El valor "radio" en su atributo type marca el tipo de opción y lo limita a una selección al mismo tiempo.

Etiqueta <label>:  nos permite adjuntar información a los controles de los campos de los formularios. 

Atributo "for": Establece una relación entre la etiqueta label y el input, el valor de este atributo debe de ser igual al valor del atributo "id" del control del formulario.

Atributo "value": Debe de ser único en el grupo y será enviado junto con el formulario para conocer la opción que ha sido seleccionada.

Atributo "name": Para que un conjunto de botones de opción pertenezcan al mismo grupo, todos ellos deberían tener el mismo valor en el atributo name.

Atributo "id": Tiene el mismo valor que el atributo "for".

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
    {% include 'components/radio.twig' with { 
        label: '',
        value: '',
        name: '',
        id: '',
        attributes: ''
    } %}
```

### Opciones
La variable {{ attributes }} nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked' o 'disabled'. Por defecto está vacío ( attributes|default('') ).

### Ejemplos
#### Radio button básico
{% include 'components/radio.twig' with { 
    label: 'Opción1',
    value: 'valueRadio1',
    name: 'name',
    id: 'idRadio1',
} %}

#### Radio button con checked
{% include 'components/radio.twig' with { 
    label: 'Opción2',
    value: 'valueRadio2',
    name: 'name',
    id: 'idRadio2'
    attributes: 'checked'
} %}

#### Radio button con disabled
{% include 'components/radio.twig' with { 
    label: 'Opción3',
    value: 'valueRadio3',
    name: 'name',
    id: 'idRadio3',
    attributes: 'disabled'
} %}


