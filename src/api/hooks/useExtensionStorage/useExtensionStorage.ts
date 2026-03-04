import { useEffect, useState } from "react";
import browser from "webextension-polyfill";

import { getExtensionStorage, setExtensionStorage } from "~/api/utils";

type UseExtensionStorageReturn<T> = {
  value: T;
  setValue: (newValue: T) => void;
  isLoading: boolean;
};

export function useExtensionStorage<T>(
  key: string,
  initialValue: T,
): UseExtensionStorageReturn<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadValue() {
      const storedValue = await getExtensionStorage(key, initialValue);
      // Clone the value to make it extensible (browser.storage returns frozen objects)
      setValue(JSON.parse(JSON.stringify(storedValue)));
      setIsLoading(false);
    }
    loadValue();
  }, [key, initialValue]);

  useEffect(() => {
    const handleStorageChange = (
      changes: Record<string, browser.Storage.StorageChange>,
      areaName: string,
    ) => {
      if (areaName === "local" && changes[key]) {
        // Clone the value to make it extensible (browser.storage returns frozen objects)
        setValue(JSON.parse(JSON.stringify(changes[key].newValue)));
      }
    };
    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [key]);

  return {
    value,
    setValue: (newValue: T) => setExtensionStorage(key, newValue),
    isLoading,
  };
}
