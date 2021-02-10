import i18n from "i18next";
import enLang from "./i18n/en.json";

i18n.init({
  resources: {
    en: enLang,
  },
  lng: "en",
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeperator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
