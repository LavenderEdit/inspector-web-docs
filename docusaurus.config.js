// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Inspector Web',
  tagline: 'Guía completa del Inspector de Elementos en la Web',
  favicon: 'img/favicon.ico',

  /*
  // URL donde se desplegará tu sitio (en CPanel)
  url: 'https://993718514.facturalo.co',      
  baseUrl: '/docusaurus/',
  */

  // URL para GitHub Pages
  url: 'https://LavenderEdit.github.io',
  baseUrl: '/inspector-web-docs/',

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  // GitHub pages config (si aplica)
  organizationName: 'LavenderEdit',
  projectName: 'inspector-web-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Ruta al sidebar que definimos
          sidebarPath: require.resolve('./sidebars.js'),
          // URL base para "Editar esta página"
          editUrl: 'https://github.com/LavenderEdit/inspector-web-docs/edit/main/docs/',
          routeBasePath: 'docs',
        },
        // Deshabilitar blog si no lo vas a usar
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'triggersaurus-social-card.png',
      navbar: {
        title: 'Inspector Web',
        logo: {
          alt: 'Logo Inspector Web',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/LavenderEdit/inspector-web-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/introduccion/que-es-devtools',
              },
              {
                label: 'Panel Elements',
                to: '/docs/elements/arbol-dom',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/chrome-devtools',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/programming',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LavenderEdit/inspector-web-docs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Inspector Web.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
