import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataWEther, REQUEST_WEATHER } from '../reducers/weatherSlice';

function* weatherWorker(city: string) {
  const weatherCurrent = yield call(
    axios.get,
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fce9fcfaffc69d976811967daa4e476`,
  );
  const weatherForecast = yield call(
    axios.get,
    `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5fce9fcfaffc69d976811967daa4e476`,
  );
  const wetherData = { weatherCurrent.data, weatherForecast.data };
  yield put(fetchDataWEther(wetherData));
}

export function* weatherWatcher() {
  yield takeEvery(REQUEST_WEATHER, weatherWorker);
}
