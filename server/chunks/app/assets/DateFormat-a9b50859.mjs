import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import dayjs from 'dayjs';
import * as fr from 'dayjs/locale/fr.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticlePicture",
  __ssrInlineRender: true,
  props: {
    url: {
      type: String,
      required: true
    },
    smaller: {
      type: Boolean,
      default: false
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const cssVars = computed(() => ({
      "--max-height": props.smaller ? "150px" : "270px",
      "--max-width": props.smaller ? "230px" : "400px",
      "--border-size": props.smaller ? "6px" : "12px",
      "--rotation": props.reversed ? "-8deg" : "8deg"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: cssVars.value,
        class: "image_container"
      }, _attrs))} data-v-5bda4375><div class="scotch_upper_right" data-v-5bda4375></div><img class="image object-cover"${ssrRenderAttr("src", __props.url)} alt="game cover" data-v-5bda4375><div class="scotch_bottom_left" data-v-5bda4375></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/ArticlePicture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticlePicture = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5bda4375"]]);
class StringFormat {
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
dayjs.locale(fr);
class DateFormat {
  static toFrDate(date) {
    if (!date) {
      return "";
    }
    return StringFormat.capitalizeFirstLetter(dayjs(date).format("dddd DD MMMM YYYY"));
  }
}

export { ArticlePicture as A, DateFormat as D };
//# sourceMappingURL=DateFormat-a9b50859.mjs.map
