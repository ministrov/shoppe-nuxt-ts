// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      myEnvVariable: "",
      apiurl: "",
      imageurl: ""
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons'
      },
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ]
})