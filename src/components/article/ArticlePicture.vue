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
    smaller: {
      type: Boolean,
      default: false
    },
    reversed : {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssVars() {
      return {
        "--height": this.smaller ? "150px" : "230px",
        "--width": this.smaller ? "230px" :"350px",
        "--border-size": this.smaller ? "6px" : "12px",
        "--rotation": this.reversed ? "-8deg" : "8deg",
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
  transform: rotate(var(--rotation));
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
  border: var(--border-size) solid #FFFFFF;
}
</style>