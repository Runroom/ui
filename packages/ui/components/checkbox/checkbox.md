## Componente Checkbox
Este componente permite al usuario hacer selecciones múltiples de un conjunto de opciones.
El elemento input, teniendo el valor "checkbox" en su atributo type, representa un control de dos estados que permite a los usuarios marcarlo como seleccionado o deseleccionado.

Etiqueta <label>:  nos permite asociar la casilla de verificación con todos los demás campos que estén dentro del alcance de la etiqueta.

### Uso
Para usar el componente se tiene que incluir con /twig/ de la siguiente forma:
```
{% include 'components/checkbox.twig' with {
    component: {
        class: 'ExampleClass',
        label: 'Option1',
        value: 'valueCheckbox1',
        name: 'name1',
        id: 'idCheckbox1',
    }
}%}

```

### Opciones
Atributo "for": Establece una relación entre la etiqueta label y el input, el valor de este atributo debe de ser igual al valor del atributo "id" del control del formulario.

Atributo "value": Al trabajar con casillas de verificación, el atributo value puede ser omitido gracias a la posibilidad de saber el estado de una casilla verificando su presencia/ausencia entre los campos enviados.

Atributo "name": Para que un conjunto de botones de opción pertenezcan al mismo grupo, todos ellos deberían tener el mismo valor en el atributo name.

Atributo "id": Tiene el mismo valor que el atributo "for".

La variable {{ attributes }} nos permite incluir cualquier otro atributo en el componente, por ejemplo la opción 'checked', 'disabled' o 'required'. Por defecto está vacío ( attributes|default('') ).

### Ejemplos
#### Input checkbox básico
{% include 'components/checkbox.twig' with {
    component: {
        label: 'Option1',
        value: 'valueCheckbox1',
        name: 'name1',
        id: 'idCheckbox1',
    }
}%}

#### Input checkbox checked
{% include 'components/checkbox.twig' with {
    component: {
        label: 'Option2-checked',
        value: 'valueCheckbox2',
        name: 'name',
        id: 'idCheckbox2',
        attributes: 'checked'
    }
}%}

#### Input checkbox disabled

{% include 'components/checkbox.twig' with {
    component: {
        label: 'Option3-disabled',
        value: 'valueCheckbox3',
        name: 'name',
        id: 'idCheckbox3',
        attributes: 'disabled'
    }
}%}

#### Input checkbox required
{% include 'components/checkbox.twig' with {
    component: {
        label: 'Option4-required',
        value: 'valueCheckbox4',
        name: 'name',
        id: 'idCheckbox4',
        attributes: 'required'
    }
}%}
