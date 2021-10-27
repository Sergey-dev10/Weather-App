import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './WeatherToday.styles';
import { selectCurr } from '../../store/reducers/weatherSlice';

export const WeatherToday = (): JSX.Element => {
  const todayWeather = useSelector(selectCurr);
  const city = todayWeather?.name;
  const temp = todayWeather?.main.temp;
  const forecTitle = todayWeather?.weather[0].description;
  const forecIcon = todayWeather?.weather[0].icon;

  return (
    <Wrapper>
      { city && <h2 className="curr-city">{city}</h2> }
      { temp
      && (
        <div className="weather-today">
          <div className="temp-block">
            <span className="today-temp">{Math.floor(temp)}</span>
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
    </Wrapper>
  );
};
