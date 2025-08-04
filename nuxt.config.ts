// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      myEnvVariable: "",
      apiurl: "",
      imageurl: ""
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
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
  devtools: { enabled: true }, compatibilityDate: '2025-07-15',
  // eslint: {
  //   config: {
  //     stylistic: true, // Enforces consistent style rules
  //   },
  // },
})