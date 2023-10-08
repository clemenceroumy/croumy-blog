<template>
    <div class="bg-black w-full h-full p-[15%] cursor-pointer rounded-full">
      <img :src="albumPicture" class="rounded-full w-full h-full object-cover"  alt="album picture"/>
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