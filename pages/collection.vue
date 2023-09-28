<template>
  <div class="grid grid-cols-4">
    <img class="w-full" v-for="picture in feed?.pictures" :src="picture.url" alt="">
  </div>
</template>

<script setup lang="ts">
import {Ref} from "@vue/reactivity";
import {InstaFeed} from "~/data/models/InstaFeed";

const {data} = await useFetch("https://www.instagram.com/croumy2/?__a=1&__d=1").catch((error) => error.data)
const feed: Ref<InstaFeed | null> = ref(null)

onMounted(async () => {
  feed.value = InstaFeed.fromJson(data.value)
});
</script>

<style scoped>

</style>