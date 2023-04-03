import createStore from '@core/redux/store';

import coreModule from '@core';
import authModule from '@auth';

import { startAuthFlow, APP_FLOW } from '@core/navigation';
import { startFlow } from '@core/redux/reducers/appSlice';

const modules = [coreModule, authModule];

const App = async () => {
  // Configrure Store
  const store = createStore();

  // Register modules
  modules.forEach(module => {
    module.register(store);
  });

  // Setup App Router
  let currentAppFlow: string;
  const onStoreUpdate = () => {
    const appState: any = store.getState();
    const newAppFlow: string = appState.app.currentFlow;
    if (currentAppFlow !== newAppFlow) {
      switch (newAppFlow) {
        case APP_FLOW.AUTH:
          startAuthFlow(authModule.screens.LOGIN);
          break;
        default:
          break;
      }
      currentAppFlow = newAppFlow;
    }
  };

  store.subscribe(onStoreUpdate);

  store.dispatch(startFlow(APP_FLOW.AUTH));
};

export default App;
