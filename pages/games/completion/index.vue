<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
    <CompletedGameInline :game="game" v-for="game in games" :key="game.id"/>
  </div>
</template>

<script lang="ts" setup>
import HLTBGame from "~/data/models/HLTBGame";
import CompletedGameInline from "~/components/completion/CompletedGameInline.vue";

const config = useRuntimeConfig()
const games = ref<HLTBGame[]>([])

const {data} = await useFetch<HLTBGame[]>(`${config.public.api.route}/hltb`, {mode: 'no-cors'})

watch(data, () => {
  games.value = data.value?.map(game => new HLTBGame(game)) ?? []
}, {immediate: true})

</script>