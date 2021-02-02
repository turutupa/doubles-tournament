import Tournament from '../Tournament';

test('Default tournament price sould be 0', () => {
  const tournament = Tournament.roundRobin.switchPartners();
  expect(tournament.price).toBe(0);
});
