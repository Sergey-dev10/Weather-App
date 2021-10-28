import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchData, REQUEST_WEATHER } from '../reducers/weatherSlice';

function* weatherWorker({ payload }: { payload: string }): any {
  const weatherCurr = yield call(
    axios.get,
    `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&lang=en`,
  );
  const { lat, lon } = yield weatherCurr.data.coord;
  const weatherForec = yield call(
    axios.get,
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&exclude=current&lang=en`,
  );
  const weatherData = yield { weatherCurr, weatherForec };
  yield put(fetchData(weatherData));
}

const takeEveryUp: any = takeEvery;

export function* weatherWatcher() {
  yield takeEveryUp(REQUEST_WEATHER, weatherWorker);
}
