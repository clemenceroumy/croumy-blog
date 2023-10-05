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
          class="flex-1 rounded-md border-0 py-2 px-5 placeholder:text-gray placeholder:dark:text-bg-article text-text-light dark:text-text-dark bg-white dark:bg-black"
      />

      <div class="flex flex-1 ml-5 items-center gap-5">
        <SelectInput
            :selected-value="selectedPlatform"
            :items="platforms"
            @onChanged="selectedPlatform = Number.parseInt($event)"/>

        <div class="flex items-center">
          <SelectInput
              :selected-value="selectedSortBy"
              :items="sortBy"
              @onChanged="selectedSortBy = Number.parseInt($event)"
          />

          <Icon
              :name="sortOrder === sort.asc ? 'solar:sort-from-top-to-bottom-bold' : 'solar:sort-from-bottom-to-top-bold'"
              class="h-7 w-7 ml-2 cursor-pointer text-text-light dark:text-text-dark"
              @click="sortOrder = !sortOrder"
          />
        </div>
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
import "@/helpers/extensions/date.extensions"
import SelectInput from "~/components/common/SelectInput.vue";

const props = defineProps({
  limit: {type: Number, default: null},
  activateSearch: {type: Boolean, default: true}
})

const config = useRuntimeConfig()

const sortBy: { [id: number]: string } = {
  0: "Date de complétion",
  1: "Nom",
  2: "Plateforme",
  3: "Temps de jeu",
}
const sort = {"asc": true, "desc": false}

const games = ref<HLTBGame[]>([])
const searchValue = ref<string>("")
const selectedPlatform = ref(0)
const selectedSortBy = ref(0)
const sortOrder = ref<boolean>(sort.asc)

const {data} = await useFetch<HLTBGame[]>(`${config.public.api.route}/hltb`)
games.value = data.value?.slice(0, props.limit ?? data.value.length).map(game => new HLTBGame(game)) ?? []

const platforms = computed(() => {
  const platformsItem = {} as { [id: number]: string }
  [...["Aucune"], ...games.value
      .reduce((acc, game) => {
        if (!acc.includes(game.platform)) acc.push(game.platform)
        return acc
      }, [] as string[])
  ].forEach((platform, index) => platformsItem[index] = platform)

 return platformsItem
})

const selectedPlatformName = computed(() => platforms.value[selectedPlatform.value])

const filteredGames = computed(() => games.value
    .filter(game => game.name.toLowerCase().includes(searchValue.value.toLowerCase())
        && (game.platform.toLowerCase().includes(selectedPlatformName.value.toLowerCase())
            || selectedPlatformName.value === "Aucune")
    )
    .sort((a, b) => {
      switch (selectedSortBy.value) {
        case 0:
          return sortOrder.value === sort.asc ? (a.completedDate.isBefore(b.completedDate) ? 1 : -1) : (a.completedDate.isBefore(b.completedDate) ? -1 : 1)
        case 1:
          return sortOrder.value === sort.asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        case 2:
          return sortOrder.value === sort.asc ? a.platform.localeCompare(b.platform) : b.platform.localeCompare(a.platform)
        case 3:
          return sortOrder.value === sort.asc ? a.totalTime - b.totalTime : b.totalTime - a.totalTime
        default:
          return 0
      }
    })
)

</script>