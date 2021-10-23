import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  googleFonts: {
    display: "swap",
    families: {
      "Playfair+Display": {
        wght: [400, 500, 600, 700, 800, 900],
      },
      Lato: {
        wght: [100, 300, 400, 700, 900],
      },
      "Source+Sans+Pro": {
        wght: [200, 300, 400, 600, 700, 900],
      },
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
