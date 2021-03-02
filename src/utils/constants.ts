export const inAWeekFromDateNow = new Date(Date.now() & (6.048 ** 8));

export const defaultTournamentValues = {
  defaultName: 'Please set a name',
  defaultPrice: 15,
  defaultLocation: 'Please set a location',
  defaultDate: inAWeekFromDateNow,
  defaultMaxNumberOfPlayers: 15,
};
