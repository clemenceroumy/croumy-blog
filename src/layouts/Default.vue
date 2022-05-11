<template>
  <div>
    <header class="header">
        <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
    </header>

    <div class="nav">
      <div class="row">
        <h1>Jeux</h1>
        <h1>Mangas</h1>
        <h1>Musique JV</h1>
        <h1>Collection</h1>
      </div>

      <h1>A propos</h1>
    </div>

    <slot/>
  </div>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
}

.row {
  display: flex;

  h1 {
    margin-right: 10px;
  }
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
