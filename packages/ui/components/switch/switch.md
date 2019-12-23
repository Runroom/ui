## Componente Checkbox Switch
El componente Checkbox Switch se usa para activar una de las dos opciones predefinidas. Comúnmente es utilizado como un botón de encendido / apagado.

Etiqueta <label>:  nos permite asociar la casilla de verificación con todos los demás campos que estén dentro del alcance de la etiqueta. 

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/switch/switch.twig' with {
    component: {
        preText: 'preText',
        postText: 'postText'
    }
}%}

```

### Opciones
La variable {{ preText }} almacena el valor para la opción de la izquierda o apagada.

La variable {{ postText }} almacena el valor para la opción de la derecha o encendida.

La variable {{ attributes }} nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked', 'disabled' o 'required'. Por defecto está vacío ( attributes|default('') ).

### Ejemplos
#### Input checkbox básico
{% include 'components/switch/switch.twig' with {
    component: {
        preText: 'Off'|upper,
        postText: 'On'|upper
    }
}%}


#### Input checkbox checked
{% include 'components/switch/switch.twig' with { 
    component: {
        preText: '',
        postText: 'Ok',
        attributes: 'checked'
    }
}%}

#### Input checkbox disabled
{% include 'components/switch/switch.twig' with {
    component: {
        preText: "Don't agree ",
        postText: 'Agree',
        attributes: 'disabled'
    }
}%}

#### Input checkbox required
{% include 'components/switch/switch.twig' with { 
    component: {
        preText: 'No'|upper,
        postText: 'Yes'|upper,
        attributes: 'required'
    }
}%} 
