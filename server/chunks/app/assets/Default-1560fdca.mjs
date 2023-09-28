import { _ as __nuxt_component_0 } from './nuxt-link-dcdeaa20.mjs';
import __nuxt_component_1 from './light-249c198a.mjs';
import __nuxt_component_2 from './dark-2af534b3.mjs';
import __nuxt_component_3 from './linktree-201fc3e4.mjs';
import __nuxt_component_4 from './insta-5bfa9dac.mjs';
import __nuxt_component_5 from './github-45af7e9c.mjs';
import __nuxt_component_6 from './twitch-c615a1a8.mjs';
import __nuxt_component_7 from './spotify-cddeb190.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import './nuxt-icon-ab90a2ad.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tslib';
import 'ts-invariant';
import 'zen-observable-ts';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = ref("light");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_svgo_header_light = __nuxt_component_1;
      const _component_svgo_header_dark = __nuxt_component_2;
      const _component_svgo_footer_linktree = __nuxt_component_3;
      const _component_svgo_footer_insta = __nuxt_component_4;
      const _component_svgo_footer_github = __nuxt_component_5;
      const _component_svgo_footer_twitch = __nuxt_component_6;
      const _component_svgo_footer_spotify = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col h-screen justify-between" }, _attrs))} data-v-68ce228b><header class="mx-5 lg:mx-10 pt-5" data-v-68ce228b><div class="flex justify-between items-center" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-text-light dark:text-text-dark logo" data-v-68ce228b${_scopeId}>CROUMY</span>`);
          } else {
            return [
              createVNode("span", { class: "text-text-light dark:text-text-dark logo" }, "CROUMY")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-5" data-v-68ce228b><div class="block lg:hidden" data-v-68ce228b><button class="flex items-center px-3 py-2 border rounded dark:text-white text-black dark:border-white border-black" data-v-68ce228b><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-68ce228b><title data-v-68ce228b> Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" data-v-68ce228b></path></svg></button></div><a class="cursor-pointer" data-v-68ce228b>`);
      if (theme.value === "dark") {
        _push(ssrRenderComponent(_component_svgo_header_light, { filled: "" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_svgo_header_dark, { filled: "" }, null, _parent));
      }
      _push(`</a></div></div><div id="menu" class="flex flex-col lg:flex-row items-end mr-10 lg:mr-0 hidden lg:flex gap-0 lg:gap-4" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/games/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-text-light dark:text-text-dark font-bold" data-v-68ce228b${_scopeId}>Jeux</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-text-light dark:text-text-dark font-bold" }, "Jeux")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/404" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-text-light dark:text-text-dark font-bold" data-v-68ce228b${_scopeId}>Mangas</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-text-light dark:text-text-dark font-bold" }, "Mangas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/404" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-text-light dark:text-text-dark font-bold" data-v-68ce228b${_scopeId}>Musique JV</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-text-light dark:text-text-dark font-bold" }, "Musique JV")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/collection" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-text-light dark:text-text-dark font-bold" data-v-68ce228b${_scopeId}>Collection</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-text-light dark:text-text-dark font-bold" }, "Collection")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav__link",
        to: "/404"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-text-light dark:text-text-dark font-bold" data-v-68ce228b${_scopeId}>A propos</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-text-light dark:text-text-dark font-bold" }, "A propos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><div class="mx-5 lg:mx-10 mb-auto" data-v-68ce228b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><footer class="bg-background-light dark:bg-background-dark grid grid-cols-12 w-full pb-5 items-center px-5 lg:px-10" data-v-68ce228b><p class="col-span-12 md:col-span-6 text-text-light dark:text-text-dark" data-v-68ce228b>\xA9 <span style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-68ce228b>Cl\xE9mence Roumy</span> - 2023</p><div class="col-span-12 md:col-span-6 flex lg:justify-end items-center mt-10 md:mt-0" data-v-68ce228b><div class="flex gap-4" data-v-68ce228b><a href="#" class="text-text-light dark:text-text-dark" data-v-68ce228b>Wishlist</a><a href="https://ko-fi.com/croumy" class="text-text-light dark:text-text-dark" target="_blank" data-v-68ce228b>Faire un don</a></div><div class="bg-bg-article dark:bg-bg-article-dark mx-5" style="${ssrRenderStyle({ "width": "1px", "height": "30px" })}" data-v-68ce228b></div><div class="flex gap-2" data-v-68ce228b><a class="mr-2" href="https://www.linktree.com/croumy/" target="_blank" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_svgo_footer_linktree, {
        filled: "",
        alt: "linktree icon"
      }, null, _parent));
      _push(`</a><a class="mr-2" href="https://www.instagram.com/croumy2/" target="_blank" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_svgo_footer_insta, {
        filled: "",
        alt: "insta icon"
      }, null, _parent));
      _push(`</a><a class="mr-2" href="https://github.com/clemenceroumy" target="_blank" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_svgo_footer_github, {
        filled: "",
        alt: "github icon"
      }, null, _parent));
      _push(`</a><a class="mr-2" href="https://www.twitch.tv/croumy2" target="_blank" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_svgo_footer_twitch, {
        filled: "",
        alt: "twitch icon"
      }, null, _parent));
      _push(`</a><a href="https://open.spotify.com/user/clemence_roumy" target="_blank" data-v-68ce228b>`);
      _push(ssrRenderComponent(_component_svgo_footer_spotify, {
        filled: "",
        alt: "spotify icon"
      }, null, _parent));
      _push(`</a></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68ce228b"]]);

export { Default as default };
//# sourceMappingURL=Default-1560fdca.mjs.map
