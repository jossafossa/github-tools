import browser from "webextension-polyfill";

const cache: Record<string, any> = {};

// Listen for changes in the storage and update the cache
browser.storage.onChanged.addListener((changes) => {
  for (const [key, { newValue }] of Object.entries(changes)) {
    cache[key] = newValue;
  }
});

export const getExtensionStorage = async <T>(key: string, initialValue: T) => {
  if (key in cache) {
    return cache[key] as T;
  }

  try {
    const result = await browser.storage.local.get(key);
    if (result[key] !== undefined) {
      // Clone the value to make it extensible (browser.storage returns frozen
      // objects) and merge over the defaults so any setting added in a newer
      // version falls back to its default for users with older stored settings.
      const clonedValue = JSON.parse(JSON.stringify(result[key]));
      const mergedValue = { ...initialValue, ...clonedValue } as T;
      cache[key] = mergedValue;
      return mergedValue;
    }
    return initialValue;
  } catch (error) {
    console.error(`Error loading data for key "${key}":`, error);
    return initialValue;
  }
};
