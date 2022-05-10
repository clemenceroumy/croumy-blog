module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      gcms {
        games {
          id
          title
        }
      }  
    }`)

    console.log(data)

    /*data.gcms.games.forEach(({ node }) => {
      createPage({
        path: `/games/${node.id}`,
        component: './src/templates/Game.vue',
        context: {
          id: node.id
        }
      })
    })*/
  })
}
