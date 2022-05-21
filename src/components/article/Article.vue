<template>
  <div class="p-16 lg:p-20 wrapper bg-background rounded-lg">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="headline">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>
      </div>

      <ArticlePicture :height="230" :width="350" :url="article.picture.url"></ArticlePicture>
    </div>

    <p class="mt-20" v-html="article.content"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ArticlePicture from "./ArticlePicture.vue";
import DateFormat from "../../helpers/DateFormat";

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
    }
  }
});
</script>