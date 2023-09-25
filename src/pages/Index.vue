<template>
  <Layout>
    <div class="my-10">
      <h1 class="header text-text-light dark:text-text-dark">JEUX</h1>

      <g-link
          :key="game.slug"
          v-for="(game, index) in $page.hygraph.games"
          class="nav__link"
          :to="'games/' + game.slug"
      >
        <ArticleShort :reversed="index % 2 === 0" class="my-5" :article="game"/>
      </g-link>
    </div>
  </Layout>
</template>

<script>
import ArticleShort from "../components/article/ArticleShort.vue";

export default {
  metaInfo: {
    title: "croumy"
  },
  components: {ArticleShort}
};
</script>

<page-query>
query {
  hygraph {
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
