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
```
{% include 'components/switch/switch.twig' with {
    component: {
        preText: '',
        postText: '',
        attributes: '',
        name: '',
        value: ''
    }
}%}
```
La variable `preText` almacena el valor para la opción izquierda o apagada.

La variable `postText` almacena el valor para la opción derecha o encendida.

La variable `attributes` nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked', 'disabled' o 'required'. Por defecto está vacío ( attributes|default('') ).

La variable `name` almacena el name del checkbox.

La variable `class` permite añadir otra clase que pudieramos necesitar para crear estilos o trabajar comportamientos.

## Ejemplos

### Input checkbox básico

```
{% include 'components/switch/switch.twig' with {
    component: {
        preText: 'Off'|upper,
        postText: 'On'|upper,
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo checked

```
{% include 'components/switch/switch.twig' with { 
    component: {
        preText: '',
        postText: 'Ok',
        attributes: 'checked',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo disabled

```
{% include 'components/switch/switch.twig' with {
    component: {
        preText: "Don't agree ",
        postText: 'Agree',
        attributes: 'disabled',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con atributo required

```
{% include 'components/switch/switch.twig' with { 
    component: {
        preText: 'No'|upper,
        postText: 'Yes'|upper,
        attributes: 'required',
        name: '',
        value: ''
    }
}%}
```

### Input checkbox con clase

```
{% include 'components/switch/switch.twig' with { 
    component: {
        name: 'name5',
        value: 'value5',
        class: 'extra-class'
    }
}%} 
```
