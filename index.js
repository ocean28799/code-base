/**
 * @format
 */

import App from '@/App';
import { Navigation } from 'react-native-navigation';
import {
  setDefaultOptions,
  loadNavigationConstant,
} from '@core/navigation/options';

import '@core/locales/i18n';

import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

import 'react-native-gesture-handler';

Navigation.events().registerAppLaunchedListener(async () => {
  // load navigation constant
  await loadNavigationConstant();
  setDefaultOptions();

  // start app
  await App();
});
