<template>
  <div class="bg-background rounded-lg">
      <div class="wrapper" :class="shorten ? 'shorten' : ''">
        <div class="flex justify-between">
          <h1 class="header">{{ article.title }}</h1>

          <div class="image_container mr-10 mt-12">
            <div class="scotch_upper_right"></div>
            <img
                class="image object-cover"
                :class="shorten ? 'shorten' : ''"
                :src="article.picture.url"
                alt="game cover">
            <div class="scotch_bottom_left"></div>
          </div>
        </div>

        <p class="content mt-20" :class="shorten ? 'shorten' : ''" v-html="article.content"></p>
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
  padding: 50px;
}

.wrapper.shorten {
  height: 250px;
  padding: 15px;
}

.image_container{
  width: 350px;
  height: 240px;
  position: relative;
  transform: rotate(8deg);
}

.image_container.shorten {
  width: 200px;
  height: 150px;
}

.scotch_upper_right {
  height: 25px;
  width: 65px;
  background-color: var(--gray);
  opacity: 0.4;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  right: -20px;
}

.scotch_bottom_left {
  height: 25px;
  width: 65px;
  background-color: var(--gray);
  opacity: 0.4;
  transform: rotate(45deg);
  position: absolute;
  bottom: 0;
  left: -20px;
}

.image {
  width: 100%;
  height: 100%;
  border: 12px solid #FFFFFF;
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