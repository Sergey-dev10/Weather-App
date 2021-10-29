/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';
import { InitialStateT } from '../../types/types';

const initialState: InitialStateT = {
  weatherCurr: null,
  weatherForec: null,
  isFail: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.weatherCurr = action.payload.weatherCurr;
      state.weatherForec = action.payload.weatherForec;
      state.isFail = false;
    },
    maikeFail(state) {
      state.isFail = true;
    },
  },
});

export const { fetchData, maikeFail } = weatherSlice.actions;
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const fetchDataWeather = createAction(REQUEST_WEATHER, (city: string) => ({
  payload: city,
}));
export const selectCurr = ({ weather }: { weather: InitialStateT }) => weather.weatherCurr?.data;
export const selectForec = ({ weather }: { weather: InitialStateT }) => weather.weatherForec?.data;
export const selectIsFail = ({ weather }: { weather: InitialStateT }) => weather.isFail;
export default weatherSlice.reducer;
