<template>
  <Layout>
    <h1 class="header">JEUX</h1>

    <g-link
        :key="game.slug"
        v-for="game in $page.gcms.games"
        class="nav__link"
        :to="'games/' + game.slug"
    >
      <Article shorten :article="game"/>
    </g-link>
  </Layout>
</template>

<script>
import Article from "../components/Article.vue";

export default {
  metaInfo: {
    title: "Croumy"
  },
  components: {Article}
};
</script>

<page-query>
{
gcms {
games {
slug
title
content
picture {
url
}
}
}
}
</page-query>
