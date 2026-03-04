import { type AvailableSettings, log } from "~/api";

import "./loadGeneral.scss";

export const loadGeneral = (settings: AvailableSettings) => {
  if (document.body.dataset.ghtGeneralLoaded) return;
  log(`Loaded General`);

  const classes = new Map<keyof AvailableSettings, string>([
    ["greyOutDependabot", "ght-grey-out-dependabot"],
    ["greyOutDrafts", "ght-grey-out-drafts"],
    ["showObviousDrafts", "ght-obvious-drafts"],
    ["showAbsoluteTime", "ght-show-absolute-time"],
  ]);

  for (const [setting, className] of classes) {
    if (settings[setting]) {
      if (document.body.classList.contains(className)) continue;
      document.body.classList.add(className);
    }
  }

  document.body.dataset.ghtGeneralLoaded = "true";
};
