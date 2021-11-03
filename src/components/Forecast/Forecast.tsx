import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { WrapperForecast } from './Forecst.styles';
import { selectForec } from '../../store/reducers/weatherSlice';
import { getImgURL } from '../../utils/getImgURL';
import { formatWeatherData } from '../../utils/formatWeatherData';
import { getDayOfWeek } from '../../utils/getDayOfWeek';

export const Forecast = (): JSX.Element => {
  const weekWeather = useSelector(selectForec)?.daily.slice(1, 6);

  return (
    <WrapperForecast>
      { weekWeather?.map((item) => (
        <div key={nanoid()} className="forecast-week-item">
          <p>{getDayOfWeek(item.dt)}</p>
          <div className="forecast-week-icon">
            <img src={getImgURL(item.weather[0].icon)} alt="forecast item icon" />
          </div>
          <div>
            <span>{formatWeatherData(item.temp.eve)}</span>
            <span>℃</span>
          </div>
        </div>
      ))}
    </WrapperForecast>
  );
};
