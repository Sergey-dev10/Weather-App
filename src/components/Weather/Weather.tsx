/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import { WeatherSearch } from '../WeatherSearch';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { WeatherWrapper } from './Weather.styles';
import { WeatherForecast } from '../WeatherForecast/WeatherForecast';
import { WeatherFail } from '../WeatherFail';
import { WeatherLoader } from '../WeatherLoader';
import { selectIsFail, selectIsLoad } from '../../store/reducers/weatherSlice';

export const Weather = () => {
  const isFail = useSelector(selectIsFail);
  const isLoad = useSelector(selectIsLoad);

  return (
    <WeatherWrapper>
      <WeatherSearch />
      {/* { isLoad && <WeatherLoader />} */}
      { isFail
        ? <WeatherFail />
        : isLoad
          ? <WeatherLoader />
          : (
            <>
              <WeatherToday />
              <WeatherForecast />
            </>
          )}
    </WeatherWrapper>
  );
};
