<template>
  <div>
    <div class="grid grid-cols-2 mt-5">
      <div class="flex flex-col 2xl:32 xl:mr-24 lg:mr-10 md:mr-6 sm:mr-3">
        <div v-for="track in tracks" class="flex items-center justify-between mb-5">
          <div class="flex h-full">
            <div class="w-[90px] h-[90px]">
              <AlbumImage :album-picture="track.albumPicture"/>
            </div>

            <div class="flex-col flex ml-3 h-full justify-between">
              <div>
                <h1 class="small-title text-text-light dark:text-text-dark">{{ track.name }}</h1>
                <p class="subtitle">{{ track.artistsNamesString }}</p>
              </div>

              <p class="small-subtitle text-text-light dark:text-text-dark">{{track.albumName}}</p>
            </div>
          </div>

          <p class="text-text-light dark:text-text-dark">{{track.trackDuration}}</p>
        </div>
      </div>

      <div class="rounded-md w-[90%] aspect-square p-10 bg-bg-article dark:bg-bg-article-dark shadow relative">
        <AlbumImage :album-picture="playingTrack?.albumPicture ?? ''"></AlbumImage>
        <div class="w-full h-full top-0 left-0 absolute flex justify-center items-center">
          <div class="h-[20px] w-[20px] rounded-full bg-bg-article dark:bg-bg-article-dark shadow-inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Track from "~/data/models/Track";
import AlbumImage from "~/components/music/AlbumImage.vue";

const config = useRuntimeConfig()

const tracks = ref((await useFetch<Track[]>((`${config.public.api.route}/spotify`))).data.value?.map((track) => new Track(track)))
const playingTrack = ref<Track | null>()

watch(tracks, (newTracks) => {
  playingTrack.value = newTracks ? newTracks[0] : null
}, {immediate: true})
</script>