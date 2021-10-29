import { useSelector } from 'react-redux';
import { WrapperToday } from './WeatherToday.styles';
import { selectCurr } from '../../store/reducers/weatherSlice';
import { formatTemp } from '../../common/utilits';

export const WeatherToday = (): JSX.Element => {
  const todayWeather = useSelector(selectCurr);
  const city = todayWeather?.name;
  const temp = todayWeather?.main.temp;
  const forecTitle = todayWeather?.weather[0].description;
  const forecIcon = todayWeather?.weather[0].icon;

  return (
    <WrapperToday>
      { city && <h2 className="city">{city}</h2> }
      { temp
      && (
        <div className="weather-today">
          <div className="temp-block">
            <span className="today-temp">{formatTemp(temp)}</span>
            <span className="temp-sign">℃</span>
          </div>
          <div className="forecast-today">
            <div className="forecast-icon">
              <img src={`http://openweathermap.org/img/wn/${forecIcon}@2x.png`} alt="forecast icon" />
            </div>
            <p className="forecast-title">{forecTitle}</p>
          </div>
        </div>
      )}
    </WrapperToday>
  );
};
