export interface WeatherInfo {
  description: string,
  icon: string,
}

export interface WeatherCurrtData {
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

export interface WeatherCurr {
  data: WeatherCurrtData | null,
}

interface ForecDay {
  dt: number,
  temp: {
    eve: number,
  },
  weather: WeatherInfo[],
}

export interface WeatherForecData {
  daily: ForecDay[],
}

export interface WeatherForec {
  data: WeatherForecData | null,
}

export interface InitialStateT {
  weatherCurr: WeatherCurr | null,
  weatherForec: WeatherForec | null,
}
