import { log } from "~/api";

import "./loadLinks.module.scss";

export const loadLinks = () => {
  if (document.body.dataset.ghtLinksLoaded) return;

  document.body.dataset.ghtLinksLoaded = "true";
  log(`Loaded Links`);
};
