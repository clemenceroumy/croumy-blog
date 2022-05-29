const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: "Croumy",
  plugins: [
    {use: "gridsome-plugin-typescript"},
    {
      use: "@gridsome/source-graphql",
      options: {
        url: process.env.VUE_APP_GRAPHCMS_API,
        fieldName: "gcms",
        typeName: "gcmsTypes",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_GRAPHCMS_AUTH_TOKEN}`
        }
      }
    }
  ],
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".vue", ".js"]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
};