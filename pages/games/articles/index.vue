<template>
    <div>
      <nuxt-link
          :key="game.slug"
          v-for="(game, index) in data?.games"
          class="nav__link"
          :to="'/games/articles/' + game.slug"
      >
        <ArticleShort :reversed="index % 2 === 0" class="my-5" :article="game"/>
      </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
import ArticleShort from "~/components/article/ArticleShort.vue";

import getAllGames from "~/graphql/getAllGamesArticles.graphql"

const { data } = await useAsyncQuery(getAllGames);
</script>