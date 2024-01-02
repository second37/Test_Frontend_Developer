import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "./Translation/EN/translation.json";
import translationThai from "./Translation/TH/translation.json";

const resources = {
    en: {
        trans: translationEnglish,
    },
    th: {
        trans: translationThai,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en",
});

export default i18next;