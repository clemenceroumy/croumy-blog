<template>
    <div>
      <slot name="title" class="header"></slot>

      <div class="flex justify-between">
        <h1 class="title">Complétion</h1>
        <nuxt-link class="text-primary dark:text-darkPrimary" to="/games/completion"><h1 class="small-title">Tout voir</h1></nuxt-link>
      </div>

      <h1 class="title">Articles</h1>
      <nuxt-link
          :key="game.slug"
          v-for="(game, index) in data?.games"
          :to="'/games/articles/' + game.slug"
      >
        <ArticleShort :reversed="index % 2 === 0" class="my-5" :article="game"/>
      </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
import ArticleShort from "~/components/article/ArticleShort.vue";

import getAllGames from "~/graphql/getAllGames.graphql"

const { data } = await useAsyncQuery(getAllGames);
</script>