<template>
  <div>
    <div v-if="activateSearch" class="mb-5 flex">
      <input
          type="search"
          name="search"
          id="search"
          placeholder="Nom du jeu"
          :value="searchValue"
          @input="searchValue = $event.target.value"
          class="flex-1 rounded-md border-0 py-2 px-5 placeholder:text-darkGray placeholder:dark:text-bg-article text-text-light dark:text-text-dark bg-gray dark:bg-black"
      />

      <div class="flex flex-1 ml-5">
        <select
            v-model="selectedPlatform"
            class="rounded-md border-0 px-5 bg-gray dark:bg-black text-text-light dark:text-text-dark">
          <option v-for="platform in platforms" :value="platform">{{ platform }}</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <CompletedGameInline :game="game" v-for="game in filteredGames" :key="game.id"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HLTBGame from "~/data/models/HLTBGame";
import CompletedGameInline from "~/components/completion/CompletedGameInline.vue";

const props = defineProps({
  limit: {type: Number, default: null},
  activateSearch: {type: Boolean, default: true}
})

const config = useRuntimeConfig()
const games = ref<HLTBGame[]>([])
const searchValue = ref<string>("")
const selectedPlatform = ref<string>("Aucune")

const {data} = await useFetch<HLTBGame[]>(`${config.public.api.route}/hltb`)
games.value = data.value?.slice(0, props.limit ?? data.value.length).map(game => new HLTBGame(game)) ?? []

const platforms = computed(() => {
  return [...["Aucune"], ...games.value
      .reduce((acc, game) => {
        if (!acc.includes(game.platform)) acc.push(game.platform)
        return acc
      }, [] as string[])]
})

const filteredGames = computed(() => games.value
    .filter(game => game.name.toLowerCase().includes(searchValue.value.toLowerCase())
        && (game.platform.toLowerCase().includes(selectedPlatform.value.toLowerCase())
            || selectedPlatform.value === "Aucune")
    )
)

</script>