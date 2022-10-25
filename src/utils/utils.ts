export const getShortDayName = (date: string) => {
  const dt = new Date(date);
  return dt.toLocaleDateString('EN-US', { weekday: 'short' });
};
