<template>
  <div class="p-16 lg:p-20 wrapper bg-background rounded-lg">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="headline">{{ article.title }}</h1>
        <p class="subtitle">{{ article.publishedDate }}</p>
      </div>

      <ArticlePicture :height="230" :width="350" :url="article.picture.url"></ArticlePicture>
    </div>

    <p class="mt-20" v-html="article.content"></p>
  </div>
</template>

<script>
import ArticlePicture from "./ArticlePicture.vue";

export default {
  name: "Article",
  components: {ArticlePicture},
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>