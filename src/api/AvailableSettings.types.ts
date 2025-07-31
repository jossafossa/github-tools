export type AvailableSettings = {
  copyButtons: {
    commitHashes: boolean;
    fileNames: boolean;
    rebaseSummaries: boolean;
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
};
