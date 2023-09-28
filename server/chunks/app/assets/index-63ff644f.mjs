import { _ as __nuxt_component_0 } from './nuxt-link-dcdeaa20.mjs';
import { d as useAsyncQuery } from '../server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { d as doc, A as ArticleShort } from './getAllGames-2cd204fb.mjs';
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
import './DateFormat-a9b50859.mjs';
import 'dayjs';
import 'dayjs/locale/fr.js';
import 'marked';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(doc)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10" }, _attrs))}><h1 class="header text-text-light dark:text-text-dark">JEUX</h1><!--[-->`);
      ssrRenderList((_a = unref(data)) == null ? void 0 : _a.games, (game, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: game.slug,
          class: "nav__link",
          to: "/games/" + game.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ArticleShort, {
                reversed: index % 2 === 0,
                class: "my-5",
                article: game
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ArticleShort, {
                  reversed: index % 2 === 0,
                  class: "my-5",
                  article: game
                }, null, 8, ["reversed", "article"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-63ff644f.mjs.map
