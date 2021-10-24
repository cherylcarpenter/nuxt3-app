
// --------------------
// Request: /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/css.mjs ($id_269feab9)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/root-component.mjs ($id_63f772dc)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/app-component.mjs ($id_a81e5cd3)
// --------------------
const $id_add12565 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_ab1702f3)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/layouts.mjs ($id_6b908fc4)
// - /pages/home.vue ($id_354b890e)
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/SectionLoader.vue ($id_d897e4b5)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /components/Tutorial.vue ($id_0df8973a)
// - /components/Atoms/Typography.vue ($id_15338482)
// - /components/Cards/CardBarChart.vue ($id_252f2202)
// - /components/Cards/CardLineChart.vue ($id_87067cd6)
// - /components/Cards/CardPageVisits.vue ($id_bbe53dbd)
// - /components/Cards/CardProfile.vue ($id_30b9deef)
// - /components/Cards/CardSettings.vue ($id_f88165ee)
// - /components/Cards/CardSocialTraffic.vue ($id_2438621c)
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /components/Footers/Footer.vue ($id_62b85294)
// - /components/Footers/FooterAdmin.vue ($id_229a29d8)
// - /components/Footers/FooterSmall.vue ($id_1581b5f4)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /components/Headers/HeaderStats.vue ($id_1efdd037)
// - /components/Maps/MapExample.vue ($id_717c0b64)
// - /components/Navbars/AdminNavbar.vue ($id_a6c1bbe1)
// - /components/Navbars/AuthNavbar.vue ($id_30a49698)
// - /components/Navbars/IndexNavbar.vue ($id_352c6481)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// - /components/Sections/BannerCard.vue ($id_06501982)
// - /components/Sections/BannerIconCallouts.vue ($id_d9d53043)
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// - /components/Sections/HeaderBanner.vue ($id_c15c1698)
// - /components/Sections/LandingBanner.vue ($id_bacd50eb)
// - /components/Sections/ProductFeatureCallouts.vue ($id_30bd7037)
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// - /components/Sections/SectionTextCenter.vue ($id_f99177a0)
// - /components/Sections/SectionWrapperSlantBkg.vue ($id_c7dd4299)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /pages/home.vue ($id_354b890e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/legacy.mjs ($id_93532f58)
// - /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_ab1702f3)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/legacy.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.vueApp.component("NuxtWelcome", __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue')));
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  return callWithNuxt(nuxtApp, () => plugin(nuxtApp));
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
async function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  setNuxtAppInstance(null);
  await p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/nuxt3/dist/app/legacy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// --------------------
const $id_93532f58 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "isClient",
  "isServer",
  "isStatic",
  "store",
  "target",
  "spa",
  "env",
  "modern",
  "fetchCounters"
]);
const todo = new Set([
  "isDev",
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config") {
        return mock("Accessing runtime config is not yet supported in Nuxt 3.");
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/legacy.mjs ($id_93532f58)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/@nuxt/design/dist/index.mjs ($id_0787a664)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ab1702f3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/design/dist/index.mjs");

const _sfc_main = ({
  computed: {
    html: () => __vite_ssr_import_0__.welcome({})
  }
})

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- eslint-disable-next-line vue/no-v-html --><div${
    __vite_ssr_import_1__.ssrRenderAttrs(_attrs)
  }>${
    $options.html
  }</div><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-welcome.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/design/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_ab1702f3)
// Dependencies: 

// --------------------
const $id_0787a664 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_ab1702f3)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/home.vue ($id_354b890e)
// - /pages/index.vue ($id_cca58e97)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /components/SectionLoader.vue ($id_d897e4b5)
// - /components/Tutorial.vue ($id_0df8973a)
// - /components/Atoms/Typography.vue ($id_15338482)
// - /components/Cards/CardBarChart.vue ($id_252f2202)
// - /components/Cards/CardLineChart.vue ($id_87067cd6)
// - /components/Cards/CardPageVisits.vue ($id_bbe53dbd)
// - /components/Cards/CardProfile.vue ($id_30b9deef)
// - /components/Cards/CardSettings.vue ($id_f88165ee)
// - /components/Cards/CardSocialTraffic.vue ($id_2438621c)
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /components/Footers/Footer.vue ($id_62b85294)
// - /components/Footers/FooterAdmin.vue ($id_229a29d8)
// - /components/Footers/FooterSmall.vue ($id_1581b5f4)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /components/Headers/HeaderStats.vue ($id_1efdd037)
// - /components/Maps/MapExample.vue ($id_717c0b64)
// - /components/Navbars/AdminNavbar.vue ($id_a6c1bbe1)
// - /components/Navbars/AuthNavbar.vue ($id_30a49698)
// - /components/Navbars/IndexNavbar.vue ($id_352c6481)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// - /components/Sections/BannerCard.vue ($id_06501982)
// - /components/Sections/BannerIconCallouts.vue ($id_d9d53043)
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// - /components/Sections/HeaderBanner.vue ($id_c15c1698)
// - /components/Sections/LandingBanner.vue ($id_bacd50eb)
// - /components/Sections/ProductFeatureCallouts.vue ($id_30bd7037)
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// - /components/Sections/SectionTextCenter.vue ($id_f99177a0)
// - /components/Sections/SectionWrapperSlantBkg.vue ($id_c7dd4299)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_ab1702f3)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/home.vue ($id_354b890e)
// - /pages/index.vue ($id_cca58e97)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /components/SectionLoader.vue ($id_d897e4b5)
// - /components/Tutorial.vue ($id_0df8973a)
// - /components/Atoms/Typography.vue ($id_15338482)
// - /components/Cards/CardBarChart.vue ($id_252f2202)
// - /components/Cards/CardLineChart.vue ($id_87067cd6)
// - /components/Cards/CardPageVisits.vue ($id_bbe53dbd)
// - /components/Cards/CardProfile.vue ($id_30b9deef)
// - /components/Cards/CardSettings.vue ($id_f88165ee)
// - /components/Cards/CardSocialTraffic.vue ($id_2438621c)
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /components/Footers/Footer.vue ($id_62b85294)
// - /components/Footers/FooterAdmin.vue ($id_229a29d8)
// - /components/Footers/FooterSmall.vue ($id_1581b5f4)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /components/Headers/HeaderStats.vue ($id_1efdd037)
// - /components/Maps/MapExample.vue ($id_717c0b64)
// - /components/Navbars/AdminNavbar.vue ($id_a6c1bbe1)
// - /components/Navbars/AuthNavbar.vue ($id_30a49698)
// - /components/Navbars/IndexNavbar.vue ($id_352c6481)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// - /components/Sections/BannerCard.vue ($id_06501982)
// - /components/Sections/BannerIconCallouts.vue ($id_d9d53043)
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// - /components/Sections/HeaderBanner.vue ($id_c15c1698)
// - /components/Sections/LandingBanner.vue ($id_bacd50eb)
// - /components/Sections/ProductFeatureCallouts.vue ($id_30bd7037)
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// - /components/Sections/SectionTextCenter.vue ($id_f99177a0)
// - /components/Sections/SectionWrapperSlantBkg.vue ($id_c7dd4299)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val
  }
  return sfc
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_3__.useNuxtApp();
  const route = __vite_ssr_import_2__.useRoute();
  const vm = __vite_ssr_import_1__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_4__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/@vue/reactivity/dist/reactivity.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_85c34493 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/@vue/reactivity/dist/reactivity.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, defer: false, default: getDefault, ...options };
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (!instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false;
  const clientOnly = options.server === false;
  if (true && fetchOnServer) {
    asyncData.refresh();
  }
  if (false) {
    if (nuxt.isHydrating && fetchOnServer) {
      asyncData.pending.value = false;
    }
    if (nuxt.isHydrating && clientOnly) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else if (!nuxt.isHydrating) {
      if (options.defer) {
        instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
      } else {
        asyncData.refresh();
      }
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/css.mjs
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// Dependencies: 
// - /assets/scss/tailwind.scss ($id_9873bf8f)
// --------------------
const $id_269feab9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/scss/tailwind.scss");
;
}


// --------------------
// Request: /assets/scss/tailwind.scss
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/css.mjs ($id_269feab9)
// Dependencies: 

// --------------------
const $id_9873bf8f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@charset \"UTF-8\";\n/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Source Sans Pro; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n\toutline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: Lato;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(228, 228, 231, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tbackground-color: #fff;\n\tborder-color: #71717a;\n\tborder-width: 1px;\n\tborder-radius: 0px;\n\tpadding-top: 0.5rem;\n\tpadding-right: 0.75rem;\n\tpadding-bottom: 0.5rem;\n\tpadding-left: 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t--tw-shadow: 0 0 #0000;\n}\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n\tborder-color: #2563eb;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder{\n\tcolor: #71717a;\n\topacity: 1;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder{\n\tcolor: #71717a;\n\topacity: 1;\n}\ninput::placeholder,textarea::placeholder{\n\tcolor: #71717a;\n\topacity: 1;\n}\n::-webkit-datetime-edit-fields-wrapper{\n\tpadding: 0;\n}\n::-webkit-date-and-time-value{\n\tmin-height: 1.5em;\n}\nselect{\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n\tbackground-position: right 0.5rem center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 1.5em 1.5em;\n\tpadding-right: 2.5rem;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n}\n[multiple]{\n\tbackground-image: initial;\n\tbackground-position: initial;\n\tbackground-repeat: unset;\n\tbackground-size: initial;\n\tpadding-right: 0.75rem;\n\t-webkit-print-color-adjust: unset;\n\t        color-adjust: unset;\n}\n[type='checkbox'],[type='radio']{\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding: 0;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-origin: border-box;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\tflex-shrink: 0;\n\theight: 1rem;\n\twidth: 1rem;\n\tcolor: #2563eb;\n\tbackground-color: #fff;\n\tborder-color: #71717a;\n\tborder-width: 1px;\n\t--tw-shadow: 0 0 #0000;\n}\n[type='checkbox']{\n\tborder-radius: 0px;\n}\n[type='radio']{\n\tborder-radius: 100%;\n}\n[type='checkbox']:focus,[type='radio']:focus{\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 2px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n[type='checkbox']:checked,[type='radio']:checked{\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n[type='checkbox']:checked{\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n[type='radio']:checked{\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n[type='checkbox']:indeterminate{\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n[type='file']{\n\tbackground: unset;\n\tborder-color: inherit;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-size: unset;\n\tline-height: inherit;\n}\n[type='file']:focus{\n\toutline: 1px auto -webkit-focus-ring-color;\n}\n/* The Base\nThe base is the first Tailwind CSS layer. It basically holds Preflight, which is the CSS in charge to reset the styles of the browser to something sane and constant between browser engines. Basically, what you see is what you will get on all devices.\nThis is a good place to modify a base style, like changing how images behave by default — which with Tailwind CSS these are considered blocks — or if paragraphs should have a bottom margin */\n/* Note that here is very useful to add or modify anything want to make something more special than the default browser handling, but without going into full styling, since these styles must be overridable. */\nbody {\n  color: #44403c;\n}\np{\n\tmargin-top: 0.5rem;\n\tmargin-bottom: 1rem;\n}\n@media (min-width: 1024px){\n\tp{\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\n}\np:last-child{\n\tmargin-bottom: 0px;\n}\nh1, h2, h3, h4, h5, h6{\n\tfont-family: Playfair Display;\n\tfont-weight: 600;\n}\n.container{\n\twidth: 100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n@media (min-width: 640px){\n\t.container{\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px){\n\t.container{\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px){\n\t.container{\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px){\n\t.container{\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px){\n\t.container{\n\t\tmax-width: 1536px;\n\t}\n}\n.container{\n\twidth: 100%;\n}\n@media (min-width: 640px){\n\t.container{\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px){\n\t.container{\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px){\n\t.container{\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px){\n\t.container{\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px){\n\t.container{\n\t\tmax-width: 1280px;\n\t}\n}\n/* The components\nThis is tiny layer that only includes the container class, which is in charge of modifying its width depending on the browser size. You usually see it being used to center content:\n\nIn this layer you should add your own extracted components. For example, you could add a class called btn that would transform a link or a button into something that feels more like an actual pressable button. */\n/* @import './cardIconParagraph.scss'; */\n.pointer-events-none{\n\tpointer-events: none;\n}\n.fixed{\n\tposition: fixed;\n}\n.absolute{\n\tposition: absolute;\n}\n.relative{\n\tposition: relative;\n}\n.bottom-auto{\n\tbottom: auto;\n}\n.top-0{\n\ttop: 0px;\n}\n.left-0{\n\tleft: 0px;\n}\n.right-0{\n\tright: 0px;\n}\n.bottom-0{\n\tbottom: 0px;\n}\n.top-auto{\n\ttop: auto;\n}\n.-top-94-px{\n\ttop: -94px;\n}\n.left-145-px{\n\tleft: 145px;\n}\n.-top-29-px{\n\ttop: -29px;\n}\n.left-260-px{\n\tleft: 260px;\n}\n.-top-160-px{\n\ttop: -160px;\n}\n.left-40-px{\n\tleft: 40px;\n}\n.-top-225-px{\n\ttop: -225px;\n}\n.-left-50-px{\n\tleft: -50px;\n}\n.top-25-px{\n\ttop: 25px;\n}\n.-left-20-px{\n\tleft: -20px;\n}\n.top-210-px{\n\ttop: 210px;\n}\n.left-195-px{\n\tleft: 195px;\n}\n.top-95-px{\n\ttop: 95px;\n}\n.z-50{\n\tz-index: 50;\n}\n.z-10{\n\tz-index: 10;\n}\n.z-3{\n\tz-index: 3;\n}\n.z-2{\n\tz-index: 2;\n}\n.z-40{\n\tz-index: 40;\n}\n.float-left{\n\tfloat: left;\n}\n.-m-16{\n\tmargin: -4rem;\n}\n.m-2{\n\tmargin: 0.5rem;\n}\n.mx-auto{\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.mx-4{\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n.my-2{\n\tmargin-top: 0.5rem;\n\tmargin-bottom: 0.5rem;\n}\n.my-6{\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 1.5rem;\n}\n.my-4{\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.mt-8{\n\tmargin-top: 2rem;\n}\n.mt-3{\n\tmargin-top: 0.75rem;\n}\n.mt-4{\n\tmargin-top: 1rem;\n}\n.mb-6{\n\tmargin-bottom: 1.5rem;\n}\n.mb-0{\n\tmargin-bottom: 0px;\n}\n.mb-1{\n\tmargin-bottom: 0.25rem;\n}\n.mr-1{\n\tmargin-right: 0.25rem;\n}\n.mr-4{\n\tmargin-right: 1rem;\n}\n.mt-16{\n\tmargin-top: 4rem;\n}\n.-ml-20{\n\tmargin-left: -5rem;\n}\n.mt-20{\n\tmargin-top: 5rem;\n}\n.mt-12{\n\tmargin-top: 3rem;\n}\n.mb-2{\n\tmargin-bottom: 0.5rem;\n}\n.mt-0{\n\tmargin-top: 0px;\n}\n.mr-2{\n\tmargin-right: 0.5rem;\n}\n.mt-10{\n\tmargin-top: 2.5rem;\n}\n.mb-4{\n\tmargin-bottom: 1rem;\n}\n.mb-3{\n\tmargin-bottom: 0.75rem;\n}\n.mt-6{\n\tmargin-top: 1.5rem;\n}\n.ml-3{\n\tmargin-left: 0.75rem;\n}\n.-ml-4{\n\tmargin-left: -1rem;\n}\n.-mt-20{\n\tmargin-top: -5rem;\n}\n.ml-auto{\n\tmargin-left: auto;\n}\n.mb-5{\n\tmargin-bottom: 1.25rem;\n}\n.mr-3{\n\tmargin-right: 0.75rem;\n}\n.mr-auto{\n\tmargin-right: auto;\n}\n.ml-2{\n\tmargin-left: 0.5rem;\n}\n.mt-32{\n\tmargin-top: 8rem;\n}\n.mt-48{\n\tmargin-top: 12rem;\n}\n.mt-2{\n\tmargin-top: 0.5rem;\n}\n.ml-1{\n\tmargin-left: 0.25rem;\n}\n.-mt-48{\n\tmargin-top: -12rem;\n}\n.-mt-32{\n\tmargin-top: -8rem;\n}\n.-mt-24{\n\tmargin-top: -6rem;\n}\n.mt-24{\n\tmargin-top: 6rem;\n}\n.mr-0{\n\tmargin-right: 0px;\n}\n.block{\n\tdisplay: block;\n}\n.inline-block{\n\tdisplay: inline-block;\n}\n.flex{\n\tdisplay: flex;\n}\n.inline-flex{\n\tdisplay: inline-flex;\n}\n.table{\n\tdisplay: table;\n}\n.hidden{\n\tdisplay: none;\n}\n.h-6{\n\theight: 1.5rem;\n}\n.h-350-px{\n\theight: 350px;\n}\n.h-auto{\n\theight: auto;\n}\n.h-2{\n\theight: 0.5rem;\n}\n.h-12{\n\theight: 3rem;\n}\n.h-10{\n\theight: 2.5rem;\n}\n.h-0{\n\theight: 0px;\n}\n.h-20{\n\theight: 5rem;\n}\n.h-16{\n\theight: 4rem;\n}\n.h-600-px{\n\theight: 600px;\n}\n.h-full{\n\theight: 100%;\n}\n.h-screen{\n\theight: 100vh;\n}\n.h-70-px{\n\theight: 70px;\n}\n.h-95-px{\n\theight: 95px;\n}\n.max-h-860-px{\n\tmax-height: 860px;\n}\n.min-h-screen{\n\tmin-height: 100vh;\n}\n.min-h-screen-75{\n\tmin-height: 75vh;\n}\n.w-6{\n\twidth: 1.5rem;\n}\n.w-full{\n\twidth: 100%;\n}\n.w-auto{\n\twidth: auto;\n}\n.w-12{\n\twidth: 3rem;\n}\n.w-10{\n\twidth: 2.5rem;\n}\n.w-16{\n\twidth: 4rem;\n}\n.w-8{\n\twidth: 2rem;\n}\n.w-10\\/12{\n\twidth: 83.333333%;\n}\n.w-6\\/12{\n\twidth: 50%;\n}\n.min-w-0{\n\tmin-width: 0px;\n}\n.min-w-140-px{\n\tmin-width: 140px;\n}\n.min-w-48{\n\tmin-width: 12rem;\n}\n.max-w-4xl{\n\tmax-width: 56rem;\n}\n.max-w-full{\n\tmax-width: 100%;\n}\n.max-w-xl{\n\tmax-width: 36rem;\n}\n.max-w-150-px{\n\tmax-width: 150px;\n}\n.max-w-100-px{\n\tmax-width: 100px;\n}\n.max-w-210-px{\n\tmax-width: 210px;\n}\n.max-w-180-px{\n\tmax-width: 180px;\n}\n.max-w-200-px{\n\tmax-width: 200px;\n}\n.max-w-580-px{\n\tmax-width: 580px;\n}\n.max-w-120-px{\n\tmax-width: 120px;\n}\n.flex-1{\n\tflex: 1 1 0%;\n}\n.flex-auto{\n\tflex: 1 1 auto;\n}\n.flex-none{\n\tflex: none;\n}\n.flex-initial{\n\tflex: 0 1 auto;\n}\n.flex-grow{\n\tflex-grow: 1;\n}\n.border-collapse{\n\tborder-collapse: collapse;\n}\n.transform{\n\ttransform: var(--tw-transform);\n}\n.cursor-pointer{\n\tcursor: pointer;\n}\n.list-none{\n\tlist-style-type: none;\n}\n.flex-row{\n\tflex-direction: row;\n}\n.flex-col{\n\tflex-direction: column;\n}\n.flex-wrap{\n\tflex-wrap: wrap;\n}\n.content-center{\n\talign-content: center;\n}\n.items-center{\n\talign-items: center;\n}\n.items-stretch{\n\talign-items: stretch;\n}\n.justify-end{\n\tjustify-content: flex-end;\n}\n.justify-center{\n\tjustify-content: center;\n}\n.justify-between{\n\tjustify-content: space-between;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-hidden{\n\toverflow: hidden;\n}\n.overflow-x-auto{\n\toverflow-x: auto;\n}\n.overflow-y-auto{\n\toverflow-y: auto;\n}\n.overflow-x-hidden{\n\toverflow-x: hidden;\n}\n.whitespace-nowrap{\n\twhite-space: nowrap;\n}\n.break-words{\n\toverflow-wrap: break-word;\n}\n.rounded{\n\tborder-radius: 0.25rem;\n}\n.rounded-lg{\n\tborder-radius: 0.5rem;\n}\n.rounded-full{\n\tborder-radius: 9999px;\n}\n.rounded-t{\n\tborder-top-left-radius: 0.25rem;\n\tborder-top-right-radius: 0.25rem;\n}\n.rounded-t-lg{\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n}\n.border{\n\tborder-width: 1px;\n}\n.border-0{\n\tborder-width: 0px;\n}\n.border-2{\n\tborder-width: 2px;\n}\n.border-t{\n\tborder-top-width: 1px;\n}\n.border-l-0{\n\tborder-left-width: 0px;\n}\n.border-r-0{\n\tborder-right-width: 0px;\n}\n.border-t-0{\n\tborder-top-width: 0px;\n}\n.border-b{\n\tborder-bottom-width: 1px;\n}\n.border-solid{\n\tborder-style: solid;\n}\n.border-dashed{\n\tborder-style: dashed;\n}\n.border-none{\n\tborder-style: none;\n}\n.border-blueGray-100{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(241, 245, 249, var(--tw-border-opacity));\n}\n.border-blueGray-200{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(226, 232, 240, var(--tw-border-opacity));\n}\n.border-blueGray-300{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(203, 213, 225, var(--tw-border-opacity));\n}\n.border-emerald-700{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(4, 120, 87, var(--tw-border-opacity));\n}\n.border-blueGray-50{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(248, 250, 252, var(--tw-border-opacity));\n}\n.border-blueGray-600{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(71, 85, 105, var(--tw-border-opacity));\n}\n.border-blueGray-500{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(100, 116, 139, var(--tw-border-opacity));\n}\n.bg-white{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-100{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(244, 244, 245, var(--tw-bg-opacity));\n}\n.bg-red-400{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n.bg-blueGray-700{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n.bg-indigo-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(99, 102, 241, var(--tw-bg-opacity));\n}\n.bg-blueGray-50{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(248, 250, 252, var(--tw-bg-opacity));\n}\n.bg-blueGray-100{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n.bg-emerald-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(16, 185, 129, var(--tw-bg-opacity));\n}\n.bg-red-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(254, 202, 202, var(--tw-bg-opacity));\n}\n.bg-red-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-emerald-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(167, 243, 208, var(--tw-bg-opacity));\n}\n.bg-purple-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(233, 213, 255, var(--tw-bg-opacity));\n}\n.bg-purple-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(168, 85, 247, var(--tw-bg-opacity));\n}\n.bg-lightBlue-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(186, 230, 253, var(--tw-bg-opacity));\n}\n.bg-lightBlue-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(14, 165, 233, var(--tw-bg-opacity));\n}\n.bg-orange-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(254, 215, 170, var(--tw-bg-opacity));\n}\n.bg-emerald-900{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(6, 78, 59, var(--tw-bg-opacity));\n}\n.bg-emerald-800{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(6, 95, 70, var(--tw-bg-opacity));\n}\n.bg-teal-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(153, 246, 228, var(--tw-bg-opacity));\n}\n.bg-teal-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(20, 184, 166, var(--tw-bg-opacity));\n}\n.bg-blueGray-200{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(226, 232, 240, var(--tw-bg-opacity));\n}\n.bg-blueGray-800{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n.bg-emerald-600{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(5, 150, 105, var(--tw-bg-opacity));\n}\n.bg-orange-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(249, 115, 22, var(--tw-bg-opacity));\n}\n.bg-pink-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(236, 72, 153, var(--tw-bg-opacity));\n}\n.bg-red-600{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-yellow-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(234, 179, 8, var(--tw-bg-opacity));\n}\n.bg-red-700{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(185, 28, 28, var(--tw-bg-opacity));\n}\n.bg-rose-50{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 241, 242, var(--tw-bg-opacity));\n}\n.bg-black{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-blueGray-600{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(71, 85, 105, var(--tw-bg-opacity));\n}\n.bg-rose-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(244, 63, 94, var(--tw-bg-opacity));\n}\n.bg-rose-800{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(159, 18, 57, var(--tw-bg-opacity));\n}\n.bg-cover{\n\tbackground-size: cover;\n}\n.bg-center{\n\tbackground-position: center;\n}\n.fill-current{\n\tfill: currentColor;\n}\n.p-6{\n\tpadding: 1.5rem;\n}\n.p-1{\n\tpadding: 0.25rem;\n}\n.p-4{\n\tpadding: 1rem;\n}\n.p-3{\n\tpadding: 0.75rem;\n}\n.p-8{\n\tpadding: 2rem;\n}\n.p-2{\n\tpadding: 0.5rem;\n}\n.px-4{\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.py-3{\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.px-3{\n\tpadding-left: 0.75rem;\n\tpadding-right: 0.75rem;\n}\n.py-5{\n\tpadding-top: 1.25rem;\n\tpadding-bottom: 1.25rem;\n}\n.py-1{\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.px-6{\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\n.py-4{\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.py-10{\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n.py-6{\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n.py-2{\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n.px-2{\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-16{\n\tpadding-top: 4rem;\n\tpadding-bottom: 4rem;\n}\n.px-12{\n\tpadding-left: 3rem;\n\tpadding-right: 3rem;\n}\n.px-0{\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.pt-8{\n\tpadding-top: 2rem;\n}\n.pt-4{\n\tpadding-top: 1rem;\n}\n.pt-0{\n\tpadding-top: 0px;\n}\n.pr-4{\n\tpadding-right: 1rem;\n}\n.pl-4{\n\tpadding-left: 1rem;\n}\n.pt-2{\n\tpadding-top: 0.5rem;\n}\n.pb-0{\n\tpadding-bottom: 0px;\n}\n.pb-6{\n\tpadding-bottom: 1.5rem;\n}\n.pb-2{\n\tpadding-bottom: 0.5rem;\n}\n.pb-32{\n\tpadding-bottom: 8rem;\n}\n.pt-12{\n\tpadding-top: 3rem;\n}\n.pl-3{\n\tpadding-left: 0.75rem;\n}\n.pl-10{\n\tpadding-left: 2.5rem;\n}\n.pt-48{\n\tpadding-top: 12rem;\n}\n.pt-24{\n\tpadding-top: 6rem;\n}\n.pt-16{\n\tpadding-top: 4rem;\n}\n.pt-32{\n\tpadding-top: 8rem;\n}\n.pr-12{\n\tpadding-right: 3rem;\n}\n.pb-20{\n\tpadding-bottom: 5rem;\n}\n.pb-4{\n\tpadding-bottom: 1rem;\n}\n.pb-40{\n\tpadding-bottom: 10rem;\n}\n.pt-1{\n\tpadding-top: 0.25rem;\n}\n.pb-16{\n\tpadding-bottom: 4rem;\n}\n.text-left{\n\ttext-align: left;\n}\n.text-center{\n\ttext-align: center;\n}\n.text-right{\n\ttext-align: right;\n}\n.align-middle{\n\tvertical-align: middle;\n}\n.font-serif{\n\tfont-family: Playfair Display;\n}\n.text-2xl{\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-sm{\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-xs{\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-xl{\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.text-3xl{\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\n.text-base{\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\n.text-lg{\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n.text-4xl{\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\n.text-5xl{\n\tfont-size: 3rem;\n\tline-height: 1;\n}\n.font-semibold{\n\tfont-weight: 600;\n}\n.font-bold{\n\tfont-weight: 700;\n}\n.font-normal{\n\tfont-weight: 400;\n}\n.font-light{\n\tfont-weight: 300;\n}\n.uppercase{\n\ttext-transform: uppercase;\n}\n.leading-7{\n\tline-height: 1.75rem;\n}\n.leading-normal{\n\tline-height: 1.5;\n}\n.leading-relaxed{\n\tline-height: 1.625;\n}\n.leading-snug{\n\tline-height: 1.375;\n}\n.leading-none{\n\tline-height: 1;\n}\n.tracking-wide{\n\tletter-spacing: 0.025em;\n}\n.text-gray-600{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(82, 82, 91, var(--tw-text-opacity));\n}\n.text-green-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(34, 197, 94, var(--tw-text-opacity));\n}\n.text-gray-800{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(39, 39, 42, var(--tw-text-opacity));\n}\n.text-blueGray-400{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(148, 163, 184, var(--tw-text-opacity));\n}\n.text-blueGray-700{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(51, 65, 85, var(--tw-text-opacity));\n}\n.text-white{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-blueGray-100{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(241, 245, 249, var(--tw-text-opacity));\n}\n.text-emerald-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(16, 185, 129, var(--tw-text-opacity));\n}\n.text-orange-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(249, 115, 22, var(--tw-text-opacity));\n}\n.text-red-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-blueGray-600{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(71, 85, 105, var(--tw-text-opacity));\n}\n.text-emerald-300{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(110, 231, 183, var(--tw-text-opacity));\n}\n.text-teal-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(20, 184, 166, var(--tw-text-opacity));\n}\n.text-blueGray-200{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(226, 232, 240, var(--tw-text-opacity));\n}\n.text-lightBlue-400{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(56, 189, 248, var(--tw-text-opacity));\n}\n.text-lightBlue-600{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(2, 132, 199, var(--tw-text-opacity));\n}\n.text-pink-400{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(244, 114, 182, var(--tw-text-opacity));\n}\n.text-blueGray-800{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(30, 41, 59, var(--tw-text-opacity));\n}\n.text-blueGray-300{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(203, 213, 225, var(--tw-text-opacity));\n}\n.text-rose-300{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(253, 164, 175, var(--tw-text-opacity));\n}\n.text-black{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.no-underline{\n\ttext-decoration: none;\n}\n.placeholder-blueGray-300::-moz-placeholder{\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(203, 213, 225, var(--tw-placeholder-opacity));\n}\n.placeholder-blueGray-300:-ms-input-placeholder{\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(203, 213, 225, var(--tw-placeholder-opacity));\n}\n.placeholder-blueGray-300::placeholder{\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(203, 213, 225, var(--tw-placeholder-opacity));\n}\n.opacity-75{\n\topacity: 0.75;\n}\n.opacity-50{\n\topacity: 0.5;\n}\n.shadow{\n\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg{\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl{\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-none{\n\t--tw-shadow: 0 0 #0000;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm{\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md{\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl{\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none{\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n.transition-all{\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.duration-150{\n\ttransition-duration: 150ms;\n}\n.ease-linear{\n\ttransition-timing-function: linear;\n}\n/* The utilities\nThis is the meat of Tailwind CSS. Here resides almost all of the classes you use to style your HTML: from padding and flex classes, to shadows and colors, to pseudo-classes to animations and transitions.\nThe utilities layer is a good place to add simple utility-based classes. For example, you can add a class that makes a scrollable block to snap to its content with scroll-snap-type. */\n.last\\:mr-0:last-child{\n\tmargin-right: 0px;\n}\n.hover\\:-mt-4:hover{\n\tmargin-top: -1rem;\n}\n.hover\\:text-gray-800:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(39, 39, 42, var(--tw-text-opacity));\n}\n.hover\\:text-blueGray-800:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(30, 41, 59, var(--tw-text-opacity));\n}\n.hover\\:text-blueGray-700:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(51, 65, 85, var(--tw-text-opacity));\n}\n.hover\\:text-blueGray-300:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(203, 213, 225, var(--tw-text-opacity));\n}\n.hover\\:text-emerald-600:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(5, 150, 105, var(--tw-text-opacity));\n}\n.hover\\:underline:hover{\n\ttext-decoration: underline;\n}\n.hover\\:shadow-md:hover{\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:shadow-lg:hover{\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:outline-none:focus{\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n.focus\\:ring:focus{\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.active\\:bg-indigo-600:active{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.active\\:bg-emerald-600:active{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(5, 150, 105, var(--tw-bg-opacity));\n}\n.active\\:bg-blueGray-50:active{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(248, 250, 252, var(--tw-bg-opacity));\n}\n.active\\:bg-blueGray-600:active{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(71, 85, 105, var(--tw-bg-opacity));\n}\n@media (min-width: 640px){\n\t.sm\\:ml-1{\n\t\tmargin-left: 0.25rem;\n\t}\n\t.sm\\:mt-0{\n\t\tmargin-top: 0px;\n\t}\n\t.sm\\:block{\n\t\tdisplay: block;\n\t}\n\t.sm\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n\t.sm\\:items-center{\n\t\talign-items: center;\n\t}\n\t.sm\\:rounded-lg{\n\t\tborder-radius: 0.5rem;\n\t}\n\t.sm\\:px-6{\n\t\tpadding-left: 1.5rem;\n\t\tpadding-right: 1.5rem;\n\t}\n\t.sm\\:pt-0{\n\t\tpadding-top: 0px;\n\t}\n}\n@media (min-width: 768px){\n\t.md\\:fixed{\n\t\tposition: fixed;\n\t}\n\t.md\\:relative{\n\t\tposition: relative;\n\t}\n\t.md\\:left-0{\n\t\tleft: 0px;\n\t}\n\t.md\\:top-0{\n\t\ttop: 0px;\n\t}\n\t.md\\:bottom-0{\n\t\tbottom: 0px;\n\t}\n\t.md\\:mt-0{\n\t\tmargin-top: 0px;\n\t}\n\t.md\\:mt-40{\n\t\tmargin-top: 10rem;\n\t}\n\t.md\\:mt-4{\n\t\tmargin-top: 1rem;\n\t}\n\t.md\\:mb-4{\n\t\tmargin-bottom: 1rem;\n\t}\n\t.md\\:block{\n\t\tdisplay: block;\n\t}\n\t.md\\:flex{\n\t\tdisplay: flex;\n\t}\n\t.md\\:hidden{\n\t\tdisplay: none;\n\t}\n\t.md\\:min-h-full{\n\t\tmin-height: 100%;\n\t}\n\t.md\\:w-4\\/12{\n\t\twidth: 33.333333%;\n\t}\n\t.md\\:w-8\\/12{\n\t\twidth: 66.666667%;\n\t}\n\t.md\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n\t.md\\:w-5\\/12{\n\t\twidth: 41.666667%;\n\t}\n\t.md\\:w-64{\n\t\twidth: 16rem;\n\t}\n\t.md\\:min-w-full{\n\t\tmin-width: 100%;\n\t}\n\t.md\\:flex-row{\n\t\tflex-direction: row;\n\t}\n\t.md\\:flex-col{\n\t\tflex-direction: column;\n\t}\n\t.md\\:flex-nowrap{\n\t\tflex-wrap: nowrap;\n\t}\n\t.md\\:items-stretch{\n\t\talign-items: stretch;\n\t}\n\t.md\\:justify-start{\n\t\tjustify-content: flex-start;\n\t}\n\t.md\\:justify-end{\n\t\tjustify-content: flex-end;\n\t}\n\t.md\\:justify-between{\n\t\tjustify-content: space-between;\n\t}\n\t.md\\:overflow-hidden{\n\t\toverflow: hidden;\n\t}\n\t.md\\:overflow-y-auto{\n\t\toverflow-y: auto;\n\t}\n\t.md\\:px-10{\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\t.md\\:px-4{\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n\t.md\\:pt-32{\n\t\tpadding-top: 8rem;\n\t}\n\t.md\\:pr-12{\n\t\tpadding-right: 3rem;\n\t}\n\t.md\\:pt-0{\n\t\tpadding-top: 0px;\n\t}\n\t.md\\:pb-2{\n\t\tpadding-bottom: 0.5rem;\n\t}\n\t.md\\:text-left{\n\t\ttext-align: left;\n\t}\n\t.md\\:opacity-100{\n\t\topacity: 1;\n\t}\n\t.md\\:shadow-none{\n\t\t--tw-shadow: 0 0 #0000;\n\t\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\t}\n}\n@media (min-width: 1024px){\n\t.lg\\:static{\n\t\tposition: static;\n\t}\n\t.lg\\:-ml-16{\n\t\tmargin-left: -4rem;\n\t}\n\t.lg\\:mr-4{\n\t\tmargin-right: 1rem;\n\t}\n\t.lg\\:mb-0{\n\t\tmargin-bottom: 0px;\n\t}\n\t.lg\\:ml-auto{\n\t\tmargin-left: auto;\n\t}\n\t.lg\\:mr-1{\n\t\tmargin-right: 0.25rem;\n\t}\n\t.lg\\:mt-16{\n\t\tmargin-top: 4rem;\n\t}\n\t.lg\\:block{\n\t\tdisplay: block;\n\t}\n\t.lg\\:inline-block{\n\t\tdisplay: inline-block;\n\t}\n\t.lg\\:flex{\n\t\tdisplay: flex;\n\t}\n\t.lg\\:hidden{\n\t\tdisplay: none;\n\t}\n\t.lg\\:w-9\\/12{\n\t\twidth: 75%;\n\t}\n\t.lg\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n\t.lg\\:w-4\\/12{\n\t\twidth: 33.333333%;\n\t}\n\t.lg\\:w-auto{\n\t\twidth: auto;\n\t}\n\t.lg\\:w-8\\/12{\n\t\twidth: 66.666667%;\n\t}\n\t.lg\\:flex-1{\n\t\tflex: 1 1 0%;\n\t}\n\t.lg\\:flex-row{\n\t\tflex-direction: row;\n\t}\n\t.lg\\:justify-start{\n\t\tjustify-content: flex-start;\n\t}\n\t.lg\\:bg-opacity-0{\n\t\t--tw-bg-opacity: 0;\n\t}\n\t.lg\\:px-8{\n\t\tpadding-left: 2rem;\n\t\tpadding-right: 2rem;\n\t}\n\t.lg\\:px-10{\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\t.lg\\:py-2{\n\t\tpadding-top: 0.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\t.lg\\:pt-4{\n\t\tpadding-top: 1rem;\n\t}\n\t.lg\\:text-left{\n\t\ttext-align: left;\n\t}\n\t.lg\\:text-white{\n\t\t--tw-text-opacity: 1;\n\t\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n\t}\n\t.lg\\:text-blueGray-200{\n\t\t--tw-text-opacity: 1;\n\t\tcolor: rgba(226, 232, 240, var(--tw-text-opacity));\n\t}\n\t.lg\\:shadow-none{\n\t\t--tw-shadow: 0 0 #0000;\n\t\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\t}\n\t.lg\\:hover\\:text-blueGray-200:hover{\n\t\t--tw-text-opacity: 1;\n\t\tcolor: rgba(226, 232, 240, var(--tw-text-opacity));\n\t}\n}\n@media (min-width: 1280px){\n\t.xl\\:mb-0{\n\t\tmargin-bottom: 0px;\n\t}\n\t.xl\\:w-3\\/12{\n\t\twidth: 25%;\n\t}\n\t.xl\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// --------------------
const $id_c42253cf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxt) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxt.vueApp.use(head);
  nuxt._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxt.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/index.ts
var getTagKey = (props) => {
  if (props.key !== void 0) {
    return {name: "key", value: props.key};
  }
  if (props.name !== void 0) {
    return {name: "name", value: props.name};
  }
  if (props.property !== void 0) {
    return {
      name: "property",
      value: props.property
    };
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({tag: key, props: {children: obj[key]}});
    } else if (key === "base") {
      tags.push({tag: key, props: __spreadValues({key: "default"}, obj[key])});
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({tag: key, props: item});
        });
      } else if (value) {
        tags.push({tag: key, props: value});
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var insertTags = (tags, document = window.document) => {
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (j) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  const newElements = [];
  let title;
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of tags) {
    if (tag.tag === "title") {
      title = tag.props.children;
      continue;
    }
    if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
      continue;
    }
    if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
      continue;
    }
    if (tag.tag === "meta") {
      const key = getTagKey(tag.props);
      if (key) {
        const elementList = [
          ...head.querySelectorAll(`meta[${key.name}="${key.value}"]`)
        ];
        for (const el of elementList) {
          if (!oldElements.includes(el)) {
            oldElements.push(el);
          }
        }
      }
    }
    newElements.push(createElement(tag.tag, tag.props, document));
  }
  oldElements.forEach((el) => {
    if (el.nextSibling && el.nextSibling.nodeType === Node.TEXT_NODE) {
      el.nextSibling.remove();
    }
    el.remove();
  });
  if (title !== void 0) {
    document.title = title;
  }
  setAttrs(document.documentElement, htmlAttrs);
  setAttrs(document.body, bodyAttrs);
  newElements.forEach((el) => {
    head.insertBefore(el, headCountEl);
  });
  headCountEl.setAttribute("content", "" + newElements.length);
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document) {
      insertTags(head.headTags, document);
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, {slots}) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/meta.config.mjs ($id_7bd26bda)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([_key, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory(removeUndefinedProps(props), ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.content = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((headAttrs) => ({ headAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_7bd26bda = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs ($id_4f572b41)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/child.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory() : __vite_ssr_import_1__.createMemoryHistory();
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  nuxtApp.provide("router", router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/child.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0a2c1f73 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  name: 'NuxtChild'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_0__.resolveComponent("RouterView")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_0__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/child.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/child.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  name: 'NuxtPage',
  components: { NuxtLayout: __vite_ssr_import_1__.default },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup () {
    // Disable HMR reactivity in production
    const updatedComponentLayout = true ? __vite_ssr_import_0__.ref(null) : null

    const nuxtApp = __vite_ssr_import_2__.useNuxtApp()

    function onSuspensePending (Component) {
      if (true) {
        updatedComponentLayout.value = Component.type.layout || null
      }
      return nuxtApp.callHook('page:start', Component)
    }

    function onSuspenseResolved (Component) {
      return nuxtApp.callHook('page:finish', Component)
    }

    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        if (Component) {
          _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!-- <keep-alive> -->`)
                __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                  default: () => {
                    __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent, _scopeId)
                  },
                  _: 2 /* DYNAMIC */
                })
                _push(`<!-- <keep-alive -->`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          Component
            ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                key: 0,
                name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
              }, {
                default: __vite_ssr_import_3__.withCtx(() => [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
            : __vite_ssr_import_3__.createCommentVNode("v-if", true),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/layouts.mjs ($id_6b908fc4)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_6b908fc4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {};
}


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/home.vue ($id_354b890e)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_4f572b41 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
  {
    "name": "home",
    "path": "/home",
    "file": "/Users/cherylcarpenter/nuxt3-app/pages/home.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/home.vue')
  },
  {
    "name": "index",
    "path": "/",
    "file": "/Users/cherylcarpenter/nuxt3-app/pages/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/home.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs ($id_4f572b41)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_354b890e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose()

let __temp, __restore

const { data } = (
  ([__temp,__restore] = __vite_ssr_import_1__.withAsyncContext(() => __vite_ssr_import_0__.useFetch("/api/home", {
  defer: true,
}))),
  __temp = await __temp,
  __restore(),
  __temp
);

const __returned__ = { data }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_2__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")
  const _component_Meta = __vite_ssr_import_2__.resolveComponent("Meta")
  const _component_section_loader = __vite_ssr_import_2__.resolveComponent("section-loader")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`${__vite_ssr_import_3__.ssrInterpolate($setup.data.title)}`)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($setup.data.title), 1 /* TEXT */)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Meta, {
          name: "description",
          content: `${$setup.data.seo.description}`
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_2__.withCtx(() => [
              __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($setup.data.title), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_2__.createVNode(_component_Meta, {
            name: "description",
            content: `${$setup.data.seo.description}`
          }, null, 8 /* PROPS */, ["content"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<h1>${__vite_ssr_import_3__.ssrInterpolate($setup.data.title)}</h1><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.data.sections, (section, index) => {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_section_loader, {
      key: `${section}${index}`,
      "section-type": section.type,
      "section-content": section
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/home.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/pages/home.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs ($id_4f572b41)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><h1>hello</h1></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/pages/index.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs ($id_c42253cf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/SectionLoader.vue ($id_d897e4b5)
// - /components/Tutorial.vue ($id_0df8973a)
// - /components/Atoms/Typography.vue ($id_15338482)
// - /components/Cards/CardBarChart.vue ($id_252f2202)
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /components/Cards/CardLineChart.vue ($id_87067cd6)
// - /components/Cards/CardPageVisits.vue ($id_bbe53dbd)
// - /components/Cards/CardProfile.vue ($id_30b9deef)
// - /components/Cards/CardSettings.vue ($id_f88165ee)
// - /components/Cards/CardSocialTraffic.vue ($id_2438621c)
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /components/Footers/Footer.vue ($id_62b85294)
// - /components/Footers/FooterAdmin.vue ($id_229a29d8)
// - /components/Footers/FooterSmall.vue ($id_1581b5f4)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /components/Headers/HeaderStats.vue ($id_1efdd037)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /components/Maps/MapExample.vue ($id_717c0b64)
// - /components/Navbars/AdminNavbar.vue ($id_a6c1bbe1)
// - /components/Navbars/AuthNavbar.vue ($id_30a49698)
// - /components/Navbars/IndexNavbar.vue ($id_352c6481)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// - /components/Sections/BannerCard.vue ($id_06501982)
// - /components/Sections/BannerIconCallouts.vue ($id_d9d53043)
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /components/Sections/HeaderBanner.vue ($id_c15c1698)
// - /components/Sections/LandingBanner.vue ($id_bacd50eb)
// - /components/Sections/ProductFeatureCallouts.vue ($id_30bd7037)
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// - /components/Sections/SectionTextCenter.vue ($id_f99177a0)
// - /components/Sections/SectionWrapperSlantBkg.vue ($id_c7dd4299)
// --------------------
const $id_ff6a144c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'SectionLoader': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/SectionLoader.vue').then(c => c.default || c)),
  'Tutorial': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Tutorial.vue').then(c => c.default || c)),
  'AtomsTypography': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Atoms/Typography.vue').then(c => c.default || c)),
  'CardsCardBarChart': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardBarChart.vue').then(c => c.default || c)),
  'CardsCardIconParagraph': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardIconParagraph.vue').then(c => c.default || c)),
  'CardsCardLineChart': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardLineChart.vue').then(c => c.default || c)),
  'CardsCardPageVisits': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardPageVisits.vue').then(c => c.default || c)),
  'CardsCardProfile': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardProfile.vue').then(c => c.default || c)),
  'CardsCardSettings': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardSettings.vue').then(c => c.default || c)),
  'CardsCardSocialTraffic': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardSocialTraffic.vue').then(c => c.default || c)),
  'CardsCardStats': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardStats.vue').then(c => c.default || c)),
  'CardsCardTable': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Cards/CardTable.vue').then(c => c.default || c)),
  'FootersFooter': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Footers/Footer.vue').then(c => c.default || c)),
  'FootersFooterAdmin': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Footers/FooterAdmin.vue').then(c => c.default || c)),
  'FootersFooterSmall': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Footers/FooterSmall.vue').then(c => c.default || c)),
  'DropdownsIndexDropdown': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Dropdowns/IndexDropdown.vue').then(c => c.default || c)),
  'DropdownsNotificationDropdown': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Dropdowns/NotificationDropdown.vue').then(c => c.default || c)),
  'DropdownsPagesDropdown': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Dropdowns/PagesDropdown.vue').then(c => c.default || c)),
  'DropdownsTableDropdown': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Dropdowns/TableDropdown.vue').then(c => c.default || c)),
  'DropdownsUserDropdown': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Dropdowns/UserDropdown.vue').then(c => c.default || c)),
  'HeadersHeaderStats': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Headers/HeaderStats.vue').then(c => c.default || c)),
  'IconsIconCircle': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Icons/IconCircle.vue').then(c => c.default || c)),
  'MapsMapExample': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Maps/MapExample.vue').then(c => c.default || c)),
  'NavbarsAdminNavbar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Navbars/AdminNavbar.vue').then(c => c.default || c)),
  'NavbarsAuthNavbar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Navbars/AuthNavbar.vue').then(c => c.default || c)),
  'NavbarsIndexNavbar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Navbars/IndexNavbar.vue').then(c => c.default || c)),
  'Sidebar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sidebar/Sidebar.vue').then(c => c.default || c)),
  'SectionsBannerCard': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/BannerCard.vue').then(c => c.default || c)),
  'SectionsBannerIconCallouts': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/BannerIconCallouts.vue').then(c => c.default || c)),
  'SectionsFeatureImageCallout': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/FeatureImageCallout.vue').then(c => c.default || c)),
  'SectionsFeatureThreeBoxes': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/FeatureThreeBoxes.vue').then(c => c.default || c)),
  'SectionsHeaderBanner': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/HeaderBanner.vue').then(c => c.default || c)),
  'SectionsLandingBanner': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/LandingBanner.vue').then(c => c.default || c)),
  'SectionsProductFeatureCallouts': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/ProductFeatureCallouts.vue').then(c => c.default || c)),
  'SectionsProductFeatureCollage': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/ProductFeatureCollage.vue').then(c => c.default || c)),
  'SectionsSectionFeatureThreeup': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/SectionFeatureThreeup.vue').then(c => c.default || c)),
  'SectionsSectionTextCenter': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/SectionTextCenter.vue').then(c => c.default || c)),
  'SectionsSectionWrapperSlantBkg': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Sections/SectionWrapperSlantBkg.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/SectionLoader.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d897e4b5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Sections/FeatureThreeBoxes.vue");


const _sfc_main = {
name: 'SectionLoader',
components: {
FeatureThreeBoxes: __vite_ssr_import_1__.default
},
props: {
    sectionType:{
        type: String,
        default: ''
    },
    sectionContent: {
        type: Object,
        default(){
            return {}
        }
    },
    content: {
      type: Object,
      default(){
        return {}
      }
    }
},
computed:{
    sectionBkg(){
     if (this.sectionContent.sectionSettings.hasBackground) return this.sectionContent.sectionSettings.sectionBkgColor
      return 'bg-white'
    },
    paddingTopLg(){
      return "lg:"+this.sectionContent.sectionSettings.paddingTop
    },
    paddingBottomLg(){
      return "lg:"+this.sectionContent.sectionSettings.paddingBottom
    },
      paddingTopSm(){
      return this.sectionContent.sectionSettings.paddingTop
    },
    paddingBottomSm(){
      return this.sectionContent.sectionSettings.paddingBottom
    }
}

}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_feature_three_boxes = __vite_ssr_import_2__.resolveComponent("feature-three-boxes")

  _push(`<section${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: [$props.sectionType, $options.sectionBkg, $options.paddingTopLg, $options.paddingBottomLg, $options.paddingTopSm, $options.paddingBottomSm]
  }, _attrs))}><div class="container">`)
  if ($props.sectionType==='featureThreeBoxes') {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_feature_three_boxes, { content: $props.sectionContent }, null, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</div></section>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/SectionLoader.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/SectionLoader.vue"]]);
}


// --------------------
// Request: /components/Sections/FeatureThreeBoxes.vue
// Parents: 
// - /components/SectionLoader.vue ($id_d897e4b5)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a66be432 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Cards/CardIconParagraph.vue");


const _sfc_main = {
  components: { CardIconParagraph: __vite_ssr_import_0__.default },
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_card_icon_paragraph = __vite_ssr_import_1__.resolveComponent("card-icon-paragraph")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex flex-wrap" }, _attrs))}><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.content.boxes, (box) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card_icon_paragraph, {
      key: box.header,
      box: box
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/FeatureThreeBoxes.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/FeatureThreeBoxes.vue"]]);
}


// --------------------
// Request: /components/Cards/CardIconParagraph.vue
// Parents: 
// - /components/Sections/FeatureThreeBoxes.vue ($id_a66be432)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /components/Cards/cardIconParagraph.scss ($id_b7e3c6d0)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ebbef192 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Icons/IconCircle.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Cards/cardIconParagraph.scss");


const _sfc_main = {
  name: 'CardIconParagraph',
  components: { IconCircle: __vite_ssr_import_0__.default },

  props: {
    box: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      icon: {
        bgColor: this.box.iconcircle.BgColor,
        Color: this.box.iconcircle.Color,
        Shadow: this.box.iconcircle.Shadow,
        iconClass: this.box.iconcircle.Class,
        SizeClasses: this.box.iconcircle.SizeClasses
      }
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_circle = __vite_ssr_import_2__.resolveComponent("icon-circle")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "cardIconParagraph lg:flex-1 flex flex-none w-full max-w-xl px-3 mx-auto" }, _attrs))}><div class="relative flex flex-col items-center w-full min-w-0 px-4 py-5 break-words bg-white rounded-lg shadow-lg">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, { icon: $data.icon }, null, _parent))
  _push(`<h6 class="text-3xl">${
    __vite_ssr_import_3__.ssrInterpolate($props.box.header)
  }</h6><p class="">${
    __vite_ssr_import_3__.ssrInterpolate($props.box.body)
  }</p></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardIconParagraph.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardIconParagraph.vue"]]);
}


// --------------------
// Request: /components/Icons/IconCircle.vue
// Parents: 
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// - /components/Sections/ProductFeatureCallouts.vue ($id_30bd7037)
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c4a76d26 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  name: 'IconCircle',

  props: {
    icon: {
      type: Object,
      default:()=> ({
        bgColor: 'bg-red-400',
        Color: 'text-white',
        iconClass: 'fas fa-award',
        Shadow: 'large',
        SizeClasses: 'medium'
      })
    }
  },
  data() {
    return {

    }
  },
  computed: {
    computedSizeClasses() {
      const sizeClass = this.icon.SizeClasses
      if (sizeClass === 'small') return 'w-10 h-10'
      if (sizeClass === 'medium') return 'w-12 h-12'
      if (sizeClass === 'large') return 'w-16 h-16'
      return ''
    },
    computedIconTextSize() {
      const sizeClass = this.icon.SizeClasses
      if (sizeClass === 'small') return ''
      if (sizeClass === 'medium') return ''
      if (sizeClass === 'large') return 'text-xl'
      return ''
    },
    computedShadowSize() {
      const iconShadow = this.icon.Shadow

      if (iconShadow === 'xsmall') return 'shadow-sm'
      if (iconShadow === 'small') return 'shadow'
      if (iconShadow === 'medium') return 'shadow-md'
      if (iconShadow === 'large') return 'shadow-lg'
      if (iconShadow === 'xlarge') return 'shadow-xl'
      return ''
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: [
      'p-3 text-center inline-flex items-center justify-center rounded-full mb-5',
      $options.computedSizeClasses,
      $props.icon.bgColor,
      $props.icon.Color,
      $options.computedShadowSize
    ]
    }, _attrs))
  }><i class="${
    __vite_ssr_import_2__.ssrRenderClass([$props.icon.iconClass, $options.computedIconTextSize])
  }"></i></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icons/IconCircle.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Icons/IconCircle.vue"]]);
}


// --------------------
// Request: /components/Cards/cardIconParagraph.scss
// Parents: 
// - /components/Cards/CardIconParagraph.vue ($id_ebbef192)
// Dependencies: 

// --------------------
const $id_b7e3c6d0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".cardIconParagraph > div {\n    margin-bottom: 1.5rem\n}\n@media (min-width: 1024px) {\n    .cardIconParagraph > div {\n        margin-bottom: 0px\n    }\n}\n.cardIconParagraph:last-of-type > div {\n    margin-bottom: 0px\n}";
}


// --------------------
// Request: /components/Tutorial.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0df8973a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0" }, _attrs))}><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet"><div class="max-w-4xl mx-auto sm:px-6 lg:px-8"><a class="flex justify-center pt-8 sm:pt-0" href="https://nuxtjs.org" target="_blank"><svg width="218" height="45" viewBox="0 0 159 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.5017 6.81866H60.1727L70.0719 22.9912V6.81866H74.3837V29.7345H69.7446L59.8135 13.5955V29.7345H55.5017V6.81866Z" fill="#003543"></path> <path d="M93.657 29.7344H89.6389V27.1747C88.7241 28.9761 86.8628 29.9904 84.5113 29.9904C80.7869 29.9904 78.3684 27.3059 78.3684 23.4423V13.2339H82.3865V22.5976C82.3865 24.8566 83.7594 26.4276 85.8171 26.4276C88.0712 26.4276 89.6389 24.6598 89.6389 22.2377V13.2339H93.657V29.7344Z" fill="#003543"></path> <path d="M107.64 29.7344L103.784 24.2342L99.9291 29.7344H95.6492L101.596 21.1242L96.1074 13.2339H100.485L103.784 17.9821L107.051 13.2339H111.461L105.94 21.1242L111.886 29.7344H107.64Z" fill="#003543"></path> <path d="M120.053 8.25848V13.2339H124.627V16.6063H120.053V24.7974C120.053 25.0725 120.162 25.3363 120.356 25.531C120.55 25.7257 120.813 25.8353 121.087 25.8357H124.627V29.728H121.98C118.386 29.728 116.035 27.6323 116.035 23.9687V16.6095H112.801V13.2339H114.83C115.776 13.2339 116.327 12.6692 116.327 11.7349V8.25848H120.053Z" fill="#003543"></path> <path d="M134.756 24.5446V6.81866H139.066V23.1864C139.066 27.6067 136.943 29.7345 133.349 29.7345H128.332V25.8421H133.461C133.804 25.8421 134.134 25.7054 134.377 25.4621C134.619 25.2188 134.756 24.8888 134.756 24.5446Z" fill="#003543"></path> <path d="M141.649 22.0409H145.799C146.029 24.6006 147.728 26.2308 150.472 26.2308C152.923 26.2308 154.623 25.2501 154.623 23.2199C154.623 18.3085 142.331 21.7129 142.331 12.9395C142.334 9.17515 145.568 6.55945 150.215 6.55945C155.05 6.55945 158.317 9.34153 158.516 13.6306H154.388C154.193 11.6341 152.632 10.2918 150.207 10.2918C147.953 10.2918 146.548 11.3397 146.548 12.9427C146.548 18.0173 159 14.2226 159 23.1576C159 27.4131 155.504 30 150.474 30C145.279 30 141.882 26.8563 141.654 22.0441" fill="#003543"></path> <path d="M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z" fill="#00DC82"></path></svg></a><div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"><h2 class="text-2xl leading-7 font-semibold"> Welcome to your Nuxt Application </h2><p class="mt-3 text-gray-600"> We recommend you take a look at the <a href="https://nuxtjs.org" target="_blank" class="text-green-500 hover:underline">Nuxt documentation</a>, whether you are new or have previous experience with the framework.<br></p><p class="mt-4 pt-4 text-gray-800 border-t border-dashed"> To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun! </p></div><div class="flex justify-center pt-4 space-x-2"><a href="https://github.com/nuxt/nuxt.js" target="_blank"><svg class="w-6 h-6 text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" fill="currentColor"></path></svg></a><a href="https://twitter.com/nuxt_js" target="_blank"><svg class="w-6 h-6 text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor"></path></svg></a></div></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Tutorial.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Tutorial.vue"]]);
}


// --------------------
// Request: /components/Atoms/Typography.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_15338482 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><h3 class="text-">This is a header</h3></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Atoms/Typography.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Atoms/Typography.vue"]]);
}


// --------------------
// Request: /components/Cards/CardBarChart.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/chart.js/auto/auto.esm.js ($id_0306cab9)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_252f2202 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/chart.js/auto/auto.esm.js");

const _sfc_main = {
  mounted() {
    this.$nextTick(function () {
      const config = {
        type: 'bar',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: '#ed64a6',
              borderColor: '#ed64a6',
              data: [30, 78, 56, 34, 100, 45, 13],
              fill: false,
              barThickness: 8
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: '#4c51bf',
              borderColor: '#4c51bf',
              data: [27, 68, 86, 74, 10, 4, 87],
              barThickness: 8
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: 'Orders Chart'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          legend: {
            labels: {
              fontColor: 'rgba(0,0,0,.4)'
            },
            align: 'end',
            position: 'bottom'
          },
          scales: {
            xAxes: [
              {
                display: false,
                scaleLabel: {
                  display: true,
                  labelString: 'Month'
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: 'rgba(33, 37, 41, 0.3)',
                  zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Value'
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: 'rgba(33, 37, 41, 0.2)',
                  zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ]
          }
        }
      }
      const ctx = document.getElementById('bar-chart').getContext('2d')
      window.myBar = new __vite_ssr_import_1__.default(ctx, config)
    })
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" }, _attrs))}><div class="rounded-t mb-0 px-4 py-3 bg-transparent"><div class="flex flex-wrap items-center"><div class="relative w-full max-w-full flex-grow flex-1"><h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold"> Performance </h6><h2 class="text-blueGray-700 text-xl font-semibold">Total orders</h2></div></div></div><div class="p-4 flex-auto"><div class="relative h-350-px"><canvas id="bar-chart"></canvas></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardBarChart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardBarChart.vue"]]);
}


// --------------------
// Request: /node_modules/chart.js/auto/auto.esm.js
// Parents: 
// - /components/Cards/CardBarChart.vue ($id_252f2202)
// - /components/Cards/CardLineChart.vue ($id_87067cd6)
// Dependencies: 
// - /node_modules/chart.js/dist/chart.esm.js ($id_a3bd23f4)
// --------------------
const $id_0306cab9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/chart.js/dist/chart.esm.js");


__vite_ssr_import_0__.Chart.register(...__vite_ssr_import_0__.registerables);

__vite_ssr_exports__.default = __vite_ssr_import_0__.Chart;
;
}


// --------------------
// Request: /node_modules/chart.js/dist/chart.esm.js
// Parents: 
// - /node_modules/chart.js/auto/auto.esm.js ($id_0306cab9)
// Dependencies: 
// - /node_modules/chart.js/dist/chunks/helpers.segment.js ($id_031d4f38)
// --------------------
const $id_a3bd23f4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
 * Chart.js v3.5.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/chart.js/dist/chunks/helpers.segment.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/chart.js/dist/chunks/helpers.segment.js");

Object.defineProperty(__vite_ssr_exports__, "defaults", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.d }});

class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }
  _refresh() {
    const me = this;
    if (me._request) {
      return;
    }
    me._running = true;
    me._request = __vite_ssr_import_0__.r.call(window, () => {
      me._update();
      me._request = null;
      if (me._running) {
        me._refresh();
      }
    });
  }
  _update(date = Date.now()) {
    const me = this;
    let remaining = 0;
    me._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        me._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        me._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    me._lastDate = date;
    if (remaining === 0) {
      me._running = false;
    }
  }
  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    const anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    const anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    const anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    const items = anims.items;
    let i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var animator = new Animator();

const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = __vite_ssr_import_0__.c(from || transparent);
    const c1 = c0.valid && __vite_ssr_import_0__.c(to || transparent);
    return c1 && c1.valid
      ? c1.mix(c0, factor).hexString()
      : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = __vite_ssr_import_0__.a([cfg.to, to, currentValue, cfg.from]);
    const from = __vite_ssr_import_0__.a([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = __vite_ssr_import_0__.e[cfg.easing] || __vite_ssr_import_0__.e.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(cfg, to, date) {
    const me = this;
    if (me._active) {
      me._notify(false);
      const currentValue = me._target[me._prop];
      const elapsed = date - me._start;
      const remain = me._duration - elapsed;
      me._start = date;
      me._duration = Math.floor(Math.max(remain, cfg.duration));
      me._total += elapsed;
      me._loop = !!cfg.loop;
      me._to = __vite_ssr_import_0__.a([cfg.to, to, currentValue, cfg.from]);
      me._from = __vite_ssr_import_0__.a([cfg.from, currentValue, to]);
    }
  }
  cancel() {
    const me = this;
    if (me._active) {
      me.tick(Date.now());
      me._active = false;
      me._notify(false);
    }
  }
  tick(date) {
    const me = this;
    const elapsed = date - me._start;
    const duration = me._duration;
    const prop = me._prop;
    const from = me._from;
    const loop = me._loop;
    const to = me._to;
    let factor;
    me._active = from !== to && (loop || (elapsed < duration));
    if (!me._active) {
      me._target[prop] = to;
      me._notify(true);
      return;
    }
    if (elapsed < 0) {
      me._target[prop] = from;
      return;
    }
    factor = (elapsed / duration) % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = me._easing(Math.min(1, Math.max(0, factor)));
    me._target[prop] = me._fn(from, to, factor);
  }
  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({res, rej});
    });
  }
  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];
    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }
}

const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
__vite_ssr_import_0__.d.set('animation', {
  delay: undefined,
  duration: 1000,
  easing: 'easeOutQuart',
  fn: undefined,
  from: undefined,
  loop: undefined,
  to: undefined,
  type: undefined,
});
const animationOptions = Object.keys(__vite_ssr_import_0__.d.animation);
__vite_ssr_import_0__.d.describe('animation', {
  _fallback: false,
  _indexable: false,
  _scriptable: (name) => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn',
});
__vite_ssr_import_0__.d.set('animations', {
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  },
});
__vite_ssr_import_0__.d.describe('animations', {
  _fallback: 'animation',
});
__vite_ssr_import_0__.d.set('transitions', {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: 'transparent'
      },
      visible: {
        type: 'boolean',
        duration: 0
      },
    }
  },
  hide: {
    animations: {
      colors: {
        to: 'transparent'
      },
      visible: {
        type: 'boolean',
        easing: 'linear',
        fn: v => v | 0
      },
    }
  }
});
class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  configure(config) {
    if (!__vite_ssr_import_0__.i(config)) {
      return;
    }
    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];
      if (!__vite_ssr_import_0__.i(cfg)) {
        return;
      }
      const resolved = {};
      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }
      (__vite_ssr_import_0__.b(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }
  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    const animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {
      });
    }
    return animations;
  }
  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;
    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    const animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }
}
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {$shared: false, $animations: {}});
  }
  return options;
}

function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if (__vite_ssr_import_0__.i(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, options) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if (__vite_ssr_import_0__.g(otherValue) && (singleMode || (value === 0 || __vite_ssr_import_0__.s(value) === __vite_ssr_import_0__.s(otherValue)))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || (stacked === undefined && meta.stack !== undefined);
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const {min, max, minDefined, maxDefined} = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive) {
  for (const meta of vScale.getMatchingVisibleMetas('bar').reverse()) {
    const value = stack[meta.index];
    if ((positive && value > 0) || (!positive && value < 0)) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  const {chart, _cachedMeta: meta} = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {iScale, vScale, index: datasetIndex} = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {[iAxis]: index, [vAxis]: value} = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true);
    stack._bottom = getLastIndexInStack(stack, vScale, false);
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
  return Object.assign(Object.create(parent),
    {
      active: false,
      dataset: undefined,
      datasetIndex: index,
      index,
      mode: 'default',
      type: 'dataset'
    }
  );
}
function createDataContext(parent, index, element) {
  return Object.assign(Object.create(parent), {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (const parsed of items) {
    const stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
  }
}
const isDirectUpdateMode = (mode) => mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.$context = undefined;
    this._syncList = [];
    this.initialize();
  }
  initialize() {
    const me = this;
    const meta = me._cachedMeta;
    me.configure();
    me.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    me.addElements();
  }
  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  }
  linkScales() {
    const me = this;
    const chart = me.chart;
    const meta = me._cachedMeta;
    const dataset = me.getDataset();
    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;
    const xid = meta.xAxisID = __vite_ssr_import_0__.v(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = __vite_ssr_import_0__.v(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = __vite_ssr_import_0__.v(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = me.getScaleForId(xid);
    meta.yScale = me.getScaleForId(yid);
    meta.rScale = me.getScaleForId(rid);
    meta.iScale = me.getScaleForId(iid);
    meta.vScale = me.getScaleForId(vid);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale
      ? meta.vScale
      : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const meta = this._cachedMeta;
    if (this._data) {
      __vite_ssr_import_0__.u(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  }
  _dataCheck() {
    const me = this;
    const dataset = me.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = me._data;
    if (__vite_ssr_import_0__.i(data)) {
      me._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        __vite_ssr_import_0__.u(_data, me);
        const meta = me._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        __vite_ssr_import_0__.l(data, me);
      }
      me._syncList = [];
      me._data = data;
    }
  }
  addElements() {
    const me = this;
    const meta = me._cachedMeta;
    me._dataCheck();
    if (me.datasetElementType) {
      meta.dataset = new me.datasetElementType();
    }
  }
  buildOrUpdateElements(resetNewElements) {
    const me = this;
    const meta = me._cachedMeta;
    const dataset = me.getDataset();
    let stackChanged = false;
    me._dataCheck();
    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    me._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(me, meta._parsed);
    }
  }
  configure() {
    const me = this;
    const config = me.chart.config;
    const scopeKeys = config.datasetScopeKeys(me._type);
    const scopes = config.getOptionScopes(me.getDataset(), scopeKeys, true);
    me.options = config.createResolver(scopes, me.getContext());
    me._parsing = me.options.parsing;
  }
  parse(start, count) {
    const me = this;
    const {_cachedMeta: meta, _data: data} = me;
    const {iScale, _stacked} = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;
    if (me._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if (__vite_ssr_import_0__.b(data[start])) {
        parsed = me.parseArrayData(meta, data, start, count);
      } else if (__vite_ssr_import_0__.i(data[start])) {
        parsed = me.parseObjectData(meta, data, start, count);
      } else {
        parsed = me.parsePrimitiveData(meta, data, start, count);
      }
      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || (prev && cur[iAxis] < prev[iAxis]);
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(me, parsed);
    }
  }
  parsePrimitiveData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(__vite_ssr_import_0__.f(item, xAxisKey), index),
        y: yScale.parse(__vite_ssr_import_0__.f(item, yAxisKey), index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  getDataElement(index) {
    return this._cachedMeta.data[index];
  }
  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index, {mode});
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
      value = applyStack(stack, parsedValue, this._cachedMeta.index, {all: true});
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }
  getMinMax(scale, canStack) {
    const me = this;
    const meta = me._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;
    const otherScale = me._getOtherScale(scale);
    const stack = canStack && meta._stacked && {keys: getSortedDatasetIndices(me.chart, true), values: null};
    const range = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    const {min: otherMin, max: otherMax} = getUserBounds(otherScale);
    let i, value, parsed, otherValue;
    function _skip() {
      parsed = _parsed[i];
      value = parsed[scale.axis];
      otherValue = parsed[otherScale.axis];
      return !__vite_ssr_import_0__.g(value) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      me.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        me.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  }
  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if (__vite_ssr_import_0__.g(value)) {
        values.push(value);
      }
    }
    return values;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = me.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    me.configure();
    me._cachedDataOpts = {};
    me.update(mode || 'default');
    meta._clip = toClip(__vite_ssr_import_0__.v(me.options.clip, defaultClip(meta.xScale, meta.yScale, me.getMaxOverflow())));
  }
  update(mode) {}
  draw() {
    const me = this;
    const ctx = me._ctx;
    const chart = me.chart;
    const meta = me._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = me._drawStart || 0;
    const count = me._drawCount || (elements.length - start);
    let i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      const element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }
  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(mode)
      : this.resolveDataElementOptions(index || 0, mode);
  }
  getContext(index, active, mode) {
    const me = this;
    const dataset = me.getDataset();
    let context;
    if (index >= 0 && index < me._cachedMeta.data.length) {
      const element = me._cachedMeta.data[index];
      context = element.$context ||
        (element.$context = createDataContext(me.getContext(), index, element));
      context.parsed = me.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = me.$context ||
        (me.$context = createDatasetContext(me.chart.getContext(), me.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = me.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  }
  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }
  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }
  _resolveElementOptions(elementType, mode = 'default', index) {
    const me = this;
    const active = mode === 'active';
    const cache = me._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = me.enableOptionSharing && __vite_ssr_import_0__.h(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    const config = me.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(me._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
    const names = Object.keys(__vite_ssr_import_0__.d.elements[elementType]);
    const context = () => me.getContext(index, active);
    const values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  }
  _resolveAnimations(index, transition, active) {
    const me = this;
    const chart = me.chart;
    const cache = me._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    let options;
    if (chart.options.animation !== false) {
      const config = me.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(me._type, transition);
      const scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
      options = config.createResolver(scopes, me.getContext(index, active, transition));
    }
    const animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }
  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }
  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: (!active && this.getSharedOptions(options)) || options
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(resetNewElements) {
    const me = this;
    const data = me._data;
    const elements = me._cachedMeta.data;
    for (const [method, arg1, arg2] of me._syncList) {
      me[method](arg1, arg2);
    }
    me._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);
    if (count) {
      me.parse(0, count);
    }
    if (numData > numMeta) {
      me._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      me._removeElements(numData, numMeta - numData);
    }
  }
  _insertElements(start, count, resetNewElements = true) {
    const me = this;
    const meta = me._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;
    const move = (arr) => {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new me.dataElementType();
    }
    if (me._parsing) {
      move(meta._parsed);
    }
    me.parse(start, count);
    if (resetNewElements) {
      me.updateElements(data, start, count, 'reset');
    }
  }
  updateElements(element, start, count, mode) {}
  _removeElements(start, count) {
    const me = this;
    const meta = me._cachedMeta;
    if (me._parsing) {
      const removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  }
  _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      const [method, arg1, arg2] = args;
      this[method](arg1, arg2);
    }
  }
  _onDataPush() {
    const count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(start, count) {
    this._sync(['_removeElements', start, count]);
    this._sync(['_insertElements', start, arguments.length - 2]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;

function getAllScaleValues(scale) {
  if (!scale._cache.$bar) {
    const metas = scale.getMatchingVisibleMetas('bar');
    let values = [];
    for (let i = 0, ilen = metas.length; i < ilen; i++) {
      values = values.concat(metas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = __vite_ssr_import_0__._(values.sort((a, b) => a - b));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(scale) {
  const values = getAllScaleValues(scale);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if (__vite_ssr_import_0__.h(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if (__vite_ssr_import_0__.j(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - (size / 2)
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if (__vite_ssr_import_0__.b(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return __vite_ssr_import_0__.s(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {start, end, reverse, top, bottom};
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  const {start, end, reverse, top, bottom} = borderProps(properties);
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse(__vite_ssr_import_0__.f(obj, iAxisKey), i);
      parsed.push(parseValue(__vite_ssr_import_0__.f(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const {iScale, vScale} = meta;
    const parsed = me.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom)
      ? '[' + custom.start + ', ' + custom.end + ']'
      : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    const me = this;
    me.enableOptionSharing = true;
    super.initialize();
    const meta = me._cachedMeta;
    meta.stack = me.getDataset().stack;
  }
  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    me.updateElements(meta.data, 0, meta.data.length, mode);
  }
  updateElements(bars, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const {index, _cachedMeta: {vScale}} = me;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();
    const ruler = me._getRuler();
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    me.updateSharedOptions(sharedOptions, mode, firstOpts);
    for (let i = start; i < start + count; i++) {
      const parsed = me.getParsed(i);
      const vpixels = reset || __vite_ssr_import_0__.j(parsed[vScale.axis]) ? {base, head: base} : me._calculateBarValuePixels(i);
      const ipixels = me._calculateBarIndexPixels(i, ruler);
      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index === stack._top || index === stack._bottom),
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      setBorderSkipped(properties, properties.options || bars[i].options, stack, index);
      me.updateElement(bars[i], i, properties, mode);
    }
  }
  _getStacks(last, dataIndex) {
    const me = this;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const metasets = iScale.getMatchingVisibleMetas(me._type);
    const stacked = iScale.options.stacked;
    const ilen = metasets.length;
    const stacks = [];
    let i, item;
    for (i = 0; i < ilen; ++i) {
      item = metasets[i];
      if (!item.controller.options.grouped) {
        continue;
      }
      if (typeof dataIndex !== 'undefined') {
        const val = item.controller.getParsed(dataIndex)[
          item.controller._cachedMeta.vScale.axis
        ];
        if (__vite_ssr_import_0__.j(val) || isNaN(val)) {
          continue;
        }
      }
      if (stacked === false || stacks.indexOf(item.stack) === -1 ||
				(stacked === undefined && item.stack === undefined)) {
        stacks.push(item.stack);
      }
      if (item.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }
  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);
    const index = (name !== undefined)
      ? stacks.indexOf(name)
      : -1;
    return (index === -1)
      ? stacks.length - 1
      : index;
  }
  _getRuler() {
    const me = this;
    const opts = me.options;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(me.getParsed(i)[iScale.axis], i));
    }
    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(iScale);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: me._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }
  _calculateBarValuePixels(index) {
    const me = this;
    const {_cachedMeta: {vScale, _stacked}, options: {base: baseValue, minBarLength}} = me;
    const actualBase = baseValue || 0;
    const parsed = me.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? me.applyStack(vScale, parsed, _stacked) : value;
    let head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && __vite_ssr_import_0__.s(value) !== __vite_ssr_import_0__.s(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    const startValue = !__vite_ssr_import_0__.j(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);
    if (me.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      head = base + size;
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = __vite_ssr_import_0__.s(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler) {
    const me = this;
    const scale = ruler.scale;
    const options = me.options;
    const skipNull = options.skipNull;
    const maxBarThickness = __vite_ssr_import_0__.v(options.maxBarThickness, Infinity);
    let center, size;
    if (ruler.grouped) {
      const stackCount = skipNull ? me._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex'
        ? computeFlexCategoryTraits(index, ruler, options, stackCount)
        : computeFitCategoryTraits(index, ruler, options, stackCount);
      const stackIndex = me._getStackIndex(me.index, me._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(me.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    const me = this;
    const meta = me._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    for (; i < ilen; ++i) {
      if (me.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(me._ctx);
      }
    }
  }
}
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true,
    }
  }
};

class BubbleController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  parseObjectData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const parsed = [];
    let i, ilen, item;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      item = data[i];
      parsed.push({
        x: xScale.parse(__vite_ssr_import_0__.f(item, xAxisKey), i),
        y: yScale.parse(__vite_ssr_import_0__.f(item, yAxisKey), i),
        _custom: item && item.r && +item.r
      });
    }
    return parsed;
  }
  getMaxOverflow() {
    const {data, _parsed} = this._cachedMeta;
    let max = 0;
    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size() / 2, _parsed[i]._custom);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const {xScale, yScale} = meta;
    const parsed = me.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    const me = this;
    const points = me._cachedMeta.data;
    me.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const {iScale, vScale} = me._cachedMeta;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && me.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = me.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      me.updateElement(point, i, properties, mode);
    }
    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {$shared: false});
    }
    const radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += __vite_ssr_import_0__.v(parsed && parsed._custom, radius);
    return values;
  }
}
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        }
      }
    }
  }
};

function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < __vite_ssr_import_0__.T) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = (angle, a, b) => __vite_ssr_import_0__.o(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    const calcMin = (angle, a, b) => __vite_ssr_import_0__.o(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(__vite_ssr_import_0__.H, startY, endY);
    const minX = calcMin(__vite_ssr_import_0__.P, startX, endX);
    const minY = calcMin(__vite_ssr_import_0__.P + __vite_ssr_import_0__.H, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {ratioX, ratioY, offsetX, offsetY};
}
class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    let i, ilen;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      meta._parsed[i] = +data[i];
    }
  }
  _getRotation() {
    return __vite_ssr_import_0__.t(this.options.rotation - 90);
  }
  _getCircumference() {
    return __vite_ssr_import_0__.t(this.options.circumference);
  }
  _getRotationExtents() {
    let min = __vite_ssr_import_0__.T;
    let max = -__vite_ssr_import_0__.T;
    const me = this;
    for (let i = 0; i < me.chart.data.datasets.length; ++i) {
      if (me.chart.isDatasetVisible(i)) {
        const controller = me.chart.getDatasetMeta(i).controller;
        const rotation = controller._getRotation();
        const circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min,
    };
  }
  update(mode) {
    const me = this;
    const chart = me.chart;
    const {chartArea} = chart;
    const meta = me._cachedMeta;
    const arcs = meta.data;
    const spacing = me.getMaxBorderWidth() + me.getMaxOffset(arcs) + me.options.spacing;
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min(__vite_ssr_import_0__.k(me.options.cutout, maxSize), 1);
    const chartWeight = me._getRingWeight(me.index);
    const {circumference, rotation} = me._getRotationExtents();
    const {ratioX, ratioY, offsetX, offsetY} = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = __vite_ssr_import_0__.m(me.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);
    const radiusLength = (outerRadius - innerRadius) / me._getVisibleDatasetWeightTotal();
    me.offsetX = offsetX * outerRadius;
    me.offsetY = offsetY * outerRadius;
    meta.total = me.calculateTotal();
    me.outerRadius = outerRadius - radiusLength * me._getRingWeightOffset(me.index);
    me.innerRadius = Math.max(me.outerRadius - radiusLength * chartWeight, 0);
    me.updateElements(arcs, 0, arcs.length, mode);
  }
  _circumference(i, reset) {
    const me = this;
    const opts = me.options;
    const meta = me._cachedMeta;
    const circumference = me._getCircumference();
    if ((reset && opts.animation.animateRotate) || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return me.calculateCircumference(meta._parsed[i] * circumference / __vite_ssr_import_0__.T);
  }
  updateElements(arcs, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const chart = me.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : me.innerRadius;
    const outerRadius = animateScale ? 0 : me.outerRadius;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    let startAngle = me._getRotation();
    let i;
    for (i = 0; i < start; ++i) {
      startAngle += me._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      const circumference = me._circumference(i, reset);
      const arc = arcs[i];
      const properties = {
        x: centerX + me.offsetX,
        y: centerY + me.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      me.updateElement(arc, i, properties, mode);
    }
    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;
    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    const total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return __vite_ssr_import_0__.T * (Math.abs(value) / total);
    }
    return 0;
  }
  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const chart = me.chart;
    const labels = chart.data.labels || [];
    const value = __vite_ssr_import_0__.n(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  getMaxBorderWidth(arcs) {
    const me = this;
    let max = 0;
    const chart = me.chart;
    let i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          if (controller !== me) {
            controller.configure();
          }
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  getMaxOffset(arcs) {
    let max = 0;
    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;
    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max(__vite_ssr_import_0__.v(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    },
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r',
};
DoughnutController.descriptors = {
  _scriptable: (name) => name !== 'spacing',
  _indexable: (name) => name !== 'spacing',
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(tooltipItem) {
          let dataLabel = tooltipItem.label;
          const value = ': ' + tooltipItem.formattedValue;
          if (__vite_ssr_import_0__.b(dataLabel)) {
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }
          return dataLabel;
        }
      }
    }
  }
};

class LineController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    const {dataset: line, data: points = [], _dataset} = meta;
    const animationsDisabled = me.chart._animationsDisabled;
    let {start, count} = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
    me._drawStart = start;
    me._drawCount = count;
    if (scaleRangesChanged(meta)) {
      start = 0;
      count = points.length;
    }
    line._datasetIndex = me.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = me.resolveDatasetElementOptions(mode);
    if (!me.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = me.options.segment;
    me.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    me.updateElements(points, start, count, mode);
  }
  updateElements(points, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const {iScale, vScale, _stacked} = me._cachedMeta;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const spanGaps = me.options.spanGaps;
    const maxGapLength = __vite_ssr_import_0__.p(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = me.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && me.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = me.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = __vite_ssr_import_0__.j(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? me.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && (parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      properties.parsed = parsed;
      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        me.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  getMaxOverflow() {
    const me = this;
    const meta = me._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(me.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(me.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }
}
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false,
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category',
    },
    _value_: {
      type: 'linear',
    },
  }
};
function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const {iScale, _parsed} = meta;
    const axis = iScale.axis;
    const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
    if (minDefined) {
      start = __vite_ssr_import_0__.q(Math.min(
        __vite_ssr_import_0__.w(_parsed, iScale.axis, min).lo,
        animationsDisabled ? pointCount : __vite_ssr_import_0__.w(points, axis, iScale.getPixelForValue(min)).lo),
      0, pointCount - 1);
    }
    if (maxDefined) {
      count = __vite_ssr_import_0__.q(Math.max(
        __vite_ssr_import_0__.w(_parsed, iScale.axis, max).hi + 1,
        animationsDisabled ? 0 : __vite_ssr_import_0__.w(points, axis, iScale.getPixelForValue(max)).hi + 1),
      start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {start, count};
}
function scaleRangesChanged(meta) {
  const {xScale, yScale, _scaleRanges} = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min
		|| _scaleRanges.xmax !== xScale.max
		|| _scaleRanges.ymin !== yScale.min
		|| _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}

class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const chart = me.chart;
    const labels = chart.data.labels || [];
    const value = __vite_ssr_import_0__.n(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  update(mode) {
    const arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _updateRadius() {
    const me = this;
    const chart = me.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? (outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    me.outerRadius = outerRadius - (radiusLength * me.index);
    me.innerRadius = me.outerRadius - radiusLength;
  }
  updateElements(arcs, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const chart = me.chart;
    const dataset = me.getDataset();
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = me._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;
    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * __vite_ssr_import_0__.P;
    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / me.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += me._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;
      let endAngle = angle + me._computeAngle(i, mode, defaultAngle);
      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: me.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      me.updateElement(arc, i, properties, mode);
    }
  }
  countVisibleElements() {
    const dataset = this.getDataset();
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index)
      ? __vite_ssr_import_0__.t(this.resolveDataElementOptions(index, mode).angle || defaultAngle)
      : 0;
  }
}
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    },
  },
  indexAxis: 'r',
  startAngle: 0,
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};

class PieController extends DoughnutController {
}
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};

class RadarController extends DatasetController {
  getLabelAndValue(index) {
    const me = this;
    const vScale = me._cachedMeta.vScale;
    const parsed = me.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      const options = me.resolveDatasetElementOptions(mode);
      if (!me.options.showLine) {
        options.borderWidth = 0;
      }
      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      me.updateElement(line, undefined, properties, mode);
    }
    me.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const me = this;
    const dataset = me.getDataset();
    const scale = me._cachedMeta.rScale;
    const reset = mode === 'reset';
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = me.resolveDataElementOptions(i, point.active ? 'active' : mode);
      const pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      me.updateElement(point, i, properties, mode);
    }
  }
}
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  },
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear',
    }
  }
};

class ScatterController extends LineController {
}
ScatterController.id = 'scatter';
ScatterController.defaults = {
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(item) {
          return '(' + item.label + ', ' + item.formattedValue + ')';
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PolarAreaController: PolarAreaController,
PieController: PieController,
RadarController: RadarController,
ScatterController: ScatterController
});

function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }
  formats() {
    return abstract();
  }
  parse(value, format) {
    return abstract();
  }
  format(timestamp, format) {
    return abstract();
  }
  add(timestamp, amount, unit) {
    return abstract();
  }
  diff(a, b, unit) {
    return abstract();
  }
  startOf(timestamp, unit, weekday) {
    return abstract();
  }
  endOf(timestamp, unit) {
    return abstract();
  }
}
DateAdapter.override = function(members) {
  Object.assign(DateAdapter.prototype, members);
};
var adapters = {
  _date: DateAdapter
};

function getRelativePosition(e, chart) {
  if ('native' in e) {
    return {
      x: e.x,
      y: e.y
    };
  }
  return __vite_ssr_import_0__.x(e, chart);
}
function evaluateAllVisibleItems(chart, handler) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  let index, data, element;
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    ({index, data} = metasets[i]);
    for (let j = 0, jlen = data.length; j < jlen; ++j) {
      element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function binarySearch(metaset, axis, value, intersect) {
  const {controller, data, _sorted} = metaset;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? __vite_ssr_import_0__.z : __vite_ssr_import_0__.w;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {lo: start.lo, hi: end.hi};
      }
    }
  }
  return {lo: 0, hi: data.length - 1};
}
function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {index, data} = metasets[i];
    const {lo, hi} = binarySearch(metasets[i], axis, value, intersect);
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function(pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition) {
  const items = [];
  if (!__vite_ssr_import_0__.y(position, chart.chartArea, chart._minPadding)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  let items = [];
  if (!__vite_ssr_import_0__.y(position, chart.chartArea, chart._minPadding)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (intersect && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    if (!__vite_ssr_import_0__.y(center, chart.chartArea, chart._minPadding) && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{element, datasetIndex, index}];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({element, datasetIndex, index});
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}
function getAxisItems(chart, e, options, useFinalPosition) {
  const position = getRelativePosition(e, chart);
  const items = [];
  const axis = options.axis;
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      intersectsItem = true;
    }
  });
  if (options.intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'x';
      const items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition)
        : getNearestItems(chart, position, axis, false, useFinalPosition);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach((meta) => {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({element, datasetIndex: meta.index, index});
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      let items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition) :
        getNearestItems(chart, position, axis, false, useFinalPosition);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({element: data[i], datasetIndex, index: i});
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getIntersectItems(chart, position, axis, useFinalPosition);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
    },
    x(chart, e, options, useFinalPosition) {
      options.axis = 'x';
      return getAxisItems(chart, e, options, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      options.axis = 'y';
      return getAxisItems(chart, e, options, useFinalPosition);
    }
  }
};

const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ?
      v0.index - v1.index :
      v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    ({position: pos, options: {stack, stackWeight = 1}} = box);
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && (pos + stack),
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  for (const wrap of layouts) {
    const {stack, pos, stackWeight} = wrap;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    const _stack = stacks[stack] || (stacks[stack] = {count: 0, placed: 0, weight: 0, size: 0});
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const {vBoxMaxWidth, hBoxMaxHeight} = params;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const {fullSize} = layout.box;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const {pos, box} = layout;
  const maxPadding = chartArea.maxPadding;
  if (!__vite_ssr_import_0__.i(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {size: 0, count: 1};
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal
    ? {same: widthChanged, other: heightChanged}
    : {same: heightChanged, other: widthChanged};
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {left: 0, top: 0, right: 0, bottom: 0};
    positions.forEach((pos) => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal
    ? marginForPositions(['left', 'right'])
    : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(
      layout.width || chartArea.w,
      layout.height || chartArea.h,
      getMargins(layout.horizontal, chartArea)
    );
    const {same, other} = updateDims(chartArea, params, layout, stacks);
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let {x, y} = chartArea;
  for (const layout of boxes) {
    const box = layout.box;
    const stack = stacks[layout.stack] || {count: 1, placed: 0, weight: 1};
    const weight = (layout.stackWeight / stack.weight) || 1;
    if (layout.horizontal) {
      const width = chartArea.w * weight;
      const height = stack.size || box.height;
      if (__vite_ssr_import_0__.h(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      const height = chartArea.h * weight;
      const width = stack.size || box.width;
      if (__vite_ssr_import_0__.h(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, width, height);
      }
      stack.start = x;
      stack.placed += height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
__vite_ssr_import_0__.d.set('layout', {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function() {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = __vite_ssr_import_0__.A(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    __vite_ssr_import_0__.B(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) =>
      wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, __vite_ssr_import_0__.A(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w,
    };
    __vite_ssr_import_0__.B(boxes.chartArea, (layout) => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h);
    });
  }
};

class BasePlatform {
  acquireContext(canvas, aspectRatio) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }
  isAttached(canvas) {
    return true;
  }
}

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
}

const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = value => value === null || value === '';
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = __vite_ssr_import_0__.E(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = __vite_ssr_import_0__.E(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = __vite_ssr_import_0__.G ? {passive: true} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {x, y} = __vite_ssr_import_0__.x(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null,
  };
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && __vite_ssr_import_0__.D(canvas);
  const element = container || canvas;
  const observer = new MutationObserver(entries => {
    const parent = __vite_ssr_import_0__.D(element);
    entries.forEach(entry => {
      for (let i = 0; i < entry.addedNodes.length; i++) {
        const added = entry.addedNodes[i];
        if (added === element || added === parent) {
          listener(entry.target);
        }
      }
    });
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && __vite_ssr_import_0__.D(canvas);
  if (!container) {
    return;
  }
  const observer = new MutationObserver(entries => {
    entries.forEach(entry => {
      for (let i = 0; i < entry.removedNodes.length; i++) {
        if (entry.removedNodes[i] === canvas) {
          listener();
          break;
        }
      }
    });
  });
  observer.observe(container, {childList: true});
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && __vite_ssr_import_0__.D(canvas);
  if (!container) {
    return;
  }
  const resize = __vite_ssr_import_0__.F((width, height) => {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = __vite_ssr_import_0__.F((event) => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart, (args) => {
    const event = args[0];
    return [event, event.offsetX, event.offsetY];
  });
  addListener(canvas, type, proxy);
  return proxy;
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    const canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach((prop) => {
      const value = initial[prop];
      if (__vite_ssr_import_0__.j(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach((key) => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }
  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];
    if (!proxy) {
      return;
    }
    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(canvas, width, height, aspectRatio) {
    return __vite_ssr_import_0__.C(canvas, width, height, aspectRatio);
  }
  isAttached(canvas) {
    const container = __vite_ssr_import_0__.D(canvas);
    return !!(container && container.isConnected);
  }
}

function _detectPlatform(canvas) {
  if (!__vite_ssr_import_0__.I() || (typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas)) {
    return BasicPlatform;
  }
  return DomPlatform;
}

class Element {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }
  tooltipPosition(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  hasValue() {
    return __vite_ssr_import_0__.p(this.x) && __vite_ssr_import_0__.p(this.y);
  }
  getProps(props, final) {
    const me = this;
    const anims = this.$animations;
    if (!final || !anims) {
      return me;
    }
    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : me[prop];
    });
    return ret;
  }
}
Element.defaults = {};
Element.defaultRoutes = undefined;

const formatters = {
  values(value) {
    return __vite_ssr_import_0__.b(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = __vite_ssr_import_0__.J(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal};
    Object.assign(options, this.options.ticks.format);
    return __vite_ssr_import_0__.n(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = tickValue / (Math.pow(10, Math.floor(__vite_ssr_import_0__.J(tickValue))));
    if (remain === 1 || remain === 2 || remain === 5) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {formatters};

__vite_ssr_import_0__.d.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (_ctx, options) => options.lineWidth,
    tickColor: (_ctx, options) => options.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0.0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: false,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2,
  }
});
__vite_ssr_import_0__.d.route('scale.ticks', 'color', '', 'color');
__vite_ssr_import_0__.d.route('scale.grid', 'color', '', 'borderColor');
__vite_ssr_import_0__.d.route('scale.grid', 'borderColor', '', 'borderColor');
__vite_ssr_import_0__.d.route('scale.title', 'color', '', 'color');
__vite_ssr_import_0__.d.describe('scale', {
  _fallback: false,
  _scriptable: (name) => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
  _indexable: (name) => name !== 'borderDash' && name !== 'tickBorderDash',
});
__vite_ssr_import_0__.d.describe('scales', {
  _fallback: 'scale',
});
__vite_ssr_import_0__.d.describe('scale.ticks', {
  _scriptable: (name) => name !== 'backdropPadding' && name !== 'callback',
  _indexable: (name) => name !== 'backdropPadding',
});

function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, __vite_ssr_import_0__.j(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, __vite_ssr_import_0__.j(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = __vite_ssr_import_0__.K(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = __vite_ssr_import_0__.v(majorStart, 0);
  const end = Math.min(__vite_ssr_import_0__.v(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}

const reverseAlign = (align) => align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  __vite_ssr_import_0__.B(caches, (cache) => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = __vite_ssr_import_0__.X(options.font, fallback);
  const padding = __vite_ssr_import_0__.A(options.padding);
  const lines = __vite_ssr_import_0__.b(options.text) ? options.text.length : 1;
  return (lines * font.lineHeight) + padding.height;
}
function createScaleContext(parent, scale) {
  return Object.assign(Object.create(parent), {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return Object.assign(Object.create(parent), {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = __vite_ssr_import_0__.Y(align);
  if ((reverse && position !== 'right') || (!reverse && position === 'right')) {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const {top, left, bottom, right, chart} = scale;
  const {chartArea, scales} = chart;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = __vite_ssr_import_0__.Z(align, left, right);
    if (__vite_ssr_import_0__.i(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if (__vite_ssr_import_0__.i(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = __vite_ssr_import_0__.Z(align, bottom, top);
    rotation = position === 'left' ? -__vite_ssr_import_0__.H : __vite_ssr_import_0__.H;
  }
  return {titleX, titleY, maxWidth, rotation};
}
class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(options) {
    const me = this;
    me.options = options.setContext(me.getContext());
    me.axis = options.axis;
    me._userMin = me.parse(options.min);
    me._userMax = me.parse(options.max);
    me._suggestedMin = me.parse(options.suggestedMin);
    me._suggestedMax = me.parse(options.suggestedMax);
  }
  parse(raw, index) {
    return raw;
  }
  getUserBounds() {
    let {_userMin, _userMax, _suggestedMin, _suggestedMax} = this;
    _userMin = __vite_ssr_import_0__.L(_userMin, Number.POSITIVE_INFINITY);
    _userMax = __vite_ssr_import_0__.L(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = __vite_ssr_import_0__.L(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = __vite_ssr_import_0__.L(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: __vite_ssr_import_0__.L(_userMin, _suggestedMin),
      max: __vite_ssr_import_0__.L(_userMax, _suggestedMax),
      minDefined: __vite_ssr_import_0__.g(_userMin),
      maxDefined: __vite_ssr_import_0__.g(_userMax)
    };
  }
  getMinMax(canStack) {
    const me = this;
    let {min, max, minDefined, maxDefined} = me.getUserBounds();
    let range;
    if (minDefined && maxDefined) {
      return {min, max};
    }
    const metas = me.getMatchingVisibleMetas();
    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(me, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    return {
      min: __vite_ssr_import_0__.L(min, __vite_ssr_import_0__.L(max, min)),
      max: __vite_ssr_import_0__.L(max, __vite_ssr_import_0__.L(min, max))
    };
  }
  getPadding() {
    const me = this;
    return {
      left: me.paddingLeft || 0,
      top: me.paddingTop || 0,
      right: me.paddingRight || 0,
      bottom: me.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    __vite_ssr_import_0__.M(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    const me = this;
    const tickOpts = me.options.ticks;
    const sampleSize = tickOpts.sampleSize;
    me.beforeUpdate();
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    me.ticks = null;
    me._labelSizes = null;
    me._gridLineItems = null;
    me._labelItems = null;
    me.beforeSetDimensions();
    me.setDimensions();
    me.afterSetDimensions();
    me._maxLength = me.isHorizontal()
      ? me.width + margins.left + margins.right
      : me.height + margins.top + margins.bottom;
    if (!me._dataLimitsCached) {
      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();
      me._range = __vite_ssr_import_0__.N(me, me.options.grace);
      me._dataLimitsCached = true;
    }
    me.beforeBuildTicks();
    me.ticks = me.buildTicks() || [];
    me.afterBuildTicks();
    const samplingEnabled = sampleSize < me.ticks.length;
    me._convertTicksToLabels(samplingEnabled ? sample(me.ticks, sampleSize) : me.ticks);
    me.configure();
    me.beforeCalculateLabelRotation();
    me.calculateLabelRotation();
    me.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      me.ticks = autoSkip(me, me.ticks);
      me._labelSizes = null;
    }
    if (samplingEnabled) {
      me._convertTicksToLabels(me.ticks);
    }
    me.beforeFit();
    me.fit();
    me.afterFit();
    me.afterUpdate();
  }
  configure() {
    const me = this;
    let reversePixels = me.options.reverse;
    let startPixel, endPixel;
    if (me.isHorizontal()) {
      startPixel = me.left;
      endPixel = me.right;
    } else {
      startPixel = me.top;
      endPixel = me.bottom;
      reversePixels = !reversePixels;
    }
    me._startPixel = startPixel;
    me._endPixel = endPixel;
    me._reversePixels = reversePixels;
    me._length = endPixel - startPixel;
    me._alignToPixels = me.options.alignToPixels;
  }
  afterUpdate() {
    __vite_ssr_import_0__.M(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    __vite_ssr_import_0__.M(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    const me = this;
    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }
    me.paddingLeft = 0;
    me.paddingTop = 0;
    me.paddingRight = 0;
    me.paddingBottom = 0;
  }
  afterSetDimensions() {
    __vite_ssr_import_0__.M(this.options.afterSetDimensions, [this]);
  }
  _callHooks(name) {
    const me = this;
    me.chart.notifyPlugins(name, me.getContext());
    __vite_ssr_import_0__.M(me.options[name], [me]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    __vite_ssr_import_0__.M(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    const me = this;
    const tickOpts = me.options.ticks;
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = __vite_ssr_import_0__.M(tickOpts.callback, [tick.value, i, ticks], me);
    }
  }
  afterTickToLabelConversion() {
    __vite_ssr_import_0__.M(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    __vite_ssr_import_0__.M(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const me = this;
    const options = me.options;
    const tickOpts = options.ticks;
    const numTicks = me.ticks.length;
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;
    if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
      me.labelRotation = minRotation;
      return;
    }
    const labelSizes = me._getLabelSizes();
    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = __vite_ssr_import_0__.q(me.chart.width - maxLabelWidth, 0, me.maxWidth);
    tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = me.maxHeight - getTickMarkLength(options.grid)
				- tickOpts.padding - getTitleHeight(options.title, me.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = __vite_ssr_import_0__.O(Math.min(
        Math.asin(__vite_ssr_import_0__.q((labelSizes.highest.height + 6) / tickWidth, -1, 1)),
        Math.asin(__vite_ssr_import_0__.q(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(__vite_ssr_import_0__.q(maxLabelHeight / maxLabelDiagonal, -1, 1))
      ));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    me.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    __vite_ssr_import_0__.M(this.options.afterCalculateLabelRotation, [this]);
  }
  beforeFit() {
    __vite_ssr_import_0__.M(this.options.beforeFit, [this]);
  }
  fit() {
    const me = this;
    const minSize = {
      width: 0,
      height: 0
    };
    const {chart, options: {ticks: tickOpts, title: titleOpts, grid: gridOpts}} = me;
    const display = me._isVisible();
    const isHorizontal = me.isHorizontal();
    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = me.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = me.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && me.ticks.length) {
        const {first, last, widest, highest} = me._getLabelSizes();
        const tickPadding = tickOpts.padding * 2;
        const angleRadians = __vite_ssr_import_0__.t(me.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);
        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        me._calculatePadding(first, last, sin, cos);
      }
    }
    me._handleMargins();
    if (isHorizontal) {
      me.width = me._length = chart.width - me._margins.left - me._margins.right;
      me.height = minSize.height;
    } else {
      me.width = minSize.width;
      me.height = me._length = chart.height - me._margins.top - me._margins.bottom;
    }
  }
  _calculatePadding(first, last, sin, cos) {
    const me = this;
    const {ticks: {align, padding}, position} = me.options;
    const isRotated = me.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && me.axis === 'x';
    if (me.isHorizontal()) {
      const offsetLeft = me.getPixelForTick(0) - me.left;
      const offsetRight = me.right - me.getPixelForTick(me.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      me.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * me.width / (me.width - offsetLeft), 0);
      me.paddingRight = Math.max((paddingRight - offsetRight + padding) * me.width / (me.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      me.paddingTop = paddingTop + padding;
      me.paddingBottom = paddingBottom + padding;
    }
  }
  _handleMargins() {
    const me = this;
    if (me._margins) {
      me._margins.left = Math.max(me.paddingLeft, me._margins.left);
      me._margins.top = Math.max(me.paddingTop, me._margins.top);
      me._margins.right = Math.max(me.paddingRight, me._margins.right);
      me._margins.bottom = Math.max(me.paddingBottom, me._margins.bottom);
    }
  }
  afterFit() {
    __vite_ssr_import_0__.M(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {axis, position} = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(ticks) {
    const me = this;
    me.beforeTickToLabelConversion();
    me.generateTickLabels(ticks);
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (__vite_ssr_import_0__.j(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    me.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    const me = this;
    let labelSizes = me._labelSizes;
    if (!labelSizes) {
      const sampleSize = me.options.ticks.sampleSize;
      let ticks = me.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      me._labelSizes = labelSizes = me._computeLabelSizes(ticks, ticks.length);
    }
    return labelSizes;
  }
  _computeLabelSizes(ticks, length) {
    const {ctx, _longestTextCache: caches} = this;
    const widths = [];
    const heights = [];
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!__vite_ssr_import_0__.j(label) && !__vite_ssr_import_0__.b(label)) {
        width = __vite_ssr_import_0__.Q(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (__vite_ssr_import_0__.b(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!__vite_ssr_import_0__.j(nestedLabel) && !__vite_ssr_import_0__.b(nestedLabel)) {
            width = __vite_ssr_import_0__.Q(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);
    const valueAt = (idx) => ({width: widths[idx] || 0, height: heights[idx] || 0});
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights,
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value, index) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getPixelForDecimal(decimal) {
    const me = this;
    if (me._reversePixels) {
      decimal = 1 - decimal;
    }
    const pixel = me._startPixel + decimal * me._length;
    return __vite_ssr_import_0__.R(me._alignToPixels ? __vite_ssr_import_0__.S(me.chart, pixel, 0) : pixel);
  }
  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {min, max} = this;
    return min < 0 && max < 0 ? max :
      min > 0 && max > 0 ? min :
      0;
  }
  getContext(index) {
    const me = this;
    const ticks = me.ticks || [];
    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context ||
				(tick.$context = createTickContext(me.getContext(), index, tick));
    }
    return me.$context ||
			(me.$context = createScaleContext(me.chart.getContext(), me));
  }
  _tickSize() {
    const me = this;
    const optionTicks = me.options.ticks;
    const rot = __vite_ssr_import_0__.t(me.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));
    const labelSizes = me._getLabelSizes();
    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return me.isHorizontal()
      ? h * cos > w * sin ? w / cos : h / sin
      : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    const display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    const me = this;
    const axis = me.axis;
    const chart = me.chart;
    const options = me.options;
    const {grid, position} = options;
    const offset = grid.offset;
    const isHorizontal = me.isHorizontal();
    const ticks = me.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = grid.setContext(me.getContext());
    const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
    const axisHalfWidth = axisWidth / 2;
    const alignBorderValue = function(pixel) {
      return __vite_ssr_import_0__.S(chart, pixel, axisWidth);
    };
    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(me.bottom);
      ty1 = me.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(me.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = me.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(me.right);
      tx1 = me.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(me.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = me.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if (__vite_ssr_import_0__.i(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if (__vite_ssr_import_0__.i(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    const limit = __vite_ssr_import_0__.v(options.ticks.maxTicksLimit, ticksLength);
    const step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      const optsAtIndex = grid.setContext(me.getContext(i));
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = grid.borderDash || [];
      const borderDashOffset = optsAtIndex.borderDashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(me, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = __vite_ssr_import_0__.S(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset,
      });
    }
    me._ticksLength = ticksLength;
    me._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    const me = this;
    const axis = me.axis;
    const options = me.options;
    const {position, ticks: optionTicks} = options;
    const isHorizontal = me.isHorizontal();
    const ticks = me.ticks;
    const {align, crossAlign, padding, mirror} = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -__vite_ssr_import_0__.t(me.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';
    if (position === 'top') {
      y = me.bottom - hTickAndPadding;
      textAlign = me._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = me.top + hTickAndPadding;
      textAlign = me._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = me._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = me._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = ((chartArea.top + chartArea.bottom) / 2) + tickAndPadding;
      } else if (__vite_ssr_import_0__.i(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = me.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = me._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = ((chartArea.left + chartArea.right) / 2) - tickAndPadding;
      } else if (__vite_ssr_import_0__.i(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = me.chart.scales[positionAxisID].getPixelForValue(value);
      }
      textAlign = me._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    const labelSizes = me._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(me.getContext(i));
      pixel = me.getPixelForTick(i) + optionTicks.labelOffset;
      font = me._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = __vite_ssr_import_0__.b(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;
      if (isHorizontal) {
        x = pixel;
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      let backdrop;
      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = __vite_ssr_import_0__.A(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = y + textOffset - labelPadding.top;
        let left = x - labelPadding.left;
        switch (textBaseline) {
        case 'middle':
          top -= height / 2;
          break;
        case 'bottom':
          top -= height;
          break;
        }
        switch (textAlign) {
        case 'center':
          left -= width / 2;
          break;
        case 'right':
          left -= width;
          break;
        }
        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor,
        };
      }
      items.push({
        rotation,
        label,
        font,
        color,
        strokeColor,
        strokeWidth,
        textOffset,
        textAlign,
        textBaseline,
        translation: [x, y],
        backdrop,
      });
    }
    return items;
  }
  _getXAxisLabelAlignment() {
    const me = this;
    const {position, ticks} = me.options;
    const rotation = -__vite_ssr_import_0__.t(me.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    let align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    }
    return align;
  }
  _getYAxisLabelAlignment(tl) {
    const me = this;
    const {position, ticks: {crossAlign, mirror, padding}} = me.options;
    const labelSizes = me._getLabelSizes();
    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;
    if (position === 'left') {
      if (mirror) {
        x = me.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += (widest / 2);
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = me.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x = me.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = me.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = me.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = me.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {textAlign, x};
  }
  _computeLabelArea() {
    const me = this;
    if (me.options.ticks.mirror) {
      return;
    }
    const chart = me.chart;
    const position = me.options.position;
    if (position === 'left' || position === 'right') {
      return {top: 0, left: me.left, bottom: chart.height, right: me.right};
    } if (position === 'top' || position === 'bottom') {
      return {top: me.top, left: 0, bottom: me.bottom, right: chart.width};
    }
  }
  drawBackground() {
    const {ctx, options: {backgroundColor}, left, top, width, height} = this;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }
  getLineWidthForValue(value) {
    const me = this;
    const grid = me.options.grid;
    if (!me._isVisible() || !grid.display) {
      return 0;
    }
    const ticks = me.ticks;
    const index = ticks.findIndex(t => t.value === value);
    if (index >= 0) {
      const opts = grid.setContext(me.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  }
  drawGrid(chartArea) {
    const me = this;
    const grid = me.options.grid;
    const ctx = me.ctx;
    const items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
    let i, ilen;
    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        if (grid.drawOnChartArea) {
          drawLine(
            {x: item.x1, y: item.y1},
            {x: item.x2, y: item.y2},
            item
          );
        }
        if (grid.drawTicks) {
          drawLine(
            {x: item.tx1, y: item.ty1},
            {x: item.tx2, y: item.ty2},
            {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            }
          );
        }
      }
    }
  }
  drawBorder() {
    const me = this;
    const {chart, ctx, options: {grid}} = me;
    const borderOpts = grid.setContext(me.getContext());
    const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
    if (!axisWidth) {
      return;
    }
    const lastLineWidth = grid.setContext(me.getContext(0)).lineWidth;
    const borderValue = me._borderValue;
    let x1, x2, y1, y2;
    if (me.isHorizontal()) {
      x1 = __vite_ssr_import_0__.S(chart, me.left, axisWidth) - axisWidth / 2;
      x2 = __vite_ssr_import_0__.S(chart, me.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = __vite_ssr_import_0__.S(chart, me.top, axisWidth) - axisWidth / 2;
      y2 = __vite_ssr_import_0__.S(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.borderWidth;
    ctx.strokeStyle = borderOpts.borderColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
  drawLabels(chartArea) {
    const me = this;
    const optionTicks = me.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    const ctx = me.ctx;
    const area = me._computeLabelArea();
    if (area) {
      __vite_ssr_import_0__.U(ctx, area);
    }
    const items = me._labelItems || (me._labelItems = me._computeLabelItems(chartArea));
    let i, ilen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      const item = items[i];
      const tickFont = item.font;
      const label = item.label;
      if (item.backdrop) {
        ctx.fillStyle = item.backdrop.color;
        ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
      }
      let y = item.textOffset;
      __vite_ssr_import_0__.V(ctx, label, 0, y, tickFont, item);
    }
    if (area) {
      __vite_ssr_import_0__.W(ctx);
    }
  }
  drawTitle() {
    const {ctx, options: {position, title, reverse}} = this;
    if (!title.display) {
      return;
    }
    const font = __vite_ssr_import_0__.X(title.font);
    const padding = __vite_ssr_import_0__.A(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || __vite_ssr_import_0__.i(position)) {
      offset += padding.bottom;
      if (__vite_ssr_import_0__.b(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    const {titleX, titleY, maxWidth, rotation} = titleArgs(this, offset, position, align);
    __vite_ssr_import_0__.V(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
  draw(chartArea) {
    const me = this;
    if (!me._isVisible()) {
      return;
    }
    me.drawBackground();
    me.drawGrid(chartArea);
    me.drawBorder();
    me.drawTitle();
    me.drawLabels(chartArea);
  }
  _layers() {
    const me = this;
    const opts = me.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = __vite_ssr_import_0__.v(opts.grid && opts.grid.z, -1);
    if (!me._isVisible() || me.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw(chartArea) {
          me.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw(chartArea) {
        me.drawBackground();
        me.drawGrid(chartArea);
        me.drawTitle();
      }
    }, {
      z: gz + 1,
      draw() {
        me.drawBorder();
      }
    }, {
      z: tz,
      draw(chartArea) {
        me.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    const me = this;
    const metas = me.chart.getSortedVisibleDatasetMetas();
    const axisID = me.axis + 'AxisID';
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];
      if (meta[axisID] === me.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return __vite_ssr_import_0__.X(opts.font);
  }
  _maxDigits() {
    const me = this;
    const fontSize = me._resolveTickFontOptions(0).lineHeight;
    return (me.isHorizontal() ? me.width : me.height) / fontSize;
  }
}

class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }
  register(item) {
    const me = this;
    const proto = Object.getPrototypeOf(item);
    let parentScope;
    if (isIChartComponent(proto)) {
      parentScope = me.register(proto);
    }
    const items = me.items;
    const id = item.id;
    const scope = me.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (me.override) {
      __vite_ssr_import_0__.d.override(item.id, item.overrides);
    }
    return scope;
  }
  get(id) {
    return this.items[id];
  }
  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in __vite_ssr_import_0__.d[scope]) {
      delete __vite_ssr_import_0__.d[scope][id];
      if (this.override) {
        delete __vite_ssr_import_0__.$[id];
      }
    }
  }
}
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = __vite_ssr_import_0__.a0(Object.create(null), [
    parentScope ? __vite_ssr_import_0__.d.get(parentScope) : {},
    __vite_ssr_import_0__.d.get(scope),
    item.defaults
  ]);
  __vite_ssr_import_0__.d.set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    __vite_ssr_import_0__.d.describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    __vite_ssr_import_0__.d.route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}

class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...args) {
    this._each('register', args);
  }
  remove(...args) {
    this._each('unregister', args);
  }
  addControllers(...args) {
    this._each('register', args, this.controllers);
  }
  addElements(...args) {
    this._each('register', args, this.elements);
  }
  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }
  addScales(...args) {
    this._each('register', args, this.scales);
  }
  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }
  getElement(id) {
    return this._get(id, this.elements, 'element');
  }
  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }
  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }
  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }
  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }
  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }
  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }
  _each(method, args, typedRegistry) {
    const me = this;
    [...args].forEach(arg => {
      const reg = typedRegistry || me._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || (reg === me.plugins && arg.id)) {
        me._exec(method, reg, arg);
      } else {
        __vite_ssr_import_0__.B(arg, item => {
          const itemReg = typedRegistry || me._getRegistryForType(item);
          me._exec(method, itemReg, item);
        });
      }
    });
  }
  _exec(method, registry, component) {
    const camelMethod = __vite_ssr_import_0__.a1(method);
    __vite_ssr_import_0__.M(component['before' + camelMethod], [], component);
    registry[method](component);
    __vite_ssr_import_0__.M(component['after' + camelMethod], [], component);
  }
  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  }
  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  }
}
var registry = new Registry();

class PluginService {
  constructor() {
    this._init = [];
  }
  notify(chart, hook, args, filter) {
    const me = this;
    if (hook === 'beforeInit') {
      me._init = me._createDescriptors(chart, true);
      me._notify(me._init, chart, 'install');
    }
    const descriptors = filter ? me._descriptors(chart).filter(filter) : me._descriptors(chart);
    const result = me._notify(descriptors, chart, hook, args);
    if (hook === 'destroy') {
      me._notify(descriptors, chart, 'stop');
      me._notify(me._init, chart, 'uninstall');
    }
    return result;
  }
  _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];
      if (__vite_ssr_import_0__.M(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!__vite_ssr_import_0__.j(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    const descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  }
  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = __vite_ssr_import_0__.v(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }
  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;
    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }
}
function allPlugins(config) {
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
    }
  }
  return plugins;
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, plugins, options, all) {
  const result = [];
  const context = chart.getContext();
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    const id = plugin.id;
    const opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin,
      options: pluginOpts(chart.config, plugin, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, plugin, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  return config.createResolver(scopes, context, [''], {scriptable: false, indexable: false, allKeys: true});
}

function getIndexAxis(type, options) {
  const datasetDefaults = __vite_ssr_import_0__.d.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y') {
    return id;
  }
  return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function mergeScaleConfig(config, options) {
  const chartDefaults = __vite_ssr_import_0__.$[config.type] || {scales: {}};
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const firstIDs = Object.create(null);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = __vite_ssr_import_0__.a7(Object.create(null), [{axis}, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = __vite_ssr_import_0__.$[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
      scales[id] = scales[id] || Object.create(null);
      __vite_ssr_import_0__.a7(scales[id], [{axis}, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    __vite_ssr_import_0__.a7(scale, [__vite_ssr_import_0__.d.scales[scale.type], __vite_ssr_import_0__.d.scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = __vite_ssr_import_0__.v(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = (set, obj, key) => {
  const opts = __vite_ssr_import_0__.f(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(type) {
    this._config.type = type;
  }
  get data() {
    return this._config.data;
  }
  set data(data) {
    this._config.data = initData(data);
  }
  get options() {
    return this._config.options;
  }
  set options(options) {
    this._config.options = options;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType,
      () => [[
        `datasets.${datasetType}`,
        ''
      ]]);
  }
  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`,
      () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`,
        ],
        [
          `datasets.${datasetType}`,
          ''
        ]
      ]);
  }
  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`,
      () => [[
        `datasets.${datasetType}.elements.${elementType}`,
        `datasets.${datasetType}`,
        `elements.${elementType}`,
        ''
      ]]);
  }
  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`,
      () => [[
        `plugins.${id}`,
        ...plugin.additionalOptionScopes || [],
      ]]);
  }
  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;
    let cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  }
  getOptionScopes(mainScope, keyLists, resetCache) {
    const {options, type} = this;
    const cache = this._cachedScopes(mainScope, resetCache);
    const cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }
      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, __vite_ssr_import_0__.$[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, __vite_ssr_import_0__.d, key));
      keys.forEach(key => addIfFound(scopes, __vite_ssr_import_0__.a2, key));
    });
    const array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  }
  chartOptionScopes() {
    const {options, type} = this;
    return [
      options,
      __vite_ssr_import_0__.$[type] || {},
      __vite_ssr_import_0__.d.datasets[type] || {},
      {type},
      __vite_ssr_import_0__.d,
      __vite_ssr_import_0__.a2
    ];
  }
  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {$shared: true};
    const {resolver, subPrefixes} = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = __vite_ssr_import_0__.a3(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = __vite_ssr_import_0__.a4(resolver, context, subResolver);
    }
    for (const prop of names) {
      result[prop] = options[prop];
    }
    return result;
  }
  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {resolver} = getResolver(this._resolverCache, scopes, prefixes);
    return __vite_ssr_import_0__.i(context)
      ? __vite_ssr_import_0__.a4(resolver, context, undefined, descriptorDefaults)
      : resolver;
  }
}
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = __vite_ssr_import_0__.a5(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
function needContext(proxy, names) {
  const {isScriptable, isIndexable} = __vite_ssr_import_0__.a6(proxy);
  for (const prop of names) {
    if ((isScriptable(prop) && __vite_ssr_import_0__.a3(proxy[prop]))
      || (isIndexable(prop) && __vite_ssr_import_0__.b(proxy[prop]))) {
      return true;
    }
  }
  return false;
}

var version = "3.5.1";

const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || (KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x');
}
function compare2Level(l1, l2) {
  return function(a, b) {
    return a[l1] === b[l1]
      ? a[l2] - b[l2]
      : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  __vite_ssr_import_0__.M(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  __vite_ssr_import_0__.M(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if (__vite_ssr_import_0__.I() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = (key) => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter((c) => c.canvas === canvas).pop();
};
class Chart {
  constructor(item, userConfig) {
    const me = this;
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error(
        'Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' +
				' must be destroyed before the canvas can be reused.'
      );
    }
    const options = config.createResolver(config.chartOptionScopes(), me.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    const context = me.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = __vite_ssr_import_0__.a8();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = __vite_ssr_import_0__.a9(() => this.update('resize'), options.resizeDelay || 0);
    instances[me.id] = me;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(me, 'complete', onAnimationsComplete);
    animator.listen(me, 'progress', onAnimationProgress);
    me._initialize();
    if (me.attached) {
      me.update();
    }
  }
  get aspectRatio() {
    const {options: {aspectRatio, maintainAspectRatio}, width, height, _aspectRatio} = this;
    if (!__vite_ssr_import_0__.j(aspectRatio)) {
      return aspectRatio;
    }
    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }
    return height ? width / height : null;
  }
  get data() {
    return this.config.data;
  }
  set data(data) {
    this.config.data = data;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this.config.options = options;
  }
  _initialize() {
    const me = this;
    me.notifyPlugins('beforeInit');
    if (me.options.responsive) {
      me.resize();
    } else {
      __vite_ssr_import_0__.aa(me, me.options.devicePixelRatio);
    }
    me.bindEvents();
    me.notifyPlugins('afterInit');
    return me;
  }
  clear() {
    __vite_ssr_import_0__.ab(this.canvas, this.ctx);
    return this;
  }
  stop() {
    animator.stop(this);
    return this;
  }
  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {width, height};
    }
  }
  _resize(width, height) {
    const me = this;
    const options = me.options;
    const canvas = me.canvas;
    const aspectRatio = options.maintainAspectRatio && me.aspectRatio;
    const newSize = me.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || me.platform.getDevicePixelRatio();
    me.width = newSize.width;
    me.height = newSize.height;
    me._aspectRatio = me.aspectRatio;
    if (!__vite_ssr_import_0__.aa(me, newRatio, true)) {
      return;
    }
    me.notifyPlugins('resize', {size: newSize});
    __vite_ssr_import_0__.M(options.onResize, [me, newSize], me);
    if (me.attached) {
      if (me._doResize()) {
        me.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    __vite_ssr_import_0__.B(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }
  buildOrUpdateScales() {
    const me = this;
    const options = me.options;
    const scaleOpts = options.scales;
    const scales = me.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];
    if (scaleOpts) {
      items = items.concat(
        Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === 'r';
          const isHorizontal = axis === 'x';
          return {
            options: scaleOptions,
            dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
            dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
          };
        })
      );
    }
    __vite_ssr_import_0__.B(items, (item) => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = __vite_ssr_import_0__.v(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      let scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: me.ctx,
          chart: me
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    __vite_ssr_import_0__.B(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    __vite_ssr_import_0__.B(scales, (scale) => {
      layouts.configure(me, scale, scale.options);
      layouts.addBox(me, scale);
    });
  }
  _updateMetasets() {
    const me = this;
    const metasets = me._metasets;
    const numData = me.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);
    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        me._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    me._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const me = this;
    const {_metasets: metasets, data: {datasets}} = me;
    if (metasets.length > datasets.length) {
      delete me._stacks;
    }
    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        me._destroyDatasetMeta(index);
      }
    });
  }
  buildOrUpdateControllers() {
    const me = this;
    const newControllers = [];
    const datasets = me.data.datasets;
    let i, ilen;
    me._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = me.getDatasetMeta(i);
      const type = dataset.type || me.config.type;
      if (meta.type && meta.type !== type) {
        me._destroyDatasetMeta(i);
        meta = me.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, me.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = me.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {datasetElementType, dataElementType} = __vite_ssr_import_0__.d.datasets[type];
        Object.assign(ControllerClass.prototype, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(me, i);
        newControllers.push(meta.controller);
      }
    }
    me._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    const me = this;
    __vite_ssr_import_0__.B(me.data.datasets, (dataset, datasetIndex) => {
      me.getDatasetMeta(datasetIndex).controller.reset();
    }, me);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  }
  update(mode) {
    const me = this;
    const config = me.config;
    config.update();
    me._options = config.createResolver(config.chartOptionScopes(), me.getContext());
    __vite_ssr_import_0__.B(me.scales, (scale) => {
      layouts.removeBox(me, scale);
    });
    const animsDisabled = me._animationsDisabled = !me.options.animation;
    me.ensureScalesHaveIDs();
    me.buildOrUpdateScales();
    const existingEvents = new Set(Object.keys(me._listeners));
    const newEvents = new Set(me.options.events);
    if (!__vite_ssr_import_0__.ac(existingEvents, newEvents) || !!this._responsiveListeners !== me.options.responsive) {
      me.unbindEvents();
      me.bindEvents();
    }
    me._plugins.invalidate();
    if (me.notifyPlugins('beforeUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    const newControllers = me.buildOrUpdateControllers();
    me.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;
    for (let i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
      const {controller} = me.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    me._minPadding = minPadding;
    me._updateLayout(minPadding);
    if (!animsDisabled) {
      __vite_ssr_import_0__.B(newControllers, (controller) => {
        controller.reset();
      });
    }
    me._updateDatasets(mode);
    me.notifyPlugins('afterUpdate', {mode});
    me._layers.sort(compare2Level('z', '_idx'));
    if (me._lastEvent) {
      me._eventHandler(me._lastEvent, true);
    }
    me.render();
  }
  _updateLayout(minPadding) {
    const me = this;
    if (me.notifyPlugins('beforeLayout', {cancelable: true}) === false) {
      return;
    }
    layouts.update(me, me.width, me.height, minPadding);
    const area = me.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    me._layers = [];
    __vite_ssr_import_0__.B(me.boxes, (box) => {
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      me._layers.push(...box._layers());
    }, me);
    me._layers.forEach((item, index) => {
      item._idx = index;
    });
    me.notifyPlugins('afterLayout');
  }
  _updateDatasets(mode) {
    const me = this;
    const isFunction = typeof mode === 'function';
    if (me.notifyPlugins('beforeDatasetsUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    for (let i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._updateDataset(i, isFunction ? mode({datasetIndex: i}) : mode);
    }
    me.notifyPlugins('afterDatasetsUpdate', {mode});
  }
  _updateDataset(index, mode) {
    const me = this;
    const meta = me.getDatasetMeta(index);
    const args = {meta, index, mode, cancelable: true};
    if (me.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    me.notifyPlugins('afterDatasetUpdate', args);
  }
  render() {
    const me = this;
    if (me.notifyPlugins('beforeRender', {cancelable: true}) === false) {
      return;
    }
    if (animator.has(me)) {
      if (me.attached && !animator.running(me)) {
        animator.start(me);
      }
    } else {
      me.draw();
      onAnimationsComplete({chart: me});
    }
  }
  draw() {
    const me = this;
    let i;
    if (me._resizeBeforeDraw) {
      const {width, height} = me._resizeBeforeDraw;
      me._resize(width, height);
      me._resizeBeforeDraw = null;
    }
    me.clear();
    if (me.width <= 0 || me.height <= 0) {
      return;
    }
    if (me.notifyPlugins('beforeDraw', {cancelable: true}) === false) {
      return;
    }
    const layers = me._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(me.chartArea);
    }
    me._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(me.chartArea);
    }
    me.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    const me = this;
    const metasets = me._sortedMetasets;
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    const me = this;
    if (me.notifyPlugins('beforeDatasetsDraw', {cancelable: true}) === false) {
      return;
    }
    const metasets = me.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      me._drawDataset(metasets[i]);
    }
    me.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(meta) {
    const me = this;
    const ctx = me.ctx;
    const clip = meta._clip;
    const useClip = !clip.disabled;
    const area = me.chartArea;
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };
    if (me.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      __vite_ssr_import_0__.U(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? me.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? me.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      __vite_ssr_import_0__.W(ctx);
    }
    args.cancelable = false;
    me.notifyPlugins('afterDatasetDraw', args);
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetMeta(datasetIndex) {
    const me = this;
    const dataset = me.data.datasets[datasetIndex];
    const metasets = me._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  }
  getContext() {
    return this.$context || (this.$context = {chart: this, type: 'chart'});
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateVisibility(datasetIndex, dataIndex, visible) {
    const me = this;
    const mode = visible ? 'show' : 'hide';
    const meta = me.getDatasetMeta(datasetIndex);
    const anims = meta.controller._resolveAnimations(undefined, mode);
    if (__vite_ssr_import_0__.h(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      me.update();
    } else {
      me.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {visible});
      me.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : undefined);
    }
  }
  hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  }
  show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    const me = this;
    const meta = me._metasets && me._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
      delete me._metasets[datasetIndex];
    }
  }
  destroy() {
    const me = this;
    const {canvas, ctx} = me;
    let i, ilen;
    me.stop();
    animator.remove(me);
    for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._destroyDatasetMeta(i);
    }
    me.config.clearCache();
    if (canvas) {
      me.unbindEvents();
      __vite_ssr_import_0__.ab(canvas, ctx);
      me.platform.releaseContext(ctx);
      me.canvas = null;
      me.ctx = null;
    }
    me.notifyPlugins('destroy');
    delete instances[me.id];
  }
  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const me = this;
    const listeners = me._listeners;
    const platform = me.platform;
    const _add = (type, listener) => {
      platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    };
    const listener = function(e, x, y) {
      e.offsetX = x;
      e.offsetY = y;
      me._eventHandler(e);
    };
    __vite_ssr_import_0__.B(me.options.events, (type) => _add(type, listener));
  }
  bindResponsiveEvents() {
    const me = this;
    if (!me._responsiveListeners) {
      me._responsiveListeners = {};
    }
    const listeners = me._responsiveListeners;
    const platform = me.platform;
    const _add = (type, listener) => {
      platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    };
    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(me, type, listener);
        delete listeners[type];
      }
    };
    const listener = (width, height) => {
      if (me.canvas) {
        me.resize(width, height);
      }
    };
    let detached;
    const attached = () => {
      _remove('attach', attached);
      me.attached = true;
      me.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = () => {
      me.attached = false;
      _remove('resize', listener);
      _add('attach', attached);
    };
    if (platform.isAttached(me.canvas)) {
      attached();
    } else {
      detached();
    }
  }
  unbindEvents() {
    const me = this;
    __vite_ssr_import_0__.B(me._listeners, (listener, type) => {
      me.platform.removeEventListener(me, type, listener);
    });
    me._listeners = {};
    __vite_ssr_import_0__.B(me._responsiveListeners, (listener, type) => {
      me.platform.removeEventListener(me, type, listener);
    });
    me._responsiveListeners = undefined;
  }
  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements) {
    const me = this;
    const lastActive = me._active || [];
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = me.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !__vite_ssr_import_0__.ad(active, lastActive);
    if (changed) {
      me._active = active;
      me._updateHoverStyles(active, lastActive);
    }
  }
  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }
  _updateHoverStyles(active, lastActive, replay) {
    const me = this;
    const hoverOptions = me.options.hover;
    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));
    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      me.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      me.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    const me = this;
    const args = {event: e, replay, cancelable: true};
    const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.type);
    if (me.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    const changed = me._handleEvent(e, replay);
    args.cancelable = false;
    me.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      me.render();
    }
    return me;
  }
  _handleEvent(e, replay) {
    const me = this;
    const {_active: lastActive = [], options} = me;
    const hoverOptions = options.hover;
    const useFinalPosition = replay;
    let active = [];
    let changed = false;
    let lastEvent = null;
    if (e.type !== 'mouseout') {
      active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
      lastEvent = e.type === 'click' ? me._lastEvent : e;
    }
    me._lastEvent = null;
    if (__vite_ssr_import_0__.y(e, me.chartArea, me._minPadding)) {
      __vite_ssr_import_0__.M(options.onHover, [e, active, me], me);
      if (e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu') {
        __vite_ssr_import_0__.M(options.onClick, [e, active, me], me);
      }
    }
    changed = !__vite_ssr_import_0__.ad(active, lastActive);
    if (changed || replay) {
      me._active = active;
      me._updateHoverStyles(active, lastActive, replay);
    }
    me._lastEvent = lastEvent;
    return changed;
  }
}
const invalidatePlugins = () => __vite_ssr_import_0__.B(Chart.instances, (chart) => chart._plugins.invalidate());
const enumerable = true;
Object.defineProperties(Chart, {
  defaults: {
    enumerable,
    value: __vite_ssr_import_0__.d
  },
  instances: {
    enumerable,
    value: instances
  },
  overrides: {
    enumerable,
    value: __vite_ssr_import_0__.$
  },
  registry: {
    enumerable,
    value: registry
  },
  version: {
    enumerable,
    value: version
  },
  getChart: {
    enumerable,
    value: getChart
  },
  register: {
    enumerable,
    value: (...items) => {
      registry.add(...items);
      invalidatePlugins();
    }
  },
  unregister: {
    enumerable,
    value: (...items) => {
      registry.remove(...items);
      invalidatePlugins();
    }
  }
});

function clipArc(ctx, element, endAngle) {
  const {startAngle, pixelMargin, x, y, outerRadius, innerRadius} = element;
  let angleMargin = pixelMargin / outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + __vite_ssr_import_0__.H, startAngle - __vite_ssr_import_0__.H);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return __vite_ssr_import_0__.af(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  const computeOuterLimit = (val) => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return __vite_ssr_import_0__.q(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: __vite_ssr_import_0__.q(o.innerStart, 0, innerLimit),
    innerEnd: __vite_ssr_import_0__.q(o.innerEnd, 0, innerLimit),
  };
}
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta),
  };
}
function pathArc(ctx, element, offset, spacing, end) {
  const {x, y, startAngle: start, pixelMargin, innerRadius: innerR} = element;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? (alpha * avNogSpacingRadius) / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / __vite_ssr_import_0__.P) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const {outerStart, outerEnd, innerStart, innerEnd} = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
  if (outerEnd > 0) {
    const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + __vite_ssr_import_0__.H);
  }
  const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
  ctx.lineTo(p4.x, p4.y);
  if (innerEnd > 0) {
    const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + __vite_ssr_import_0__.H, innerEndAdjustedAngle + Math.PI);
  }
  ctx.arc(x, y, innerRadius, endAngle - (innerEnd / innerRadius), startAngle + (innerStart / innerRadius), true);
  if (innerStart > 0) {
    const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - __vite_ssr_import_0__.H);
  }
  const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
  ctx.lineTo(p8.x, p8.y);
  if (outerStart > 0) {
    const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - __vite_ssr_import_0__.H, outerStartAdjustedAngle);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing) {
  const {fullCircles, startAngle, circumference} = element;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, startAngle + __vite_ssr_import_0__.T);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + circumference % __vite_ssr_import_0__.T;
      if (circumference % __vite_ssr_import_0__.T === 0) {
        endAngle += __vite_ssr_import_0__.T;
      }
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.fill();
  return endAngle;
}
function drawFullCircleBorders(ctx, element, inner) {
  const {x, y, startAngle, pixelMargin, fullCircles} = element;
  const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
  const innerRadius = element.innerRadius + pixelMargin;
  let i;
  if (inner) {
    clipArc(ctx, element, startAngle + __vite_ssr_import_0__.T);
  }
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle + __vite_ssr_import_0__.T, startAngle, true);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle, startAngle + __vite_ssr_import_0__.T);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
}
function drawBorder(ctx, element, offset, spacing, endAngle) {
  const {options} = element;
  const inner = options.borderAlign === 'inner';
  if (!options.borderWidth) {
    return;
  }
  if (inner) {
    ctx.lineWidth = options.borderWidth * 2;
    ctx.lineJoin = 'round';
  } else {
    ctx.lineWidth = options.borderWidth;
    ctx.lineJoin = 'bevel';
  }
  if (element.fullCircles) {
    drawFullCircleBorders(ctx, element, inner);
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.stroke();
}
class ArcElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {angle, distance} = __vite_ssr_import_0__.ae(point, {x: chartX, y: chartY});
    const {startAngle, endAngle, innerRadius, outerRadius, circumference} = this.getProps([
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference'
    ], useFinalPosition);
    const rAdjust = this.options.spacing / 2;
    const betweenAngles = circumference >= __vite_ssr_import_0__.T || __vite_ssr_import_0__.o(angle, startAngle, endAngle);
    const withinRadius = (distance >= innerRadius + rAdjust && distance <= outerRadius + rAdjust);
    return (betweenAngles && withinRadius);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, startAngle, endAngle, innerRadius, outerRadius} = this.getProps([
      'x',
      'y',
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference',
    ], useFinalPosition);
    const {offset, spacing} = this.options;
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    const me = this;
    const {options, circumference} = me;
    const offset = (options.offset || 0) / 2;
    const spacing = (options.spacing || 0) / 2;
    me.pixelMargin = (options.borderAlign === 'inner') ? 0.33 : 0;
    me.fullCircles = circumference > __vite_ssr_import_0__.T ? Math.floor(circumference / __vite_ssr_import_0__.T) : 0;
    if (circumference === 0 || me.innerRadius < 0 || me.outerRadius < 0) {
      return;
    }
    ctx.save();
    let radiusOffset = 0;
    if (offset) {
      radiusOffset = offset / 2;
      const halfAngle = (me.startAngle + me.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
      if (me.circumference >= __vite_ssr_import_0__.P) {
        radiusOffset = offset;
      }
    }
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    const endAngle = drawArc(ctx, me, radiusOffset, spacing);
    drawBorder(ctx, me, radiusOffset, spacing, endAngle);
    ctx.restore();
  }
}
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};

function setStyle(ctx, options, style = options) {
  ctx.lineCap = __vite_ssr_import_0__.v(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash(__vite_ssr_import_0__.v(style.borderDash, options.borderDash));
  ctx.lineDashOffset = __vite_ssr_import_0__.v(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = __vite_ssr_import_0__.v(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = __vite_ssr_import_0__.v(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = __vite_ssr_import_0__.v(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return __vite_ssr_import_0__.am;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return __vite_ssr_import_0__.an;
  }
  return lineTo;
}
function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {start: paramsStart = 0, end: paramsEnd = count - 1} = params;
  const {start: segmentStart, end: segmentEnd} = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const {points, options} = line;
  const {count, start, loop, ilen} = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {move = true, reverse} = params || {};
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {count, start, ilen} = pathVars(points, segment, params);
  const {move = true, reverse} = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return __vite_ssr_import_0__.aj;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return __vite_ssr_import_0__.ak;
  }
  return __vite_ssr_import_0__.al;
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const {segments, options} = line;
  const segmentMethod = _getSegmentMethod(line);
  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {start, end: start + count - 1})) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
  if (usePath2D && line.segments.length === 1) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
class LineElement extends Element {
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  updateControlPoints(chartArea, indexAxis) {
    const me = this;
    const options = me.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !me._pointsUpdated) {
      const loop = options.spanGaps ? me._loop : me._fullLoop;
      __vite_ssr_import_0__.ag(me._points, options, chartArea, loop, indexAxis);
      me._pointsUpdated = true;
    }
  }
  set points(points) {
    const me = this;
    me._points = points;
    delete me._segments;
    delete me._path;
    me._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = __vite_ssr_import_0__.ah(this, this.options.segment));
  }
  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    const me = this;
    const options = me.options;
    const value = point[property];
    const points = me.points;
    const segments = __vite_ssr_import_0__.ai(me, {property, start: value, end: value});
    if (!segments.length) {
      return;
    }
    const result = [];
    const _interpolate = _getInterpolationMethod(options);
    let i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {start, end} = segments[i];
      const p1 = points[start];
      const p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      const interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx, start, count) {
    const me = this;
    const segments = me.segments;
    const segmentMethod = _getSegmentMethod(me);
    let loop = me._loop;
    start = start || 0;
    count = count || (me.points.length - start);
    for (const segment of segments) {
      loop &= segmentMethod(ctx, me, segment, {start, end: start + count - 1});
    }
    return !!loop;
  }
  draw(ctx, chartArea, start, count) {
    const me = this;
    const options = me.options || {};
    const points = me.points || [];
    if (!points.length || !options.borderWidth) {
      return;
    }
    ctx.save();
    draw(ctx, me, start, count);
    ctx.restore();
    if (me.animated) {
      me._pointsUpdated = false;
      me._path = undefined;
    }
  }
}
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0,
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: (name) => name !== 'borderDash' && name !== 'fill',
};

function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {[axis]: value} = el.getProps([axis], useFinalPosition);
  return (Math.abs(pos - value) < options.radius + options.hitRadius);
}
class PointElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return ((Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)) < Math.pow(options.hitRadius + options.radius, 2));
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, area) {
    const me = this;
    const options = me.options;
    if (me.skip || options.radius < 0.1 || !__vite_ssr_import_0__.y(me, area, me.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    __vite_ssr_import_0__.ao(ctx, options, me.x, me.y);
  }
  getRange() {
    const options = this.options || {};
    return options.radius + options.hitRadius;
  }
}
PointElement.id = 'point';
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

function getBarBounds(bar, useFinalPosition) {
  const {x, y, base, width, height} = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {left, top, right, bottom};
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : __vite_ssr_import_0__.q(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = __vite_ssr_import_0__.aq(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const {enableBorderRadius} = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = __vite_ssr_import_0__.ar(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || __vite_ssr_import_0__.i(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r)),
      }
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds
		&& (skipX || x >= bounds.left && x <= bounds.right)
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
class BarElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  draw(ctx) {
    const options = this.options;
    const {inner, outer} = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? __vite_ssr_import_0__.ap : addNormalRectPath;
    const inflateAmount = 0.33;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = options.borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount, outer));
    ctx.fillStyle = options.backgroundColor;
    ctx.fill();
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, base, horizontal} = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  enableBorderRadius: true,
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
LineElement: LineElement,
PointElement: PointElement,
BarElement: BarElement
});

function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const {x: pointAx, y: pointAy} = data[a];
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs(
        (pointAx - avgX) * (data[j].y - pointAy) -
        (pointAx - data[j].x) * (avgY - pointAy)
      );
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!__vite_ssr_import_0__.j(minIndex) && !__vite_ssr_import_0__.j(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex1],
            x: avgX,
          });
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex2],
            x: avgX
          });
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {value: data});
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach((dataset) => {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {iScale} = meta;
  const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
  if (minDefined) {
    start = __vite_ssr_import_0__.q(__vite_ssr_import_0__.w(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = __vite_ssr_import_0__.q(__vite_ssr_import_0__.w(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {start, count};
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false,
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {_data, indexAxis} = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if (__vite_ssr_import_0__.a([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (meta.type !== 'line') {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let {start, count} = getStartAndCountOfVisiblePointsSimplified(meta, data);
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if (__vite_ssr_import_0__.j(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function() {
            return this._decimated;
          },
          set: function(d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
      case 'lttb':
        decimated = lttbDecimation(data, start, count, availableWidth, options);
        break;
      case 'min-max':
        decimated = minMaxDecimation(data, start, count, availableWidth);
        break;
      default:
        throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};

function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = __vite_ssr_import_0__.v(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if (__vite_ssr_import_0__.i(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if (__vite_ssr_import_0__.g(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function computeLinearBoundary(source) {
  const {scale = {}, fill} = source;
  let target = null;
  let horizontal;
  if (fill === 'start') {
    target = scale.bottom;
  } else if (fill === 'end') {
    target = scale.top;
  } else if (__vite_ssr_import_0__.i(fill)) {
    target = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }
  if (__vite_ssr_import_0__.g(target)) {
    horizontal = scale.isHorizontal();
    return {
      x: horizontal ? target : null,
      y: horizontal ? null : target
    };
  }
  return null;
}
class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    const {x, y, radius} = this;
    bounds = bounds || {start: 0, end: __vite_ssr_import_0__.T};
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }
  interpolate(point) {
    const {x, y, radius} = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }
}
function computeCircularBoundary(source) {
  const {scale, fill} = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const target = [];
  const start = options.reverse ? scale.max : scale.min;
  const end = options.reverse ? scale.min : scale.max;
  let i, center, value;
  if (fill === 'start') {
    value = start;
  } else if (fill === 'end') {
    value = end;
  } else if (__vite_ssr_import_0__.i(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  if (options.grid.circular) {
    center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function findSegmentEnd(start, end, points) {
  for (;end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function pointsFromSegments(boundary, line) {
  const {x = null, y = null} = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(({start, end}) => {
    end = findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({x: first.x, y});
      points.push({x: last.x, y});
    } else if (x !== null) {
      points.push({x, y: first.y});
      points.push({x, y: last.y});
    }
  });
  return points;
}
function buildStackLine(source) {
  const {chart, scale, index, line} = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(chart, index);
  linesBelow.push(createBoundaryLine({x: null, y: scale.bottom}, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({points, options: {}});
}
const isLineAndNotInHideAnimation = (meta) => meta.type === 'line' && !meta.hidden;
function getLinesBelow(chart, index) {
  const below = [];
  const metas = chart.getSortedVisibleDatasetMetas();
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (isLineAndNotInHideAnimation(meta)) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {first, last, point} = findPoint(line, sourcePoint, 'x');
    if (!point || (first && last)) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if (pointValue >= firstValue && pointValue <= lastValue) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {first, last, point};
}
function getTarget(source) {
  const {chart, fill, line} = source;
  if (__vite_ssr_import_0__.g(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return createBoundaryLine(boundary, line);
}
function createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if (__vite_ssr_import_0__.b(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {tension: 0},
    _loop,
    _fullLoop: _loop
  }) : null;
}
function resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!__vite_ssr_import_0__.g(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _clip(ctx, target, clipY) {
  ctx.beginPath();
  target.path(ctx);
  ctx.lineTo(target.last().x, clipY);
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = __vite_ssr_import_0__.at(start);
    end = __vite_ssr_import_0__.at(end);
  }
  return {property, start, end};
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  for (const segment of segments) {
    let {start, end} = segment;
    end = findSegmentEnd(start, end, points);
    const bounds = getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    const targetSegments = __vite_ssr_import_0__.ai(target, bounds);
    for (const tgt of targetSegments) {
      const subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = __vite_ssr_import_0__.as(segment, points, subBounds);
      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function clipBounds(ctx, scale, bounds) {
  const {top, bottom} = scale.chart.chartArea;
  const {property, start, end} = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
function _fill(ctx, cfg) {
  const {line, target, property, color, scale} = cfg;
  const segments = _segments(line, target, property);
  for (const {source: src, target: tgt, start, end} of segments) {
    const {style: {backgroundColor = color} = {}} = src;
    const notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);
    let loop;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      const targetLoop = !!target.pathSegment(ctx, tgt, {move: lineLoop, reverse: true});
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function doFill(ctx, cfg) {
  const {line, target, above, below, area, scale} = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    _clip(ctx, target, area.top);
    _fill(ctx, {line, target, color: above, scale, property});
    ctx.restore();
    ctx.save();
    _clip(ctx, target, area.bottom);
  }
  _fill(ctx, {line, target, color: below, scale, property});
  ctx.restore();
}
function drawfill(ctx, source, area) {
  const target = getTarget(source);
  const {line, scale, axis} = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {above = color, below = color} = fillOption || {};
  if (target && line.points.length) {
    __vite_ssr_import_0__.U(ctx, area);
    doFill(ctx, {line, target, above, below, area, scale, axis});
    __vite_ssr_import_0__.W(ctx);
  }
}
var plugin_filler = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line,
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw) {
        drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (source) {
        drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!source || source.fill === false || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};

const getBoxSize = (labelOpts, fontSize) => {
  let {boxHeight = fontSize, boxWidth = fontSize} = labelOpts;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight, margins) {
    const me = this;
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins;
    me.setDimensions();
    me.buildLabels();
    me.fit();
  }
  setDimensions() {
    const me = this;
    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = me._margins.left;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = me._margins.top;
      me.bottom = me.height;
    }
  }
  buildLabels() {
    const me = this;
    const labelOpts = me.options.labels || {};
    let legendItems = __vite_ssr_import_0__.M(labelOpts.generateLabels, [me.chart], me) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter((item) => labelOpts.filter(item, me.chart.data));
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, me.chart.data));
    }
    if (me.options.reverse) {
      legendItems.reverse();
    }
    me.legendItems = legendItems;
  }
  fit() {
    const me = this;
    const {options, ctx} = me;
    if (!options.display) {
      me.width = me.height = 0;
      return;
    }
    const labelOpts = options.labels;
    const labelFont = __vite_ssr_import_0__.X(labelOpts.font);
    const fontSize = labelFont.size;
    const titleHeight = me._computeTitleHeight();
    const {boxWidth, itemHeight} = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;
    if (me.isHorizontal()) {
      width = me.maxWidth;
      height = me._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = me.maxHeight;
      width = me._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    }
    me.width = Math.min(width, options.maxWidth || me.maxWidth);
    me.height = Math.min(height, options.maxHeight || me.maxHeight);
  }
  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const me = this;
    const {ctx, maxWidth, options: {labels: {padding}}} = me;
    const hitboxes = me.legendHitBoxes = [];
    const lineWidths = me.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    me.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {left: 0, top, row, width: itemWidth, height: itemHeight};
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }
  _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
    const me = this;
    const {ctx, maxHeight, options: {labels: {padding}}} = me;
    const hitboxes = me.legendHitBoxes = [];
    const columnSizes = me.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let col = 0;
    me.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({width: currentColWidth, height: currentColHeight});
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {left, top: currentColHeight, col, width: itemWidth, height: itemHeight};
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({width: currentColWidth, height: currentColHeight});
    return totalWidth;
  }
  adjustHitBoxes() {
    const me = this;
    if (!me.options.display) {
      return;
    }
    const titleHeight = me._computeTitleHeight();
    const {legendHitBoxes: hitboxes, options: {align, labels: {padding}, rtl}} = me;
    const rtlHelper = __vite_ssr_import_0__.au(rtl, me.left, me.width);
    if (this.isHorizontal()) {
      let row = 0;
      let left = __vite_ssr_import_0__.Z(align, me.left + padding, me.right - me.lineWidths[row]);
      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = __vite_ssr_import_0__.Z(align, me.left + padding, me.right - me.lineWidths[row]);
        }
        hitbox.top += me.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = __vite_ssr_import_0__.Z(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);
      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = __vite_ssr_import_0__.Z(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);
        }
        hitbox.top = top;
        hitbox.left += me.left + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
        top += hitbox.height + padding;
      }
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    const me = this;
    if (me.options.display) {
      const ctx = me.ctx;
      __vite_ssr_import_0__.U(ctx, me);
      me._draw();
      __vite_ssr_import_0__.W(ctx);
    }
  }
  _draw() {
    const me = this;
    const {options: opts, columnSizes, lineWidths, ctx} = me;
    const {align, labels: labelOpts} = opts;
    const defaultColor = __vite_ssr_import_0__.d.color;
    const rtlHelper = __vite_ssr_import_0__.au(opts.rtl, me.left, me.width);
    const labelFont = __vite_ssr_import_0__.X(labelOpts.font);
    const {color: fontColor, padding} = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    me.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {boxWidth, boxHeight, itemHeight} = getBoxSize(labelOpts, fontSize);
    const drawLegendBox = function(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      const lineWidth = __vite_ssr_import_0__.v(legendItem.lineWidth, 1);
      ctx.fillStyle = __vite_ssr_import_0__.v(legendItem.fillStyle, defaultColor);
      ctx.lineCap = __vite_ssr_import_0__.v(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = __vite_ssr_import_0__.v(legendItem.lineDashOffset, 0);
      ctx.lineJoin = __vite_ssr_import_0__.v(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = __vite_ssr_import_0__.v(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash(__vite_ssr_import_0__.v(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxWidth * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        __vite_ssr_import_0__.ao(ctx, drawOptions, centerX, centerY);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = __vite_ssr_import_0__.ar(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(v => v !== 0)) {
          __vite_ssr_import_0__.ap(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius,
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const fillText = function(x, y, legendItem) {
      __vite_ssr_import_0__.V(ctx, legendItem.text, x, y + (itemHeight / 2), labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    const isHorizontal = me.isHorizontal();
    const titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: __vite_ssr_import_0__.Z(align, me.left + padding, me.right - lineWidths[0]),
        y: me.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: me.left + padding,
        y: __vite_ssr_import_0__.Z(align, me.top + titleHeight + padding, me.bottom - columnSizes[0].height),
        line: 0
      };
    }
    __vite_ssr_import_0__.av(me.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    me.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor || fontColor;
      ctx.fillStyle = legendItem.fontColor || fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + halfFontSize + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(me.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > me.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = __vite_ssr_import_0__.Z(align, me.left + padding, me.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > me.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = __vite_ssr_import_0__.Z(align, me.top + titleHeight + padding, me.bottom - columnSizes[cursor.line].height);
      }
      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = __vite_ssr_import_0__.aw(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : me.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    __vite_ssr_import_0__.ax(me.ctx, opts.textDirection);
  }
  drawTitle() {
    const me = this;
    const opts = me.options;
    const titleOpts = opts.title;
    const titleFont = __vite_ssr_import_0__.X(titleOpts.font);
    const titlePadding = __vite_ssr_import_0__.A(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    const rtlHelper = __vite_ssr_import_0__.au(opts.rtl, me.left, me.width);
    const ctx = me.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = me.left;
    let maxWidth = me.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...me.lineWidths);
      y = me.top + topPaddingPlusHalfFontSize;
      left = __vite_ssr_import_0__.Z(opts.align, left, me.right - maxWidth);
    } else {
      const maxHeight = me.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + __vite_ssr_import_0__.Z(opts.align, me.top, me.bottom - maxHeight - opts.labels.padding - me._computeTitleHeight());
    }
    const x = __vite_ssr_import_0__.Z(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign(__vite_ssr_import_0__.Y(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    __vite_ssr_import_0__.V(ctx, titleOpts.text, x, y, titleFont);
  }
  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = __vite_ssr_import_0__.X(titleOpts.font);
    const titlePadding = __vite_ssr_import_0__.A(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    const me = this;
    let i, hitBox, lh;
    if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
      lh = me.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
          return me.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const me = this;
    const opts = me.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    const hoveredItem = me._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove') {
      const previous = me._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        __vite_ssr_import_0__.M(opts.onLeave, [e, previous, me], me);
      }
      me._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        __vite_ssr_import_0__.M(opts.onHover, [e, hoveredItem, me], me);
      }
    } else if (hoveredItem) {
      __vite_ssr_import_0__.M(opts.onClick, [e, hoveredItem, me], me);
    }
  }
}
function isListened(type, opts) {
  if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({ctx: chart.ctx, options, chart});
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (ctx) => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {labels: {usePointStyle, pointStyle, textAlign, color}} = chart.legend.options;
        return chart._getSortedDatasetMetas().map((meta) => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = __vite_ssr_import_0__.A(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: __vite_ssr_import_0__.c,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: 0,
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: (ctx) => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: '',
    }
  },
  descriptors: {
    _scriptable: (name) => !name.startsWith('on'),
    labels: {
      _scriptable: (name) => !['generateLabels', 'filter', 'sort'].includes(name),
    }
  },
};

class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight) {
    const me = this;
    const opts = me.options;
    me.left = 0;
    me.top = 0;
    if (!opts.display) {
      me.width = me.height = me.right = me.bottom = 0;
      return;
    }
    me.width = me.right = maxWidth;
    me.height = me.bottom = maxHeight;
    const lineCount = __vite_ssr_import_0__.b(opts.text) ? opts.text.length : 1;
    me._padding = __vite_ssr_import_0__.A(opts.padding);
    const textSize = lineCount * __vite_ssr_import_0__.X(opts.font).lineHeight + me._padding.height;
    if (me.isHorizontal()) {
      me.height = textSize;
    } else {
      me.width = textSize;
    }
  }
  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  _drawArgs(offset) {
    const {top, left, bottom, right, options} = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = __vite_ssr_import_0__.Z(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = __vite_ssr_import_0__.Z(align, bottom, top);
        rotation = __vite_ssr_import_0__.P * -0.5;
      } else {
        titleX = right - offset;
        titleY = __vite_ssr_import_0__.Z(align, top, bottom);
        rotation = __vite_ssr_import_0__.P * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {titleX, titleY, maxWidth, rotation};
  }
  draw() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;
    if (!opts.display) {
      return;
    }
    const fontOpts = __vite_ssr_import_0__.X(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + me._padding.top;
    const {titleX, titleY, maxWidth, rotation} = me._drawArgs(offset);
    __vite_ssr_import_0__.V(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: __vite_ssr_import_0__.Y(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
}
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold',
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal',
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = __vite_ssr_import_0__.az(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if (__vite_ssr_import_0__.b(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const {element, datasetIndex, index} = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {label, value} = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip._chart.ctx;
  const {body, footer, title} = tooltip;
  const {boxWidth, boxHeight} = options;
  const bodyFont = __vite_ssr_import_0__.X(options.bodyFont);
  const titleFont = __vite_ssr_import_0__.X(options.titleFont);
  const footerFont = __vite_ssr_import_0__.X(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = __vite_ssr_import_0__.A(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight
			+ (titleLineCount - 1) * options.titleSpacing
			+ options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight
			+ (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight
			+ (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop
			+ footerLineCount * footerFont.lineHeight
			+ (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  __vite_ssr_import_0__.B(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  __vite_ssr_import_0__.B(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? (boxWidth + 2) : 0;
  __vite_ssr_import_0__.B(body, (bodyItem) => {
    __vite_ssr_import_0__.B(bodyItem.before, maxLineWidth);
    __vite_ssr_import_0__.B(bodyItem.lines, maxLineWidth);
    __vite_ssr_import_0__.B(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  __vite_ssr_import_0__.B(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {width, height};
}
function determineYAlign(chart, size) {
  const {y, height} = size;
  if (y < height / 2) {
    return 'top';
  } else if (y > (chart.height - height / 2)) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {x, width} = size;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const {x, width} = size;
  const {width: chartWidth, chartArea: {left, right}} = chart;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let {x, width} = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= (width / 2);
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let {y, height} = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= (height / 2);
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const {caretSize, caretPadding, cornerRadius} = options;
  const {xAlign, yAlign} = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const radiusAndPadding = cornerRadius + caretPadding;
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= radiusAndPadding;
  } else if (xAlign === 'right') {
    x += radiusAndPadding;
  }
  return {
    x: __vite_ssr_import_0__.q(x, 0, chart.width - size.width),
    y: __vite_ssr_import_0__.q(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = __vite_ssr_import_0__.A(options.padding);
  return align === 'center'
    ? tooltip.x + tooltip.width / 2
    : align === 'right'
      ? tooltip.x + tooltip.width - padding.right
      : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return Object.assign(Object.create(parent), {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
class Tooltip extends Element {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._chart = config._chart;
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }
  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }
  _resolveAnimations() {
    const me = this;
    const cached = me._cachedAnimations;
    if (cached) {
      return cached;
    }
    const chart = me._chart;
    const options = me.options.setContext(me.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(me._chart, opts);
    if (opts._cacheable) {
      me._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  }
  getContext() {
    const me = this;
    return me.$context ||
			(me.$context = createTooltipContext(me._chart.getContext(), me, me._tooltipItems));
  }
  getTitle(context, options) {
    const me = this;
    const {callbacks} = options;
    const beforeTitle = callbacks.beforeTitle.apply(me, [context]);
    const title = callbacks.title.apply(me, [context]);
    const afterTitle = callbacks.afterTitle.apply(me, [context]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
  }
  getBody(tooltipItems, options) {
    const me = this;
    const {callbacks} = options;
    const bodyItems = [];
    __vite_ssr_import_0__.B(tooltipItems, (context) => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(me, context)));
      pushOrConcat(bodyItem.lines, scoped.label.call(me, context));
      pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(me, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
  }
  getFooter(tooltipItems, options) {
    const me = this;
    const {callbacks} = options;
    const beforeFooter = callbacks.beforeFooter.apply(me, [tooltipItems]);
    const footer = callbacks.footer.apply(me, [tooltipItems]);
    const afterFooter = callbacks.afterFooter.apply(me, [tooltipItems]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems(options) {
    const me = this;
    const active = me._active;
    const data = me._chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(me._chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    __vite_ssr_import_0__.B(tooltipItems, (context) => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(scoped.labelColor.call(me, context));
      labelPointStyles.push(scoped.labelPointStyle.call(me, context));
      labelTextColors.push(scoped.labelTextColor.call(me, context));
    });
    me.labelColors = labelColors;
    me.labelPointStyles = labelPointStyles;
    me.labelTextColors = labelTextColors;
    me.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed, replay) {
    const me = this;
    const options = me.options.setContext(me.getContext());
    const active = me._active;
    let properties;
    let tooltipItems = [];
    if (!active.length) {
      if (me.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(me, active, me._eventPosition);
      tooltipItems = me._createItems(options);
      me.title = me.getTitle(tooltipItems, options);
      me.beforeBody = me.getBeforeBody(tooltipItems, options);
      me.body = me.getBody(tooltipItems, options);
      me.afterBody = me.getAfterBody(tooltipItems, options);
      me.footer = me.getFooter(tooltipItems, options);
      const size = me._size = getTooltipSize(me, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(me._chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, me._chart);
      me.xAlign = alignment.xAlign;
      me.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    me._tooltipItems = tooltipItems;
    me.$context = undefined;
    if (properties) {
      me._resolveAnimations().update(me, properties);
    }
    if (changed && options.external) {
      options.external.call(me, {chart: me._chart, tooltip: me, replay});
    }
  }
  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size, options) {
    const {xAlign, yAlign} = this;
    const {cornerRadius, caretSize} = options;
    const {x: ptX, y: ptY} = tooltipPoint;
    const {width, height} = size;
    let x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + (height / 2);
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + cornerRadius + (caretSize);
      } else if (xAlign === 'right') {
        x2 = ptX + width - cornerRadius - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {x1, x2, x3, y1, y2, y3};
  }
  drawTitle(pt, ctx, options) {
    const me = this;
    const title = me.title;
    const length = title.length;
    let titleFont, titleSpacing, i;
    if (length) {
      const rtlHelper = __vite_ssr_import_0__.au(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = __vite_ssr_import_0__.X(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const me = this;
    const labelColors = me.labelColors[i];
    const labelPointStyle = me.labelPointStyles[i];
    const {boxHeight, boxWidth} = options;
    const bodyFont = __vite_ssr_import_0__.X(options.bodyFont);
    const colorX = getAlignedX(me, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      __vite_ssr_import_0__.ao(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.fillStyle = labelColors.backgroundColor;
      __vite_ssr_import_0__.ao(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = labelColors.borderWidth || 1;
      ctx.strokeStyle = labelColors.borderColor;
      ctx.setLineDash(labelColors.borderDash || []);
      ctx.lineDashOffset = labelColors.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
      const borderRadius = __vite_ssr_import_0__.ar(labelColors.borderRadius);
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        __vite_ssr_import_0__.ap(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius,
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.beginPath();
        __vite_ssr_import_0__.ap(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius,
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = me.labelTextColors[i];
  }
  drawBody(pt, ctx, options) {
    const me = this;
    const {body} = me;
    const {bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth} = options;
    const bodyFont = __vite_ssr_import_0__.X(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = __vite_ssr_import_0__.au(options.rtl, me.x, me.width);
    const fillLineOfText = function(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(me, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    __vite_ssr_import_0__.B(me.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right'
      ? bodyAlign === 'center' ? (boxWidth / 2 + 1) : (boxWidth + 2)
      : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = me.labelTextColors[i];
      ctx.fillStyle = textColor;
      __vite_ssr_import_0__.B(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        me._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      __vite_ssr_import_0__.B(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    __vite_ssr_import_0__.B(me.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx, options) {
    const me = this;
    const footer = me.footer;
    const length = footer.length;
    let footerFont, i;
    if (length) {
      const rtlHelper = __vite_ssr_import_0__.au(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = __vite_ssr_import_0__.X(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize, options) {
    const {xAlign, yAlign} = this;
    const {x, y} = pt;
    const {width, height} = tooltipSize;
    const radius = options.cornerRadius;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget(options) {
    const me = this;
    const chart = me._chart;
    const anims = me.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;
    if (animX || animY) {
      const position = positioners[options.position].call(me, me._active, me._eventPosition);
      if (!position) {
        return;
      }
      const size = me._size = getTooltipSize(me, options);
      const positionAndSize = Object.assign({}, position, me._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        me.xAlign = alignment.xAlign;
        me.yAlign = alignment.yAlign;
        me.width = size.width;
        me.height = size.height;
        me.caretX = position.x;
        me.caretY = position.y;
        me._resolveAnimations().update(me, point);
      }
    }
  }
  draw(ctx) {
    const me = this;
    const options = me.options.setContext(me.getContext());
    let opacity = me.opacity;
    if (!opacity) {
      return;
    }
    me._updateAnimationTarget(options);
    const tooltipSize = {
      width: me.width,
      height: me.height
    };
    const pt = {
      x: me.x,
      y: me.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = __vite_ssr_import_0__.A(options.padding);
    const hasTooltipContent = me.title.length || me.beforeBody.length || me.body.length || me.afterBody.length || me.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      me.drawBackground(pt, ctx, tooltipSize, options);
      __vite_ssr_import_0__.av(ctx, options.textDirection);
      pt.y += padding.top;
      me.drawTitle(pt, ctx, options);
      me.drawBody(pt, ctx, options);
      me.drawFooter(pt, ctx, options);
      __vite_ssr_import_0__.ax(ctx, options.textDirection);
      ctx.restore();
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements, eventPosition) {
    const me = this;
    const lastActive = me._active;
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = me._chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !__vite_ssr_import_0__.ad(lastActive, active);
    const positionChanged = me._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      me._active = active;
      me._eventPosition = eventPosition;
      me.update(true);
    }
  }
  handleEvent(e, replay) {
    const me = this;
    const options = me.options;
    const lastActive = me._active || [];
    let changed = false;
    let active = [];
    if (e.type !== 'mouseout') {
      active = me._chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
    }
    const positionChanged = me._positionChanged(active, e);
    changed = replay || !__vite_ssr_import_0__.ad(active, lastActive) || positionChanged;
    if (changed) {
      me._active = active;
      if (options.enabled || options.external) {
        me._eventPosition = {
          x: e.x,
          y: e.y
        };
        me.update(true, replay);
      }
    }
    return changed;
  }
  _positionChanged(active, e) {
    const {caretX, caretY, options} = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }
}
Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({_chart: chart, options});
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    const args = {
      tooltip
    };
    if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
      return;
    }
    if (tooltip) {
      tooltip.draw(chart.ctx);
    }
    chart.notifyPlugins('afterTooltipDraw', args);
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold',
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {
    },
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold',
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart',
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: __vite_ssr_import_0__.ay,
      title(tooltipItems) {
        if (tooltipItems.length > 0) {
          const item = tooltipItems[0];
          const labels = item.chart.data.labels;
          const labelCount = labels ? labels.length : 0;
          if (this && this.options && this.options.mode === 'dataset') {
            return item.dataset.label || '';
          } else if (item.label) {
            return item.label;
          } else if (labelCount > 0 && item.dataIndex < labelCount) {
            return labels[item.dataIndex];
          }
        }
        return '';
      },
      afterTitle: __vite_ssr_import_0__.ay,
      beforeBody: __vite_ssr_import_0__.ay,
      beforeLabel: __vite_ssr_import_0__.ay,
      label(tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
          return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
          label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!__vite_ssr_import_0__.j(value)) {
          label += value;
        }
        return label;
      },
      labelColor(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          borderColor: options.borderColor,
          backgroundColor: options.backgroundColor,
          borderWidth: options.borderWidth,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          pointStyle: options.pointStyle,
          rotation: options.rotation,
        };
      },
      afterLabel: __vite_ssr_import_0__.ay,
      afterBody: __vite_ssr_import_0__.ay,
      beforeFooter: __vite_ssr_import_0__.ay,
      footer: __vite_ssr_import_0__.ay,
      afterFooter: __vite_ssr_import_0__.ay
    }
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: (name) => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false,
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Decimation: plugin_decimation,
Filler: plugin_filler,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index) => typeof raw === 'string'
  ? labels.push(raw) - 1
  : isNaN(raw) ? null : index;
function findOrAddLabel(labels, raw, index) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = (index, max) => index === null ? null : __vite_ssr_import_0__.q(Math.round(index), 0, max);
class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if (__vite_ssr_import_0__.j(raw)) {
      return null;
    }
    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index
      : findOrAddLabel(labels, raw, __vite_ssr_import_0__.v(index, raw));
    return validIndex(index, labels.length - 1);
  }
  determineDataLimits() {
    const me = this;
    const {minDefined, maxDefined} = me.getUserBounds();
    let {min, max} = me.getMinMax(true);
    if (me.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = me.getLabels().length - 1;
      }
    }
    me.min = min;
    me.max = max;
  }
  buildTicks() {
    const me = this;
    const min = me.min;
    const max = me.max;
    const offset = me.options.offset;
    const ticks = [];
    let labels = me.getLabels();
    labels = (min === 0 && max === labels.length - 1) ? labels : labels.slice(min, max + 1);
    me._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    me._startValue = me.min - (offset ? 0.5 : 0);
    for (let value = min; value <= max; value++) {
      ticks.push({value});
    }
    return ticks;
  }
  getLabelForValue(value) {
    const me = this;
    const labels = me.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  configure() {
    const me = this;
    super.configure();
    if (!me.isHorizontal()) {
      me._reversePixels = !me._reversePixels;
    }
  }
  getPixelForValue(value) {
    const me = this;
    if (typeof value !== 'number') {
      value = me.parse(value);
    }
    return value === null ? NaN : me.getPixelForDecimal((value - me._startValue) / me._valueRange);
  }
  getPixelForTick(index) {
    const me = this;
    const ticks = me.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return me.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    const me = this;
    return Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: CategoryScale.prototype.getLabelForValue
  }
};

function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds} = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {min: rmin, max: rmax} = dataRange;
  const minDefined = !__vite_ssr_import_0__.j(min);
  const maxDefined = !__vite_ssr_import_0__.j(max);
  const countDefined = !__vite_ssr_import_0__.j(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = __vite_ssr_import_0__.aB((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{value: rmin}, {value: rmax}];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = __vite_ssr_import_0__.aB(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!__vite_ssr_import_0__.j(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && __vite_ssr_import_0__.aC((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if (__vite_ssr_import_0__.aD(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max(
    __vite_ssr_import_0__.aE(spacing),
    __vite_ssr_import_0__.aE(niceMin)
  );
  factor = Math.pow(10, __vite_ssr_import_0__.j(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({value: min});
      if (niceMin < min) {
        j++;
      }
      if (__vite_ssr_import_0__.aD(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    ticks.push({value: Math.round((niceMin + j * spacing) * factor) / factor});
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (__vite_ssr_import_0__.aD(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({value: max});
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({value: niceMax});
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, {horizontal, minRotation}) {
  const rad = __vite_ssr_import_0__.t(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if (__vite_ssr_import_0__.j(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    const me = this;
    const {beginAtZero} = me.options;
    const {minDefined, maxDefined} = me.getUserBounds();
    let {min, max} = me;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    if (beginAtZero) {
      const minSign = __vite_ssr_import_0__.s(min);
      const maxSign = __vite_ssr_import_0__.s(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      let offset = 1;
      if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
        offset = Math.abs(max * 0.05);
      }
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    me.min = min;
    me.max = max;
  }
  getTickLimit() {
    const me = this;
    const tickOpts = me.options.ticks;
    let {maxTicksLimit, stepSize} = tickOpts;
    let maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
    } else {
      maxTicks = me.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const me = this;
    const opts = me.options;
    const tickOpts = opts.ticks;
    let maxTicks = me.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: me._maxDigits(),
      horizontal: me.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = me._range || me;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      __vite_ssr_import_0__.aA(ticks, me, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }
    return ticks;
  }
  configure() {
    const me = this;
    const ticks = me.ticks;
    let start = me.min;
    let end = me.max;
    super.configure();
    if (me.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    me._startValue = start;
    me._endValue = end;
    me._valueRange = end - start;
  }
  getLabelForValue(value) {
    return __vite_ssr_import_0__.n(value, this.chart.options.locale);
  }
}

class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    const me = this;
    const {min, max} = me.getMinMax(true);
    me.min = __vite_ssr_import_0__.g(min) ? min : 0;
    me.max = __vite_ssr_import_0__.g(max) ? max : 1;
    me.handleTickRangeOptions();
  }
  computeTickLimit() {
    const me = this;
    const horizontal = me.isHorizontal();
    const length = horizontal ? me.width : me.height;
    const minRotation = __vite_ssr_import_0__.t(me.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    const tickFont = me._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }
  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
}
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};

function isMajor(tickVal) {
  const remain = tickVal / (Math.pow(10, Math.floor(__vite_ssr_import_0__.J(tickVal))));
  return remain === 1;
}
function generateTicks(generationOptions, dataRange) {
  const endExp = Math.floor(__vite_ssr_import_0__.J(dataRange.max));
  const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  const ticks = [];
  let tickVal = __vite_ssr_import_0__.L(generationOptions.min, Math.pow(10, Math.floor(__vite_ssr_import_0__.J(dataRange.min))));
  let exp = Math.floor(__vite_ssr_import_0__.J(tickVal));
  let significand = Math.floor(tickVal / Math.pow(10, exp));
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  do {
    ticks.push({value: tickVal, major: isMajor(tickVal)});
    ++significand;
    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }
    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || (exp === endExp && significand < endSignificand));
  const lastTick = __vite_ssr_import_0__.L(generationOptions.max, tickVal);
  ticks.push({value: lastTick, major: isMajor(tickVal)});
  return ticks;
}
class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return __vite_ssr_import_0__.g(value) && value > 0 ? value : null;
  }
  determineDataLimits() {
    const me = this;
    const {min, max} = me.getMinMax(true);
    me.min = __vite_ssr_import_0__.g(min) ? Math.max(0, min) : null;
    me.max = __vite_ssr_import_0__.g(max) ? Math.max(0, max) : null;
    if (me.options.beginAtZero) {
      me._zero = true;
    }
    me.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const me = this;
    const {minDefined, maxDefined} = me.getUserBounds();
    let min = me.min;
    let max = me.max;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    const exp = (v, m) => Math.pow(10, Math.floor(__vite_ssr_import_0__.J(v)) + m);
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(exp(min, -1));
        setMax(exp(max, +1));
      }
    }
    if (min <= 0) {
      setMin(exp(max, -1));
    }
    if (max <= 0) {
      setMax(exp(min, +1));
    }
    if (me._zero && me.min !== me._suggestedMin && min === exp(me.min, 0)) {
      setMin(exp(min, -1));
    }
    me.min = min;
    me.max = max;
  }
  buildTicks() {
    const me = this;
    const opts = me.options;
    const generationOptions = {
      min: me._userMin,
      max: me._userMax
    };
    const ticks = generateTicks(generationOptions, me);
    if (opts.bounds === 'ticks') {
      __vite_ssr_import_0__.aA(ticks, me, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined ? '0' : __vite_ssr_import_0__.n(value, this.chart.options.locale);
  }
  configure() {
    const me = this;
    const start = me.min;
    super.configure();
    me._startValue = __vite_ssr_import_0__.J(start);
    me._valueRange = __vite_ssr_import_0__.J(me.max) - __vite_ssr_import_0__.J(start);
  }
  getPixelForValue(value) {
    const me = this;
    if (value === undefined || value === 0) {
      value = me.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return me.getPixelForDecimal(value === me.min
      ? 0
      : (__vite_ssr_import_0__.J(value) - me._startValue) / me._valueRange);
  }
  getValueForPixel(pixel) {
    const me = this;
    const decimal = me.getDecimalForPixel(pixel);
    return Math.pow(10, me._startValue + decimal * me._valueRange);
  }
}
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: Ticks.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};

function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = __vite_ssr_import_0__.A(tickOpts.backdropPadding);
    return __vite_ssr_import_0__.v(tickOpts.font && tickOpts.font.size, __vite_ssr_import_0__.d.font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = __vite_ssr_import_0__.b(label) ? label : [label];
  return {
    w: __vite_ssr_import_0__.aF(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - (size / 2),
      end: pos + (size / 2)
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const furthestLimits = {
    l: 0,
    r: scale.width,
    t: 0,
    b: scale.height - scale.paddingTop
  };
  const furthestAngles = {};
  const labelSizes = [];
  const padding = [];
  const valueCount = scale.getLabels().length;
  for (let i = 0; i < valueCount; i++) {
    const opts = scale.options.pointLabels.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i]);
    const plFont = __vite_ssr_import_0__.X(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = scale.getIndexAngle(i);
    const angle = __vite_ssr_import_0__.O(angleRadians);
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    if (hLimits.start < furthestLimits.l) {
      furthestLimits.l = hLimits.start;
      furthestAngles.l = angleRadians;
    }
    if (hLimits.end > furthestLimits.r) {
      furthestLimits.r = hLimits.end;
      furthestAngles.r = angleRadians;
    }
    if (vLimits.start < furthestLimits.t) {
      furthestLimits.t = vLimits.start;
      furthestAngles.t = angleRadians;
    }
    if (vLimits.end > furthestLimits.b) {
      furthestLimits.b = vLimits.end;
      furthestAngles.b = angleRadians;
    }
  }
  scale._setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale.getLabels().length;
  const opts = scale.options;
  const tickBackdropHeight = getTickBackdropHeight(opts);
  const outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
  for (let i = 0; i < valueCount; i++) {
    const extra = (i === 0 ? tickBackdropHeight / 2 : 0);
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i]);
    const angle = __vite_ssr_import_0__.O(scale.getIndexAngle(i));
    const size = labelSizes[i];
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    items.push({
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    });
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= (w / 2);
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= (h / 2);
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabels(scale, labelCount) {
  const {ctx, options: {pointLabels}} = scale;
  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    const plFont = __vite_ssr_import_0__.X(optsAtIndex.font);
    const {x, y, textAlign, left, top, right, bottom} = scale._pointLabelItems[i];
    const {backdropColor} = optsAtIndex;
    if (!__vite_ssr_import_0__.j(backdropColor)) {
      const padding = __vite_ssr_import_0__.A(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
    }
    __vite_ssr_import_0__.V(
      ctx,
      scale._pointLabels[i],
      x,
      y + (plFont.lineHeight / 2),
      plFont,
      {
        color: optsAtIndex.color,
        textAlign: textAlign,
        textBaseline: 'middle'
      }
    );
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const {ctx} = scale;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, __vite_ssr_import_0__.T);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {color, lineWidth} = gridLineOpts;
  if ((!circular && !labelCount) || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(gridLineOpts.borderDash);
  ctx.lineDashOffset = gridLineOpts.borderDashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function numberOrZero(param) {
  return __vite_ssr_import_0__.p(param) ? param : 0;
}
function createPointLabelContext(parent, index, label) {
  return Object.assign(Object.create(parent), {
    label,
    index,
    type: 'pointLabel'
  });
}
class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const me = this;
    me.width = me.maxWidth;
    me.height = me.maxHeight;
    me.paddingTop = getTickBackdropHeight(me.options) / 2;
    me.xCenter = Math.floor(me.width / 2);
    me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
    me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
  }
  determineDataLimits() {
    const me = this;
    const {min, max} = me.getMinMax(false);
    me.min = __vite_ssr_import_0__.g(min) && !isNaN(min) ? min : 0;
    me.max = __vite_ssr_import_0__.g(max) && !isNaN(max) ? max : 0;
    me.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    const me = this;
    LinearScaleBase.prototype.generateTickLabels.call(me, ticks);
    me._pointLabels = me.getLabels().map((value, index) => {
      const label = __vite_ssr_import_0__.M(me.options.pointLabels.callback, [value, index], me);
      return label || label === 0 ? label : '';
    });
  }
  fit() {
    const me = this;
    const opts = me.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(me);
    } else {
      me.setCenterPoint(0, 0, 0, 0);
    }
  }
  _setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
    const me = this;
    let radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
    let radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
    let radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
    let radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
    radiusReductionLeft = numberOrZero(radiusReductionLeft);
    radiusReductionRight = numberOrZero(radiusReductionRight);
    radiusReductionTop = numberOrZero(radiusReductionTop);
    radiusReductionBottom = numberOrZero(radiusReductionBottom);
    me.drawingArea = Math.max(largestPossibleRadius / 2, Math.min(
      Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
      Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2)));
    me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    const me = this;
    const maxRight = me.width - rightMovement - me.drawingArea;
    const maxLeft = leftMovement + me.drawingArea;
    const maxTop = topMovement + me.drawingArea;
    const maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;
    me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
    me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
  }
  getIndexAngle(index) {
    const angleMultiplier = __vite_ssr_import_0__.T / this.getLabels().length;
    const startAngle = this.options.startAngle || 0;
    return __vite_ssr_import_0__.at(index * angleMultiplier + __vite_ssr_import_0__.t(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    const me = this;
    if (__vite_ssr_import_0__.j(value)) {
      return NaN;
    }
    const scalingFactor = me.drawingArea / (me.max - me.min);
    if (me.options.reverse) {
      return (me.max - value) * scalingFactor;
    }
    return (value - me.min) * scalingFactor;
  }
  getValueForDistanceFromCenter(distance) {
    if (__vite_ssr_import_0__.j(distance)) {
      return NaN;
    }
    const me = this;
    const scaledDistance = distance / (me.drawingArea / (me.max - me.min));
    return me.options.reverse ? me.max - scaledDistance : me.min + scaledDistance;
  }
  getPointLabelContext(index) {
    const me = this;
    const pointLabels = me._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      const pointLabel = pointLabels[index];
      return createPointLabelContext(me.getContext(), index, pointLabel);
    }
  }
  getPointPosition(index, distanceFromCenter) {
    const me = this;
    const angle = me.getIndexAngle(index) - __vite_ssr_import_0__.H;
    return {
      x: Math.cos(angle) * distanceFromCenter + me.xCenter,
      y: Math.sin(angle) * distanceFromCenter + me.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  getPointLabelPosition(index) {
    const {left, top, right, bottom} = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom,
    };
  }
  drawBackground() {
    const me = this;
    const {backgroundColor, grid: {circular}} = me.options;
    if (backgroundColor) {
      const ctx = me.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(me, me.getDistanceFromCenterForValue(me._endValue), circular, me.getLabels().length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }
  drawGrid() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;
    const {angleLines, grid} = opts;
    const labelCount = me.getLabels().length;
    let i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(me, labelCount);
    }
    if (grid.display) {
      me.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = me.getDistanceFromCenterForValue(tick.value);
          const optsAtIndex = grid.setContext(me.getContext(index - 1));
          drawRadiusLine(me, optsAtIndex, offset, labelCount);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = me.getLabels().length - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(me.getPointLabelContext(i));
        const {color, lineWidth} = optsAtIndex;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
        position = me.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(me.xCenter, me.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;
    const tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    const startAngle = me.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(me.xCenter, me.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    me.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      const optsAtIndex = tickOpts.setContext(me.getContext(index));
      const tickFont = __vite_ssr_import_0__.X(optsAtIndex.font);
      offset = me.getDistanceFromCenterForValue(me.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = __vite_ssr_import_0__.A(optsAtIndex.backdropPadding);
        ctx.fillRect(
          -width / 2 - padding.left,
          -offset - tickFont.size / 2 - padding.top,
          width + padding.width,
          tickFont.size + padding.height
        );
      }
      __vite_ssr_import_0__.V(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
      });
    });
    ctx.restore();
  }
  drawTitle() {}
}
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(label) {
      return label;
    },
    padding: 5
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};

const INTERVALS = {
  millisecond: {common: true, size: 1, steps: 1000},
  second: {common: true, size: 1000, steps: 60},
  minute: {common: true, size: 60000, steps: 60},
  hour: {common: true, size: 3600000, steps: 24},
  day: {common: true, size: 86400000, steps: 30},
  week: {common: false, size: 604800000, steps: 4},
  month: {common: true, size: 2.628e9, steps: 12},
  quarter: {common: false, size: 7.884e9, steps: 4},
  year: {common: true, size: 3.154e10}
};
const UNITS = (Object.keys(INTERVALS));
function sorter(a, b) {
  return a - b;
}
function parse(scale, input) {
  if (__vite_ssr_import_0__.j(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const {parser, round, isoWeekday} = scale._parseOpts;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!__vite_ssr_import_0__.g(value)) {
    value = typeof parser === 'string'
      ? adapter.parse(value, parser)
      : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && (__vite_ssr_import_0__.p(isoWeekday) || isoWeekday === true)
      ? adapter.startOf(value, 'isoWeek', isoWeekday)
      : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {lo, hi} = __vite_ssr_import_0__.aH(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(scaleOpts, opts) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    __vite_ssr_import_0__.a7(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }
  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return parse(this, raw);
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const me = this;
    const options = me.options;
    const adapter = me._adapter;
    const unit = options.time.unit || 'day';
    let {min, max, minDefined, maxDefined} = me.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(me._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(me.getMinMax(false));
      }
    }
    min = __vite_ssr_import_0__.g(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = __vite_ssr_import_0__.g(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    me.min = Math.min(min, max - 1);
    me.max = Math.max(min + 1, max);
  }
  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {min, max};
  }
  buildTicks() {
    const me = this;
    const options = me.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? me.getLabelTimestamps() : me._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      me.min = me._userMin || timestamps[0];
      me.max = me._userMax || timestamps[timestamps.length - 1];
    }
    const min = me.min;
    const max = me.max;
    const ticks = __vite_ssr_import_0__.aG(timestamps, min, max);
    me._unit = timeOpts.unit || (tickOpts.autoSkip
      ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, me._getLabelCapacity(min))
      : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
    me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined
      : determineMajorUnit(me._unit);
    me.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(me, ticks, me._majorUnit);
  }
  initOffsets(timestamps) {
    const me = this;
    let start = 0;
    let end = 0;
    let first, last;
    if (me.options.offset && timestamps.length) {
      first = me.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (me.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = me.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - me.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = __vite_ssr_import_0__.q(start, 0, limit);
    end = __vite_ssr_import_0__.q(end, 0, limit);
    me._offsets = {start, end, factor: 1 / (start + 1 + end)};
  }
  _generate() {
    const me = this;
    const adapter = me._adapter;
    const min = me.min;
    const max = me.max;
    const options = me.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, me._getLabelCapacity(min));
    const stepSize = __vite_ssr_import_0__.v(timeOpts.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = __vite_ssr_import_0__.p(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    const timestamps = options.ticks.source === 'data' && me.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort((a, b) => a - b).map(x => +x);
  }
  getLabelForValue(value) {
    const me = this;
    const adapter = me._adapter;
    const timeOpts = me.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  _tickFormatFunction(time, index, ticks, format) {
    const me = this;
    const options = me.options;
    const formats = options.time.displayFormats;
    const unit = me._unit;
    const majorUnit = me._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;
    const label = me._adapter.format(time, format || (major ? majorFormat : minorFormat));
    const formatter = options.ticks.callback;
    return formatter ? __vite_ssr_import_0__.M(formatter, [label, index, ticks], me) : label;
  }
  generateTickLabels(ticks) {
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getDecimalForValue(value) {
    const me = this;
    return value === null ? NaN : (value - me.min) / (me.max - me.min);
  }
  getPixelForValue(value) {
    const me = this;
    const offsets = me._offsets;
    const pos = me.getDecimalForValue(value);
    return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getValueForPixel(pixel) {
    const me = this;
    const offsets = me._offsets;
    const pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return me.min + pos * (me.max - me.min);
  }
  _getLabelSize(label) {
    const me = this;
    const ticksOpts = me.options.ticks;
    const tickLabelWidth = me.ctx.measureText(label).width;
    const angle = __vite_ssr_import_0__.t(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);
    const tickFontSize = me._resolveTickFontOptions(0).size;
    return {
      w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
      h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
    };
  }
  _getLabelCapacity(exampleTime) {
    const me = this;
    const timeOpts = me.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    const exampleLabel = me._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
    const size = me._getLabelSize(exampleLabel);
    const capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
  getDataTimestamps() {
    const me = this;
    let timestamps = me._cache.data || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const metas = me.getMatchingVisibleMetas();
    if (me._normalized && metas.length) {
      return (me._cache.data = metas[0].controller.getAllParsedValues(me));
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(me));
    }
    return (me._cache.data = me.normalize(timestamps));
  }
  getLabelTimestamps() {
    const me = this;
    const timestamps = me._cache.labels || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const labels = me.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(me, labels[i]));
    }
    return (me._cache.labels = me._normalized ? timestamps : me.normalize(timestamps));
  }
  normalize(values) {
    return __vite_ssr_import_0__._(values.sort(sorter));
  }
}
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      ({lo, hi} = __vite_ssr_import_0__.w(table, 'pos', val));
    }
    ({pos: prevSource, time: prevTarget} = table[lo]);
    ({pos: nextSource, time: nextTarget} = table[hi]);
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      ({lo, hi} = __vite_ssr_import_0__.w(table, 'time', val));
    }
    ({time: prevSource, pos: prevTarget} = table[lo]);
    ({time: nextSource, pos: nextTarget} = table[hi]);
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
  constructor(props) {
    super(props);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const me = this;
    const timestamps = me._getTimestampsForTable();
    const table = me._table = me.buildLookupTable(timestamps);
    me._minPos = interpolate(table, me.min);
    me._tableRange = interpolate(table, me.max) - me._minPos;
    super.initOffsets(timestamps);
  }
  buildLookupTable(timestamps) {
    const {min, max} = this;
    const items = [];
    const table = [];
    let i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [
        {time: min, pos: 0},
        {time: max, pos: 1}
      ];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({time: curr, pos: i / (ilen - 1)});
      }
    }
    return table;
  }
  _getTimestampsForTable() {
    const me = this;
    let timestamps = me._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    const data = me.getDataTimestamps();
    const label = me.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = me.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = me._cache.all = timestamps;
    return timestamps;
  }
  getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  }
  getValueForPixel(pixel) {
    const me = this;
    const offsets = me._offsets;
    const decimal = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(me._table, decimal * me._tableRange + me._minPos, true);
  }
}
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
  controllers,
  elements,
  plugins,
  scales,
];


Object.defineProperty(__vite_ssr_exports__, "Animation", { enumerable: true, configurable: true, get(){ return Animation }});
Object.defineProperty(__vite_ssr_exports__, "Animations", { enumerable: true, configurable: true, get(){ return Animations }});
Object.defineProperty(__vite_ssr_exports__, "ArcElement", { enumerable: true, configurable: true, get(){ return ArcElement }});
Object.defineProperty(__vite_ssr_exports__, "BarController", { enumerable: true, configurable: true, get(){ return BarController }});
Object.defineProperty(__vite_ssr_exports__, "BarElement", { enumerable: true, configurable: true, get(){ return BarElement }});
Object.defineProperty(__vite_ssr_exports__, "BasePlatform", { enumerable: true, configurable: true, get(){ return BasePlatform }});
Object.defineProperty(__vite_ssr_exports__, "BasicPlatform", { enumerable: true, configurable: true, get(){ return BasicPlatform }});
Object.defineProperty(__vite_ssr_exports__, "BubbleController", { enumerable: true, configurable: true, get(){ return BubbleController }});
Object.defineProperty(__vite_ssr_exports__, "CategoryScale", { enumerable: true, configurable: true, get(){ return CategoryScale }});
Object.defineProperty(__vite_ssr_exports__, "Chart", { enumerable: true, configurable: true, get(){ return Chart }});
Object.defineProperty(__vite_ssr_exports__, "DatasetController", { enumerable: true, configurable: true, get(){ return DatasetController }});
Object.defineProperty(__vite_ssr_exports__, "Decimation", { enumerable: true, configurable: true, get(){ return plugin_decimation }});
Object.defineProperty(__vite_ssr_exports__, "DomPlatform", { enumerable: true, configurable: true, get(){ return DomPlatform }});
Object.defineProperty(__vite_ssr_exports__, "DoughnutController", { enumerable: true, configurable: true, get(){ return DoughnutController }});
Object.defineProperty(__vite_ssr_exports__, "Element", { enumerable: true, configurable: true, get(){ return Element }});
Object.defineProperty(__vite_ssr_exports__, "Filler", { enumerable: true, configurable: true, get(){ return plugin_filler }});
Object.defineProperty(__vite_ssr_exports__, "Interaction", { enumerable: true, configurable: true, get(){ return Interaction }});
Object.defineProperty(__vite_ssr_exports__, "Legend", { enumerable: true, configurable: true, get(){ return plugin_legend }});
Object.defineProperty(__vite_ssr_exports__, "LineController", { enumerable: true, configurable: true, get(){ return LineController }});
Object.defineProperty(__vite_ssr_exports__, "LineElement", { enumerable: true, configurable: true, get(){ return LineElement }});
Object.defineProperty(__vite_ssr_exports__, "LinearScale", { enumerable: true, configurable: true, get(){ return LinearScale }});
Object.defineProperty(__vite_ssr_exports__, "LogarithmicScale", { enumerable: true, configurable: true, get(){ return LogarithmicScale }});
Object.defineProperty(__vite_ssr_exports__, "PieController", { enumerable: true, configurable: true, get(){ return PieController }});
Object.defineProperty(__vite_ssr_exports__, "PointElement", { enumerable: true, configurable: true, get(){ return PointElement }});
Object.defineProperty(__vite_ssr_exports__, "PolarAreaController", { enumerable: true, configurable: true, get(){ return PolarAreaController }});
Object.defineProperty(__vite_ssr_exports__, "RadarController", { enumerable: true, configurable: true, get(){ return RadarController }});
Object.defineProperty(__vite_ssr_exports__, "RadialLinearScale", { enumerable: true, configurable: true, get(){ return RadialLinearScale }});
Object.defineProperty(__vite_ssr_exports__, "Scale", { enumerable: true, configurable: true, get(){ return Scale }});
Object.defineProperty(__vite_ssr_exports__, "ScatterController", { enumerable: true, configurable: true, get(){ return ScatterController }});
Object.defineProperty(__vite_ssr_exports__, "SubTitle", { enumerable: true, configurable: true, get(){ return plugin_subtitle }});
Object.defineProperty(__vite_ssr_exports__, "Ticks", { enumerable: true, configurable: true, get(){ return Ticks }});
Object.defineProperty(__vite_ssr_exports__, "TimeScale", { enumerable: true, configurable: true, get(){ return TimeScale }});
Object.defineProperty(__vite_ssr_exports__, "TimeSeriesScale", { enumerable: true, configurable: true, get(){ return TimeSeriesScale }});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return plugin_title }});
Object.defineProperty(__vite_ssr_exports__, "Tooltip", { enumerable: true, configurable: true, get(){ return plugin_tooltip }});
Object.defineProperty(__vite_ssr_exports__, "_adapters", { enumerable: true, configurable: true, get(){ return adapters }});
Object.defineProperty(__vite_ssr_exports__, "_detectPlatform", { enumerable: true, configurable: true, get(){ return _detectPlatform }});
Object.defineProperty(__vite_ssr_exports__, "animator", { enumerable: true, configurable: true, get(){ return animator }});
Object.defineProperty(__vite_ssr_exports__, "controllers", { enumerable: true, configurable: true, get(){ return controllers }});
Object.defineProperty(__vite_ssr_exports__, "elements", { enumerable: true, configurable: true, get(){ return elements }});
Object.defineProperty(__vite_ssr_exports__, "layouts", { enumerable: true, configurable: true, get(){ return layouts }});
Object.defineProperty(__vite_ssr_exports__, "plugins", { enumerable: true, configurable: true, get(){ return plugins }});
Object.defineProperty(__vite_ssr_exports__, "registerables", { enumerable: true, configurable: true, get(){ return registerables }});
Object.defineProperty(__vite_ssr_exports__, "registry", { enumerable: true, configurable: true, get(){ return registry }});
Object.defineProperty(__vite_ssr_exports__, "scales", { enumerable: true, configurable: true, get(){ return scales }});
;
}


// --------------------
// Request: /node_modules/chart.js/dist/chunks/helpers.segment.js
// Parents: 
// - /node_modules/chart.js/dist/chart.esm.js ($id_a3bd23f4)
// Dependencies: 

// --------------------
const $id_031d4f38 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/chart.js/dist/chunks/helpers.segment.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /components/Cards/CardLineChart.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/chart.js/auto/auto.esm.js ($id_0306cab9)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_87067cd6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/chart.js/auto/auto.esm.js");


const _sfc_main = {
  mounted() {
    this.$nextTick(function () {
      const config = {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: '#4c51bf',
              borderColor: '#4c51bf',
              data: [65, 78, 66, 44, 56, 67, 75],
              fill: false
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: '#fff',
              borderColor: '#fff',
              data: [40, 68, 86, 74, 56, 60, 87]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: 'Sales Charts',
            fontColor: 'white'
          },
          legend: {
            labels: {
              fontColor: 'white'
            },
            align: 'end',
            position: 'bottom'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: 'rgba(255,255,255,.7)'
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Month',
                  fontColor: 'white'
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: 'white',
                  zeroLineColor: 'rgba(0, 0, 0, 0)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: 'rgba(255,255,255,1)'
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Value',
                  fontColor: 'white'
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: 'rgba(255, 255, 255, 1)',
                  zeroLineColor: 'rgba(33, 37, 41, 0)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ]
          }
        }
      }
      const ctx = document.getElementById('line-chart').getContext('2d')
      window.myLine = new __vite_ssr_import_1__.default(ctx, config)
    })
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg bg-blueGray-700" }, _attrs))}><div class="px-4 py-3 mb-0 bg-transparent rounded-t"><div class="flex flex-wrap items-center"><div class="relative flex-1 flex-grow w-full max-w-full"><h6 class="mb-1 text-xs font-semibold uppercase text-blueGray-100"> Overview </h6><h2 class="text-xl font-semibold text-white">Sales value</h2></div></div></div><div class="flex-auto p-4"><!-- Chart --><div class="relative h-350-px"><canvas id="line-chart"></canvas></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardLineChart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardLineChart.vue"]]);
}


// --------------------
// Request: /components/Cards/CardPageVisits.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bbe53dbd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" }, _attrs))}><div class="rounded-t mb-0 px-4 py-3 border-0"><div class="flex flex-wrap items-center"><div class="relative w-full px-4 max-w-full flex-grow flex-1"><h3 class="font-semibold text-base text-blueGray-700"> Page visits </h3></div><div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"><button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> See all </button></div></div></div><div class="block w-full overflow-x-auto"><!-- Projects table --><table class="items-center w-full bg-transparent border-collapse"><thead><tr><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Page name </th><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Visitors </th><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Unique users </th><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Bounce rate </th></tr></thead><tbody><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> /argon/ </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 4,569 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 340 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 46,53% </td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> /argon/index.html </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 3,985 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 319 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-arrow-down text-orange-500 mr-4"></i> 46,53% </td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> /argon/charts.html </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 3,513 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 294 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-arrow-down text-orange-500 mr-4"></i> 36,49% </td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> /argon/tables.html </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 2,050 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 147 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 50,87% </td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> /argon/profile.html </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 1,795 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 190 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-arrow-down text-red-500 mr-4"></i> 46,53% </td></tr></tbody></table></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardPageVisits.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardPageVisits.vue"]]);
}


// --------------------
// Request: /components/Cards/CardProfile.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/img/team-2-800x800.jpg ($id_0e531dc1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_30b9deef = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/img/team-2-800x800.jpg");


const _sfc_main = {
  data() {
    return {
      team2: __vite_ssr_import_1__.default
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" }, _attrs))
  }><div class="px-6"><div class="flex flex-wrap justify-center"><div class="w-full px-4 flex justify-center"><div class="relative"><img alt="..."${
    __vite_ssr_import_3__.ssrRenderAttr("src", $data.team2)
  } class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"></div></div><div class="w-full px-4 text-center mt-20"><div class="flex justify-center py-4 lg:pt-4 pt-8"><div class="mr-4 p-3 text-center"><span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> 22 </span><span class="text-sm text-blueGray-400">Friends</span></div><div class="mr-4 p-3 text-center"><span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> 10 </span><span class="text-sm text-blueGray-400">Photos</span></div><div class="lg:mr-4 p-3 text-center"><span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> 89 </span><span class="text-sm text-blueGray-400">Comments</span></div></div></div></div><div class="text-center mt-12"><h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"> Jenna Stones </h3><div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"><i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> Los Angeles, California </div><div class="mb-2 text-blueGray-600 mt-10"><i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> Solution Manager - Cheryl Carpenter Officer </div><div class="mb-2 text-blueGray-600"><i class="fas fa-university mr-2 text-lg text-blueGray-400"></i> University of Computer Science </div></div><div class="mt-10 py-10 border-t border-blueGray-200 text-center"><div class="flex flex-wrap justify-center"><div class="w-full lg:w-9/12 px-4"><p class="mb-4 text-lg leading-relaxed text-blueGray-700"> An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range. </p><a href="javascript:void(0);" class="font-normal text-emerald-500"> Show more </a></div></div></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardProfile.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardProfile.vue"]]);
}


// --------------------
// Request: /assets/img/team-2-800x800.jpg
// Parents: 
// - /components/Cards/CardProfile.vue ($id_30b9deef)
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_0e531dc1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/team-2-800x800.jpg";
}


// --------------------
// Request: /components/Cards/CardSettings.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f88165ee = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" }, _attrs))}><div class="rounded-t bg-white mb-0 px-6 py-6"><div class="text-center flex justify-between"><h6 class="text-blueGray-700 text-xl font-bold">My account</h6><button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"> Settings </button></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"><form><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> User Information </h6><div class="flex flex-wrap"><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Username </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse"></div></div><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Email address </label><input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com"></div></div><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> First Name </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky"></div></div><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Last Name </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse"></div></div></div><hr class="mt-6 border-b-1 border-blueGray-300"><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> Contact Information </h6><div class="flex flex-wrap"><div class="w-full lg:w-12/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Address </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"></div></div><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> City </label><input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York"></div></div><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Country </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States"></div></div><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Postal Code </label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code"></div></div></div><hr class="mt-6 border-b-1 border-blueGray-300"><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> About Me </h6><div class="flex flex-wrap"><div class="w-full lg:w-12/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> About me </label><textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4">
                    A beautiful UI Kit and Admin for VueJS &amp; Tailwind CSS. It is Free
                    and Open Source.
                  </textarea></div></div></div></form></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardSettings.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardSettings.vue"]]);
}


// --------------------
// Request: /components/Cards/CardSocialTraffic.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2438621c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" }, _attrs))
  }><div class="rounded-t mb-0 px-4 py-3 border-0"><div class="flex flex-wrap items-center"><div class="relative w-full px-4 max-w-full flex-grow flex-1"><h3 class="font-semibold text-base text-blueGray-700"> Social traffic </h3></div><div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"><button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> See all </button></div></div></div><div class="block w-full overflow-x-auto"><!-- Projects table --><table class="items-center w-full bg-transparent border-collapse"><thead class="thead-light"><tr><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Referral </th><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"> Visitors </th><th class="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th></tr></thead><tbody><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> Facebook </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 1,480 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">60%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-red-200"><div style="${
    __vite_ssr_import_2__.ssrRenderStyle({"width":"60%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div></div></div></div></td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> Facebook </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 5,480 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">70%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"><div style="${
    __vite_ssr_import_2__.ssrRenderStyle({"width":"70%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div></div></div></div></td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> Google </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 4,807 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">80%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-purple-200"><div style="${
    __vite_ssr_import_2__.ssrRenderStyle({"width":"80%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div></div></div></div></td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> Instagram </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 3,678 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">75%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"><div style="${
    __vite_ssr_import_2__.ssrRenderStyle({"width":"75%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"></div></div></div></div></td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> twitter </th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> 2,645 </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">30%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-orange-200"><div style="${
    __vite_ssr_import_2__.ssrRenderStyle({"width":"30%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div></div></div></div></td></tr></tbody></table></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardSocialTraffic.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardSocialTraffic.vue"]]);
}


// --------------------
// Request: /components/Cards/CardStats.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Headers/HeaderStats.vue ($id_1efdd037)
// Dependencies: 
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6b99969c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Icons/IconCircle.vue");

const _sfc_main = {
  name: 'CardStats',
  components: {
    IconCircle: __vite_ssr_import_0__.default
  },
  props: {
    statSubtitle: {
      type: String,
      default: 'Traffic'
    },
    statTitle: {
      type: String,
      default: '350,897'
    },
    statArrow: {
      default: 'up',
      validator(value) {
        // The value must match one of these strings
        return ['up', 'down'].includes(value)
      }
    },
    statPercent: {
      type: String,
      default: '3.48'
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: {
      type: String,
      default: 'text-emerald-500'
    },
    statDescripiron: {
      type: String,
      default: 'Since last month'
    },
    statIconName: {
      type: String,
      default: 'far fa-chart-bar'
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: 'bg-red-500'
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_circle = __vite_ssr_import_1__.resolveComponent("icon-circle")

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg" }, _attrs))
  }><div class="flex-auto p-4"><div class="flex flex-wrap"><div class="relative w-full pr-4 max-w-full flex-grow flex-1"><h5 class="text-blueGray-400 uppercase font-bold text-xs">${
    __vite_ssr_import_2__.ssrInterpolate($props.statSubtitle)
  }</h5><span class="font-semibold text-xl text-blueGray-700">${
    __vite_ssr_import_2__.ssrInterpolate($props.statTitle)
  }</span></div><div class="relative w-auto pl-4 flex-initial">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_icon_circle, {
    "bg-color": [$props.statIconColor],
    "icon-class": [$props.statIconName]
  }, null, _parent))
  _push(`</div></div><p class="text-sm text-blueGray-400 mt-4"><span class="${
    __vite_ssr_import_2__.ssrRenderClass([[$props.statPercentColor], "mr-2"])
  }"><i class="${
    __vite_ssr_import_2__.ssrRenderClass([
              $props.statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`
            ])
  }"></i> ${
    __vite_ssr_import_2__.ssrInterpolate($props.statPercent)
  }% </span><span class="whitespace-nowrap">${
    __vite_ssr_import_2__.ssrInterpolate($props.statDescripiron)
  }</span></p></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardStats.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardStats.vue"]]);
}


// --------------------
// Request: /components/Cards/CardTable.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/img/bootstrap.jpg ($id_8bcd8088)
// - /assets/img/angular.jpg ($id_74f4d0d4)
// - /assets/img/sketch.jpg ($id_7db3424a)
// - /assets/img/react.jpg ($id_80331204)
// - /assets/img/vue.jpg ($id_dbc905c8)
// - /assets/img/team-1-800x800.jpg ($id_cf922e68)
// - /assets/img/team-2-800x800.jpg ($id_0e531dc1)
// - /assets/img/team-3-800x800.jpg ($id_132c203c)
// - /assets/img/team-4-470x470.png ($id_4268e084)
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_18541dc0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/img/bootstrap.jpg");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/img/angular.jpg");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/img/sketch.jpg");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/img/react.jpg");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/img/vue.jpg");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/img/team-1-800x800.jpg");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/img/team-2-800x800.jpg");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/img/team-3-800x800.jpg");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/img/team-4-470x470.png");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/Dropdowns/TableDropdown.vue");


const _sfc_main = {
  components: {
    TableDropdown: __vite_ssr_import_10__.default
  },
  props: {
    color: {
      default: 'light',
      validator(value) {
        // The value must match one of these strings
        return ['light', 'dark'].includes(value)
      }
    }
  },
  data() {
    return {
      bootstrap: __vite_ssr_import_1__.default,
      angular: __vite_ssr_import_2__.default,
      sketch: __vite_ssr_import_3__.default,
      react: __vite_ssr_import_4__.default,
      vue: __vite_ssr_import_5__.default,
      team1: __vite_ssr_import_6__.default,
      team2: __vite_ssr_import_7__.default,
      team3: __vite_ssr_import_8__.default,
      team4: __vite_ssr_import_9__.default
    }
  }
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_dropdown = __vite_ssr_import_11__.resolveComponent("table-dropdown")

  _push(`<div${
    __vite_ssr_import_12__.ssrRenderAttrs(__vite_ssr_import_11__.mergeProps({
      class: ["relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded", [$props.color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']]
    }, _attrs))
  }><div class="rounded-t mb-0 px-4 py-3 border-0"><div class="flex flex-wrap items-center"><div class="relative w-full px-4 max-w-full flex-grow flex-1"><h3 class="${
    __vite_ssr_import_12__.ssrRenderClass([[$props.color === 'light' ? 'text-blueGray-700' : 'text-white'], "font-semibold text-lg"])
  }"> Card Tables </h3></div></div></div><div class="block w-full overflow-x-auto"><!-- Projects table --><table class="items-center w-full bg-transparent border-collapse"><thead><tr><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"> Project </th><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"> Budget </th><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"> Status </th><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"> Users </th><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"> Completion </th><th class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                $props.color === 'light'
                  ? 'bg-blueGray-50  border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ], "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"])
  }"></th></tr></thead><tbody><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.bootstrap)
  } class="h-12 w-12 bg-white rounded-full border" alt="..."><span class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                  $props.color === 'light' ? 'text-blueGray-600' : 'text-white'
                ], "ml-3 font-bold"])
  }"> Argon Design System </span></th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> \$2,500 USD </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle text-orange-500 mr-2"></i> pending </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team1)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team2)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team3)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team4)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">60%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-red-200"><div style="${
    __vite_ssr_import_12__.ssrRenderStyle({"width":"60%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div></div></div></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">`)
  _push(__vite_ssr_import_12__.ssrRenderComponent(_component_table_dropdown, null, null, _parent))
  _push(`</td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.angular)
  } class="h-12 w-12 bg-white rounded-full border" alt="..."><span class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                  $props.color === 'light' ? 'text-blueGray-600' : 'text-white'
                ], "ml-3 font-bold"])
  }"> Angular Now UI Kit PRO </span></th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> \$1,800 USD </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle text-emerald-500 mr-2"></i> completed </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team1)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team2)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team3)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team4)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">100%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"><div style="${
    __vite_ssr_import_12__.ssrRenderStyle({"width":"100%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div></div></div></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">`)
  _push(__vite_ssr_import_12__.ssrRenderComponent(_component_table_dropdown, null, null, _parent))
  _push(`</td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.sketch)
  } class="h-12 w-12 bg-white rounded-full border" alt="..."><span class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                  $props.color === 'light' ? 'text-blueGray-600' : 'text-white'
                ], "ml-3 font-bold"])
  }"> Black Dashboard Sketch </span></th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> \$3,150 USD </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle text-red-500 mr-2"></i> delayed </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team1)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team2)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team3)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team4)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">73%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-red-200"><div style="${
    __vite_ssr_import_12__.ssrRenderStyle({"width":"73%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div></div></div></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">`)
  _push(__vite_ssr_import_12__.ssrRenderComponent(_component_table_dropdown, null, null, _parent))
  _push(`</td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.react)
  } class="h-12 w-12 bg-white rounded-full border" alt="..."><span class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                  $props.color === 'light' ? 'text-blueGray-600' : 'text-white'
                ], "ml-3 font-bold"])
  }"> React Material Dashboard </span></th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> \$4,400 USD </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle text-teal-500 mr-2"></i> on schedule </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team1)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team2)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team3)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team4)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">90%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"><div style="${
    __vite_ssr_import_12__.ssrRenderStyle({"width":"90%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div></div></div></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">`)
  _push(__vite_ssr_import_12__.ssrRenderComponent(_component_table_dropdown, null, null, _parent))
  _push(`</td></tr><tr><th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.vue)
  } class="h-12 w-12 bg-white rounded-full border" alt="..."><span class="${
    __vite_ssr_import_12__.ssrRenderClass([[
                  $props.color === 'light' ? 'text-blueGray-600' : 'text-white'
                ], "ml-3 font-bold"])
  }"> React Material Dashboard </span></th><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> \$2,200 USD </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle text-emerald-500 mr-2"></i> completed </td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team1)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team2)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team3)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"><img${
    __vite_ssr_import_12__.ssrRenderAttr("src", $data.team4)
  } alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center"><span class="mr-2">100%</span><div class="relative w-full"><div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"><div style="${
    __vite_ssr_import_12__.ssrRenderStyle({"width":"100%"})
  }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div></div></div></div></td><td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">`)
  _push(__vite_ssr_import_12__.ssrRenderComponent(_component_table_dropdown, null, null, _parent))
  _push(`</td></tr></tbody></table></div></div>`)
}


const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_13__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Cards/CardTable.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_14__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_14__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Cards/CardTable.vue"]]);
}


// --------------------
// Request: /assets/img/bootstrap.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_8bcd8088 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/bootstrap.jpg";
}


// --------------------
// Request: /assets/img/angular.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_74f4d0d4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/angular.jpg";
}


// --------------------
// Request: /assets/img/sketch.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_7db3424a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/sketch.jpg";
}


// --------------------
// Request: /assets/img/react.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_80331204 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/react.jpg";
}


// --------------------
// Request: /assets/img/vue.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_dbc905c8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/vue.jpg";
}


// --------------------
// Request: /assets/img/team-1-800x800.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// Dependencies: 

// --------------------
const $id_cf922e68 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/team-1-800x800.jpg";
}


// --------------------
// Request: /assets/img/team-3-800x800.jpg
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_132c203c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/team-3-800x800.jpg";
}


// --------------------
// Request: /assets/img/team-4-470x470.png
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// Dependencies: 

// --------------------
const $id_4268e084 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/team-4-470x470.png";
}


// --------------------
// Request: /components/Dropdowns/TableDropdown.vue
// Parents: 
// - /components/Cards/CardTable.vue ($id_18541dc0)
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/@popperjs/core/lib/index.js ($id_8bcf6136)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b736b16e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@popperjs/core/lib/index.js");


const _sfc_main = {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        __vite_ssr_import_0__.createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(_attrs)
  }><a class="py-1 px-3" href="#pablo"><i class="fas fa-ellipsis-v"></i></a><div class="${
    __vite_ssr_import_1__.ssrRenderClass([{
        hidden: !$data.dropdownPopoverShow,
        block: $data.dropdownPopoverShow
      }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])
  }"><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Another action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Something else here </a></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Dropdowns/TableDropdown.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Dropdowns/TableDropdown.vue"]]);
}


// --------------------
// Request: /node_modules/@popperjs/core/lib/index.js
// Parents: 
// - /components/Dropdowns/TableDropdown.vue ($id_b736b16e)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// Dependencies: 

// --------------------
const $id_8bcf6136 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/cherylcarpenter/nuxt3-app/node_modules/@popperjs/core/lib/index.js').then(r => { exports.default = r.default; ssrExportAll(r) })


// --------------------
// Request: /components/Footers/Footer.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_62b85294 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative bg-blueGray-200 pt-8 pb-6" }, _attrs))
  }><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="${
    __vite_ssr_import_2__.ssrRenderStyle({"transform":"translateZ(0)"})
  }"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div class="container mx-auto px-4"><div class="flex flex-wrap text-center lg:text-left"><div class="w-full lg:w-6/12 px-4"><h4 class="text-3xl font-semibold">Let&#39;s keep in touch!</h4><h5 class="text-lg mt-0 mb-2 text-blueGray-600"> Find us on any of these platforms, we respond 1-2 business days. </h5><div class="mt-6 lg:mb-0 mb-6"><button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"><i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"><i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"><i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"><i class="fab fa-github"></i></button></div></div><div class="w-full lg:w-6/12 px-4"><div class="flex flex-wrap items-top mb-6"><div class="w-full lg:w-4/12 px-4 ml-auto"><span class="block uppercase text-sm font-semibold mb-2"> Useful Links </span><ul class="list-unstyled"><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=vn-footer"> About Us </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=vn-footer"> Blog </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> Github </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"> Free Products </a></li></ul></div><div class="w-full lg:w-4/12 px-4"><span class="block uppercase text-sm font-semibold mb-2"> Other Resources </span><ul class="list-unstyled"><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> MIT License </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=vn-footer"> Terms &amp; Conditions </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=vn-footer"> Privacy Policy </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=vn-footer"> Contact Us </a></li></ul></div></div></div></div><hr class="my-6 border-blueGray-300"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4 mx-auto text-center"><div class="text-sm font-semibold py-1"> Copyright © ${
    __vite_ssr_import_2__.ssrInterpolate($data.date)
  } by <a href="#" class="hover:text-blueGray-800"> Cheryl Carpenter </a></div></div></div></div></footer>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footers/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Footers/Footer.vue"]]);
}


// --------------------
// Request: /components/Footers/FooterAdmin.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_229a29d8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "block py-4" }, _attrs))
  }><div class="container mx-auto px-4"><hr class="mb-4 border-b-1 border-blueGray-200"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4"><div class="text-sm font-semibold py-1 text-center md:text-left"> Copyright © ${
    __vite_ssr_import_2__.ssrInterpolate($data.date)
  } <a href="https://www.creative-tim.com?ref=vn-footer-admin" class="hover:text-blueGray-700 text-sm font-semibold py-1"> Cheryl Carpenter </a></div></div><div class="w-full md:w-8/12 px-4"><ul class="flex flex-wrap list-none md:justify-end justify-center"><li><a href="https://www.creative-tim.com?ref=vn-footer-admin" class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"> Cheryl Carpenter </a></li><li><a href="https://www.creative-tim.com/presentation?ref=vn-footer-admin" class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"> About Us </a></li><li><a href="http://blog.creative-tim.com?ref=vn-footer-admin" class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"> Blog </a></li><li><a href="#" class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"> MIT License </a></li></ul></div></div></div></footer>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footers/FooterAdmin.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Footers/FooterAdmin.vue"]]);
}


// --------------------
// Request: /components/Footers/FooterSmall.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1581b5f4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: ["pb-6", [
      $props.absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'
    ]]
    }, _attrs))
  }><div class="container mx-auto px-4"><hr class="mb-6 border-b-1 border-blueGray-600"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4"><div class="text-sm font-semibold py-1 text-center md:text-left"> Copyright © ${
    __vite_ssr_import_2__.ssrInterpolate($data.date)
  } <a href="https://www.creative-tim.com?ref=vn-footer-small" class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"> Cheryl Carpenter </a></div></div><div class="w-full md:w-8/12 px-4"><ul class="flex flex-wrap list-none md:justify-end justify-center"><li><a href="https://www.creative-tim.com?ref=vn-footer-small" class="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"> Cheryl Carpenter </a></li><li><a href="https://www.creative-tim.com/presentation?ref=vn-footer-small" class="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"> About Us </a></li><li><a href="http://blog.creative-tim.com?ref=vn-footer-small" class="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"> Blog </a></li><li><a href="#" class="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"> MIT License </a></li></ul></div></div></div></footer>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footers/FooterSmall.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Footers/FooterSmall.vue"]]);
}


// --------------------
// Request: /components/Dropdowns/IndexDropdown.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Navbars/IndexNavbar.vue ($id_352c6481)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@popperjs/core/lib/index.js ($id_8bcf6136)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_83b2d047 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@popperjs/core/lib/index.js");


const _sfc_main = {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        __vite_ssr_import_1__.createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_2__.resolveComponent("NuxtLink")

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(_attrs)
  }><a class="hover: text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold" href="#pablo"> Demo Pages </a><div class="${
    __vite_ssr_import_3__.ssrRenderClass([{
        hidden: !$data.dropdownPopoverShow,
        block: $data.dropdownPopoverShow
      }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])
  }"><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Admin Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/dashboard",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Dashboard `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Dashboard ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/settings",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Settings `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Settings ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/tables",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Tables `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Tables ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/maps",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Maps `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Maps ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Auth Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/login",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Login `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Login ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/register",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Register `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Register ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> No Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/landing",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Landing `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Landing ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/profile",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Profile `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Profile ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Dropdowns/IndexDropdown.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Dropdowns/IndexDropdown.vue"]]);
}


// --------------------
// Request: /components/Dropdowns/NotificationDropdown.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@popperjs/core/lib/index.js ($id_8bcf6136)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5f02c192 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@popperjs/core/lib/index.js");


const _sfc_main = {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        __vite_ssr_import_1__.createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(_attrs)
  }><a class="block py-1 px-3"><i class="fas fa-bell"></i></a><div class="${
    __vite_ssr_import_2__.ssrRenderClass([{
        hidden: !$data.dropdownPopoverShow,
        block: $data.dropdownPopoverShow
      }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])
  }"><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Another action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Something else here </a><div class="h-0 my-2 border border-solid border-blueGray-100"></div><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Seprated link </a></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Dropdowns/NotificationDropdown.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Dropdowns/NotificationDropdown.vue"]]);
}


// --------------------
// Request: /components/Dropdowns/PagesDropdown.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Navbars/AuthNavbar.vue ($id_30a49698)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@popperjs/core/lib/index.js ($id_8bcf6136)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6b3d410a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@popperjs/core/lib/index.js");


const _sfc_main = {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        __vite_ssr_import_1__.createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_2__.resolveComponent("NuxtLink")

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(_attrs)
  }><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"> Demo Pages </a><div class="${
    __vite_ssr_import_3__.ssrRenderClass([{
        hidden: !$data.dropdownPopoverShow,
        block: $data.dropdownPopoverShow
      }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])
  }"><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Admin Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/dashboard",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Dashboard `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Dashboard ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/settings",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Settings `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Settings ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/tables",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Tables `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Tables ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/maps",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Maps `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Maps ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Auth Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/login",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Login `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Login ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/register",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Register `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Register ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> No Layout </span>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/landing",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Landing `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Landing ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/profile",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Profile `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Profile ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Dropdowns/PagesDropdown.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Dropdowns/PagesDropdown.vue"]]);
}


// --------------------
// Request: /components/Dropdowns/UserDropdown.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// - /components/Navbars/AdminNavbar.vue ($id_a6c1bbe1)
// - /components/Sidebar/Sidebar.vue ($id_c861deab)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@popperjs/core/lib/index.js ($id_8bcf6136)
// - /assets/img/team-1-800x800.jpg ($id_cf922e68)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2603491a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@popperjs/core/lib/index.js");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/img/team-1-800x800.jpg");


const _sfc_main = {
  data() {
    return {
      dropdownPopoverShow: false,
      image: __vite_ssr_import_2__.default,
    };
  },
  methods: {
    toggleDropdown (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        __vite_ssr_import_1__.createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(_attrs)
  }><a class="block" href="#pablo"><div class="items-center flex"><span class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"><img alt="..." class="w-full rounded-full align-middle border-none shadow-lg"${
    __vite_ssr_import_3__.ssrRenderAttr("src", $data.image)
  }></span></div></a><div class="${
    __vite_ssr_import_3__.ssrRenderClass([{
        hidden: !$data.dropdownPopoverShow,
        block: $data.dropdownPopoverShow,
      }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])
  }"><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Another action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Something else here </a><div class="h-0 my-2 border border-solid border-blueGray-100"></div><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Seprated link </a></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Dropdowns/UserDropdown.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Dropdowns/UserDropdown.vue"]]);
}


// --------------------
// Request: /components/Headers/HeaderStats.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /components/Cards/CardStats.vue ($id_6b99969c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1efdd037 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Cards/CardStats.vue");


const _sfc_main = {
  components: {
    CardStats: __vite_ssr_import_0__.default
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_card_stats = __vite_ssr_import_1__.resolveComponent("card-stats")

  _push(`<!--[--><!-- Header --><div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative bg-emerald-600 md:pt-32 pb-32 pt-12" }, _attrs))}><div class="px-4 md:px-10 mx-auto w-full"><div><!-- Card stats --><div class="flex flex-wrap"><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card_stats, {
    "stat-subtitle": "TRAFFIC",
    "stat-title": "350,897",
    "stat-arrow": "up",
    "stat-percent": "3.48",
    "stat-percent-color": "text-emerald-500",
    "stat-descripiron": "Since last month",
    "stat-icon-name": "far fa-chart-bar",
    "stat-icon-color": "bg-red-500"
  }, null, _parent))
  _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card_stats, {
    "stat-subtitle": "NEW USERS",
    "stat-title": "2,356",
    "stat-arrow": "down",
    "stat-percent": "3.48",
    "stat-percent-color": "text-red-500",
    "stat-descripiron": "Since last week",
    "stat-icon-name": "fas fa-chart-pie",
    "stat-icon-color": "bg-orange-500"
  }, null, _parent))
  _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card_stats, {
    "stat-subtitle": "SALES",
    "stat-title": "924",
    "stat-arrow": "down",
    "stat-percent": "1.10",
    "stat-percent-color": "text-orange-500",
    "stat-descripiron": "Since yesterday",
    "stat-icon-name": "fas fa-users",
    "stat-icon-color": "bg-pink-500"
  }, null, _parent))
  _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card_stats, {
    "stat-subtitle": "PERFORMANCE",
    "stat-title": "49,65%",
    "stat-arrow": "up",
    "stat-percent": "12",
    "stat-percent-color": "text-emerald-500",
    "stat-descripiron": "Since last month",
    "stat-icon-name": "fas fa-percent",
    "stat-icon-color": "bg-emerald-500"
  }, null, _parent))
  _push(`</div></div></div></div></div><!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Headers/HeaderStats.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Headers/HeaderStats.vue"]]);
}


// --------------------
// Request: /components/Maps/MapExample.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_717c0b64 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  // mounted() {
  //   const google = window.google
  //   let map = document.getElementById('map-canvas')
  //   const lat = map.getAttribute('data-lat')
  //   const lng = map.getAttribute('data-lng')
  //   const myLatlng = new google.maps.LatLng(lat, lng)
  //   const mapOptions = {
  //     zoom: 12,
  //     scrollwheel: false,
  //     center: myLatlng,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     styles: [
  //       {
  //         featureType: 'administrative',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#444444' }]
  //       },
  //       {
  //         featureType: 'landscape',
  //         elementType: 'all',
  //         stylers: [{ color: '#f2f2f2' }]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'all',
  //         stylers: [{ visibility: 'off' }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'all',
  //         stylers: [{ saturation: -100 }, { lightness: 45 }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'all',
  //         stylers: [{ visibility: 'simplified' }]
  //       },
  //       {
  //         featureType: 'road.arterial',
  //         elementType: 'labels.icon',
  //         stylers: [{ visibility: 'off' }]
  //       },
  //       {
  //         featureType: 'transit',
  //         elementType: 'all',
  //         stylers: [{ visibility: 'off' }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'all',
  //         stylers: [{ color: '#5e72e4' }, { visibility: 'on' }]
  //       }
  //     ]
  //   }
  //   map = new google.maps.Map(map, mapOptions)
  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map,
  //     animation: google.maps.Animation.DROP,
  //     title: 'Hello World!'
  //   })
  //   const contentString =
  //     '<div class="info-window-content"><h2>Vue Notus</h2>' +
  //     '<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>'
  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString
  //   })
  //   google.maps.event.addListener(marker, 'click', function () {
  //     infowindow.open(map, marker)
  //   })
  // }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    id: "map-canvas",
    class: "relative w-full rounded h-600-px",
    "data-lat": "40.748817",
    "data-lng": "-73.985428"
  }, _attrs))}> TODO: someday get google map api key </div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Maps/MapExample.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Maps/MapExample.vue"]]);
}


// --------------------
// Request: /components/Navbars/AdminNavbar.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a6c1bbe1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Dropdowns/UserDropdown.vue");


const _sfc_main = {
  components: {
    UserDropdown: __vite_ssr_import_1__.default,
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_user_dropdown = __vite_ssr_import_2__.resolveComponent("user-dropdown")

  _push(`<!--[--><!-- Navbar --><nav${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4" }, _attrs))}><div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"><!-- Brand --><a class="text-white text-sm uppercase hidden lg:inline-block font-semibold" href="javascript:void(0)"> Dashboard </a><!-- Form --><form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"><div class="relative flex w-full flex-wrap items-stretch"><span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"><i class="fas fa-search"></i></span><input type="text" placeholder="Search here..." class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"></div></form><!-- User --><ul class="flex-col md:flex-row list-none items-center hidden md:flex">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_user_dropdown, null, null, _parent))
  _push(`</ul></div></nav><!-- End Navbar --><!--]-->`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Navbars/AdminNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Navbars/AdminNavbar.vue"]]);
}


// --------------------
// Request: /components/Navbars/AuthNavbar.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Dropdowns/PagesDropdown.vue ($id_6b3d410a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_30a49698 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Dropdowns/PagesDropdown.vue");

const _sfc_main = {
  components: {
    PagesDropdown: __vite_ssr_import_1__.default
  },
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_2__.resolveComponent("NuxtLink")
  const _component_PagesDropdown = __vite_ssr_import_2__.resolveComponent("PagesDropdown")

  _push(`<nav${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg" }, _attrs))}><div class="container px-4 mx-auto flex flex-wrap items-center justify-between"><div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
    to: "/"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Vue Notus `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Vue Notus ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button"><i class="text-white fas fa-bars"></i></button></div><div id="example-navbar-warning" class="${__vite_ssr_import_3__.ssrRenderClass([[$data.navbarOpen ? 'block rounded shadow-lg' : 'hidden'], "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"])}"><ul class="flex flex-col lg:flex-row list-none mr-auto"><li class="flex items-center"><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"><i class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i> Docs </a></li></ul><ul class="flex flex-col lg:flex-row list-none lg:ml-auto"><li class="flex items-center">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_PagesDropdown, null, null, _parent))
  _push(`</li><li class="flex items-center"><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Share</span></a></li><li class="flex items-center"><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&amp;text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Tweet</span></a></li><li class="flex items-center"><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Star</span></a></li><li class="flex items-center"><button class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button"><i class="fas fa-arrow-alt-circle-down"></i> Download </button></li></ul></div></div></nav>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Navbars/AuthNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Navbars/AuthNavbar.vue"]]);
}


// --------------------
// Request: /components/Navbars/IndexNavbar.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Dropdowns/IndexDropdown.vue ($id_83b2d047)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_352c6481 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Dropdowns/IndexDropdown.vue");


const _sfc_main = {
  components: {
    IndexDropdown: __vite_ssr_import_1__.default
  },
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_2__.resolveComponent("NuxtLink")
  const _component_index_dropdown = __vite_ssr_import_2__.resolveComponent("index-dropdown")

  _push(`<nav${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow" }, _attrs))}><div class="container px-4 mx-auto flex flex-wrap items-center justify-between"><div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<a class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="#pablo"${_scopeId}> Vue Notus </a>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("a", {
            class: "text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
            href: "#pablo"
          }, " Vue Notus ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button"><i class="fas fa-bars"></i></button></div><div id="example-navbar-warning" class="${__vite_ssr_import_3__.ssrRenderClass([[$data.navbarOpen ? 'block' : 'hidden'], "lg:flex flex-grow items-center"])}"><ul class="flex flex-col lg:flex-row list-none mr-auto"><li class="flex items-center"><a class="hover: text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"><i class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i> Docs </a></li></ul><ul class="flex flex-col lg:flex-row list-none lg:ml-auto"><li class="flex items-center">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_index_dropdown, null, null, _parent))
  _push(`</li><li class="flex items-center"><a class="hover: text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F" target="_blank"><i class="text-blueGray-400 fab fa-facebook text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Share</span></a></li><li class="flex items-center"><a class="hover: text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&amp;text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20" target="_blank"><i class="text-blueGray-400 fab fa-twitter text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Tweet</span></a></li><li class="flex items-center"><a class="hover: text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/creativetimofficial/vue-notus?ref=vn-index-navbar" target="_blank"><i class="text-blueGray-400 fab fa-github text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Star</span></a></li><li class="flex items-center"><button class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button"><i class="fas fa-arrow-alt-circle-down"></i> Download </button></li></ul></div></div></nav>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Navbars/IndexNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Navbars/IndexNavbar.vue"]]);
}


// --------------------
// Request: /components/Sidebar/Sidebar.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Dropdowns/NotificationDropdown.vue ($id_5f02c192)
// - /components/Dropdowns/UserDropdown.vue ($id_2603491a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c861deab = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Dropdowns/NotificationDropdown.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Dropdowns/UserDropdown.vue");


const _sfc_main = {
  components: {
    NotificationDropdown: __vite_ssr_import_1__.default,
    UserDropdown: __vite_ssr_import_2__.default
  },
  data() {
    return {
      collapseShow: 'hidden'
    }
  },
  methods: {
    toggleCollapseShow(classes) {
      this.collapseShow = classes
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_3__.resolveComponent("NuxtLink")
  const _component_notification_dropdown = __vite_ssr_import_3__.resolveComponent("notification-dropdown")
  const _component_user_dropdown = __vite_ssr_import_3__.resolveComponent("user-dropdown")

  _push(`<nav${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6" }, _attrs))}><div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"><!-- Toggler --><button class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button"><i class="fas fa-bars"></i></button><!-- Brand -->`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
    to: "/"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Vue Notus `)
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode(" Vue Notus ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- User --><ul class="md:hidden items-center flex flex-wrap list-none"><li class="inline-block relative">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_notification_dropdown, null, null, _parent))
  _push(`</li><li class="inline-block relative">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_user_dropdown, null, null, _parent))
  _push(`</li></ul><!-- Collapse --><div class="${__vite_ssr_import_4__.ssrRenderClass([$data.collapseShow, "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"])}"><!-- Collapse header --><div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"><div class="flex flex-wrap"><div class="w-6/12">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
    to: "/"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Vue Notus `)
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode(" Vue Notus ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="w-6/12 flex justify-end"><button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"><i class="fas fa-times"></i></button></div></div></div><!-- Form --><form class="mt-6 mb-4 md:hidden"><div class="mb-3 pt-0"><input type="text" placeholder="Search" class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"></div></form><!-- Divider --><hr class="my-4 md:min-w-full"><!-- Heading --><h6 class="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline"> Admin Layout Pages </h6><!-- Navigation --><ul class="md:flex-col md:min-w-full flex flex-col list-none"><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/admin/dashboard" }, {
    default: __vite_ssr_import_3__.withCtx(({ href, navigate, isActive }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<a${
          __vite_ssr_import_4__.ssrRenderAttr("href", href)
        } class="${
          __vite_ssr_import_4__.ssrRenderClass([[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ], "text-xs uppercase py-3 font-bold block"])
        }"${
          _scopeId
        }><i class="${
          __vite_ssr_import_4__.ssrRenderClass([[isActive ? 'opacity-75' : 'text-blueGray-300'], "fas fa-tv mr-2 text-sm"])
        }"${
          _scopeId
        }></i> Dashboard </a>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("a", {
            href: href,
            class: ["text-xs uppercase py-3 font-bold block", [
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ]],
            onClick: navigate
          }, [
            __vite_ssr_import_3__.createVNode("i", {
              class: ["fas fa-tv mr-2 text-sm", [isActive ? 'opacity-75' : 'text-blueGray-300']]
            }, null, 2 /* CLASS */),
            __vite_ssr_import_3__.createTextVNode(" Dashboard ")
          ], 10 /* CLASS, PROPS */, ["href", "onClick"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/admin/settings" }, {
    default: __vite_ssr_import_3__.withCtx(({ href, navigate, isActive }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<a${
          __vite_ssr_import_4__.ssrRenderAttr("href", href)
        } class="${
          __vite_ssr_import_4__.ssrRenderClass([[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ], "text-xs uppercase py-3 font-bold block"])
        }"${
          _scopeId
        }><i class="${
          __vite_ssr_import_4__.ssrRenderClass([[isActive ? 'opacity-75' : 'text-blueGray-300'], "fas fa-tools mr-2 text-sm"])
        }"${
          _scopeId
        }></i> Settings </a>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("a", {
            href: href,
            class: ["text-xs uppercase py-3 font-bold block", [
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ]],
            onClick: navigate
          }, [
            __vite_ssr_import_3__.createVNode("i", {
              class: ["fas fa-tools mr-2 text-sm", [isActive ? 'opacity-75' : 'text-blueGray-300']]
            }, null, 2 /* CLASS */),
            __vite_ssr_import_3__.createTextVNode(" Settings ")
          ], 10 /* CLASS, PROPS */, ["href", "onClick"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/admin/tables" }, {
    default: __vite_ssr_import_3__.withCtx(({ href, navigate, isActive }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<a${
          __vite_ssr_import_4__.ssrRenderAttr("href", href)
        } class="${
          __vite_ssr_import_4__.ssrRenderClass([[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ], "text-xs uppercase py-3 font-bold block"])
        }"${
          _scopeId
        }><i class="${
          __vite_ssr_import_4__.ssrRenderClass([[isActive ? 'opacity-75' : 'text-blueGray-300'], "fas fa-table mr-2 text-sm"])
        }"${
          _scopeId
        }></i> Tables </a>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("a", {
            href: href,
            class: ["text-xs uppercase py-3 font-bold block", [
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ]],
            onClick: navigate
          }, [
            __vite_ssr_import_3__.createVNode("i", {
              class: ["fas fa-table mr-2 text-sm", [isActive ? 'opacity-75' : 'text-blueGray-300']]
            }, null, 2 /* CLASS */),
            __vite_ssr_import_3__.createTextVNode(" Tables ")
          ], 10 /* CLASS, PROPS */, ["href", "onClick"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/admin/maps" }, {
    default: __vite_ssr_import_3__.withCtx(({ href, navigate, isActive }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<a${
          __vite_ssr_import_4__.ssrRenderAttr("href", href)
        } class="${
          __vite_ssr_import_4__.ssrRenderClass([[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ], "text-xs uppercase py-3 font-bold block"])
        }"${
          _scopeId
        }><i class="${
          __vite_ssr_import_4__.ssrRenderClass([[isActive ? 'opacity-75' : 'text-blueGray-300'], "fas fa-map-marked mr-2 text-sm"])
        }"${
          _scopeId
        }></i> Maps </a>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("a", {
            href: href,
            class: ["text-xs uppercase py-3 font-bold block", [
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:'
                ]],
            onClick: navigate
          }, [
            __vite_ssr_import_3__.createVNode("i", {
              class: ["fas fa-map-marked mr-2 text-sm", [isActive ? 'opacity-75' : 'text-blueGray-300']]
            }, null, 2 /* CLASS */),
            __vite_ssr_import_3__.createTextVNode(" Maps ")
          ], 10 /* CLASS, PROPS */, ["href", "onClick"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul><!-- Divider --><hr class="my-4 md:min-w-full"><!-- Heading --><h6 class="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline"> Auth Layout Pages </h6><!-- Navigation --><ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-blueGray-700 hover: text-xs uppercase py-3 font-bold block",
    to: "/auth/login"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"${_scopeId}></i> Login `)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("i", { class: "fas fa-fingerprint text-blueGray-300 mr-2 text-sm" }),
          __vite_ssr_import_3__.createTextVNode(" Login ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-blueGray-700 hover: text-xs uppercase py-3 font-bold block",
    to: "/auth/register"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"${_scopeId}></i> Register `)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("i", { class: "fas fa-clipboard-list text-blueGray-300 mr-2 text-sm" }),
          __vite_ssr_import_3__.createTextVNode(" Register ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul><!-- Divider --><hr class="my-4 md:min-w-full"><!-- Heading --><h6 class="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline"> No Layout Pages </h6><!-- Navigation --><ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-blueGray-700 hover: text-xs uppercase py-3 font-bold block",
    to: "/landing"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"${_scopeId}></i> Landing Page `)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("i", { class: "fas fa-newspaper text-blueGray-300 mr-2 text-sm" }),
          __vite_ssr_import_3__.createTextVNode(" Landing Page ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-blueGray-700 hover: text-xs uppercase py-3 font-bold block",
    to: "/profile"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"${_scopeId}></i> Profile Page `)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("i", { class: "fas fa-user-circle text-blueGray-300 mr-2 text-sm" }),
          __vite_ssr_import_3__.createTextVNode(" Profile Page ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul><!-- Divider --><hr class="my-4 md:min-w-full"><!-- Heading --><h6 class="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline"> Documentation </h6><!-- Navigation --><ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i> Styles </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i> CSS Components </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-angular mr-2 text-blueGray-300 text-base"></i> Angular </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-js-square mr-2 text-blueGray-300 text-base"></i> Javascript </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-react mr-2 text-blueGray-300 text-base"></i> NextJS </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-react mr-2 text-blueGray-300 text-base"></i> React </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fas fa-link mr-2 text-blueGray-300 text-base"></i> Svelte </a></li><li class="inline-flex"><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus" target="_blank" class="text-blueGray-700 hover: text-sm block mb-4 no-underline font-semibold"><i class="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i> VueJS </a></li></ul></div></div></nav>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sidebar/Sidebar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sidebar/Sidebar.vue"]]);
}


// --------------------
// Request: /components/Sections/BannerCard.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_06501982 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><!-- #TODO this has a negative margin in final layout --><div class="container mx-auto"><div class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10"><div class="w-full text-center lg:w-8/12"><p class="text-4xl text-center"><span role="img" aria-label="love">😍</span></p><h3 class="font-semibold text-3xl">Do you love this Starter Kit?</h3><p class="text-lg leading-relaxed mt-4 mb-4"> Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look! </p><div class="sm:block flex flex-col mt-10"><a href="#" target="_blank" class="btn btn-emerald mr-1 mb-2"> Get started </a><a href="#" target="_blank" class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"><i class="fab fa-github text-lg mr-1"></i><span>Help With a Star</span></a></div><div class="text-center mt-16"></div></div></div></div></section>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/BannerCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/BannerCard.vue"]]);
}


// --------------------
// Request: /components/Sections/BannerIconCallouts.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d9d53043 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}><!-- #TODO section paddings top and bottom --><div class="flex flex-wrap items-center"><div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32"><div class="justify-center flex flex-wrap relative"><div class="my-4 w-full lg:w-6/12 px-4"><a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index" target="_blank"><div class="bg-red-600 shadow-lg rounded-lg text-center p-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"><p class="text-lg text-white mt-4 font-semibold">Svelte</p></div></a><a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index" target="_blank"><div class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"><p class="text-lg text-white mt-4 font-semibold">ReactJS</p></div></a><a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index" target="_blank"><div class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"><p class="text-lg text-white mt-4 font-semibold">NextJS</p></div></a></div><div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16"><a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index" target="_blank"><div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"><p class="text-lg text-white mt-4 font-semibold">JavaScript</p></div></a><a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index" target="_blank"><div class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"><p class="text-lg text-white mt-4 font-semibold">Angular</p></div></a><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index" target="_blank"><div class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"><p class="text-lg text-white mt-4 font-semibold">Vue.js</p></div></a></div></div></div><div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"><div class="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-drafting-compass text-xl"></i></div><h3 class="text-3xl mb-2 font-semibold leading-normal"> Javascript Components </h3><p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users. </p><p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> We created a set of Components that are dynamic and come to help you. </p><div class="block pb-6"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Alerts </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Dropdowns </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Menus </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Modals </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Navbars </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Popovers </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Tabs </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Tooltips </span></div><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index" target="_blank" class="font-bold text-blueGray-700 hover: ease-linear transition-all duration-150"> View all <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i></a></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/BannerIconCallouts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/BannerIconCallouts.vue"]]);
}


// --------------------
// Request: /components/Sections/FeatureImageCallout.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /assets/img/documentation.png ($id_3e8ff66e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_78096056 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Icons/IconCircle.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/img/documentation.png");


const _sfc_main = {
  components: { IconCircle: __vite_ssr_import_0__.default },
  data() {
    return {
      documentation: __vite_ssr_import_1__.default
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_circle = __vite_ssr_import_2__.resolveComponent("icon-circle")

  _push(`<section${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}><div class="container mx-auto px-4 pb-32 pt-48"><div class="items-center flex flex-wrap"><div class="w-full md:w-5/12 ml-auto px-12 md:px-4"><div class="md:pr-12">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, {
    "size-classes": "large",
    "icon-class": "fas fa-file-alt text-xl",
    "bg-color": "bg-white",
    color: " "
  }, null, _parent))
  _push(`<h3 class="text-3xl font-semibold">Complex Documentation</h3><p class="mt-4 text-lg leading-relaxed"> This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you&#39;re good to go. </p><ul class="list-none mt-6"><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blueGray-50 mr-3"><i class="fas fa-fingerprint"></i></span></div><div><h4 class=""> Built by Developers for Developers </h4></div></div></li><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blueGray-50 mr-3"><i class="fab fa-html5"></i></span></div><div><h4 class=""> Carefully crafted code for Components </h4></div></div></li><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blueGray-50 mr-3"><i class="far fa-paper-plane"></i></span></div><div><h4 class=""> Dynamic Javascript Components </h4></div></div></li></ul></div></div><div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"><img alt="..." class="max-w-full rounded-lg shadow-xl" style="${
    __vite_ssr_import_3__.ssrRenderStyle({"transform":"scale(1) perspective(1040px) rotateY(-11deg)"})
  }"${
    __vite_ssr_import_3__.ssrRenderAttr("src", $data.documentation)
  }></div></div></div></section>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/FeatureImageCallout.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/FeatureImageCallout.vue"]]);
}


// --------------------
// Request: /assets/img/documentation.png
// Parents: 
// - /components/Sections/FeatureImageCallout.vue ($id_78096056)
// Dependencies: 

// --------------------
const $id_3e8ff66e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/documentation.png";
}


// --------------------
// Request: /components/Sections/HeaderBanner.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/img/pattern_vue.png ($id_d9aa4039)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c15c1698 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/img/pattern_vue.png");


const _sfc_main = {
  data() {
    return {
      patternVue: __vite_ssr_import_1__.default
    }
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "header relative pt-16 items-center flex h-screen max-h-860-px" }, _attrs))
  }><div class="container mx-auto items-center flex flex-wrap"><div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"><div class="pt-32 sm:pt-0"><h2 class="font-semibold text-4xl text-blueGray-600"> Vue Notus - A beautiful extension for Tailwind CSS. </h2><p class="mt-4 text-lg leading-relaxed"> Vue Notus is Free and Open Source. It does not change any of the CSS from <a href="https://tailwindcss.com/?ref=creativetim" class="text-blueGray-600" target="_blank"> Tailwind CSS. </a> It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular. </p><div class="mt-12"><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index" target="_blank" class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"> Get started </a><a href="https://github.com/creativetimofficial/vue-notus?ref=vn-index" class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank"> Github Star </a></div></div></div></div><img class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"${
    __vite_ssr_import_3__.ssrRenderAttr("src", $data.patternVue)
  } alt="..."></section>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/HeaderBanner.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/HeaderBanner.vue"]]);
}


// --------------------
// Request: /assets/img/pattern_vue.png
// Parents: 
// - /components/Sections/HeaderBanner.vue ($id_c15c1698)
// Dependencies: 

// --------------------
const $id_d9aa4039 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/pattern_vue.png";
}


// --------------------
// Request: /components/Sections/LandingBanner.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bacd50eb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    __vite_ssr_import_1__.ssrRenderAttrs(_attrs)
  }><div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"><div class="absolute top-0 w-full h-full bg-center bg-cover" style="${
    __vite_ssr_import_1__.ssrRenderStyle({"background-image":"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"})
  }"><span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span></div><div class="container relative mx-auto"><div class="items-center flex flex-wrap"><div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"><div class="pr-12"><h1 class="text-white font-semibold text-5xl"> Your story starts with us. </h1><p class="mt-4 text-lg text-blueGray-200"> This is a simple example of a Landing Page you can build using Vue Notus. It features multiple CSS components based on the Tailwind CSS design system. </p></div></div></div></div><div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="${
    __vite_ssr_import_1__.ssrRenderStyle({"transform":"translateZ(0)"})
  }"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/LandingBanner.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/LandingBanner.vue"]]);
}


// --------------------
// Request: /components/Sections/ProductFeatureCallouts.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_30bd7037 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Icons/IconCircle.vue");

const _sfc_main = {
  components: { IconCircle: __vite_ssr_import_1__.default }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_circle = __vite_ssr_import_2__.resolveComponent("icon-circle")

  _push(`<!--[--><!-- #TODO this one has negative margin for the section wrapper --><section${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "header relative pt-16 items-center flex h-screen max-h-860-px" }, _attrs))}><div class="container mx-auto"><div class="flex flex-wrap items-center"><div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"><img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg"><blockquote class="relative p-8 mb-4"><svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px"><polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current"></polygon></svg><h4 class="text-xl font-bold text-white"> Great for your awesome project </h4><p class="text-md font-light mt-2 text-white"> Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages. </p></blockquote></div></div><div class="w-full md:w-6/12 px-4"><div class="flex flex-wrap"><div class="w-full md:w-6/12 px-4"><div class="relative flex flex-col mt-4"><div class="px-4 py-5 flex-auto">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, {
    "icon-class": "fas fa-sitemap",
    "bg-color": "bg-white",
    color: ""
  }, null, _parent))
  _push(`<h6 class="text-xl mb-1 font-semibold">CSS Components</h6><p class="mb-4"> Vue Notus comes with a huge number of Fully Coded CSS components. </p></div></div><div class="relative flex flex-col min-w-0"><div class="px-4 py-5 flex-auto">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, {
    "icon-class": "fas fa-drafting-compass",
    "bg-color": "bg-white",
    color: ""
  }, null, _parent))
  _push(`<h6 class="text-xl mb-1 font-semibold"> JavaScript Components </h6><p class="mb-4"> We also feature many dynamic components for React, NextJS, Vue and Angular. </p></div></div></div><div class="w-full md:w-6/12 px-4"><div class="relative flex flex-col min-w-0 mt-4"><div class="px-4 py-5 flex-auto">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, {
    "icon-class": "fas fa-newspaper",
    "bg-color": "bg-white",
    color: ""
  }, null, _parent))
  _push(`<h6 class="text-xl mb-1 font-semibold">Pages</h6><p class="mb-4"> This extension also comes with 3 sample pages. They are fully coded so you can start working instantly. </p></div></div><div class="relative flex flex-col min-w-0"><div class="px-4 py-5 flex-auto">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icon_circle, {
    "icon-class": "fas fa-file-alt",
    "bg-color": "bg-white",
    color: ""
  }, null, _parent))
  _push(`<h6 class="text-xl mb-1 font-semibold">Documentation</h6><p class="mb-4"> Built by developers for developers. You will love how easy is to to work with Vue Notus. </p></div></div></div></div></div></div></div></section><!--]-->`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/ProductFeatureCallouts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/ProductFeatureCallouts.vue"]]);
}


// --------------------
// Request: /components/Sections/ProductFeatureCollage.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Icons/IconCircle.vue ($id_c4a76d26)
// - /assets/img/component-btn.png ($id_c05a24e6)
// - /assets/img/component-profile-card.png ($id_efc24850)
// - /assets/img/component-info-card.png ($id_b7e08d5f)
// - /assets/img/component-info-2.png ($id_7caf8d1d)
// - /assets/img/component-menu.png ($id_408c3bb2)
// - /assets/img/component-btn-pink.png ($id_2a01cf6f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fa0e81f1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Icons/IconCircle.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/img/component-btn.png");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/img/component-profile-card.png");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/img/component-info-card.png");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/img/component-info-2.png");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/img/component-menu.png");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/img/component-btn-pink.png");


const _sfc_main = {
  components: { IconCircle: __vite_ssr_import_1__.default },
  data() {
    return {
      componentBtn: __vite_ssr_import_2__.default,
      componentProfileCard: __vite_ssr_import_3__.default,
      componentInfoCard: __vite_ssr_import_4__.default,
      componentInfo2: __vite_ssr_import_5__.default,
      componentMenu: __vite_ssr_import_6__.default,
      componentBtnPink: __vite_ssr_import_7__.default
    }
  }
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_circle = __vite_ssr_import_8__.resolveComponent("icon-circle")

  _push(`<section${__vite_ssr_import_9__.ssrRenderAttrs(_attrs)}><div class="container mx-auto overflow-hidden pb-20"><div class="flex flex-wrap items-center"><div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_icon_circle, {
    "icon-class": "fas fa-sitemap",
    "bg-color": "bg-white",
    color: "",
    "size-classes": "large"
  }, null, _parent))
  _push(`<h3 class="text-3xl mb-2 font-semibold leading-normal"> CSS Components </h3><p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours. </p><div class="block pb-6"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Buttons </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Inputs </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Labels </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Menus </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Navbars </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Pagination </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Progressbars </span><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white uppercase last:mr-0 mr-2 mt-2"> Typography </span></div><a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index" target="_blank" class="font-bold text-blueGray-700 hover: ease-linear transition-all duration-150"> View All <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i></a></div><div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32"><div class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentBtn)
  } class="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentProfileCard)
  } class="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentInfoCard)
  } class="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentInfo2)
  } class="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentMenu)
  } class="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"><img alt="..."${
    __vite_ssr_import_9__.ssrRenderAttr("src", $data.componentBtnPink)
  } class="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"></div></div></div></div></section>`)
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/ProductFeatureCollage.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/ProductFeatureCollage.vue"]]);
}


// --------------------
// Request: /assets/img/component-btn.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_c05a24e6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-btn.png";
}


// --------------------
// Request: /assets/img/component-profile-card.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_efc24850 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-profile-card.png";
}


// --------------------
// Request: /assets/img/component-info-card.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_b7e08d5f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-info-card.png";
}


// --------------------
// Request: /assets/img/component-info-2.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_7caf8d1d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-info-2.png";
}


// --------------------
// Request: /assets/img/component-menu.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_408c3bb2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-menu.png";
}


// --------------------
// Request: /assets/img/component-btn-pink.png
// Parents: 
// - /components/Sections/ProductFeatureCollage.vue ($id_fa0e81f1)
// Dependencies: 

// --------------------
const $id_2a01cf6f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/component-btn-pink.png";
}


// --------------------
// Request: /components/Sections/SectionFeatureThreeup.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/img/login.jpg ($id_6b545c95)
// - /assets/img/profile.jpg ($id_03a7bfa3)
// - /assets/img/landing.jpg ($id_b3241dc0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0c1274ab = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/img/login.jpg");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/img/profile.jpg");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/img/landing.jpg");


const _sfc_main = {
  data() {
    return {
      login: __vite_ssr_import_1__.default,
      profile: __vite_ssr_import_2__.default,
      landing: __vite_ssr_import_3__.default
    }
  }
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_4__.resolveComponent("NuxtLink")

  _push(`<section${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "block relative z-1 bg-blueGray-600" }, _attrs))}><!-- #TODO this has negative margin for the demo section angle overlap --><div class="container mx-auto"><div class="justify-center flex flex-wrap"><div class="w-full lg:w-12/12 px-4 -mt-24"><div class="flex flex-wrap"><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center">Login Page</h5>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"${
          _scopeId
        }><img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg"${
          __vite_ssr_import_5__.ssrRenderAttr("src", $data.login)
        }${
          _scopeId
        }></div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", { class: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" }, [
            __vite_ssr_import_4__.createVNode("img", {
              alt: "...",
              class: "align-middle border-none max-w-full h-auto rounded-lg",
              src: $data.login
            }, null, 8 /* PROPS */, ["src"])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center"> Profile Page </h5>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"${
          _scopeId
        }><img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg"${
          __vite_ssr_import_5__.ssrRenderAttr("src", $data.profile)
        }${
          _scopeId
        }></div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", { class: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" }, [
            __vite_ssr_import_4__.createVNode("img", {
              alt: "...",
              class: "align-middle border-none max-w-full h-auto rounded-lg",
              src: $data.profile
            }, null, 8 /* PROPS */, ["src"])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center"> Landing Page </h5>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, { to: "/landing" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"${
          _scopeId
        }><img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg"${
          __vite_ssr_import_5__.ssrRenderAttr("src", $data.landing)
        }${
          _scopeId
        }></div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", { class: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" }, [
            __vite_ssr_import_4__.createVNode("img", {
              alt: "...",
              class: "align-middle border-none max-w-full h-auto rounded-lg",
              src: $data.landing
            }, null, 8 /* PROPS */, ["src"])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></div></div></section>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/SectionFeatureThreeup.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/SectionFeatureThreeup.vue"]]);
}


// --------------------
// Request: /assets/img/login.jpg
// Parents: 
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// Dependencies: 

// --------------------
const $id_6b545c95 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/login.jpg";
}


// --------------------
// Request: /assets/img/profile.jpg
// Parents: 
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// Dependencies: 

// --------------------
const $id_03a7bfa3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/profile.jpg";
}


// --------------------
// Request: /assets/img/landing.jpg
// Parents: 
// - /components/Sections/SectionFeatureThreeup.vue ($id_0c1274ab)
// Dependencies: 

// --------------------
const $id_b3241dc0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/img/landing.jpg";
}


// --------------------
// Request: /components/Sections/SectionTextCenter.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f99177a0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "justify-center text-center flex flex-wrap mt-24" }, _attrs))}><div class="w-full md:w-6/12 px-12 md:px-4"><h2 class="font-semibold text-4xl">Beautiful Example Pages</h2><p class="text-lg leading-relaxed mt-4 mb-4"> Vue Notus is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them. </p></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/SectionTextCenter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/SectionTextCenter.vue"]]);
}


// --------------------
// Request: /components/Sections/SectionWrapperSlantBkg.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs ($id_ff6a144c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c7dd4299 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "mt-48 md:mt-40 pb-40 relative bg-blueGray-100" }, _attrs))
  }><div class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style="${
    __vite_ssr_import_2__.ssrRenderStyle({"transform":"translateZ(0)"})
  }"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div>#TODO slot</div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Sections/SectionWrapperSlantBkg.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/components/Sections/SectionWrapperSlantBkg.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/root-component.mjs
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// --------------------
const $id_63f772dc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/root-component.mjs ($id_63f772dc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f720929d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_App = __vite_ssr_import_0__.resolveComponent("App")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_App, _attrs, null, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/app-component.mjs
// Parents: 
// - /Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_add12565)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_a81e5cd3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/app-component.mjs ($id_a81e5cd3)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /app.vue?vue&type=style&index=0&lang.scss ($id_64c6d174)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  head: {
    script: [
      {
        async: true,
        src: "https://kit.fontawesome.com/4400228d2f.js",
      },
    ],
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/app.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/cherylcarpenter/nuxt3-app/app.vue"]]);
}


// --------------------
// Request: /app.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_64c6d174 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "";
}


const __modules__ = {
 '/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry': $id_add12565,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/legacy.mjs': $id_93532f58,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue': $id_ab1702f3,
 '/node_modules/@nuxt/design/dist/index.mjs': $id_0787a664,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/@vue/reactivity/dist/reactivity.cjs.js': $id_85c34493,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/css.mjs': $id_269feab9,
 '/assets/scss/tailwind.scss': $id_9873bf8f,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/plugins/server.mjs': $id_c42253cf,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/meta.config.mjs': $id_7bd26bda,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/child.vue': $id_0a2c1f73,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/layouts.mjs': $id_6b908fc4,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/routes.mjs': $id_4f572b41,
 '/pages/home.vue': $id_354b890e,
 '/pages/index.vue': $id_cca58e97,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/components.mjs': $id_ff6a144c,
 '/components/SectionLoader.vue': $id_d897e4b5,
 '/components/Sections/FeatureThreeBoxes.vue': $id_a66be432,
 '/components/Cards/CardIconParagraph.vue': $id_ebbef192,
 '/components/Icons/IconCircle.vue': $id_c4a76d26,
 '/components/Cards/cardIconParagraph.scss': $id_b7e3c6d0,
 '/components/Tutorial.vue': $id_0df8973a,
 '/components/Atoms/Typography.vue': $id_15338482,
 '/components/Cards/CardBarChart.vue': $id_252f2202,
 '/node_modules/chart.js/auto/auto.esm.js': $id_0306cab9,
 '/node_modules/chart.js/dist/chart.esm.js': $id_a3bd23f4,
 '/node_modules/chart.js/dist/chunks/helpers.segment.js': $id_031d4f38,
 '/components/Cards/CardLineChart.vue': $id_87067cd6,
 '/components/Cards/CardPageVisits.vue': $id_bbe53dbd,
 '/components/Cards/CardProfile.vue': $id_30b9deef,
 '/assets/img/team-2-800x800.jpg': $id_0e531dc1,
 '/components/Cards/CardSettings.vue': $id_f88165ee,
 '/components/Cards/CardSocialTraffic.vue': $id_2438621c,
 '/components/Cards/CardStats.vue': $id_6b99969c,
 '/components/Cards/CardTable.vue': $id_18541dc0,
 '/assets/img/bootstrap.jpg': $id_8bcd8088,
 '/assets/img/angular.jpg': $id_74f4d0d4,
 '/assets/img/sketch.jpg': $id_7db3424a,
 '/assets/img/react.jpg': $id_80331204,
 '/assets/img/vue.jpg': $id_dbc905c8,
 '/assets/img/team-1-800x800.jpg': $id_cf922e68,
 '/assets/img/team-3-800x800.jpg': $id_132c203c,
 '/assets/img/team-4-470x470.png': $id_4268e084,
 '/components/Dropdowns/TableDropdown.vue': $id_b736b16e,
 '/node_modules/@popperjs/core/lib/index.js': $id_8bcf6136,
 '/components/Footers/Footer.vue': $id_62b85294,
 '/components/Footers/FooterAdmin.vue': $id_229a29d8,
 '/components/Footers/FooterSmall.vue': $id_1581b5f4,
 '/components/Dropdowns/IndexDropdown.vue': $id_83b2d047,
 '/components/Dropdowns/NotificationDropdown.vue': $id_5f02c192,
 '/components/Dropdowns/PagesDropdown.vue': $id_6b3d410a,
 '/components/Dropdowns/UserDropdown.vue': $id_2603491a,
 '/components/Headers/HeaderStats.vue': $id_1efdd037,
 '/components/Maps/MapExample.vue': $id_717c0b64,
 '/components/Navbars/AdminNavbar.vue': $id_a6c1bbe1,
 '/components/Navbars/AuthNavbar.vue': $id_30a49698,
 '/components/Navbars/IndexNavbar.vue': $id_352c6481,
 '/components/Sidebar/Sidebar.vue': $id_c861deab,
 '/components/Sections/BannerCard.vue': $id_06501982,
 '/components/Sections/BannerIconCallouts.vue': $id_d9d53043,
 '/components/Sections/FeatureImageCallout.vue': $id_78096056,
 '/assets/img/documentation.png': $id_3e8ff66e,
 '/components/Sections/HeaderBanner.vue': $id_c15c1698,
 '/assets/img/pattern_vue.png': $id_d9aa4039,
 '/components/Sections/LandingBanner.vue': $id_bacd50eb,
 '/components/Sections/ProductFeatureCallouts.vue': $id_30bd7037,
 '/components/Sections/ProductFeatureCollage.vue': $id_fa0e81f1,
 '/assets/img/component-btn.png': $id_c05a24e6,
 '/assets/img/component-profile-card.png': $id_efc24850,
 '/assets/img/component-info-card.png': $id_b7e08d5f,
 '/assets/img/component-info-2.png': $id_7caf8d1d,
 '/assets/img/component-menu.png': $id_408c3bb2,
 '/assets/img/component-btn-pink.png': $id_2a01cf6f,
 '/components/Sections/SectionFeatureThreeup.vue': $id_0c1274ab,
 '/assets/img/login.jpg': $id_6b545c95,
 '/assets/img/profile.jpg': $id_03a7bfa3,
 '/assets/img/landing.jpg': $id_b3241dc0,
 '/components/Sections/SectionTextCenter.vue': $id_f99177a0,
 '/components/Sections/SectionWrapperSlantBkg.vue': $id_c7dd4299,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/root-component.mjs': $id_63f772dc,
 '/node_modules/nuxt3/dist/pages/runtime/root.vue': $id_f720929d,
 '/@id/__x00__virtual:/Users/cherylcarpenter/nuxt3-app/nuxt-build/app-component.mjs': $id_a81e5cd3,
 '/app.vue': $id_2b46e842,
 '/app.vue?vue&type=style&index=0&lang.scss': $id_64c6d174
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: {} }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  const importMeta = { url, hot: { accept() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('/Users/cherylcarpenter/nuxt3-app/node_modules/nuxt3/dist/app/entry')