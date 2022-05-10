module.exports = {
  siteName: 'Croumy',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.VUE_APP_GRAPHCMS_API,
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_GRAPHCMS_AUTH_TOKEN}`,
        },
      },
    },
  ]
}