import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchData, maikeFail, makeLoading,
} from '../reducers/weatherSlice';
import { REQUEST_WEATHER } from '../reducers/actions';

function* weatherWorker({ payload }: { payload: string }): any {
  try {
    yield put(makeLoading());
    const weatherCurr = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&lang=en`,
    );
    const { lat, lon } = yield weatherCurr.data.coord;
    const weatherForec = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5fce9fcfaffc69d976811967daa4e476&units=metric&exclude=current&lang=en`,
    );
    const weatherData = yield { weatherCurr, weatherForec };
    yield put(fetchData(weatherData));
  } catch (e) {
    yield put(maikeFail());
  }
}

const takeEveryUp: any = takeEvery;

export function* weatherWatcher() {
  yield takeEveryUp(REQUEST_WEATHER, weatherWorker);
}
