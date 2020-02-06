## Componente Button
Este componente se usa para mostrar un botón, que puede ser un botón tradicional con <button>, o una <a> con apariencia de button.

Por defecto, el componente crea un elemento <button>, pero se puede definir que cree un enlace <a>. Este elemento <a> difiere del componente link tanto en su aspecto (estilos) cómo en sus atributos, pues trata de parecerse lo máximo posible a un tag <button> a nivel de comportamiento y accesibilidad.

El contenido del mismo puede ser una línea de texto, acompañada opcionalmente de un icono que puede configurarse para que se posicione a la izquiera o la derecha del texto.

Es recomendable que el [contenido del enlace tenga sentido propio aún sacándolo de contexto](https://www.un.org/en/webaccessibility/navigation.shtml#Links). En el caso de que esto no sea así se puede complementar la información que muestre el enlace con `label` de manera que el enlace se pueda leer de forma accesible.

### Uso
Para usar el componente con el mínimo se tiene que incluir con /twig/ de la siguiente forma:
```
    {% include 'components/button.twig' with {
        component: {
            title: 'I'm a button'
        }
    } %}
```

### Opciones
## Comunes
`tag`: String. default|'button'. Cualquier otro valor devuelve <a> con un aspecto y comportamiento accesible de botón. Esta variable define el comportamiento del componente, la estructura y variables que usan <button> y <a> difieren un poco.
`class`: String. default|''. Permite añadir cualquier clase. Se pasa como raw.
`attr`: String. default|''. Permite incluir cualquier atributo. Se pasa como raw.
`disabled`: Boolean. default|(false). Desactiva el botón mediante atributo en caso de <button> y de clase en el caso de <a>.
`content`: String. Contenido del botón. Necesario, en caso de estar vacío el botón indica que le falta esa variable. 
`ariaLabel`: String. default|(content). Añade el atributo ariaLabel con el texto pasado en la variable content por defecto.
`tabIndex`: String. default|'0'. Añade el atributo tabindex automáticamente a las <a>. Permite modificar el orden del tabindex pasando otro valor. En el caso de los <button> sólo se añade cuando se pasa un valor distinto a '0'.
`icon`: llama al helper icons, o html directo. Se pasa como raw.
`iconPosition`: acepta valores "left", "start", o bien "right", "end". Posiciona el icono a la derecha o izquierda del texto. Requiere `icon`.

## Exclusivas de <button>
`type`: Por defecto "button". Permite definir el type del botón.

## Exclusivas de tag <a>
`url`: string que contiene la url o ancla del enlace.
`blank`: indicar `true|false` para incluir el atributo `target="_blank"`. Por defecto es `false`. Requiere `url`.

### Ejemplos
#### Incorrect button call, will render but warn that needs a content to be passed
```
    {% include '../components/button.twig' %}
```
#### Button with minimal button call
```
    {% include '../components/button.twig' with {
        component: {
            content: 'Minimal button'
        }
    } %}
```
#### Button with class hollow
```
    {% include '../components/button.twig' with {
        component: {
            content: "I'm button-hollow",
            class: 'button--hollow'
        }
    } %}
```
#### Button disabled
```
    {% include '../components/button.twig' with {
        component: {
            content: "I'm disabled",
            disabled: true
        }
    } %}
```
#### Button with icon positioned by default
```
    {% include '../components/button.twig' with {
        component: {
            content: '<- Icon here',
            icon: '(ง •̀_•́)ง'
        }
    } %}
```
#### Button with icon custom positioned
```
    {% include '../components/button.twig' with {
        component: {
            content: 'Icon here ->',
            icon: '(ง •̀_•́)ง',
            iconPosition: 'right'
        }
    } %}
```
#### a with minimal button call
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: 'Minimal < a > button'
        }
    } %}
```
#### a with class hollow
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: "I'm < a > button-hollow",
            class: 'button--hollow'
        }
    } %}
```
#### Button disabled
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: "I'm < a > button disabled",
            disabled: true
        }
    } %}
```
#### Button with icon positioned by default
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: '<- < a > Icon here',
            icon: '(ง •̀_•́)ง'
        }
    } %}
```
#### Button with icon custom positioned
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: '< a > Icon here ->',
            icon: '(ง •̀_•́)ง',
            iconPosition: 'right'
        }
    } %}
```

#### a with url with target default (_self)
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: "I'm < a > button with link",
            url: 'http://www.google.es'
        }
    } %}
```
#### a with url with target (_blank)
```
    {% include '../components/button.twig' with {
        component: {
            tag: 'a',
            content: "I'm < a > button with custom link",
            url: 'http://www.google.es',
            blank: true
        }
    } %}
```
