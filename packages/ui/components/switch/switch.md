# Componente Checkbox Switch

El componente Checkbox Switch se usa para activar una de las dos opciones predefinidas. Comúnmente es utilizado como un botón de encendido / apagado.

Etiqueta <label>:  nos permite asociar la casilla de verificación con todos los demás campos que estén dentro del alcance de la etiqueta.

## Uso

Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/switch/switch.twig' %}
```

## Opciones

Las opciones que se pueden pasar al componente son el texto previo y posterior al checkbox y los atributos, todos ellos son opcionales. Estas opciones se pasan de la siguiente manera:

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        prepend: '',
        append: '',
        attributes: '',
        name: '',
        value: ''
    }
}%}
```

La variable `prepend` almacena el valor para la opción izquierda o apagada.

La variable `append` almacena el valor para la opción derecha o encendida.

La variable `attributes` nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked', 'disabled' o 'required'. Por defecto está vacío ( attributes|default('') ).

La variable `name` almacena el name del checkbox.

La variable `class` permite añadir otra clase que pudieramos necesitar para crear estilos o trabajar comportamientos.

## Ejemplos

### Input checkbox básico

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        prepend: 'Off'|upper,
        append: 'On'|upper,
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo checked

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        prepend: '',
        append: 'Ok',
        attributes: 'checked',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo disabled

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        prepend: "Don't agree ",
        append: 'Agree',
        attributes: 'disabled',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo required

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        prepend: 'No'|upper,
        append: 'Yes'|upper,
        attributes: 'required',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con clase

```twig
{% include 'components/switch/switch.twig' with {
    component: {
        name: 'name5',
        value: 'value5',
        class: 'extra-class'
    }
}%}
```
