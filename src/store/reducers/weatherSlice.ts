/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';
import { InitialStateType } from '../../types/types';

const initialState: InitialStateType = {
  weatherCurrent: null,
  weatherForecast: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.weatherCurrent = action.payload.weatherCurrent;
      state.weatherForecast = action.payload.weatherCurrent;
    },
  },
});

export const { fetchData } = weatherSlice.actions;
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const fetchDataWeather = createAction(REQUEST_WEATHER, (city: string) => ({
  payload: city,
}));
export default weatherSlice.reducer;
