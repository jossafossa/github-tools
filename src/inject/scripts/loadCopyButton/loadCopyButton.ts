import { getSettings, log } from "@/api";

import "./loadCopyButton.scss";

const getCopyHTML = (value: string) => `
<clipboard-copy aria-label="Copy" data-copy-feedback="Copied!" value="${value}" data-view-component="true" class="Link--onHover js-copy-branch color-fg-muted d-inline-block ml-1" tabindex="0" role="button">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>
      <svg style="display: none;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
  </svg>
</clipboard-copy>`;

const toElement = (html: string): HTMLElement => {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
};

export const loadCopyButton = async () => {
  log(`Loaded CopyButton`);

  const { copyButtons } = await getSettings();

  if (copyButtons.commitHashes) {
    const hashesElements = document.querySelectorAll(
      ".TimelineItem-body .text-right"
    );

    hashesElements.forEach((hashElement) => {
      const hash = (hashElement as HTMLElement).innerText;

      hashElement.append(toElement(getCopyHTML(hash)));
    });
  }

  if (copyButtons.rebaseSummaries) {
    const rebaseElements = document.querySelectorAll(
      ".TimelineItem-body a.Button"
    );

    rebaseElements.forEach((rebaseElement) => {
      const rebaseSummary = (rebaseElement as HTMLAnchorElement).href;
      const copyButton = toElement(getCopyHTML(rebaseSummary));
      copyButton.classList.add("ght-rebase-button");
      rebaseElement.after(copyButton);
    });
  }

  if (copyButtons.prNumbers) {
    const prElements = document.querySelectorAll(
      ".gh-header-title .color-fg-muted"
    );

    prElements.forEach((prElement) => {
      const prNumber = (prElement as HTMLElement).innerText.split("#")[1];
      const copyButton = toElement(getCopyHTML(prNumber));
      copyButton.classList.add("ght-pr-button");
      prElement.append(copyButton);
    });
  }

  if (copyButtons.files) {
    const fileElements = document.querySelectorAll(
      ".js-comment-container > summary a"
    );

    fileElements.forEach((fileElement) => {
      const fileName = (fileElement as HTMLAnchorElement).innerText;
      const copyButton = toElement(getCopyHTML(fileName));
      copyButton.classList.add("ght-file-button");
      fileElement.after(copyButton);
    });
  }
};
