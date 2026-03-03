import { log } from "~/api";
import { getPrStatus, SELECTORS } from "../../utils";

export const loadDocumentTitle = async () => {
  if (document.body.dataset.ghtDocumentTitleInitialized) return;

  log(`Loaded DocumentTitle`);

  const status = await getPrStatus();

  console.log({ status });

  if (!status) return;

  document.title = `${status}${document.title}`;

  const title = document.querySelector(SELECTORS.PAGE_TITLE);

  if (!title) return;

  console.log(`${status} ${title.innerHTML}`);
  title.innerHTML = `${status} ${title.innerHTML}`;

  document.body.dataset.ghtDocumentTitleInitialized = "true";
};
