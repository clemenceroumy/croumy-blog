// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],
  css: [
    '@/assets/css/main.scss',
  ],
  svgo: {
    autoImportPath: './assets/img/'
  }
})
