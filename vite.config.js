import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Touch/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        avacha: resolve(__dirname, "avacha.html"),
      },
    },
  },
});
