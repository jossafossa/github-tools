import { type AvailableSettings, log } from "~/api";

import "./loadShortcuts.module.scss";

export const loadShortcuts = (settings: AvailableSettings) => {
  log(`Loaded Shortcuts`);
  
  // TODO: Implement keyboard shortcuts using settings.shortcutCopyCurrentBranch and settings.shortcutCopyPrNumber
};