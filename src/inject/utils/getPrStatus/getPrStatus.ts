import { getSettings } from "~/api";

import { getPrLabels } from "../getPrLabels";

export const getPrStatus = async () => {
  const labels = getPrLabels();
  const isMerged = !!document.querySelector(".State.State--merged");
  const { userTestLabels, documentTitleTestPrefix, documentTitleMergedPrefix } =
    await getSettings();

  const testLabels = userTestLabels.split(",") || [];

  if (testLabels.some((label) => labels.includes(label))) {
    return documentTitleTestPrefix;
  }

  if (isMerged) {
    return documentTitleMergedPrefix;
  }
};
