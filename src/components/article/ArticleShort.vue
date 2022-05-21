<template>
  <div class="bg-background rounded-lg p-5 wrapper">
    <div class="flex h-full items-center">
      <div class="flex flex-col justify-between pr-20">
        <h1 class="header">{{ article.title }}</h1>
        <p class="subtitle">{{ formattedDate }}</p>

        <p class="content mt-4" v-html="article.content"></p>
      </div>

      <div class="flex flex-col mr-10">
        <ArticlePicture :height="150" :width="230" :url="article.picture.url"></ArticlePicture>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import ArticlePicture from "./ArticlePicture.vue";
import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";
import DateFormat from "../../helpers/DateFormat";

@Component({
  components: {ArticlePicture}
})
export default class ArticleShort extends Vue {
  @Prop({required: true})
  article: any;

  @Prop({default: false})
  alignLeft!: boolean;

  get formattedDate() {
    return DateFormat.toFrDate(this.article.publishedDate);
  }
}
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