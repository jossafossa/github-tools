import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "./src",
  manifest: {
    name: "GitHub Tools",
    description: "Handy tweaks for GitHub pull requests.",
    permissions: ["storage"],
  },
});
