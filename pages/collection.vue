<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
    <img class="w-full rounded" v-for="picture in pictures" :src="picture.path" alt="">
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

</style>