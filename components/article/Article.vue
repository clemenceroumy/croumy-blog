<template>
  <div class="lg:p-20 md:p-16 sm:p-10 p-5 bg-bg-article dark:bg-bg-article-dark rounded-lg">
    <div class="grid grid-cols-12 items-center">
      <div class="col-span-12 lg:col-span-6 order-2 lg:order-1">
        <h1 class="text-text-light dark:text-text-dark headline">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>
      </div>

      <div
          class="col-span-12 lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 mt-10 lg:mt-0 mb-16 lg:mb-0 mr-10 ml-10 lg:ml-0">
        <ArticlePicture :url="article.picture?.url ?? 'https://placehold.co/600x400'"></ArticlePicture>
      </div>
    </div>

    <div class="lg:mt-20 mt-10 article-content text-text-light dark:text-text-dark" v-html="compiledMarkdown"></div>
  </div>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import ArticlePicture from "./ArticlePicture.vue";
import DateFormat from "../../helpers/DateFormat";
import {marked} from "marked";

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  }
})

const formattedDate = computed(() => {
  return DateFormat.fromDate(props.article.publishedAt, DateFormat.FULL_DATE_FORMAT);
})
const compiledMarkdown = computed(() => {
  return marked(props.article?.content ?? "");
})
</script>

<style lang="scss">
.article-content {
  text-align: justify;

  p {
    margin-bottom: 1rem;
  }

  a {
    @apply text-darkGray;
  }

  table {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;

    tbody {
      max-width: 50%;
      min-width: 30%;

      @media (max-width: 1024px) {
        max-width: 100%;
        min-width: 100%;
      }

      tr {
        width: 100%;
        display: flex;

        td {
          width: 100%;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>