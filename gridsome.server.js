module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      gcms {
        games {
          slug
        }
      }  
    }`)

    data.gcms.games.forEach(node => {
      createPage({
        path: `/games/${node.slug}`,
        component: './src/templates/Game.vue',
        context: {
          slug: node.slug
        }
      })
    })
  })
}
