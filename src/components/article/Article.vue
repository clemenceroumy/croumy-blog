<template>
  <div class="lg:p-20 md:p-16 p-10 wrapper bg-background rounded-lg">
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

<style lang="scss">
.content {
  text-align: justify;
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
</style>