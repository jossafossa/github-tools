import { log } from "@/api";
import { getPrStatus } from "@/inject/utils";

export const loadDocumentTitle = async () => {
  log(`Loaded DocumentTitle`);

  const status = await getPrStatus();

  if (!status) return;

  document.title = `${status}${document.title}`;
};
