<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-5 h-[calc(100vh-240px)]">
    <div class="flex flex-col mr-5 overflow-y-scroll overscroll-y-auto">
      <div v-for="track in tracks" class="flex mr-5 items-center justify-between mb-5">
        <!-- TRACK -->
        <div class="flex h-full">
          <div :id="`copy-dragged-${track.id}`"
               class="dragged-item pointer-events-none hidden absolute left-0 top-0 w-[90px] h-[90px] rounded-full z-20">
            <AlbumImage :album-picture="track.albumPicture"/>
          </div>
          <div
              :id="`dragged-item-${track.id}`"
              :draggable="playingTrack?.id != track.id"
              @dragstart="onDragStart($event, track)"
              @dragend="onDragEnd"
              @drag="onDrag($event)"
              :class="`w-[90px] h-[90px] relative group/track`"
          >
            <AlbumImage class="!cursor-grab" :album-picture="track.albumPicture"/>
            <div :class="`group-hover/track:flex hidden`">
              <Icon
                  @click="onPlayPauseTrack(track)"
                  :class="`h-[30px] w-[30px] cursor-pointer top-[30px] left-[30px] absolute`"
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

        <div class="flex flex-col items-end">
          <p class="text-text-light dark:text-text-dark">{{ track.trackDuration }}</p>
          <a :href="track?.spotifyLink" target="_blank"><svgo-footer-spotify filled alt="spotify icon" class="mt-2"/></a>
        </div>
      </div>
    </div>

    <div class="hidden sm:flex flex-col items-center justify-center h-full ">
      <!-- TURNTABLE -->
      <div
          @drop="onDrop"
          @dragover.prevent
          @dragenter.prevent="onDragEnter"
          @dragleave="onDragLeave"
          class="rounded-md square-vinyl p-10 bg-bg-article dark:bg-bg-article-dark shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,1)] relative group"
      >
        <AlbumImage
            id="playing-image"
            :class="[isPlaying ? 'spin' : 'spin paused', 'pointer-events-none']"
            :album-picture="playingTrack?.albumPicture ?? ''"
        ></AlbumImage>
        <!-- LITTLE HOLE OF VINYL -->
        <div class="w-full h-full pointer-events-none top-0 left-0 absolute flex justify-center items-center">
          <div class="h-[20px] w-[20px] rounded-full bg-bg-article dark:bg-bg-article-dark shadow-inner"></div>
        </div>
        <!-- PLAY/ PAUSE BTN -->
        <div class="w-full h-full top-0 left-0 absolute justify-center items-center hidden group-hover:flex">
          <Icon
              @click="playingTrack != null ? onPlayPauseTrack(playingTrack): null"
              class="h-[70px] w-[70px] cursor-pointer"
              :name="isPlaying ? 'material-symbols:pause-rounded' : 'material-symbols:play-arrow-rounded'"
          />
        </div>
      </div>

      <!-- SCROLLING TRACK INFO -->
      <div class="px-10 w-full">
        <div class="overflow-hidden relative w-full h-[20px] mt-[20px]">
          <p
              v-for="i in [1,2]"
              :id="`track-info-${i}`"
              v-if="playingTrack != null"
              class="text-text-light dark:text-text-dark small-subtitle absolute px-5 right-0 top-0 min-w-full w-fit overflow-visible whitespace-nowrap"
          >
            {{ $t("music.currentTrackInfo", {title: playingTrack.name, artists: playingTrack.artistsNamesString, album: playingTrack.albumName}) }}
          </p>
        </div>
      </div>
      <!-- MUSIC VISUALISATION-->
      <div class="h-[70px] mt-[10px]">
        <canvas ref="canvas"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Track from "~/data/models/Track";
import AlbumImage from "~/components/music/AlbumImage.vue";
import {useAVLine} from 'vue-audio-visual'
import {doc} from "@firebase/firestore";

const config = useRuntimeConfig()

const tracks = ref((await useFetch<Track[]>((`${config.public.api.route}/spotify`))).data.value
    ?.map((track) => new Track(track))
    ?.sort((a, b) => a.albumName.localeCompare(b.albumName) || a.name.localeCompare(b.name))
)
const playingTrack = ref<Track | null>()
const playingTrackAudio = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const draggingTrack = ref<Track | null>(null)
const isInDropZone = ref(false)

const canvas = ref(null)

watch(playingTrackAudio, (_) => {
  playingTrackAudio.value?.addEventListener('ended', () => isPlaying.value = false)
})

function onDragStart(event: DragEvent, track: Track) {
  draggingTrack.value = track
  // NO DEFAULT DRAG IMG
  event.dataTransfer?.setDragImage(new Image(), 0, 0);
}

function onDrag(event: DragEvent) {
  const node = document.getElementById(`copy-dragged-${draggingTrack.value!!.id}`)!!
  const size = document.getElementById("playing-image")!!.clientWidth

  node.style.display = "block";
  node.style.boxShadow = "4px 4px 14px 3px rgba(0,0,0,0.6)";
  node.style.top = `${event.pageY - (isInDropZone.value ? size : 90) / 2}px`;
  node.style.left = `${event.pageX - (isInDropZone.value ? size : 90) / 2}px`;
}

function onDragEnd() {
  const node = document.getElementById(`copy-dragged-${draggingTrack.value!!.id}`)!!
  node.style.display = "none";
}

function onDragEnter() {
  isInDropZone.value = true
  const node = document.getElementById(`copy-dragged-${draggingTrack.value!!.id}`)!!
  const size = document.getElementById("playing-image")!!.clientWidth

  node.style.width = `${size}px`;
  node.style.height = `${size}px`;
}

function onDragLeave() {
  isInDropZone.value = false
  const node = document.getElementById(`copy-dragged-${draggingTrack.value!!.id}`)!!
  node.style.width = "90px";
  node.style.height = "90px";
}

function onDrop() {
  isInDropZone.value = false
  onPlayPauseTrack(draggingTrack.value!!)
}

function onPlayPauseTrack(track: Track) {
  // IF SAME TRACK
  if (playingTrack.value?.id === track.id) {
    isPlaying.value = !isPlaying.value // TOGGLE PLAYING
  } else {
    isPlaying.value = false // UI STOP PLAYING PREVIOUS AUDIO
    playingTrackAudio.value?.pause() // STOP PREVIOUS AUDIO
    playingTrack.value = track // SET NEW TRACK, TRIGGER WATCH
    playingTrackAudio.value = new Audio(track.previewUrl)
    playingTrackAudio.value.crossOrigin = "anonymous"
    isPlaying.value = true // TRIGGER WATCH

    // REDRAW VISUALISATION
    const lineColor = localStorage.theme === 'dark' ? 'white' : 'black'
    useAVLine(playingTrackAudio.value, canvas, {
      src: track.previewUrl,
      lineColor: lineColor,
      lineWidth: 1,
      corsAnonym: true
    })
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
  animation: spin 8s linear infinite;
}

.spin.paused {
  animation-play-state: paused;
}

$screen-height: calc(100vh - 240px); // SCREEN HEIGHT MINUS HEADER AND FOOTER
$vinyl-space: calc($screen-height - 70px - 10px - 40px); // SCREEN HEIGHT MINUS VISUALIZATION (70 height & 10 padding) & TEXT SCROLLING

@media (max-width: 1620px) {
  .square-vinyl {
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    max-height: $vinyl-space;
    max-width: min($vinyl-space, 100%);
  }
}

@media (min-width: 1620px) {
  .square-vinyl {
    aspect-ratio: 1/1;
    height: 100%;
    width: auto;
    max-height: $vinyl-space;
    max-width: 100%;
  }
}

.dragged-item {
  transition: width 200ms ease-out, height 200ms ease-out;
}

@for $i from 1 through 2 {
  $is-second: $i == 2;
  #track-info-#{$i} {
    @keyframes infiniteScroll {
      0% {transform: translateX(100%) }
      50% { transform: translateX(0%) }
      100% { transform: translateX(-100%) }
    }

    animation: infiniteScroll 24s linear infinite;
    animation-delay: if($is-second, 12s, 0);
    animation-fill-mode: both;
  }
}
</style>