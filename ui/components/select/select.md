## Componente Select
El componente select representa un control que muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos <option>. 

Este componente se usa para mostrar unas opciones, por eso el mínimo contenido que necesita es un elemento en la etiqueta <option>.

```
{% if options is not empty %}
    <div class="select {{ class }}">
        {% if label is defined %}
            <label class="select__label" for="{{ id }}">{{ label }}</label>
        {% endif %}
        <select name="{{ name }}" id="{{ id }}" {{ attributes }}>
            {% for option in options %}
                <option {% if option.selected %}{{ option.selected }}{% endif %} value="{{ option.value }}">{{ option.text }}</option>
            {% endfor %}
        </select>
    </div>
{% endif %}
```

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/select/select.twig' with {
    component: {
        name: '',
        id: '',
        options: [
            { 'text': '', 'value': '' }
        ]
    }
}%}
```

### Opciones
Se puede incluir cualquier atributo usando la variable `attr` y seleccionar una opción preseleccionada con `selected`, que por defecto no muestra ninguna selección.

### Ejemplos
#### Select sin label, con opciones y sin ningún atributo
```
{% include 'components/select/select.twig' with {
    component: {
        name: 'select-name',
        id: 'select-id',
        options: [
            { 'text': 'Select option', 'value': '' },
            { 'text': 'Option1', 'value': 'Option1' },
            { 'text': 'Option2', 'value': 'Option2' },
            { 'text': 'Option3', 'value': 'Option3' }
        ]
    }
}%}
```

#### Select con label y opciones y sin ningún atributo
```
{% include 'components/select/select.twig' with {
    component: {
        label: 'Select description:',
        name: 'select-name',
        id: 'select-id',
        options: [
            { 'text': 'Select option', 'value': '' },
            { 'text': 'Option1', 'value': 'Option1' },
            { 'text': 'Option2', 'value': 'Option2' },
            { 'text': 'Option3', 'value': 'Option3' }
        ]
    }
}%}
```

#### Select con label, opciones y atributo required
```
{% include 'components/select/select.twig' with {
    component: {
        label: 'Select description:',
        name: 'select-name',
        id: 'select-id',
        attributes: 'required',
        options: [
            { 'text': 'Select option', 'value': '' },
            { 'text': 'Option1', 'value': 'Option1' },
            { 'text': 'Option2', 'value': 'Option2' },
            { 'text': 'Option3', 'value': 'Option3' }
        ]
    }
}%}

```

#### Select con label, opciones y atributo disabled
```
{% include 'components/select/select.twig' with {
    component: {
        label: 'Select description:',
        name: 'select-name',
        id: 'select-id',
        attributes: 'disabled',
        options: [
            { 'text': 'Select option', 'value': '' },
            { 'text': 'Option1', 'value': 'Option1' },
            { 'text': 'Option2', 'value': 'Option2' },
            { 'text': 'Option3', 'value': 'Option3' }
        ]
    }
}%}
```

#### Select con label, opciones y opción preseleccioanda
```
{% include 'components/select/select.twig' with {
    component: {
        label: 'Select description:',
        name: 'select-name',
        id: 'select-id',
        options: [
            { 'text': 'Select option', 'value': '' },
            { 'selected': 'selected','text': 'Option1', 'value': 'Option1' },
            { 'text': 'Option1', 'value': 'Option2' },
            { 'text': 'Option3', 'value': 'Option3' }
        ]
    }
}%}
```
