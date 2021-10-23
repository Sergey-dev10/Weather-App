import { createSlice, createAction } from '@reduxjs/toolkit';
import { InitialStateType } from '../../types/types';

const initialState: InitialStateType = {
  WeatherCurrent: null,
  WeatherForecast: null,
};

export const wetherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.WeatherCurrent = action.payload.WeatherCurrent;
      state.WeatherForecast = action.payload.WeatherForecast;
    },
  },
});

export const { fetchData } = wetherSlice.actions;
export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA';
export const fetchDataSaga = createAction(FETCH_DATA_SAGA);
