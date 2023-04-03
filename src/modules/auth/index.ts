import navigation from './navigation';
import locales from './locales';
import i18n from '@core/locales/i18n';
import Screens from './navigation/screenNames';

export const key = 'auth';

const register = (store: any) => {
  console.log('REGISTER AUTH');
  navigation.registerScreens(store);
  i18n.addResourceBundle('jp', 'translation', locales.jp);
  i18n.addResourceBundle('en', 'translation', locales.en);
};

export default {
  key,
  register,
  screens: Screens,
};
