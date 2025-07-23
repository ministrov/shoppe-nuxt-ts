import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // runtimeConfig: {
  //   token: '',
  //   apiUrl: '',
  // },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  eslint: {
    config: {
      stylistic: true // Enforces consistent style rules
    }
  }
})