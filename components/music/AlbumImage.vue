<template>
    <div class="bg-background-dark w-full h-full p-[15%] rounded-full">
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