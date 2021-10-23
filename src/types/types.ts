export interface WeatherInfo {
  description: string,
  icon: string,
}

export interface WeatherCurrent {
  main: {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
  };
  sys: {
    country: string,
  };
  name: string;
  wind: {
    speed: number,
  };
  clouds: {
    all: number,
  },
  weather: WeatherInfo[],
}

export interface WeatherForecast {
  list: [
    dt: number,
    main: {
      temp: number,
    },
    weather: WeatherInfo,
  ],
}

export interface InitialStateType {
  WeatherCurrent: WeatherCurrent | null,
  WeatherForecast: WeatherForecast | null,
}
