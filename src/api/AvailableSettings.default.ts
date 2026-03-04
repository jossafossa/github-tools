import type { AvailableSettings } from "./AvailableSettings.types";

export const DEFAULT_SETTINGS: AvailableSettings = {
  // Copy features
  copyButtonCommitHashes: true,
  copyButtonFiles: true,
  copyButtonPrNumbers: true,
  copyButtonRebaseSummaries: true,

  // UI tweaks
  greyOutDependabot: true,
  greyOutDrafts: true,
  showObviousDrafts: true,
  showAbsoluteTime: true,

  // Document titles
  documentTitleMergedPrefix: "[MERGED]",
  documentTitleTestPrefix: "[TEST]",

  // Merge protection
  disableMergeAll: true,
  disableMergeForNonOwners: true,
  disableMergeWithFixups: true,

  // Navigation
  addActionLinks: true,

  // Shortcuts
  shortcutCopyCurrentBranch: "CMD+SHIFT+C",
  shortcutCopyPrNumber: "CMD+SHIFT+P",

  // Debug
  enableDebugLogging: false,

  // User
  userGithubUsername: "github-tools",
  userTestLabels: "test",

  // Localization
  language: "en",
};

export const SETTINGS_KEY = "settings";
