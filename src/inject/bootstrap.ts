import { log } from "@/api";

import {
  loadCopyButton,
  loadDisableMerge,
  loadDocumentTitle,
  loadGeneral,
  loadLinks,
  loadShortcuts,
} from "./scripts";

export const bootstrap = async () => {
  log("injecting scripts");

  loadDisableMerge();
  loadCopyButton();
  loadDocumentTitle();
  loadShortcuts();
  loadLinks();
  loadGeneral();
};
