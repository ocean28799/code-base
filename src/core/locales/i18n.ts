// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import locales from './languages';

const resources = {
  en: {
    translation: locales.en,
  },
  jp: {
    translation: locales.jp,
  },
};

// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: Function) => cb('jp'),
  init: () => {},
  cacheUserLanguage: () => {},
};

export const loadDeviceLanguage = () => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  let foundLang;
  if (locale && `${locale}`.includes('jp')) {
    i18n.changeLanguage('jp');
    foundLang = 'jp';
  } else {
    i18n.changeLanguage('jp');
    foundLang = 'jp';
  }
  return foundLang;
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  //   .use(Backend)

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(languageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    resources: resources,
    fallbackLng: 'jp',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// const initI18n = (resources: any) => {
//   i18n
//     // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//     // learn more: https://github.com/i18next/i18next-http-backend
//     //   .use(Backend)

//     // detect user language
//     // learn more: https://github.com/i18next/i18next-browser-languageDetector
//     .use(languageDetector)

//     // pass the i18n instance to react-i18next.
//     .use(initReactI18next)
//     // init i18next
//     // for all options read: https://www.i18next.com/overview/configuration-options
//     .init({
//       compatibilityJSON: 'v3',
//       resources,
//       fallbackLng: 'jp',
//       debug: true,
//       interpolation: {
//         escapeValue: false, // not needed for react as it escapes by default
//       },
//     });
// };

export default i18n;
