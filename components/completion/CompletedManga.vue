<template>
  <div class="flex flex-col bg-bg-article dark:bg-bg-article-dark rounded-md p-3 justify-between">
    <div class="relative z-1">
      <div :style="{'background-color': manga.statusColor}" class="w-[15px] h-[15px] absolute right-3 top-3 rounded-full border-[1px] border-white"></div>
      <img class="object-cover w-full h-[250px] rounded" :src="manga.illustration"
           :alt="`${manga.title} illustration`"/>
      <h1 class="small-title text-text-light dark:text-text-dark mt-2 line-clamp-2">{{ manga.title }}</h1>
      <p class="small-subtitle text-text-light dark:text-text-dark">{{ manga.authorsString }}</p>
    </div>
    <p class="subtitle mt-2">{{ manga.completedYear }}</p>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue/dist/vue";
import Manga from "~/data/models/Manga";

const props = defineProps({
  manga: {
    type: Object as PropType<Manga>,
    required: true
  }
})
</script>