// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
    },
  },
});

export default defineNuxtConfig({
  app: {
    head: {
      title: "Kitsada Butnam - Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Kitsada Butnam is a highly skilled developer with a passion for building innovative web applications.",
        },
        { name: "author", content: "Kitsada Butnam" },
        { property: "og:title", content: "Kitsada Butnam - Portfolio" },
        {
          property: "og:description",
          content:
            "Kitsada Butnam is a highly skilled developer with a passion for building innovative web applications.",
        },
        { property: "og:image", content: "/your-profile-image.jpg" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Kitsada Butnam - Portfolio" },
        {
          property: "twitter:description",
          content:
            "Kitsada Butnam is a highly skilled developer with a passion for building innovative web applications.",
        },
        { property: "twitter:image", content: "/your-profile-image.jpg" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
      ],
    },
  },
  css: ["@/assets/main.css", "bootstrap/dist/css/bootstrap.min.css"],
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "nuxt-aos",
  ],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          prefix: "p",
          darkModeSelector: ".dark",
          cssLayer: false,
        },
      },
      ripple: true,
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",  
  },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  image: {
    dir: "public",
  },
  plugins: ['~/plugins/toastService.ts'],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
