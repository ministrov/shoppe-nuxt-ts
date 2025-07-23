import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // runtimeConfig: {
  //   token: '',
  //   apiUrl: '',
  // },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
  ],
  devtools: { enabled: true }, compatibilityDate: '2025-07-15',
  // eslint: {
  //   config: {
  //     stylistic: true, // Enforces consistent style rules
  //   },
  // },
})