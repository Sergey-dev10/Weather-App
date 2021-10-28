/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';
import { InitialStateT } from '../../types/types';

const initialState: InitialStateT = {
  weatherCurr: null,
  weatherForec: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.weatherCurr = action.payload.weatherCurr;
      state.weatherForec = action.payload.weatherForec;
    },
  },
});

export const { fetchData } = weatherSlice.actions;
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const fetchDataWeather = createAction(REQUEST_WEATHER, (city: string) => ({
  payload: city,
}));
export const selectCurr = ({ weather }: { weather: InitialStateT }) => weather.weatherCurr?.data;
export const selectForec = ({ weather }: { weather: InitialStateT }) => weather.weatherForec?.data;
export default weatherSlice.reducer;
