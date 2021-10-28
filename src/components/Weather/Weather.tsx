import { Search } from '../Search';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { WeatherWrapper } from './Weather.styles';
import { WeatherForecast } from '../WeatherForecast/WeatherForecast';

export const Weather = () => (
  <WeatherWrapper>
    <Search />
    <WeatherToday />
    <WeatherForecast />
  </WeatherWrapper>
);
