import { Settings } from "~/features";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect } from "react";
import { useSettings } from "~/api";

// Import translation files directly
import settingsEn from "~/locales/en/settings.json";
import settingsNl from "~/locales/nl/settings.json";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        settings: settingsEn,
      },
      nl: {
        settings: settingsNl,
      },
    },
    lng: "en", // default, will be updated from settings
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export const Popup = () => {
  const { value: settings } = useSettings();

  useEffect(() => {
    if (settings?.language && i18next.language !== settings.language) {
      i18next.changeLanguage(settings.language);
    }
  }, [settings?.language]);

  return <Settings />;
};
