<template>
  <Layout>
    <div>
      <h1 v-html="$page.gcms.game.title" />
      <p v-html="$page.gcms.game.content" />
    </div>
  </Layout>
</template>

<page-query>
query GetGame($id: ID) {
  gcms {
    game(where: {id: $id}) {
      id
      title
      content
    }
  }
}
</page-query>