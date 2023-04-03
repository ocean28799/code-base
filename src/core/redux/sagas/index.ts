import { all } from 'redux-saga/effects';

const sagas: any[] = [];

export default function* rootSagas() {
  yield all(sagas);
}
