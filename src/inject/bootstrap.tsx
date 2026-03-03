import { log } from "~/api";
import register from "preact-custom-element";
import { Settings } from "~/features";

import {
  loadCopyButton,
  loadDisableMerge,
  loadDocumentTitle,
  loadGeneral,
  loadLinks,
  loadShortcuts,
} from "./scripts";

export const bootstrap = async () => {
  log("injecting scripts");

  loadDisableMerge();
  loadCopyButton();
  loadDocumentTitle();
  loadShortcuts();
  loadLinks();
  loadGeneral();

  // Register the Settings component as a custom element
  register(Settings, "ght-settings", [], { shadow: false });
  log("Custom element registered");

  // Add the custom element to the page
  const settingsElement = document.createElement("ght-settings");
  settingsElement.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: white;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  document.body.appendChild(settingsElement);

  log("Settings custom element added to DOM");
};
