import { defineConfig } from "vite";
import type { PluginOption } from "vite";
import marko from "@marko/run/vite";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 0, // see: https://github.com/rollup/rollup/issues/5008
      },
    },
  },
  plugins: [
    marko() as PluginOption[],
  ],
});
