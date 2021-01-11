export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cycllup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/argon.css',
    '@/assets/css/akaunting-color.css',
    '@/assets/css/custom.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-sweetalert2',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-cookie-control'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  axios: {
    baseURL: 'https://dev-cycllup.pantheonsite.io',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login?_format=json', method: 'post', propertyName: 'csrf_token' },
          logout: false,
          user: false,
        },
        // tokenRequired: true,
        tokenType: '',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },

  /**
   * Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
   */
  ssr: false,

  loading: '~/components/layout/Loading.vue'

}
