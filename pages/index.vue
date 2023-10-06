<template>
    <div>
      <Games>
        <template v-slot:title>
          <h1 class="header text-text-light dark:text-text-dark">{{ $t('pages.games').toUpperCase() }}</h1>
        </template>
      </Games>
    </div>
</template>

<script lang="ts" setup>
import Games from "~/pages/games/index.vue";
</script>