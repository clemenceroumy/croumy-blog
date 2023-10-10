<template>
    <div class="grid grid-cols-2 mt-5 h-[calc(100vh-240px)]">
      <div class="flex flex-col mr-5 overflow-y-scroll overscroll-y-auto">
        <div v-for="track in tracks" class="flex mr-5 items-center justify-between mb-5">
          <!-- TRACK -->
          <div class="flex h-full">
            <div :class="`w-[90px] h-[90px] relative group/track`">
              <AlbumImage :album-picture="track.albumPicture"/>
              <div :class="`group-hover/track:flex hidden`">
                <Icon
                    @click="onPlayPauseTrack(track)"
                    :class="`h-[40px] w-[40px] cursor-pointer top-[25px] left-[25px] absolute`"
                    :name="isPlaying && track.id == playingTrack?.id ? 'material-symbols:pause-rounded' : 'material-symbols:play-arrow-rounded'"
                />
              </div>
            </div>

            <div class="flex-col flex ml-3 h-full justify-between">
              <div>
                <h1 :class="[track.id == playingTrack?.id ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark','small-title']">
                  {{ track.name }}
                </h1>
                <p class="subtitle">{{ track.artistsNamesString }}</p>
              </div>

              <p class="small-subtitle text-text-light dark:text-text-dark">{{ track.albumName }}</p>
            </div>
          </div>

          <p class="text-text-light dark:text-text-dark">{{ track.trackDuration }}</p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-full">
        <div class="rounded-md square-vinyl p-10 bg-bg-article dark:bg-bg-article-dark shadow relative group">
          <AlbumImage :class="isPlaying ? 'spin' : ''" :album-picture="playingTrack?.albumPicture ?? ''"></AlbumImage>
          <!-- LITTLE HOLE OF VINYL -->
          <div class="w-full h-full pointer-events-none top-0 left-0 absolute flex justify-center items-center">
            <div class="h-[20px] w-[20px] rounded-full bg-bg-article dark:bg-bg-article-dark shadow-inner"></div>
          </div>
          <!-- PLAY/ PAUSE BTNS-->
          <div class="w-full h-full top-0 left-0 absolute justify-center items-center hidden group-hover:flex">
            <Icon
                @click="playingTrack != null ? onPlayPauseTrack(playingTrack): null"
                class="h-[70px] w-[70px] cursor-pointer"
                :name="isPlaying ? 'material-symbols:pause-rounded' : 'material-symbols:play-arrow-rounded'"
            />
          </div>
        </div>

        <!-- MUSIC VISUALISATION-->
        <div class="h-[70px] mt-[10px]">
          <canvas ref="canvas" />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

import Track from "~/data/models/Track";
import AlbumImage from "~/components/music/AlbumImage.vue";
import {useAVLine} from 'vue-audio-visual'

const config = useRuntimeConfig()

const tracks = ref((await useFetch<Track[]>((`${config.public.api.route}/spotify`))).data.value?.map((track) => new Track(track)))
const playingTrack = ref<Track | null>()
const playingTrackAudio = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const canvas = ref(null)

watch(playingTrackAudio, (_) => {
  playingTrackAudio.value?.addEventListener('ended', () => isPlaying.value = false)
}, {immediate: true})

function onPlayPauseTrack(track: Track) {
  // IF SAME TRACK
  if(playingTrack.value?.id === track.id) {
    isPlaying.value = !isPlaying.value // TOGGLE PLAYING
  } else {
    isPlaying.value = false // UI STOP PLAYING PREVIOUS AUDIO
    playingTrackAudio.value?.pause() // STOP PREVIOUS AUDIO
    playingTrack.value = track // SET NEW TRACK, TRIGGER WATCH
    playingTrackAudio.value = new Audio(track.previewUrl)
    playingTrackAudio.value.crossOrigin = "anonymous"
    isPlaying.value = true // TRIGGER WATCH

    useAVLine(playingTrackAudio.value, canvas, {src: track.previewUrl, lineColor: 'black', lineWidth: 1, corsAnonym: true})
  }

  isPlaying.value ? playingTrackAudio.value?.play() : playingTrackAudio.value?.pause()
}
</script>

<style scoped lang="scss">
.spin {
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 10s linear infinite;
}

$screen-height: calc(100vh - 240px); // SCREEN HEIGHT MINUS HEADER AND FOOTER
$vinyl-space: calc($screen-height - 70px - 10px); // SCREEN HEIGHT MINUS VISUALIZATION

@media (max-width: 1620px) {
  .square-vinyl {
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    max-height: $screen-height;
    max-width: min($screen-height, 100%);
  }
}

@media (min-width: 1620px) {
  .square-vinyl {
    aspect-ratio: 1/1;
    height: 100%;
    width: auto;
    max-height: $screen-height;
    max-width: 100%;
  }
}
</style>