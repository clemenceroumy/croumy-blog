<template>
  <div class="flex flex-wrap">
    <div class="flex items-center mr-5" v-for="status in mangaStatus">
      <div :style="{'background-color': MangaStatusColor[status]}" class="w-[15px] h-[15px] rounded-full border-[1px] border-white mr-2"></div>
      <span class="text-text-light dark:text-text-dark">{{$t(`manga.status.${MangaStatus[status]}`) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MangaStatus, MangaStatusColor} from "~/data/models/MangaStatus";

const mangaStatus = Object.values(MangaStatus).filter(status => typeof status === "number");
</script>