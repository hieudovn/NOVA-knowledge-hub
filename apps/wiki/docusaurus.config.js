// @ts-check

const config = {
  title: 'NOVA Knowledge Hub',
  tagline: 'Markdown-first technical knowledge base',
  url: 'http://localhost',
  baseUrl: '/',
  organizationName: 'hieudovn',
  projectName: 'NOVA-knowledge-hub',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../../content/wiki',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsDir: '../../content/wiki',
        docsRouteBasePath: '/',
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'NOVA Knowledge Hub',
      items: [
        {to: '/solutions/', label: 'Solutions', position: 'left'},
        {to: '/capabilities/', label: 'Capabilities', position: 'left'},
        {to: '/patterns/', label: 'Patterns', position: 'left'},
        {to: '/comparisons/', label: 'Comparisons', position: 'left'},
        {to: '/tender/', label: 'Tender', position: 'left'},
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'light',
      copyright: `NOVA Knowledge Hub. Built as a personal-first, organization-ready knowledge layer.`,
    },
  },
};

module.exports = config;
