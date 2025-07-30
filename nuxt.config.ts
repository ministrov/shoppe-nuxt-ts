// import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // token: process.env.TOKEN,
    // apiurl: process.env.APIURL,
    public: {
      myEnvVariable: "",
      apiurl: "",
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
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