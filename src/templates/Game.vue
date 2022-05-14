<template>
  <Layout>
    <div>
      <h1 class="header" v-html="$page.gcms.game.title" />
      <p v-html="$page.gcms.game.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  watch: {
    '$page.gcms'(val) {
      console.log(val);
    }
  }
}
</script>

<page-query>
query GetGame($slug: String) {
  gcms {
    game(where: {slug: $slug}) {
      slug
      title
      content
    }
  }
}
</page-query>