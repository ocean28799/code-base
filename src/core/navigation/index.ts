import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const APP_FLOW = {
  AUTH: 'Auth',
  HOME: 'Home',
};

export const registerScreens = (store: any) => {};

export const startAuthFlow = (initialScreenName: string) => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: initialScreenName,
            },
          },
        ],
      },
    },
  });
};

export const showAlert = (title: string, message: string) => {
  Alert.alert(title, message, [
    {
      style: 'default',
    },
  ]);
};
