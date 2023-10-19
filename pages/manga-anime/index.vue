<template>
  <div>
    <slot name="title" class="header"></slot>
    <StatusDescription class="mb-5"></StatusDescription>

    <div class="flex flex-col mb-10">
      <div class="flex justify-between">
        <h1 class="title mb-2 text-text-light dark:text-text-dark">{{ $t('manga.manga') }}</h1>
        <nuxt-link class="text-primary dark:text-darkPrimary" to="/manga-anime/manga"><h1 class="small-title">{{ $t('global.seeAll') }}</h1></nuxt-link>
      </div>

      <Completion :limit="true" :activate-search="false"/>
    </div>

    <h1 class="title mb-2 text-text-light dark:text-text-dark">{{ $t('manga.anime') }}</h1>
    <!-- TODO -->
  </div>
</template>

<script lang="ts" setup>
import Completion from "~/pages/manga-anime/manga/index.vue";
import StatusDescription from "~/components/manga/StatusDescription.vue";

</script>