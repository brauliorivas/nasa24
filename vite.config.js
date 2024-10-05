// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        story: resolve(__dirname, "story.html"),
        learn: resolve(__dirname, "learn.html"),
        game: resolve(__dirname, "game.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
