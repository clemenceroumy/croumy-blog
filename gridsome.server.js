module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      hygraph {
        games {
          slug
        }
      }  
    }`)


    data.hygraph.games.forEach(node => {
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
