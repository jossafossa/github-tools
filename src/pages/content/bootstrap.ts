import browser from "webextension-polyfill";

function injectScript(src: string) {
  const s = document.createElement("script");
  s.src = browser.runtime.getURL(src);
  s.onload = () => s.remove();
  document.documentElement.append(s);
}

function selectScript() {
  injectScript("src/pages/content/index.js");
}

browser.storage.local.onChanged.addListener(({ prototype }) => {
  if (prototype) {
    selectScript();
  }
});

async function loadSelectedPrototype() {
  await browser.storage.local.get("prototype");
  selectScript();
}

loadSelectedPrototype();
