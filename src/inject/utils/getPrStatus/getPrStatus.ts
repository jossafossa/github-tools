import { getSettings } from "@/api";

import { getPrLabels } from "../getPrLabels";

export const getPrStatus = async () => {
  const labels = getPrLabels();
  const isMerged = !!document.querySelector(".State.State--merged");
  const { documentTitle, userSettings } = await getSettings();

  const testLabels = userSettings.testLabels.split(";") || [];

  if (testLabels.some((label) => labels.includes(label))) {
    return documentTitle.test;
  }

  if (isMerged) {
    return documentTitle.merged;
  }
};
