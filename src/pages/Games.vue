<template>
  <Layout>
    <div class="my-10">
      <g-link
          :key="game.slug"
          v-for="(game, index) in $page.gcms.games"
          class="nav__link"
          :to="'games/' + game.slug"
      >
        <ArticleShort :reversed="index % 2 === 0" class="my-5" :article="game"/>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
{
gcms {
games {
slug
title
content
publishedAt
picture {
url
}
}
}
}
</page-query>

<script>
import ArticleShort from "../components/article/ArticleShort.vue";

export default {
  components: {ArticleShort}
};
</script>