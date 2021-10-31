/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { InitialStateT } from '../../types/types';

const initialState: InitialStateT = {
  weatherCurr: null,
  weatherForec: null,
  isFail: false,
  isLoad: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.weatherCurr = action.payload.weatherCurr;
      state.weatherForec = action.payload.weatherForec;
      state.isFail = false;
      state.isLoad = false;
    },
    maikeFail(state) {
      state.isFail = true;
      state.isLoad = false;
    },
    makeLoading(state) {
      state.isLoad = true;
    },
  },
});

export const { fetchData, maikeFail, makeLoading } = weatherSlice.actions;
export const selectCurr = ({ weather }: { weather: InitialStateT }) => weather.weatherCurr?.data;
export const selectForec = ({ weather }: { weather: InitialStateT }) => weather.weatherForec?.data;
export const selectIsFail = ({ weather }: { weather: InitialStateT }) => weather.isFail;
export const selectIsLoad = ({ weather }: { weather: InitialStateT }) => weather.isLoad;
export default weatherSlice.reducer;
