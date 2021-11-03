export const formatWeatherData = (temp: number | undefined): number | string => {
  if (typeof temp === 'undefined') {
    return 'N/a';
  }
  return Math.floor(temp);
};
