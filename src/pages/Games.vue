<template>
  <Layout>
    <g-link
      v-for="game in $page.gcms.games"
      :key="game.slug"
      class="nav__link"
      :to="'games/' + game.slug"
    >
      {{ game.title }}
    </g-link>
  </Layout>
</template>

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

