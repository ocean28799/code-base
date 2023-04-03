import { registerScreen } from '@core/navigation/registerScreen';
import { LoginScreen } from '../screens';
import Screens from './screenNames';

export const registerScreens = (store: any) => {
  registerScreen(Screens.LOGIN, LoginScreen, store);
};

export default {
  registerScreens,
};
