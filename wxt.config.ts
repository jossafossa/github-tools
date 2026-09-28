import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "./src",
  manifest: ({ browser }) => ({
    name: "GitHub Tools",
    description: "Handy tweaks for GitHub pull requests.",
    permissions: ["storage"],
    // Stable ID so Firefox treats each new build as an update, not a new add-on
    ...(browser === "firefox" && {
      browser_specific_settings: {
        gecko: { id: "github-tools@jossafossa" },
      },
    }),
  }),
});
