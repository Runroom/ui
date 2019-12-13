## Componente Checkbox Switch
El componente Checkbox Switch se usa para activar una de las dos opciones predefinidas. Comúnmente es utilizado como un botón de encendido / apagado.

Etiqueta <label>:  nos permite asociar la casilla de verificación con todos los demás campos que estén dentro del alcance de la etiqueta. 

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/switch/switch.twig' with { 
    labelClass: 'switch',
    spanClass: 'slider round',
    labelBefore: 'Off'|upper,
    labelAfter: 'On'|upper,
}%}

```

### Opciones
La variable {{ labelBefore }} almacena el valor para la opción de la izquierda o apagada.

La variable {{ labelAfter }} almacena el valor para la opción de la derecha o encendida.

La variable {{ attributes }} nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked', 'disabled' o 'required'. Por defecto está vacío ( attributes|default('') ).

### Ejemplos
#### Input checkbox básico
{% include 'components/switch/switch.twig' with { 
    component: {
        labelClass: 'switch',
        spanClass: 'slider round',
        labelBefore: 'Off'|upper,
        labelAfter: 'On'|upper
    }
}%}

#### Input checkbox checked
{% include 'components/switch/switch.twig' with {
    component: {
        labelClass: 'switch',
        spanClass: 'slider round',
        labelBefore: 'Off'|upper,
        labelAfter: 'On'|upper,
        attributes: 'checked'
    }
}%}

#### Input checkbox disabled
{% include 'components/switch/switch.twig' with { 
    component: {
        labelClass: 'switch',
        spanClass: 'slider round',
        labelBefore: 'Off'|upper,
        labelAfter: 'On'|upper,
        attributes: 'disabled'
    }
}%}

#### Input checkbox required
{% include 'components/switch/switch.twig' with {
    component: {
        labelClass: 'switch',
        spanClass: 'slider round',
        labelBefore: 'Off'|upper,
        labelAfter: 'On'|upper,
        attributes: 'required'
    }
}%}
