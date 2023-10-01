<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
    <a v-for="picture in pictures" :href="`https://www.instagram.com/p/${picture.shortcode}/`" target="_blank">
      <img class="w-full rounded cursor-pointer item-to-shrink" :src="picture.path" alt="">
    </a>
  </div>
</template>

<script setup lang="ts">
import {Ref} from "@vue/reactivity";
import collectionService from "~/data/services/CollectionService";
import CollectionPicture from "~/data/models/CollectionPicture";

let pictures: Ref<CollectionPicture[]> = ref([])

onMounted(async () => {
  pictures.value = await collectionService.getAllFiles("instagram")
})
</script>

<style scoped>
@keyframes shrink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

/* Apply the animation to the item when it's not hovered */
.item-to-shrink {
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
}

.item-to-shrink:hover {
  transform: scale(1.02);
  animation: none;
}
</style>