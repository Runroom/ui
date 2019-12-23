## Componente List
El componente list permite crear listas ordenadas, desordenadas y anidadas reutilizando el código para evitar repeticiones.

Los argumentos que se pasan al componente list son type, class e items y son opcionales.

```
{% macro list(type = '', class = '', items = []) %}
    {% set allowedTypes = ['ol', 'ul'] %}

    {% import _self as lists %}

    {% if items|length > 0 and type in allowedTypes %}
        <{{ type }} class="{{ class }}">
            {% for item in items %}
                <li class="{{ item.class }}">
                    {{ item.content|raw }}
                    {% if item.children %}
                        {{ lists.list(item.children.type, item.children.class, item.children.items) }}
                    {% endif %}
                </li>
            {% endfor %}
        </{{ type }}>
    {% endif %}
{% endmacro %}
```

### Uso
Para hacer uso de este componente debemos importárla de la siguiente manera: 

```
{% import 'components/list/list.twig' as lists %}

```
A continuación creamos el array de items y sus anidaciones:

```
{% set items = [
    {
        content: '',
        children: {
            type: '',
            items: [{
                content: '',
                children: {
                    type: '',
                    class: '',
                    items: [
                        { 
                            content: '',
                        },
                        { 
                            content: '',
                        },
                    ]
                }
            },
```

Y por último realizamos la llamada pasándole como argumentos el tipo de lista, la clase y el array creado.
```
{{ lists.list('type', 'class', items) }}
```

### Ejemplos
#### Lista desordenada

```
{% set items = [
    {
        content: '<a href="http://example.com/">Level 1</a>',
        children: {
            type: 'ul',
            items: [{
                content: 'Level 2',
                children: {
                    type: 'ul',
                    class: '',
                    items: [
                        { 
                            content: 'Level 3',
                        },
                        { 
                            content: 'Level 3',
                        },
                    ]
                }
            },
            {
                content: 'Level 2',
            }
            ]
        }
    },
    {
        content: '<a href="http://example.com/">Level 1</a>',
    }] 
%}

{{ lists.list('ul', 'example', items) }}
```

#### Lista desordenada

```
{% set items = [
    {
        content: '<h3>Level 1</h3>',
        class: '',
        children: {
            type: 'ol',
            class: '',
            items: [{
                content: 'Level 2',
            },
            {
                content: 'Level 2',
            }
            ]
        }
    },
    {
        content: '<h3>Level 1</h3>',
    },
    {
        content: '<h3>Level 1</h3>',
    }] 
%}

{{ lists.list('ol', '', items) }}
```

#### Combinación lista ordenada y desordenada

```
{% set items = [
    {
        content: 'Level 1',
        class: '',
        children: {
            type: 'ol',
            class: '',
            items: [{
                content: '<i>Level 2</i>',
            },
            {
                content: 'Level 2',
            }
            ]
        }
    },
    {
        content: 'Level 1',
    },
    {
        content: '<b>Level 1<b>',
    }] 
%}

{{ lists.list('ul', '', items) }}
```
