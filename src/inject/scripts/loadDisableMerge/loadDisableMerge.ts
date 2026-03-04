import { type AvailableSettings, log } from "~/api";

import "./loadDisableMerge.scss";

const getMessagesElement = () => {
  const messageContainer = document.querySelector(".merge-pr");
  const messages = document.createElement("ght-messages");

  messageContainer?.insertAdjacentElement("afterend", messages);

  return messages;
};

export const loadDisableMerge = (settings: AvailableSettings) => {
  if (document.body.dataset.disableMerge) return;
  log(`Loaded DisableMerge`);

  const messages = getMessagesElement();

  const insertMessage = (message: string) => {
    messages.messages = [message];
  };

  if (settings.disableMergeAll || settings.disableMergeForNonOwners || settings.disableMergeWithFixups) {
    document.body.classList.add("ght-disable-merge");
    insertMessage("Merge is disabled by settings");
  }

  document.body.dataset.disableMerge = "true";
};
