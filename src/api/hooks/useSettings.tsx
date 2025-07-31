import type { AvailableSettings } from "../AvailableSettings.types";

import { useExtensionStorage } from "./useExtensionStorage";

const DEFAULT_SETTINGS: AvailableSettings = {
  copyButtons: {
    commitHashes: true,
    fileNames: true,
    rebaseSummaries: true,
  },
  disableMerge: {
    hasFixupsToSquash: true,
    notOwner: true,
    override: true,
  },
  documentTitle: {
    merged: "[MERGED]",
    test: "[TEST]",
  },
  general: {
    greyOutDependabot: true,
    greyOutDrafts: true,
    obviousDrafts: true,
    showAbsoluteTime: true,
  },
  links: {
    actions: true,
  },
  shortcuts: {
    copyCurrentBranch: "CMD+SHIFT+C",
    copyPrNumber: "CMD+SHIFT+C",
  },
};

const SETTINGS_KEY = "settings";

export const useSettings = () => {
  return useExtensionStorage<AvailableSettings>(SETTINGS_KEY, DEFAULT_SETTINGS);
};
