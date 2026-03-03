import { bootstrap } from "~/inject";

export default defineContentScript({
  matches: ["*://*.github.com/*"],
  main() {
    bootstrap();
  },
});
