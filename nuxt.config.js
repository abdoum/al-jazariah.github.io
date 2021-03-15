export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    host: '0.0.0.0'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base:
      process.env.NODE_ENV === 'production'
        ? '/al-jazariah.github.io/'
        : process.env.baseUrl
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'al-jazaria',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Custom loader
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-shortkey.client.js',

    '~/plugins/vue-touch-events.client.js',

    '~/plugins/vuex-persist.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/components',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-fullpage.js'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'متن الجزرية',
      ogHost: 'https://github.com',
      ogImage: true,
      ogDescription:
        'منظومة المقدمة من نظم إمام الحفاظ و حجة القراء محمد بن محمد بن محمد بن علي بن يوسف ابن الجزري رحمه الله تعالى',
      lang: 'ar',
      theme_color: '#2d3748',
      mobileAppIOS: true
    },
    manifest: {
      name: 'Al Jazaria',
      short_name: 'متن الجزرية',
      description:
        'منظومة المقدمة من نظم إمام الحفاظ و حجة القراء محمد بن محمد بن محمد بن علي بن يوسف ابن الجزري رحمه الله تعالى',
      lang: 'ar',
      background_color: '#2d3748',
      dir: 'rtl'
    },
    workbox: {
      enabled: true,
      debug: true,
      offlineAssets: ['~/static/audio/', '~/assets/fonts/']
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['content', 'type', 'id'],
    nestedProperties: ['poeme.vers']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter(
            (f) => f.file === 'Amiri-Regular.ttf'
          )
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  }
};
