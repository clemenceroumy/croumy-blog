<template>
  <div class="bg-bg-article dark:bg-bg-article-dark rounded-lg p-5">
    <div class="grid grid-cols-12 h-full items-center md:my-5">
      <div class="col-span-12 lg:col-span-10 order-2"
           :class="reversed ? 'lg:order-2 lg:ml-16 lg:mr-6' : 'lg:order-1 lg:mr-16 lg:ml-6'">
        <h1 class="text-text-light dark:text-text-dark header">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>

        <p class="hidden sm:block content mt-4 text-text-light dark:text-text-dark" v-html="compiledMarkdown"></p>
      </div>

      <div class="col-span-12 lg:col-span-2 order-1 ml-5 mt-5 mb-10 lg:mb-0 lg:mt-0"
           :class="reversed ? 'lg:order-1 lg:ml-10' : 'lg:order-2 lg:mr-10'">
        <ArticlePicture :reversed="reversed" smaller :url="article.picture?.url ?? 'https://placehold.co/600x400'"></ArticlePicture>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import ArticlePicture from "./ArticlePicture.vue";
import DateFormat from "../../helpers/DateFormat";
import {marked} from "marked";
import {ref, computed, PropType} from 'vue';

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  },
  reversed: {
    type: Boolean,
    default: false
  }
})

const formattedDate = computed(() => {
  return DateFormat.toFrDate(props.article.publishedAt);
})
const compiledMarkdown = computed(() => {
  return marked(props.article.content ?? "");
})

</script>

<style scoped>
.content {
  height: 70px;
  overflow: hidden;
  text-overflow: fade;
}
</style>