/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import { Search } from '../Search';
import { Today } from '../Today';
import { WeatherWrapper } from './Weather.styles';
import { Forecast } from '../Forecast/Forecast';
import { Fail } from '../Fail';
import { WeatherLoader } from '../WeatherLoader';
import { selectIsFail, selectIsLoad } from '../../store/reducers/weatherSlice';

export const Weather = () => {
  const isFail = useSelector(selectIsFail);
  const isLoad = useSelector(selectIsLoad);

  return (
    <WeatherWrapper>
      <Search />
      { isFail
        ? <Fail />
        : isLoad
          ? <WeatherLoader />
          : (
            <>
              <Today />
              <Forecast />
            </>
          )}
    </WeatherWrapper>
  );
};
