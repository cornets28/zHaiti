import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/translationEN.json';
import translationFR from '../locales/translationFR.json';
import translationHT from '../locales/translationHT.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
    ht: {
        translation: translationHT,
    },
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'ht',

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
