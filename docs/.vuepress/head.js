module.exports = [
  [
    'meta',
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  ['link', { rel: 'preconnect', href: 'https://www.google-analytics.com' }],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    }
  ],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#3a0839'
    }
  ],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml'
    }
  ],
  ['meta', { name: 'theme-color', content: '#5bbad5' }],
  ['script', {
    defer: true,
    'data-domain': "docs.ipfs.tech", 
    src: "https://plausible.io/js/plausible.js"
  }, ``],
]
