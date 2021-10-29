import { useSelector } from 'react-redux';
import { Search } from '../Search';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { WeatherWrapper } from './Weather.styles';
import { WeatherForecast } from '../WeatherForecast/WeatherForecast';
import { WeatherFail } from '../WeatherFail';
import { selectIsFail } from '../../store/reducers/weatherSlice';

export const Weather = () => {
  const isFail = useSelector(selectIsFail);

  return (
    <WeatherWrapper>
      <Search />
      { isFail
        ? <WeatherFail />
        : (
          <>
            <WeatherToday />
            <WeatherForecast />
          </>
        )}
    </WeatherWrapper>
  );
};
