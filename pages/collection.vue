<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
    <div v-if="pictures.length > 0" v-for="picture in pictures" class="group">
      <a :href="`https://www.instagram.com/p/${picture.shortcode}/`" target="_blank" class="relative">
        <img class="rounded cursor-pointer group-hover:scale-[1.02] scale-100 transition-scale duration-200" :src="picture.path" alt="">
        <div class="absolute top-0 w-full h-full justify-center items-center bg-bg-article-dark/[.40] hidden group-hover:flex group-hover:scale-[1.02] scale-100 transition-scale duration-200">
          <Icon name="material-symbols:favorite" color="white" class="w-[30px] h-[30px]"/>
          <p class="text-white header">{{ picture.likes }}</p>
        </div>
      </a>
    </div>

    <template v-else>
      <div v-for="_ in Array(10)" class="bg-gray w-full aspect-square rounded-md animate-pulse"></div>
    </template>
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