<template>
    <div>
      <nuxt-link
          :key="game.slug"
          v-for="(game, index) in games"
          class="nav__link"
          :to="'/games/' + game.id"
      >
        <p>TODO</p>
      </nuxt-link>
    </div>
</template>

<script lang="ts" setup>

const games = ref([])

</script>