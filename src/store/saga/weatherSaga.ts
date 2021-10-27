import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchData, REQUEST_WEATHER } from '../reducers/weatherSlice';

function* weatherWorker({ payload }: { payload: string }): any {
  const weatherCurrent = yield call(
    axios.get,
    `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&lang=en`,
  );
  const weatherForecast = yield call(
    axios.get,
    `http://api.openweathermap.org/data/2.5/forecast?q=${payload}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&lang=en`,
  );
  const wetherData = { weatherCurrent, weatherForecast };
  yield put(fetchData(wetherData));
}

const takeEveryUp: any = takeEvery;

export function* weatherWatcher() {
  yield takeEveryUp(REQUEST_WEATHER, weatherWorker);
}
