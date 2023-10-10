<template>
  <div class="w-full h-full p-[15%] cursor-pointer rounded-full vinyl">
    <img :src="albumPicture" class="rounded-full w-full h-full object-cover" alt="album picture"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  albumPicture: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.vinyl {
  background:
      linear-gradient(30deg, transparent 40%, black 40%) no-repeat 100% 0,
      linear-gradient(60deg, black 60%, transparent 60%) no-repeat 0 100%,
      repeating-radial-gradient(black, black 3px, #2d2d2d 5px, black 6px);
  background-size: 50% 100%, 100% 50%, 100% 100%;
}
</style>