export type AvailableSettings = {
  // Copy features
  copyButtonCommitHashes: boolean;
  copyButtonFiles: boolean;
  copyButtonPrNumbers: boolean;
  copyButtonRebaseSummaries: boolean;

  // UI tweaks
  greyOutDependabot: boolean;
  greyOutDrafts: boolean;
  showObviousDrafts: boolean;
  showAbsoluteTime: boolean;

  // Document titles
  documentTitleMergedPrefix: string;
  documentTitleTestPrefix: string;
  documentTitleDraftPrefix: string;

  // Merge protection
  disableMergeAll: boolean;
  disableMergeForNonOwners: boolean;
  disableMergeWithFixups: boolean;

  // Navigation
  addActionLinks: boolean;

  // Shortcuts
  shortcutCopyCurrentBranch: string;
  shortcutCopyPrNumber: string;

  // Debug
  enableDebugLogging: boolean;

  // User
  userGithubUsername: string;
  userTestLabels: string;

  // Localization
  language: string;
};
