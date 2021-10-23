import { createSlice, createAction } from '@reduxjs/toolkit';
import { InitialStateType } from '../../types/types';

const initialState: InitialStateType = {
  WeatherCurrent: null,
  WeatherForecast: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.WeatherCurrent = action.payload.WeatherCurrent;
      state.WeatherForecast = action.payload.WeatherForecast;
    },
  },
});

export const { fetchData } = weatherSlice.actions;
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const fetchDataWEther = createAction(REQUEST_WEATHER, (weatherData) => ({
  payload: weatherData,
}));
export default weatherSlice.reducer;
