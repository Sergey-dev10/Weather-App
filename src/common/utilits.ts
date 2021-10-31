export function getDayOfWeek(time: number): string {
  return new Date(time * 1000).toLocaleString('en-us', {
    weekday: 'long',
  });
}

export const formatValue = (temp: number | undefined): number | string => {
  if (typeof temp === 'undefined') {
    return 'N/a';
  }
  return Math.floor(temp);
};

export function getImgUrl(imgName: string): string {
  return `http://openweathermap.org/img/wn/${imgName}@2x.png`;
}
