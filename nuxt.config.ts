// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    build: {
      transpile: ['tslib', 'graphql']
    },
    app: {
        baseURL: '/croumy-blog/',
        buildAssetsDir: 'assets'
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-svgo',
        '@nuxtjs/apollo'
    ],
    css: ['@/assets/css/main.scss',],
    svgo: { autoImportPath: './assets/img/' },
    apollo: {
        clients: {
            default: {
                httpEndpoint: String(process.env.VUE_APP_HYGRAPH_API),
                authType: 'Bearer',
                authHeader: 'Authorization',
                connectToDevTools: true
            }
        },
    },
})
