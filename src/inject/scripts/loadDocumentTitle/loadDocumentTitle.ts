import { type AvailableSettings, log } from "~/api";
import { getPrStatus, SELECTORS } from "../../utils";

export const loadDocumentTitle = async (settings: AvailableSettings) => {
  if (document.body.dataset.ghtDocumentTitleInitialized) return;

  const status = await getPrStatus();

  if (!status) return;

  // Use the custom prefix from settings based on the status
  let prefix = status;
  if (status.includes("MERGED") && settings.documentTitleMergedPrefix) {
    prefix = settings.documentTitleMergedPrefix;
  } else if (status.includes("TEST") && settings.documentTitleTestPrefix) {
    prefix = settings.documentTitleTestPrefix;
  } else if (status.includes("DRAFT") && settings.documentTitleDraftPrefix) {
    prefix = settings.documentTitleDraftPrefix;
  }

  document.title = `${prefix}${document.title}`;

  const title = document.querySelector(SELECTORS.PAGE_TITLE);

  if (!title) return;

  title.innerHTML = `${prefix} ${title.innerHTML}`;

  document.body.dataset.ghtDocumentTitleInitialized = "true";
  log(`Loaded DocumentTitle`);
};
