<template>
  <div class="flex bg-bg-article dark:bg-bg-article-dark rounded-md p-3 items-center">
    <img class="object-cover w-[70px] h-[70px] rounded" :src="game.picture" :alt="`${game.name} illustration`"/>
    <div class="flex flex-col flex-1 ml-2">
      <h1 class="small-title">{{ game.name }}</h1>
      <p class="small-subtitle">{{ game.platform }}</p>
      <p class="subtitle">{{ game.completedDateFormatted }}</p>
    </div>
    <h1 class="font-bold text-darkGray small-title">{{ game.totalTimeFormatted }}</h1>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import HLTBGame from "~/data/models/HLTBGame";

const props = defineProps({
  game: {
    type: Object as PropType<HLTBGame>,
    required: true
  }
})
</script>