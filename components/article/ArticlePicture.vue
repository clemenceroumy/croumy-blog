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

<script lang="ts" setup>

import { computed } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  smaller: {
    type: Boolean,
    default: false
  },
  reversed: {
    type: Boolean,
    default: false
  },
})

const cssVars = computed(() => ({
  "--max-height": props.smaller ? "150px" : "270px",
  "--max-width": props.smaller ? "230px" : "400px",
  "--border-size": props.smaller ? "6px" : "12px",
  "--rotation": props.reversed ? "-8deg" : "8deg"
}));
</script>

<style scoped>
.image_container {
  max-width: var(--max-width);
  max-height: var(--max-height);
  position: relative;
  transform: rotate(var(--rotation));
}

.scotch_upper_right {
  height: 25px;
  width: 65px;
  background-color: theme('colors.gray');
  opacity: 0.4;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  right: -20px;
}

.scotch_bottom_left {
  height: 25px;
  width: 65px;
  background-color: theme('colors.gray');
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