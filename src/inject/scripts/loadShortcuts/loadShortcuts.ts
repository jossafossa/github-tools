import { type AvailableSettings, log } from "~/api";

import "./loadShortcuts.module.scss";

export const loadShortcuts = (settings: AvailableSettings) => {
  if (document.body.dataset.ghtShortcutsLoaded) return;

  document.body.dataset.ghtShortcutsLoaded = "true";
  log(`Loaded Shortcuts`);
};
