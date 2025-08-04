export type AvailableSettings = {
  copyButtons: {
    commitHashes: boolean;
    prNumbers: boolean;
    rebaseSummaries: boolean;
  };
  debug: {
    showLogs: boolean;
  };
  disableMerge: {
    hasFixupsToSquash: boolean;
    notOwner: boolean;
    override: boolean;
  };
  documentTitle: {
    merged: string;
    test: string;
  };
  general: {
    greyOutDependabot: boolean;
    greyOutDrafts: boolean;
    obviousDrafts: boolean;
    showAbsoluteTime: boolean;
  };
  links: {
    actions: boolean;
  };
  shortcuts: {
    copyCurrentBranch: string;
    copyPrNumber: string;
  };
  userSettings: {
    testLabels: string;
    username: string;
  };
};
