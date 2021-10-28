export function getDayOfWeek(time: number): string {
  return new Date(time * 1000).toLocaleString('en-us', {
    weekday: 'long',
  });
}

export const formatTemp = (temp: number): number => Math.floor(temp);

export function getImgUrl(imgName: string): string {
  return `http://openweathermap.org/img/wn/${imgName}@2x.png`;
}
