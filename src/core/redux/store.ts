import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { reducers } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

var store: any;

const createStore = () => {
  const combineReducer = combineReducers(reducers);
  const rtkStore = configureStore({
    reducer: combineReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(middlewares),
  });

  sagaMiddleware.run(rootSaga);

  store = rtkStore;

  return rtkStore;
};

export const getStore = () => {
  return store;
};

export default createStore;
