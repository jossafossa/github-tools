import type { AvailableSettings } from "./AvailableSettings.types";

export const DEFAULT_SETTINGS: AvailableSettings = {
  copyButtons: {
    commitHashes: true,
    prNumbers: true,
    rebaseSummaries: true,
  },
  debug: {
    showLogs: false,
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
  userSettings: {
    testLabel: "test",
    username: "github-tools",
  },
};

export const SETTINGS_KEY = "settings";
