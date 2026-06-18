import { getSettings } from "~/api";

import { getPrLabels } from "../getPrLabels";

export const getPrStatus = async () => {
  const labels = getPrLabels();
  // GitHub's React PR header exposes the state via `data-status`; the legacy
  // `.State--*` classes are kept as a fallback for the old UI.
  const isMerged = !!document.querySelector(
    ".State.State--merged, [data-status='merged']",
  );
  const isDraft = !!document.querySelector(
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
