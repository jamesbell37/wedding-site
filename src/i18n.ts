import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./constants/translations";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
