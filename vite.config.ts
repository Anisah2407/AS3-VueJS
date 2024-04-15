import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import purgeCSS from "@fullhuman/postcss-purgecss";

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        purgeCSS({
          content: ["./index.html", "./src/**/*.vue"],
          safelist: ["bg-blue-500"], // Safelist any classes you use dynamically or through JavaScript
        }),
      ],
    },
  },
});
