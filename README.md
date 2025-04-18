# README.md

# Inspector Web Manual

**Guía completa del Inspector de Elementos en la Web**

> Este repositorio contiene un sitio de documentación estático generado con [Docusaurus](https://docusaurus.io), orientado a describir el uso avanzado del Inspector de Elementos de navegador (Chrome DevTools).

---

## 📖 Contenido

1. [Descripción](#descripción)
2. [Requisitos](#requisitos)
3. [Instalación](#instalación)
4. [Desarrollo local](#desarrollo-local)
5. [Compilación (Build)](#compilación-build)
6. [Despliegue](#despliegue)
7. [Estructura del proyecto](#estructura-del-proyecto)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

---

## Descripción

Este proyecto ofrece un **manual detallado** organizado en 14 secciones sobre las herramientas de desarrollo integradas en el navegador, tales como:

- Panel **Elements** (estructura del DOM, edición en vivo)
- Panel **Styles** y **Computed** (reglas CSS, box model)
- Panel **Layout** (Grid, Flexbox)
- Breakpoints, Device Mode, Accessibility, Snippets, y más.

La documentación está escrita en **Markdown** y sirve tanto para medida de aprendizaje como referencia profesional.

---

## Requisitos

- **Node.js** >= 18.0
- **npm** o **Yarn**

---

## Instalación

Clona el repositorio y instala dependencias:

```bash
# Usando npm
git clone https://github.com/LavenderEdit/inspector-web-docs.git
cd inspector-web-docs
npm install

# Usando Yarn
# yarn
yarn install
```

---

## Desarrollo local

Para iniciar un servidor local y visualizar cambios en caliente:

```bash
# npm
npm run start

# Yarn
yarn start
```

El sitio estará disponible en `http://localhost:3000/triggersaurus/` (según la configuración de `baseUrl`).

---

## Compilación (Build)

Genera la versión estática optimizada en la carpeta `build/`:

```bash
# npm
npm run build

# Yarn
yarn build
```

---

## Despliegue

- **GitHub Pages**: `npm run deploy` o `yarn deploy` (configurado para rama `gh-pages`).
- **cPanel / FTP**: Subir contenido de `build/` a `public_html/docusaurus/` (o carpeta deseada).

---

## Estructura del proyecto

```
inspector-web-docs/
├── blog/                 # Opcional (deshabilitado)
├── docs/                 # Archivos Markdown de documentación
├── src/
│   ├── css/custom.css    # Estilos globales (iconos, paleta)
│   └── pages/            # Páginas personalizadas
├── static/img/           # Imágenes y favicons
├── docusaurus.config.js  # Configuración principal
├── sidebars.js           # Estructura de la barra lateral
├── package.json          # Dependencias y scripts
└── build/                # Generado tras `npm run build`
```

---

## Contribuciones

¡Se aceptan pull requests y sugerencias! Por favor, abre un issue con tu propuesta y sigue las buenas prácticas de documentación.

---

## Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE.txt) para más detalles.

---

_Desarrollado con ❤️ por Juan Santos Pimentel Lalangui._
