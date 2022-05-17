<template>
  <Layout>
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

<script>
import Article from "../components/Article.vue";

export default {
  components: {Article}
};
</script>