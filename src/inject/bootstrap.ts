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
    const settings = await getSettings();
    
    // Always load general UI enhancements
    loadGeneral(settings);
    
    // Load features based on settings
    if (settings.copyButtonCommitHashes || settings.copyButtonFiles || 
        settings.copyButtonPrNumbers || settings.copyButtonRebaseSummaries) {
      loadCopyButton(settings);
    }
    
    if (settings.disableMergeAll || settings.disableMergeForNonOwners || settings.disableMergeWithFixups) {
      loadDisableMerge(settings);
    }
    
    if (settings.documentTitleMergedPrefix || settings.documentTitleTestPrefix) {
      loadDocumentTitle(settings);
    }
    
    if (settings.shortcutCopyCurrentBranch || settings.shortcutCopyPrNumber) {
      loadShortcuts(settings);
    }
    
    if (settings.addActionLinks) {
      loadLinks();
    }
  }, 100);
};
