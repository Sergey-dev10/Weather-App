import { createAction } from '@reduxjs/toolkit';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const fetchDataWeather = createAction(REQUEST_WEATHER, (city: string) => ({
  payload: city,
}));
