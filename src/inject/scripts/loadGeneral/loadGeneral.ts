import { type AvailableSettings, getSettings, log } from "~/api";

import "./loadGeneral.scss";

export const loadGeneral = async () => {
  if (document.body.dataset.ghtGeneralLoaded) return;
  log(`Loaded General`);

  const { general } = await getSettings();

  const classes = new Map<keyof AvailableSettings["general"], string>([
    ["greyOutDependabot", "ght-grey-out-dependabot"],
    ["greyOutDrafts", "ght-grey-out-drafts"],
    ["obviousDrafts", "ght-obvious-drafts"],
    ["showAbsoluteTime", "ght-show-absolute-time"],
  ]);

  for (const [setting, className] of classes) {
    if (general[setting]) {
      if (document.body.classList.contains(className)) continue;
      document.body.classList.add(className);
    }
  }

  document.body.dataset.ghtGeneralLoaded = "true";
};
