// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: '1. Introducción',
      className: 'sidebar-cat-intro',
      collapsible: true,
      collapsed: false,
      items: [
        'introduccion/1.1-que-es-devtools',
        'introduccion/1.2-para-que-sirve',
        'introduccion/1.3-ventajas',
      ],
    },
    {
      type: 'category',
      label: '2. Cómo Abrir DevTools',
      className: 'sidebar-cat-abrir',
      collapsible: true,
      collapsed: true,
      items: [
        'abrir-devtools/2.1-atajos',
        'abrir-devtools/2.2-menu',
        'abrir-devtools/2.3-inspeccion-directa',
      ],
    },
    {
      type: 'category',
      label: '3. Panel Elements',
      className: 'sidebar-cat-elements',
      collapsible: true,
      collapsed: true,
      items: [
        'elements-panel/3.1-arbol-dom',
        'elements-panel/3.2-seleccion-resaltado',
        'elements-panel/3.3-menu-contextual',
      ],
    },
    {
      type: 'category',
      label: '4. Edición de HTML',
      className: 'sidebar-cat-edicion',
      collapsible: true,
      collapsed: true,
      items: [
        'edicion-html/4.1-innerhtml',
        'edicion-html/4.2-atributos',
        'edicion-html/4.3-nodos',
      ],
    },
    {
      type: 'category',
      label: '5. Panel Styles',
      className: 'sidebar-cat-styles',
      collapsible: true,
      collapsed: true,
      items: [
        'styles-panel/5.1-jerarquia-selectores',
        'styles-panel/5.2-toggle-propiedades',
        'styles-panel/5.3-autocompletado',
      ],
    },
    {
      type: 'category',
      label: '6. Computed & Box Model',
      className: 'sidebar-cat-boxmodel',
      collapsible: true,
      collapsed: true,
      items: [
        'computed-boxmodel/6.1-computed-styles',
        'computed-boxmodel/6.2-box-model',
        'computed-boxmodel/6.3-overlays',
      ],
    },
    {
      type: 'category',
      label: '7. Panel Layout',
      className: 'sidebar-cat-layout',
      collapsible: true,
      collapsed: true,
      items: [
        'layout-panel/7.1-grid-inspector',
        'layout-panel/7.2-flexbox-inspector',
        'layout-panel/7.3-visual-editor',
      ],
    },
    {
      type: 'category',
      label: '8. Event Listeners',
      className: 'sidebar-cat-events',
      collapsible: true,
      collapsed: true,
      items: [
        'event-listeners/8.1-lista-eventos',
        'event-listeners/8.2-ver-callbacks',
        'event-listeners/8.3-breakpoints-eventos',
      ],
    },
    {
      type: 'category',
      label: '9. Breakpoints',
      className: 'sidebar-cat-breakpoints',
      collapsible: true,
      collapsed: true,
      items: [
        'breakpoints/9.1-js-breakpoints',
        'breakpoints/9.2-dom-breakpoints',
        'breakpoints/9.3-xhr-fetch',
      ],
    },
    {
      type: 'category',
      label: '10. Responsive Mode',
      className: 'sidebar-cat-responsive',
      collapsible: true,
      collapsed: true,
      items: [
        'responsive-mode/10.1-device-toolbar',
        'responsive-mode/10.2-throttling',
        'responsive-mode/10.3-dimensiones',
      ],
    },
    {
      type: 'category',
      label: '11. Búsquedas & Snippets',
      className: 'sidebar-cat-search',
      collapsible: true,
      collapsed: true,
      items: [
        'busquedas-snippets/11.1-busquedas',
        'busquedas-snippets/11.2-snippets',
        'busquedas-snippets/11.3-command-menu',
      ],
    },
    {
      type: 'category',
      label: '12. Accesibilidad',
      className: 'sidebar-cat-accessibility',
      collapsible: true,
      collapsed: true,
      items: [
        'accesibilidad/12.1-panel-accessibility',
        'accesibilidad/12.2-tab-order',
        'accesibilidad/12.3-screenreaders',
      ],
    },
    {
      type: 'category',
      label: '13. Capturas & Workspaces',
      className: 'sidebar-cat-capturas',
      collapsible: true,
      collapsed: true,
      items: [
        'capturas-workspaces/13.1-screenshots',
        'capturas-workspaces/13.2-exportar-cambios',
        'capturas-workspaces/13.3-workspaces',
      ],
    },
    {
      type: 'category',
      label: '14. Buenas Prácticas',
      className: 'sidebar-cat-bestpractices',
      collapsible: true,
      collapsed: true,
      items: [
        'buenas-practicas/14.1-entorno',
        'buenas-practicas/14.2-versionado',
        'buenas-practicas/14.3-atajos',
        'buenas-practicas/14.4-wiki-workflows',
      ],
    },
  ],
};

module.exports = sidebars;

