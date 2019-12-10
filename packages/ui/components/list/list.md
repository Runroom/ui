## Macro List
Este macro permite crear listas ordenadas, desordenadas y anidadas reutilizando el código para evitar repeticiones.

Los argumentos que se pasan a la macro list son type, class e items y pueden ser opcionales.

### Uso
Para hacer uso de la macro debemos importárla de la siguiente manera: 

```
{% import 'macros/_list.twig' as lists %}
```

### Opciones
Las variables declaradas que podemos utilizar son: 
    {% set items = items|default([]) %}
    {% set type = type|default('') %}
    {% set class = class|default('') %}
    {% set allowedTypes = ['ol', 'ul'] %}
    {% set tag = tag|default('') %}

A items podemos pasarle un contenido y, en caso de tener hijos, indicarle su tipo, sus items y sus clases.

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

### Ejemplos
#### Lista ordenada

```
{% import 'macros/_list.twig' as lists %}

{% set type = 'ol' %}
{% set class = '' %}
{% set tag = '' %}
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

{{ lists.list(type, class, items, tag) }}
```

#### Lista desordenada

```
{% import 'macros/_list.twig' as lists %}

{% set type = 'ul' %}
{% set class = '' %}
{% set tag = '' %}
{% set items = [
    {
        content: '<a href="test">Level 1</a>',
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
        content: '<a href="test">Level 1</a>',
    }] 
%}

{{ lists.list(type, class, items, tag) }}
```

#### Combinación lista ordenada y desordenada

```
{% set type = 'ul' %}
{% set class = '' %}
{% set tag = '' %}
{% set items = [
    {
        content: 'Level 1',
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
        content: 'Level 1',
    },
    {
        content: 'Level 1',
    }] 
%}

{{ lists.list(type, class, items, tag) }}
```
