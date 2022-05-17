<template>
  <div class="p-5 bg-background rounded-md">
      <div class="wrapper pa-5" :class="shorten ? 'shorten' : ''">
        <div class="flex justify-between">
          <h1 class="header">{{ article.title }}</h1>

          <img
              class="image_container object-cover"
              :class="shorten ? 'shorten' : ''"
              :src="article.picture.url"
              alt="game cover">
        </div>

        <p class="content" :class="shorten ? 'shorten' : ''" v-html="article.content"></p>
      </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: true
    },
    shorten: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">
.wrapper {
  height: 100vh;
}

.wrapper.shorten {
  height: 250px;
}

.image_container {
  width: 350px;
  height: 240px;
  border: 12px solid #FFFFFF;
}

.image_container.shorten {
  width: 200px;
  height: 150px;
}

.content {
  height: 100%;
  overflow: visible;
}

.content.shorten {
  height: 70px;
  overflow: hidden;
  text-overflow: fade;
}
</style>