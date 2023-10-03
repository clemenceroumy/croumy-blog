<template>
  <div class="h-full flex flex-col h-screen justify-between">
    <header class="mx-5 lg:mx-10 pt-5">
      <div class="flex justify-between items-center">
        <nuxt-link to="/">
          <span class="text-text-light dark:text-text-dark logo">CROUMY</span>
        </nuxt-link>

        <div class="flex items-center gap-5">
          <div class="block lg:hidden">
            <button @click="openDrawer"
                    class="flex items-center px-3 py-2 border rounded dark:text-white text-black dark:border-white border-black">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>

          <a class="cursor-pointer" @click="switchTheme">
            <svgo-header-light v-if="theme === 'dark'" filled/>
            <svgo-header-dark v-else filled />
          </a>
        </div>
      </div>

      <div id="menu" class="flex flex-col lg:flex-row items-end mr-10 lg:mr-0 hidden lg:flex gap-0 lg:gap-4">
        <nuxt-link to="/games"><h1 :class="`${router.currentRoute.value.path === '/games' ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark' } font-bold title`">Jeux</h1></nuxt-link>
        <nuxt-link to="/404"><h1 :class="`${router.currentRoute.value.path === '/mangas' ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark' } font-bold title`">Mangas</h1></nuxt-link>
        <nuxt-link to="/404"><h1 :class="`${router.currentRoute.value.path === '/music' ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark' } font-bold title`">Musique JV</h1></nuxt-link>
        <nuxt-link to="/collection"><h1 :class="`${router.currentRoute.value.path === '/collection' ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark' } font-bold title`">Collection</h1></nuxt-link>
        <nuxt-link to="/404"><h1 :class="`${router.currentRoute.value.path === '/about' ? 'text-primary dark:text-darkPrimary' : 'text-text-light dark:text-text-dark' } font-bold title`">A propos</h1></nuxt-link>
      </div>
    </header>

    <div class="mx-5 pt-5 pb-10 lg:mx-10 mb-auto">
      <slot/>
    </div>

    <footer
        class="bg-background-light dark:bg-background-dark grid grid-cols-12 w-full pb-5 items-center px-5 lg:px-10">
      <p class="col-span-12 md:col-span-6 text-text-light dark:text-text-dark">© <span style="font-weight: bold">Clémence Roumy</span>
        - 2023</p>

      <div class="col-span-12 md:col-span-6 flex lg:justify-end items-center mt-10 md:mt-0">
        <div class="flex gap-4">
          <a href="#" class="text-text-light dark:text-text-dark">Wishlist</a>
          <a href="https://ko-fi.com/croumy" class="text-text-light dark:text-text-dark" target="_blank">Faire un
            don</a>
        </div>

        <div class="bg-bg-article dark:bg-bg-article-dark mx-5" style="width: 1px; height: 30px;"></div>

        <div class="flex gap-2">
          <a class="mr-2" href="https://www.linktree.com/croumy/" target="_blank">
            <svgo-footer-linktree filled alt="linktree icon" />
          </a>
          <a class="mr-2" href="https://www.instagram.com/croumy2/" target="_blank">
            <svgo-footer-insta filled alt="insta icon" />
          </a>
          <a class="mr-2" href="https://github.com/clemenceroumy" target="_blank">
            <svgo-footer-github filled alt="github icon" />
          </a>
          <a class="mr-2" href="https://www.twitch.tv/croumy2" target="_blank">
            <svgo-footer-twitch filled alt="twitch icon" />
          </a>
          <a href="https://open.spotify.com/user/clemence_roumy" target="_blank">
            <svgo-footer-spotify filled alt="spotify icon" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const router = useRouter();
const theme = ref("light");

onMounted(() => {
  if (typeof window !== "undefined") {
    if (!localStorage.theme) {
      localStorage.theme = "light";
    }
    setDark();
  }
})

function openDrawer() {
  const element = document.getElementById("menu");
  if (element?.classList.contains("flex")) {
    element.classList.replace("flex", "hidden");
  } else {
    element?.classList.replace("hidden", "flex");
  }
}


//THEME
function switchTheme() {
  if (typeof window !== "undefined") {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setDark();
  }
}

function setDark() {
  if (localStorage.theme === "dark") {
    theme.value = "dark";
    document.documentElement.classList.add("dark");
    colorBodyDark();
  } else {
    theme.value = "light";
    document.documentElement.classList.remove("dark");
    colorBody();
  }
}

function colorBody() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
}

function colorBodyDark() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
}
</script>

<style scoped lang="scss">
a, p {
  font-size: 12px;
}

a svg {
  width: 20px;
  height: 20px;
}
</style>