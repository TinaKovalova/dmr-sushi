import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import VitePluginWebpAndPath from "vite-plugin-webp-and-path";

export default defineConfig({
  // base:"/dmr-sushi/",
  plugins: [
    injectHTML(),
    VitePluginWebpAndPath()
  ],
});



