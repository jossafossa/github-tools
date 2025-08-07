import { type AvailableSettings, getSettings, log } from "@/api";

import "./loadGeneral.scss";

export const loadGeneral = async () => {
  const { general } = await getSettings();

  const classes = new Map<keyof AvailableSettings["general"], string>([
    ["greyOutDependabot", "ght-grey-out-dependabot"],
    ["greyOutDrafts", "ght-grey-out-drafts"],
    ["obviousDrafts", "ght-obvious-drafts"],
    ["showAbsoluteTime", "ght-show-absolute-time"],
  ]);

  for (const [setting, className] of classes) {
    if (general[setting]) {
      document.body.classList.add(className);
    }
  }

  log(`Loaded General`);
};
