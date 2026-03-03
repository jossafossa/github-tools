import { getSettings, log } from "~/api";

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

  setInterval(async () => {
    const { general } = await getSettings();
    loadDisableMerge();
    loadCopyButton();
    loadDocumentTitle();
    loadShortcuts();
    loadLinks();
    loadGeneral();
  }, 100);
};
