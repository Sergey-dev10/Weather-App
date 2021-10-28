import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { WrapperForecast } from './WeatherForecst.styles';
import { selectForec } from '../../store/reducers/weatherSlice';
import { getDayOfWeek, formatTemp, getImgUrl } from '../../common';

export const WeatherForecast = (): JSX.Element => {
  const weekWeather = useSelector(selectForec)?.daily.slice(1, 6);

  return (
    <WrapperForecast>
      { weekWeather?.map((item) => (
        <div key={nanoid()} className="forecast-week-item">
          <p>{getDayOfWeek(item.dt)}</p>
          <div className="forecast-week-icon">
            <img src={getImgUrl(item.weather[0].icon)} alt="forecast item icon" />
          </div>
          <div>
            <span>{formatTemp(item.temp.eve)}</span>
            <span>℃</span>
          </div>
        </div>
      ))}
    </WrapperForecast>
  );
};
