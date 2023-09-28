import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, computed } from 'vue';
import { b as useRoute, d as useAsyncQuery, _ as _export_sfc } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { D as DateFormat, A as ArticlePicture } from './DateFormat-a9b50859.mjs';
import { marked } from 'marked';
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
import 'dayjs';
import 'dayjs/locale/fr.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      return DateFormat.toFrDate(props.article.publishedAt);
    });
    const compiledMarkdown = computed(() => {
      var _a2;
      var _a;
      return marked((_a2 = (_a = props.article) == null ? void 0 : _a.content) != null ? _a2 : "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:p-20 md:p-16 sm:p-10 p-5 bg-bg-article dark:bg-bg-article-dark rounded-lg" }, _attrs))} data-v-b5cd5919><div class="grid grid-cols-12 items-center" data-v-b5cd5919><div class="col-span-12 lg:col-span-6 order-2 lg:order-1" data-v-b5cd5919><h1 class="text-text-light dark:text-text-dark headline" data-v-b5cd5919>${ssrInterpolate(__props.article.title)}</h1><p class="subtitle" data-v-b5cd5919>${ssrInterpolate(formattedDate.value)}</p></div><div class="col-span-12 lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 mt-10 lg:mt-0 mb-16 lg:mb-0 mr-10 ml-10 lg:ml-0" data-v-b5cd5919>`);
      _push(ssrRenderComponent(ArticlePicture, {
        url: (_a2 = (_a = __props.article.picture) == null ? void 0 : _a.url) != null ? _a2 : "https://placehold.co/600x400"
      }, null, _parent));
      _push(`</div></div><p class="lg:mt-20 mt-10 article-content text-text-light dark:text-text-dark" data-v-b5cd5919>${compiledMarkdown.value}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/Article.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5cd5919"]]);
var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetGameBySlug" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, "directives": [] }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "game" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } } }] } }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "content" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" }, "arguments": [], "directives": [] }] } }] } }] } }], "loc": { "start": 0, "end": 207 } };
doc.loc.source = { "body": "query GetGameBySlug($slug: String!) {\r\n    game(where: {slug: $slug}) {\r\n        id\r\n        slug\r\n        title\r\n        content\r\n        publishedAt\r\n        picture {\r\n            url\r\n        }\r\n    }\r\n}", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
function collectFragmentReferences(node, refs) {
  if (node.kind === "FragmentSpread") {
    refs.add(node.name.value);
  } else if (node.kind === "VariableDefinition") {
    var type = node.type;
    if (type.kind === "NamedType") {
      refs.add(type.name.value);
    }
  }
  if (node.selectionSet) {
    node.selectionSet.selections.forEach(function(selection) {
      collectFragmentReferences(selection, refs);
    });
  }
  if (node.variableDefinitions) {
    node.variableDefinitions.forEach(function(def) {
      collectFragmentReferences(def, refs);
    });
  }
  if (node.definitions) {
    node.definitions.forEach(function(def) {
      collectFragmentReferences(def, refs);
    });
  }
}
var definitionRefs = {};
(function extractReferences() {
  doc.definitions.forEach(function(def) {
    if (def.name) {
      var refs = /* @__PURE__ */ new Set();
      collectFragmentReferences(def, refs);
      definitionRefs[def.name.value] = refs;
    }
  });
})();
function findOperation(doc2, name) {
  for (var i = 0; i < doc2.definitions.length; i++) {
    var element = doc2.definitions[i];
    if (element.name && element.name.value == name) {
      return element;
    }
  }
}
function oneQuery(doc2, operationName) {
  var newDoc = {
    kind: doc2.kind,
    definitions: [findOperation(doc2, operationName)]
  };
  if (doc2.hasOwnProperty("loc")) {
    newDoc.loc = doc2.loc;
  }
  var opRefs = definitionRefs[operationName] || /* @__PURE__ */ new Set();
  var allRefs = /* @__PURE__ */ new Set();
  var newRefs = /* @__PURE__ */ new Set();
  opRefs.forEach(function(refName) {
    newRefs.add(refName);
  });
  while (newRefs.size > 0) {
    var prevRefs = newRefs;
    newRefs = /* @__PURE__ */ new Set();
    prevRefs.forEach(function(refName) {
      if (!allRefs.has(refName)) {
        allRefs.add(refName);
        var childRefs = definitionRefs[refName] || /* @__PURE__ */ new Set();
        childRefs.forEach(function(childRef) {
          newRefs.add(childRef);
        });
      }
    });
  }
  allRefs.forEach(function(refName) {
    var op = findOperation(doc2, refName);
    if (op) {
      newDoc.definitions.push(op);
    }
  });
  return newDoc;
}
const getGameBySlug = doc;
oneQuery(doc, "GetGameBySlug");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(getGameBySlug, {
      slug: route.params.slug
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(Article, mergeProps({
        class: "my-10",
        article: (_a = unref(data)) == null ? void 0 : _a.game
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-c3d8d7bf.mjs.map
