/* eslint-disable prettier/prettier */
import { Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';

const PUSH_SCREEN_DELAY_TIME = 500;

const useNavigation = (componentId: string) => {
  let pressed = true;

  const push = (name: string, passProps = {}, options = {}) => {
    if (pressed) {
      Keyboard.dismiss();
      pressed = false;
      setTimeout(() => (pressed = true), PUSH_SCREEN_DELAY_TIME);

      Navigation.push(componentId, {
        component: {
          name,
          passProps,
          options: {
            bottomTabs: {
              visible: false,
              drawBehind: true,
            },
            ...options,
          },
        },
      });
    }
  };

  const pop = (destinationId?: string) => {
    Keyboard.dismiss();
    if (destinationId) {
      Navigation.popTo(destinationId);
    } else {
      Navigation.pop(componentId);
    }
  };

  const popToRoot = () => {
    Navigation.popToRoot(componentId);
  };

  const setRoot = (layout: any) => {
    Navigation.setRoot(layout);
  };

  const showModal = (name: string, passProps = {}, options = {}) => {
    Keyboard.dismiss();
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name,
              passProps,
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
          ...options,
        },
      },
    });
  };

  const dismissModal = (id = null) => {
    const newComponentId = id ? id : componentId;
    try {
      Navigation.dismissModal(newComponentId);
    } catch (error) {
      console.log('###dismissModal - error: ', error);
    }
  };

  const dismissAllModals = () => {
    try {
      Navigation.dismissAllModals();
    } catch (error) {
      console.log('###dismissAllModals - error: ', error);
    }
  };

  return {
    push,
    pop,
    setRoot,
    popToRoot,
    showModal,
    dismissModal,
    dismissAllModals,
  };
};

export default useNavigation;
