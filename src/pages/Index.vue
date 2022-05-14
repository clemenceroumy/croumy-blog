<template>
  <Layout>
    <h1 class="header">Jeux</h1>
    <g-link
        v-for="game in $page.gcms.games"
        :key="game.slug"
        class="nav__link"
        :to="'games/' + game.slug"
    >{{ game.title }}</g-link
    >
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Croumy'
  }
}
</script>

<page-query>
{
  gcms {
    games {
      slug
      title
    }
  }
}
</page-query>
