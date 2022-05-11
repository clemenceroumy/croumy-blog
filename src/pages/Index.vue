<template>
  <Layout>
    <h1>Jeux</h1>
    <g-link
        v-for="game in $page.gcms.games"
        :key="game.id"
        class="nav__link"
        :to="'games/' + game.id"
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
      id
      title
    }
  }
}
</page-query>
