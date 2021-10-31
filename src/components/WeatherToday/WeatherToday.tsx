import { useSelector } from 'react-redux';
import { WrapperToday } from './WeatherToday.styles';
import { selectCurr } from '../../store/reducers/weatherSlice';
import { formatValue } from '../../common/utilits';

export const WeatherToday = (): JSX.Element => {
  const todayWeather = useSelector(selectCurr);
  const city = todayWeather?.name;
  const temp = todayWeather?.main.temp;
  const forecTitle = todayWeather?.weather[0].description;
  const forecIcon = todayWeather?.weather[0].icon;
  const feelsLike = todayWeather?.main.feels_like;
  const wind = todayWeather?.wind.speed;
  const humidity = todayWeather?.main.humidity;

  return (
    <WrapperToday>
      { city && <h2 className="city">{city}</h2> }
      { temp
      && (
        <>
          <div className="weather-today">
            <div className="temp-block">
              <span className="today-temp">{formatValue(temp)}</span>
              <span className="temp-sign">℃</span>
            </div>
            <div className="forecast-today">
              <div className="forecast-icon">
                <img src={`http://openweathermap.org/img/wn/${forecIcon}@2x.png`} alt="forecast icon" />
              </div>
              <p className="forecast-title">{forecTitle}</p>
            </div>
          </div>
          <div className="weather-details">
            <p>{`Feels like: ${formatValue(feelsLike)} °C`}</p>
            <p>{`Wind: ${formatValue(wind)} m/s`}</p>
            <p>{`Humidity: ${formatValue(humidity)}%`}</p>
          </div>
        </>
      )}

    </WrapperToday>
  );
};
