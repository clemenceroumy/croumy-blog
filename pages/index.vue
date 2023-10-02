<template>
    <div>
      <Games>
        <template v-slot:title>
          <h1 class="header text-text-light dark:text-text-dark">JEUX</h1>
        </template>
      </Games>
    </div>
</template>

<script lang="ts" setup>
import Games from "~/pages/games/index.vue";
import getAllGames from "~/graphql/getAllGames.graphql"

const { data } = await useAsyncQuery(getAllGames);
</script>