<template>
  <div class="h-full flex flex-col h-screen justify-between">
    <header class="mx-10 pt-5">
      <div class="flex justify-between items-center">
        <g-link class="!text-text-light !dark:text-text-dark logo" :class="theme === 'dark' ? 'dark' : 'light'" to="/">
          {{ $static.metadata.siteName.toUpperCase() }}
        </g-link>
        <a class="!text-text-light !dark:text-text-dark cursor-pointer" @click="switchTheme">
          <g-image :src="themeBtn" alt="btn to change theme (sun if light, moon if dark)"></g-image>
        </a>
      </div>

      <div class="flex justify-between">
        <div class="flex gap-4">
          <g-link
              :to="'games/'"
          ><h1 class="text-text-light dark:text-text-dark font-bold">Jeux</h1></g-link>
          <g-link
              to="/404"
          ><h1 class="text-text-light dark:text-text-dark font-bold">Mangas</h1></g-link>
          <g-link
              to="/404"
          ><h1 class="text-text-light dark:text-text-dark font-bold">Musique JV</h1></g-link>
          <g-link
              to="/404"
          ><h1 class="text-text-light dark:text-text-dark font-bold">Collection</h1></g-link>
        </div>

        <g-link
            class="nav__link"
            to="/404"
        ><h1 class="text-text-light dark:text-text-dark font-bold">A propos</h1></g-link>
      </div>
    </header>

    <div class="mx-10 mb-auto">
      <slot/>
    </div>

    <footer class="bg-background-light dark:bg-background-dark flex w-full pb-5 justify-between items-center px-10">
      <p class="text-text-light dark:text-text-dark">© <span style="font-weight: bold">Clémence Roumy</span> - 2022</p>

      <div class="flex items-center">
        <div class="flex gap-4">
          <a href="#" class="text-text-light dark:text-text-dark">Wishlist</a>
          <a href="#" class="text-text-light dark:text-text-dark">Faire un don</a>
        </div>

        <div class="bg-darkGray mx-5" style="width: 1px; height: 30px;"></div>

        <div class="flex gap-2">
          <a class="mr-2" href="https://twitter.com/clemenceroumy" target="_blank">
            <g-image src="~/assets/footer/twitter.svg" alt="twitter icon"></g-image>
          </a>
          <a class="mr-2" href="https://www.instagram.com/clemenceroumy/" target="_blank">
            <g-image src="~/assets/footer/insta.svg" alt="insta icon"></g-image>
          </a>
          <a class="mr-2" href="https://www.twitch.tv/croumy2" target="_blank">
            <g-image src="~/assets/footer/twitch.svg" alt="twitch icon"></g-image>
          </a>
          <a href="https://open.spotify.com/user/clemence_roumy" target="_blank">
            <g-image src="~/assets/footer/spotify.svg" alt="spotify icon"></g-image>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {Vue} from "gridsome/app";

export default Vue.extend({
  name: "Layout",
  data() {
    return {
      theme: "light"
    };
  },
  created() {
    if (typeof window !== 'undefined') {
      if (!localStorage.theme) {
        localStorage.theme = "light";
      }
      this.setDark()
    }
  },
  computed: {
    themeBtn() {
      return this.theme === "dark" ? require("~/assets/header/light.svg") : require("~/assets/header/dark.svg");
    }
  },
  methods: {
    switchTheme() {
      if(typeof window !== 'undefined') {
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        this.setDark()
      }
    },
    setDark() {
      if (localStorage.theme === "dark") {
        this.theme = "dark";
        document.documentElement.classList.add("dark");
        this.colorBodyDark()
      } else {
        this.theme = "light";
        document.documentElement.classList.remove("dark");
        this.colorBody()
      }
    },
    colorBody() {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    },
    colorBodyDark() {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }
});
</script>

<static-query>
query {
metadata {
siteName
}
}
</static-query>
