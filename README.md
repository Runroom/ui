# Runroom UI

> UNDER DEVELOPMENT

Una librería de componentes accesibles, _cross-browser_ y con _testing_ integrado para generar interfaces personalizadas rapidamente.

---

## Estructura del proyecto

Hay tres carpetas base:

```
.
├── api
├── packages
│   └── ui
└── web
```

|  Directory  |  Description                                                   |
|-------------|----------------------------------------------------------------|
|  api        |  API con express que nos permite obtener los componentes del directorio `ui` hechos en Twig |
|  packages   |  Estructura inicial para monorepos de lerna |
|  ui         |  Librería de componentes basados en Twig |
|  web        |  Web base para la visualización de los componentes, documentación, etc. Utiliza Next.js como framework de React |

## Instalación y uso

**Se debe ejecutar el API a la vez que la web.**
Actualmente estamos en proceso de desarrollo y no tenemos una versión segura

### API
El API se inicializará en el puerto 5000

```
cd api
yarn install
yarn run server
```

### Web
La web se inicializará en el puerto 3000 y tiene dependencia del puerto 5000 (API)

```
cd web
yarn install
yarn run dev
```

### Dependencias
[PureJS](https://github.com/Runroom/purejs) será una dependencia para los componentes que requieran alguna de las funcionalidades de soporte que se ofrecen en él.

### Convenciones
Hemos creado un [documento de convenciones](conventions.md) para el código de este proyecto.
