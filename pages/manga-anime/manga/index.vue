<template>
  <div>
    <div v-if="activateSearch" class="mb-5 grid grid-cols-1 md:grid-cols-3 gap-3">
      <input
          type="search"
          name="search"
          id="search"
          :placeholder="$t('manga.searchPlaceholder')"
          :value="searchValue"
          @input="searchValue = $event.target.value"
          class="w-full rounded-md border-0 py-2 px-5 placeholder:text-gray text-text-light dark:text-text-dark bg-white dark:bg-black"
      />

      <div class="flex items-center w-full">
        <SelectInput
            :selected-value="selectedSortBy"
            :items="sortBy"
            @onChanged="selectedSortBy = Number.parseInt($event)"
            class="w-full"
        />

        <Icon
            name="solar:sort-from-top-to-bottom-bold"
            :class="[sortOrder ? 'opened' : 'closed','h-7 w-7 ml-2 cursor-pointer text-text-light dark:text-text-dark']"
            @click="sortOrder = !sortOrder"
        />
      </div>
    </div>


    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
      <CompletedManga :manga="manga" v-for="manga in filteredMangas" :key="manga.title"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "@/helpers/extensions/date.extensions"
import SelectInput from "~/components/common/SelectInput.vue";
import Manga from "~/data/models/Manga";
import CompletedManga from "~/components/completion/CompletedManga.vue";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

const props = defineProps({
  limit: {type: Boolean, default: false},
  activateSearch: {type: Boolean, default: true}
})

const config = useRuntimeConfig()
const {t} = useI18n()
const fullConfig = resolveConfig(tailwindConfig)
const screenSizes = Object.entries(fullConfig.theme.screens).reduce((acc, [key, value]) => {
  acc[key] = parseInt(value);
  return acc;
}, {});

const sortBy: { [id: number]: string } = {
  0: t("manga.sortBy.completionYear"),
  1: t("manga.sortBy.name"),
  2: t("manga.sortBy.author"),
  3: t("manga.sortBy.status")
}
const sort = {"asc": true, "desc": false}

const mangas = ref<Manga[]>([])
const mangasLimited = ref<Manga[]>([])
const numberOfItems = ref<number>(0)
const searchValue = ref<string>("")
const selectedSortBy = ref(0)
const sortOrder = ref<boolean>(sort.asc)

const {data} = await useFetch<Manga[]>(`${config.public.api.route}/notion/manga`)
mangas.value = data.value.map(manga => new Manga(manga)) ?? []

onMounted( () => {
  mangasLimited.value = mangas.value

  setNumberItems()
  window.addEventListener("resize", () => setNumberItems());
})

watch(numberOfItems, () => {
  if (props.limit) mangasLimited.value = mangas.value.slice(0, numberOfItems.value)
}, {immediate: true})

function setNumberItems() {
  if (window.innerWidth < screenSizes.sm) {
    numberOfItems.value = 4;
  } else if (window.innerWidth < screenSizes.md) {
    numberOfItems.value = 3;
  } else if (window.innerWidth < screenSizes.lg) {
    numberOfItems.value = 4;
  } else if (window.innerWidth < screenSizes.xl) {
    numberOfItems.value = 5;
  } else if (window.innerWidth < screenSizes['2xl']) {
    numberOfItems.value = 6;
  } else {
    numberOfItems.value = 8;
  }
}

const filteredMangas = computed(() => mangasLimited.value
    .filter(manga => manga.title.toLowerCase().includes(searchValue.value.toLowerCase()))
    .sort((a, b) => {
      switch (selectedSortBy.value) {
        case 0:
          return sortOrder.value === sort.asc ? a.completedYear.localeCompare(b.completedYear) : b.completedYear.localeCompare(a.completedYear)
        case 1:
          return sortOrder.value === sort.asc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        case 2:
          return sortOrder.value === sort.asc ? a.authorsString.localeCompare(b.authorsString) : b.authorsString.localeCompare(a.authorsString)
        case 3:
          return sortOrder.value === sort.asc ? a.status - b.status : b.status - a.status
        default:
          return 0
      }
    })
)

</script>