import React from 'react';
import { Search } from '../Search';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { WeatherWrapper } from './Weather.styles';

export const Weather = () => (
  <WeatherWrapper>
    <Search />
    <WeatherToday />
  </WeatherWrapper>
);
