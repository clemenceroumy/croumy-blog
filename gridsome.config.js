module.exports = {
  siteName: 'Croumy',
  plugins: [
    {
      use: 'gridsome-source-directus',
      options: {
        apiUrl: String(process.env.VUE_APP_GRIDSOME_API_URL),
        project: String(process.env.VUE_APP_GRIDSOME_PROJECT_NAME),
        email: String(process.env.VUE_APP_GRIDSOME_EMAIL),
        password: String(process.env.VUE_APP_GRIDSOME_PASSWORD),
        collections: [
          {
            name: 'games',
            fields: '*.*',
          }
        ]
      }
    }
  ]
}
