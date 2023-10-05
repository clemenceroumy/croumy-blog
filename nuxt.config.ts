// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    build: {
      transpile: ['tslib', 'graphql']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-svgo',
        '@nuxtjs/apollo',
        'nuxt-icon',
        'nuxt-headlessui'
    ],
    app: {
        baseURL: '/croumy-blog/',
        buildAssetsDir: 'assets',
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devServer: {
        port: 8080
    },
    runtimeConfig: {
        public: {
            hygraph : {
                api: String(process.env.VUE_APP_HYGRAPH_API),
                auth_token: String(process.env.VUE_APP_HYGRAPH_AUTH_TOKEN),
            },
            firebase : {
                config: String(process.env.VUE_APP_FIREBASE_CONFIG),
            },
            api: {
                route: String(process.env.VUE_APP_API_URL),
            }
        }
    },
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
