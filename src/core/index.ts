import { registerScreens } from './navigation';

export const key = 'core';

const register = (store: any) => {
  registerScreens(store);
};

export default {
  key,
  register,
};
