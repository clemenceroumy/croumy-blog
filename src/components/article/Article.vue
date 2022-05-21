<template>
  <div class="p-16 wrapper bg-background rounded-lg">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="headline">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>
      </div>

      <ArticlePicture class="mr-10" :url="article.picture.url"></ArticlePicture>
    </div>

    <p class="mt-20 content" v-html="compiledMarkdown"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ArticlePicture from "./ArticlePicture.vue";
import DateFormat from "../../helpers/DateFormat";
import { marked } from 'marked';

export default Vue.extend({
  name: "Article",
  components: {ArticlePicture},
  props: {
    article: {
      type: Object,
      required: true
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

<style>
.content {
  text-align: justify;
}
</style>