<template>
  <div class="h-full flex flex-col h-screen justify-between">
    <header class="mx-10 pt-5">
      <g-link class="logo" to="/">{{ $static.metadata.siteName.toUpperCase() }}</g-link>

      <div class="flex justify-between">
        <div class="flex gap-4">
          <g-link
              class="nav__link"
              :to="'games/'"
          ><h1 class="font-bold">Jeux</h1></g-link>
          <h1 class="font-bold">Mangas</h1>
          <h1 class="font-bold">Musique JV</h1>
          <h1 class="font-bold">Collection</h1>
        </div>

        <h1>A propos</h1>
      </div>
    </header>

    <div class="mx-10 mb-auto">
      <slot />
    </div>

    <footer class="flex w-full pb-5 justify-between items-center px-10">
      <p>© <span style="font-weight: bold">Clémence Roumy</span> - 2022</p>

      <div class="flex items-center">
        <div class="flex gap-4">
          <a href="#">Wishlist</a>
          <a href="#">Faire un don</a>
        </div>

        <div class="bg-darkGray mx-5" style="width: 1px; height: 30px;"></div>

        <div class="flex gap-2">
          <a class="mr-2" href="https://twitter.com/clemenceroumy" target="_blank"><g-image src="~/assets/footer/twitter.svg" alt="twitter icon"></g-image></a>
          <a class="mr-2" href="https://www.instagram.com/clemenceroumy/" target="_blank"><g-image src="~/assets/footer/insta.svg" alt="insta icon"></g-image></a>
          <a class="mr-2" href="https://www.twitch.tv/croumy2" target="_blank"><g-image src="~/assets/footer/twitch.svg" alt="twitch icon"></g-image></a>
          <a href="https://open.spotify.com/user/clemence_roumy" target="_blank"><g-image src="~/assets/footer/spotify.svg" alt="spotify icon"></g-image></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>
