<template>
  <div class="h-full flex flex-col h-screen justify-between">
    <header class="mx-5 lg:mx-10 pt-5">
      <div class="flex justify-between items-center">
        <g-link class="!text-text-light !dark:text-text-dark logo" :class="theme === 'dark' ? 'dark' : 'light'" to="/">
          {{ $static.metadata.siteName.toUpperCase() }}
        </g-link>

        <div class="flex items-center gap-5">
          <div class="block lg:hidden">
            <button @click="openDrawer" class="flex items-center px-3 py-2 border rounded dark:text-white text-black dark:border-white border-black">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>

          <a class="!text-text-light !dark:text-text-dark cursor-pointer" @click="switchTheme">
            <g-image :src="themeBtn" alt="btn to change theme (sun if light, moon if dark)"></g-image>
          </a>
        </div>
      </div>

      <div id="menu" class="flex flex-col lg:flex-row items-end mr-10 lg:mr-0 hidden lg:flex gap-0 lg:gap-4">
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
        <g-link
            class="nav__link"
            to="/404"
        ><h1 class="text-text-light dark:text-text-dark font-bold">A propos</h1></g-link>
      </div>
    </header>

    <div class="mx-5 lg:mx-10 mb-auto">
      <slot/>
    </div>

    <footer class="bg-background-light dark:bg-background-dark grid grid-cols-12 w-full pb-5 items-center px-5 lg:px-10">
      <p class="col-span-12 md:col-span-6 text-text-light dark:text-text-dark">© <span style="font-weight: bold">Clémence Roumy</span> - 2022</p>

      <div class="col-span-12 md:col-span-6 flex lg:justify-end items-center mt-10 md:mt-0">
        <div class="flex gap-4">
          <a href="#" class="text-text-light dark:text-text-dark">Wishlist</a>
          <a href="https://ko-fi.com/croumy" class="text-text-light dark:text-text-dark" target="_blank">Faire un don</a>
        </div>

        <div class="bg-darkGray mx-5" style="width: 1px; height: 30px;"></div>

        <div class="flex gap-2">
          <a class="mr-2" href="https://www.linktree.com/croumy/" target="_blank">
            <g-image src="~/assets/footer/linktree.svg" alt="linktree icon"></g-image>
          </a>
          <a class="mr-2" href="https://www.instagram.com/croumy2/" target="_blank">
            <g-image src="~/assets/footer/insta.svg" alt="insta icon"></g-image>
          </a>
          <a class="mr-2" href="https://github.com/clemenceroumy" target="_blank">
            <g-image src="~/assets/footer/github.svg" alt="github icon"></g-image>
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
    if (typeof window !== "undefined") {
      if (!localStorage.theme) {
        localStorage.theme = "light";
      }
      this.setDark();
    }
  },
  computed: {
    themeBtn() {
      return this.theme === "dark" ? require("~/assets/header/light.svg") : require("~/assets/header/dark.svg");
    }
  },
  methods: {
    openDrawer() {
      const element = document.getElementById("menu");
      if (element.classList.contains("flex")) {
        element.classList.replace("flex", "hidden");
      } else {
        element.classList.replace("hidden", "flex");
      }
    },

    //THEME
    switchTheme() {
      if (typeof window !== "undefined") {
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        this.setDark();
      }
    },
    setDark() {
      if (localStorage.theme === "dark") {
        this.theme = "dark";
        document.documentElement.classList.add("dark");
        this.colorBodyDark();
      } else {
        this.theme = "light";
        document.documentElement.classList.remove("dark");
        this.colorBody();
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
