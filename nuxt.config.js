const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  modules: [
    '~/modules/vuikit',
    '~/modules/markdown'
  ],
  plugins: [
    '~/plugins/ga'
  ],
  pageExtensions: ['js', 'vue', 'md'],
  css: [
    '~/assets/theme/index.less'
  ],
  loading: { color: '#2CB77F' },
  head: {
    title: 'Vuikit - a consistent and responsive Vue UI framework for web site interfaces',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vuikit Site and Documentation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    linkActiveClass: 'uk-active',
    linkExactActiveClass: 'uk-active'
  },
  build: {
    extractCSS: true,
    vendor: ['vuikit'],
    extend (config, { isDev }) {
      // add additional paths for less compiling
      config.module.rules
        .find(r => r.test.toString() === (/\.less$/).toString())
        .use.find(u => u.loader === 'less-loader')
        .options.paths = [
          resolve(__dirname, '../../node_modules')
        ]
    }
  },
  render: {
    resourceHints: false,
    gzip: false
  }
}