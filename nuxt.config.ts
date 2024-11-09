// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  extends: ['@shuriken-ui/nuxt'],
  devtools: { enabled: true },
  modules: ['@pinia/nuxt']
})