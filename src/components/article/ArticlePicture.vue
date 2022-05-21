<template>
  <div :style="cssVars" class="image_container">
    <div class="scotch_upper_right"></div>
    <img
        class="image object-cover"
        :src="url"
        alt="game cover">
    <div class="scotch_bottom_left"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ArticlePicture",
  props: {
    url: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 230
    },
    width: {
      type: Number,
      default: 350
    }
  },
  computed: {
    cssVars() {
      return {
        "--height": `${this.height}px`,
        "--width": `${this.width}px`
      };
    }
  }
});
</script>

<style scoped>
.image_container {
  width: var(--width);
  height: var(--height);
  position: relative;
  transform: rotate(8deg);
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
</style>