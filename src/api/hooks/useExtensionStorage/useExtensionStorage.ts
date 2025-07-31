import { useEffect, useState } from "preact/hooks";
import browser from "webextension-polyfill";

export function useExtensionStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  // Load the initial value from storage on component mount
  useEffect(() => {
    async function loadValue() {
      try {
        const result = await browser.storage.local.get(key);
        if (result[key] !== undefined) {
          setValue(result[key] as T);
        } else {
          setValue(initialValue);

          // Optionally, set the initial value in storage to ensure consistency
          await browser.storage.local.set({ [key]: initialValue });
        }
      } catch (error) {
        console.error(`Error loading data for key "${key}":`, error);
        setValue(initialValue);
      }
    }
    loadValue();
  }, [key, initialValue]);

  // Listen for changes in storage and update the state in real-time
  useEffect(() => {
    const handleStorageChange = (
      changes: Record<string, browser.Storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName === "local" && changes[key]) {
        setValue(changes[key].newValue as T);
      }
    };
    browser.storage.onChanged.addListener(handleStorageChange);

    // Clean up the listener when the component unmounts
    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [key]);

  // A setter function that updates both the state and the storage
  const setExtensionStorage = async (newValue: T) => {
    try {
      console.log(`Setting data for key "${key}":`, newValue);
      await browser.storage.local.set({ [key]: newValue });
      // The onChanged listener will update the state, but we can also do it here
      setValue(newValue);
    } catch (error) {
      console.error(`Error setting data for key "${key}":`, error);
    }
  };

  return [value, setExtensionStorage];
}
