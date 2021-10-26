import { all } from 'redux-saga/effects';
import { weatherWatcher } from './weatherSaga';

export function* rootSaga() {
  yield all([weatherWatcher()]);
}
