<template>
    <div>
      <slot name="title" class="header"></slot>

      <div class="flex flex-col mb-10">
        <div class="flex justify-between">
          <h1 class="title mb-2 text-text-light dark:text-text-dark">Complétion</h1>
          <nuxt-link class="text-primary dark:text-darkPrimary" to="/games/completion"><h1 class="small-title">Tout voir</h1></nuxt-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          <CompletedGameInline :game="game" v-for="game in games" :key="game.id"/>
        </div>
      </div>

      <h1 class="title mb-2 text-text-light dark:text-text-dark">Articles</h1>
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

import getAllGamesArticles from "~/graphql/getAllGamesArticles.graphql"
import HLTBGame from "~/data/models/HLTBGame"
import CompletedGameInline from "~/components/completion/CompletedGameInline.vue";
const config = useRuntimeConfig()

const { data } = await useAsyncQuery(getAllGamesArticles);
const gameData = await useFetch<HLTBGame[]>(`${config.public.api.route}/hltb`, {mode: 'no-cors'})
const games = ref<HLTBGame[]>([])

watch(gameData.data, () => {
  games.value = gameData.data.value?.slice(0,6).map(game => new HLTBGame(game)) ?? []
}, {immediate: true})

</script>