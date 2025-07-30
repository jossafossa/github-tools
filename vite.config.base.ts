import { type ManifestV3Export } from "@crxjs/vite-plugin";
import preact from "@preact/preset-vite";
import { resolve } from "path";
import { type BuildOptions, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { crxI18n, stripDevIcons } from "./custom-vite-plugins";
import devManifest from "./manifest.dev.json";
import manifest from "./manifest.json";
import pkg from "./package.json";

const isDev = process.env.__DEV__ === "true";
// set this flag to true, if you want localization support
const localize = false;

export const baseManifest = {
  ...manifest,
  version: pkg.version,
  ...(isDev ? devManifest : ({} as ManifestV3Export)),
  ...(localize
    ? {
        default_locale: "en",
        description: "__MSG_extDescription__",
        name: "__MSG_extName__",
      }
    : {}),
} as ManifestV3Export;

export const baseBuildOptions: BuildOptions = {
  emptyOutDir: !isDev,
  sourcemap: isDev,
};

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    preact(),
    stripDevIcons(isDev),
    crxI18n({ localize, src: "./src/locales" }),
  ],
  publicDir: resolve(__dirname, "public"),
});
