import { defineConfig } from "vite";

export default defineConfig({
  base: "/Touch/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
