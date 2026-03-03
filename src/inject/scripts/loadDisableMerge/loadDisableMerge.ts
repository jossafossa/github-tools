import { getSettings, log } from "~/api";

import "./loadDisableMerge.scss";

const getMessagesElement = () => {
  const messageContainer = document.querySelector(".merge-pr");
  const messages = document.createElement("ght-messages");

  messageContainer?.insertAdjacentElement("afterend", messages);

  return messages;
};

export const loadDisableMerge = async () => {
  if (document.body.dataset.disableMerge) return;
  log(`Loaded DisableMerge`);

  const { disableMerge } = await getSettings();
  const messages = getMessagesElement();

  const insertMessage = (message: string) => {
    messages.messages = [message];
  };

  if (disableMerge) {
    document.body.classList.add("ght-disable-merge");
    insertMessage("Merge is disabled by settings");
  }

  document.body.dataset.disableMerge = "true";
};
