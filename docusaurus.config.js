// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: '九彩大唠嗑',
  tagline: '',
  url: 'https://github.com/iamjoel',
  baseUrl: '/nine-say/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'iamjoel', // Usually your GitHub org/user name.
  projectName: 'nine-say',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/index.js'),
          editUrl:
            'https://github.com/iamjoel/nine-say',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/iamjoel/nine-say',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '九彩大唠嗑',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'base/readme',
            position: 'left',
            label: '底层',
          },
          {
            type: 'doc',
            docId: 'self/readme',
            position: 'left',
            label: '自身',
          },
          {
            type: 'doc',
            docId: 'society/readme',
            position: 'left',
            label: '社会',
          },
          {
            type: 'doc',
            docId: 'resource/book/readme',
            position: 'left',
            label: '书',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/iamjoel/nine-say',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} nine-say, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
