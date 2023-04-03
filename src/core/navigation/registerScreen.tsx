import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

export const registerScreen = (
  screenName: string,
  Component: React.FC<any>,
  store: any = null,
) => {
  if (store) {
    Navigation.registerComponent(
      screenName,
      () => props =>
        (
          <Provider store={store}>
            <Component {...props} />
          </Provider>
        ),
      () => Component,
    );
  } else {
    Navigation.registerComponent(
      screenName,
      () => props => <Component {...props} />,
      () => Component,
    );
  }
};
