<template>
  <Layout>
    <h1 class="header">JEUX</h1>

    <g-link
        :key="game.slug"
        v-for="game in $page.gcms.games"
        class="nav__link"
        :to="'games/' + game.slug"
    >
      <ArticleShort class="my-5" :article="game"/>
    </g-link>
  </Layout>
</template>

<script>
import ArticleShort from "../components/article/ArticleShort.vue";

export default {
  metaInfo: {
    title: "Croumy"
  },
  components: {ArticleShort}
};
</script>

<page-query>
{
gcms {
games {
slug
title
content
publishedDate
picture {
url
}
}
}
}
</page-query>
