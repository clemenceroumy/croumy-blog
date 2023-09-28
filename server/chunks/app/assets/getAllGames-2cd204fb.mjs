import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { D as DateFormat, A as ArticlePicture } from './DateFormat-a9b50859.mjs';
import { marked } from 'marked';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleShort",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      return DateFormat.toFrDate(props.article.publishedAt);
    });
    const compiledMarkdown = computed(() => {
      var _a;
      return marked((_a = props.article.content) != null ? _a : "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bg-article dark:bg-bg-article-dark rounded-lg p-5" }, _attrs))} data-v-77dc29e2><div class="grid grid-cols-12 h-full items-center md:my-5" data-v-77dc29e2><div class="${ssrRenderClass([__props.reversed ? "lg:order-2 lg:ml-16 lg:mr-6" : "lg:order-1 lg:mr-16 lg:ml-6", "col-span-12 lg:col-span-10 order-2"])}" data-v-77dc29e2><h1 class="text-text-light dark:text-text-dark header" data-v-77dc29e2>${ssrInterpolate(__props.article.title)}</h1><p class="subtitle" data-v-77dc29e2>${ssrInterpolate(formattedDate.value)}</p><p class="hidden sm:block content mt-4 text-text-light dark:text-text-dark" data-v-77dc29e2>${compiledMarkdown.value}</p></div><div class="${ssrRenderClass([__props.reversed ? "lg:order-1 lg:ml-10" : "lg:order-2 lg:mr-10", "col-span-12 lg:col-span-2 order-1 ml-5 mt-5 mb-10 lg:mb-0 lg:mt-0"])}" data-v-77dc29e2>`);
      _push(ssrRenderComponent(ArticlePicture, {
        reversed: __props.reversed,
        smaller: "",
        url: (_a2 = (_a = __props.article.picture) == null ? void 0 : _a.url) != null ? _a2 : "https://placehold.co/600x400"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/ArticleShort.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleShort = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-77dc29e2"]]);
var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetGames" }, "variableDefinitions": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "games" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "content" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" }, "arguments": [], "directives": [] }] } }] } }] } }], "loc": { "start": 0, "end": 165 } };
doc.loc.source = { "body": "query GetGames {\r\n    games {\r\n        content\r\n        id\r\n        slug\r\n        title\r\n        publishedAt\r\n        picture {\r\n            url\r\n        }\r\n    }\r\n}", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
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
oneQuery(doc, "GetGames");

export { ArticleShort as A, doc as d };
//# sourceMappingURL=getAllGames-2cd204fb.mjs.map
