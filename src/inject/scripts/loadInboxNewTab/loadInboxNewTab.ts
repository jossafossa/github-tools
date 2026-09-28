import { type AvailableSettings, log } from "~/api";

const INBOX_PATH = "/pulls/inbox";
const PR_PATH = /^\/[^/]+\/[^/]+\/pull\/\d+/;

// Bootstrap re-runs every tick, so the listener reads the latest value
// and toggling the setting takes effect without a reload.
let enabled = false;

const handleClick = (event: MouseEvent) => {
  if (!enabled || !location.pathname.startsWith(INBOX_PATH)) return;

  // Leave modified and non-primary clicks to the browser
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    "a[href]",
  );
  if (!link || link.origin !== location.origin) return;
  if (!PR_PATH.test(link.pathname)) return;

  // Stop GitHub's client-side router from navigating the current tab
  event.preventDefault();
  event.stopImmediatePropagation();
  window.open(link.href, "_blank", "noopener");
};

export const loadInboxNewTab = (settings: AvailableSettings) => {
  enabled = settings.openInboxPrsInNewTab;

  if (document.body.dataset.ghtInboxNewTabLoaded) return;

  // Capture phase on window runs before GitHub's own click handlers
  window.addEventListener("click", handleClick, true);

  document.body.dataset.ghtInboxNewTabLoaded = "true";
  log(`Loaded InboxNewTab`);
};
