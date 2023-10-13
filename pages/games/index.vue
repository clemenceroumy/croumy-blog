<template>
  <div>
    <slot name="title" class="header"></slot>

    <div class="flex flex-col mb-10">
      <div class="flex justify-between mb-2">
        <h1 class="title mb-2 text-text-light dark:text-text-dark">{{ $t('pages.gamesCompletion') }}</h1>
        <nuxt-link class="text-primary dark:text-darkPrimary" to="/games/completion"><h1 class="small-title">{{ $t('global.seeAll') }}</h1></nuxt-link>
      </div>

      <Completion :limit="6" :activate-search="false"/>
    </div>

    <h1 class="title mb-2 text-text-light dark:text-text-dark">Articles</h1>
    <nuxt-link
        :key="article.slug"
        v-for="(article, index) in data?.games"
        :to="'/games/articles/' + article.slug"
    >
      <ArticleShort :reversed="index % 2 === 0" class="my-5" :article="article"/>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import ArticleShort from "~/components/article/ArticleShort.vue";

import getAllGamesArticles from "~/graphql/getAllGamesArticles.graphql"
import Completion from "~/pages/games/completion/index.vue";

const config = useRuntimeConfig()

const {data} = await useAsyncQuery(getAllGamesArticles);
</script>