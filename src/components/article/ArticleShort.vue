<template>
  <div class="bg-bg-article rounded-lg p-5 wrapper">
    <div class="flex h-full items-center">
      <div class="flex flex-col justify-between" :class="reversed ? 'order-2 ml-16 mr-6' : 'order-1 mr-16 ml-6'">
        <h1 class="header">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>

        <p class="content mt-4" v-html="compiledMarkdown"></p>
      </div>

      <div class="flex flex-col" :class="reversed ? 'order-1 ml-10' : 'order-2 mr-10'">
        <ArticlePicture :reversed="reversed" smaller :url="article.picture.url"></ArticlePicture>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import ArticlePicture from "./ArticlePicture.vue";
import Vue from "vue";
import DateFormat from "../../helpers/DateFormat";
import { marked } from 'marked';

export default Vue.extend({
  name: "ArticleShort",
  components: {ArticlePicture},
  props: {
    article: {
      type: Object,
      required: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedDate() {
      return DateFormat.toFrDate(this.article.publishedDate);
    },
    compiledMarkdown() {
      return marked(this.article.content);
    }
  }
});
</script>

<style scoped>
.wrapper {
  height: 250px;
}

.content {
  height: 70px;
  overflow: hidden;
  text-overflow: fade;
}
</style>