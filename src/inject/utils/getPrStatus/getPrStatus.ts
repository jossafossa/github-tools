import { getSettings } from "~/api";

import { getPrLabels } from "../getPrLabels";

export const getPrStatus = async () => {
  const labels = getPrLabels();
  // Scope the status lookup to the PR header. Querying the whole document also
  // matches merged/draft badges rendered inside comments (e.g. a comment
  // referencing a merged/draft ticket), which wrongly set the title prefix.
  const header = document.querySelector(
    "[data-component='PageHeader.Description']",
  );
  // GitHub's React PR header exposes the state via `data-status`; the legacy
  // `.State--*` classes are kept as a fallback for the old UI.
  const isMerged = !!header?.querySelector(
    ".State.State--merged, [data-status='merged']",
  );
  const isDraft = !!header?.querySelector(
    ".State.State--draft, [data-status='draft']",
  );
  const {
    userTestLabels,
    documentTitleTestPrefix,
    documentTitleMergedPrefix,
    documentTitleDraftPrefix,
  } = await getSettings();

  const testLabels = userTestLabels.split(",") || [];

  if (testLabels.some((label) => labels.includes(label))) {
    return documentTitleTestPrefix;
  }

  if (isMerged) {
    return documentTitleMergedPrefix;
  }

  if (isDraft) {
    return documentTitleDraftPrefix;
  }
};
