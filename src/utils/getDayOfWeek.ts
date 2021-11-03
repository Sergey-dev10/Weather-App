export function getDayOfWeek(time: number): string {
  return new Date(time * 1000).toLocaleString('en-us', {
    weekday: 'long',
  });
}
