/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Navigation,
  NavigationConstants,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { Dimensions, Platform } from 'react-native';

import { Colors } from '@core/theme';

const flags = {
  showTextInputToTestKeyboardInteraction: false,
  useCustomAnimations: false,
  useSlowOpenScreenAnimations: false,
  useSlideAnimation: Platform.OS === 'android',
};

export let NAVIGATION_CONSTANT: NavigationConstants;

export const loadNavigationConstant = async () => {
  NAVIGATION_CONSTANT = await Navigation.constants();
};

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

const DEFAULT_DURATION = 200;
const SHOW_DURATION =
  DEFAULT_DURATION * (flags.useSlowOpenScreenAnimations ? 2 : 1);

const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: Colors.transparent,
      backgroundColor: Colors.transparent,
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      animate: true,
      animateTabSelection: false,
      visible: false,
    },
    animations: {
      setRoot: {
        alpha: {
          from: 0,
          to: 1,
          duration: Platform.select({ ios: SHOW_DURATION, android: 500 }),
        },
      },
      push: {
        waitForRender: true,
        content: {
          translationX: {
            from: width,
            to: 0,
            duration: SHOW_DURATION,
          },
          alpha: {
            from: 0.7,
            to: 1,
            duration: SHOW_DURATION,
          },
        },
      },
      pop: {
        content: {
          translationX: {
            from: 0,
            to: width,
            duration: SHOW_DURATION,
          },
        },
      },
      showModal: {
        // waitForRender: true,
        translationY: {
          from: height,
          to: 0,
          duration: SHOW_DURATION,
        },
        alpha: {
          from: 0.7,
          to: 1,
          duration: SHOW_DURATION,
        },
      },
      dismissModal: {
        translationY: {
          from: 0,
          to: height,
          duration: SHOW_DURATION,
        },
        alpha: {
          from: 1,
          to: 0.3,
          duration: SHOW_DURATION,
        },
      },
      // ...defaultOptions,
      // ...(flags.useSlideAnimation
      //   ? slideAnimations
      //   : flags.useCustomAnimations
      //   ? customAnimations
      //   : {}),
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
    statusBar: {
      visible: true,
      drawBehind: true,
      backgroundColor: Colors.black,
      style: 'light',
    },
    sideMenu: {
      right: {
        width: width * 0.7,
      },
    },
    topBar: {
      visible: false,
      drawBehind: false,
    },
  });

const defaultOptions = {
  setRoot: {
    enter: {
      waitForRender: true,
      enabled: true,
      translationY: {
        from: 0,
        to: 1,
        duration: 300,
      },
    },
  },
};

const slideAnimations = {
  push: {
    waitForRender: true,
    content: {
      translationX: {
        from: width,
        to: 0,
        duration: SHOW_DURATION,
      },
      alpha: {
        from: 0.7,
        to: 1,
        duration: SHOW_DURATION,
      },
    },
  },
  pop: {
    content: {
      translationX: {
        from: 0,
        to: width,
        duration: SHOW_DURATION,
      },
      // alpha: {
      //   from: 1,
      //   to: 0.3,
      //   duration: SHOW_DURATION,
      // },
    },
  },
  showOverlay: {
    // waitForRender: true,
    content: {
      alpha: {
        from: 0.7,
        to: 1,
        duration: SHOW_DURATION,
      },
    },
  },
  dismissOverlay: {
    content: {
      alpha: {
        from: 1,
        to: 0,
        duration: SHOW_DURATION,
      },
    },
  },
  // showModal: {
  //   // waitForRender: true,
  //   translationY: {
  //     from: height,
  //     to: 0,
  //     duration: SHOW_DURATION,
  //   },
  //   alpha: {
  //     from: 0.7,
  //     to: 1,
  //     duration: SHOW_DURATION,
  //   },
  // },
  // dismissModal: {
  //   translationY: {
  //     from: 0,
  //     to: height,
  //     duration: SHOW_DURATION,
  //   },
  //   alpha: {
  //     from: 1,
  //     to: 0.3,
  //     duration: SHOW_DURATION,
  //   },
  // },
};

const customAnimations = {
  showModal: {
    waitForRender: true,
    translationY: {
      from: height,
      to: 0,
      duration: SHOW_DURATION,
      interpolation: 'decelerate',
    },
    alpha: {
      from: 0.65,
      to: 1,
      duration: SHOW_DURATION * 0.7,
      interpolation: 'accelerate',
    },
  },
  dismissModal: {
    translationY: {
      from: 0,
      to: height,
      duration: SHOW_DURATION * 0.9,
    },
  },
  push: {
    waitForRender: true,
    content: {
      alpha: {
        from: 0.65,
        to: 1,
        duration: SHOW_DURATION * 0.7,
        interpolation: 'accelerate',
      },
      translationY: {
        from: height * 0.3,
        to: 0,
        duration: SHOW_DURATION,
        interpolation: 'decelerate',
      },
    },
  },
  pop: {
    content: {
      alpha: {
        from: 1,
        to: 0,
        duration: SHOW_DURATION,
      },
      translationY: {
        from: 0,
        to: height * 0.7,
        duration: SHOW_DURATION * 0.9,
      },
    },
  },
};

const fullScreenOptions = {
  bottomTabs: {
    visible: false,
  },
  topBar: {
    visible: false,
  },
};

export { setDefaultOptions, fullScreenOptions };
