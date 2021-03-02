import Tournament from '@models/Tournament';
import PlayersController from '@controllers/PlayersController';
import { defaultTournamentValues } from '@utils/constants';

const {
  defaultName,
  defaultLocation,
  defaultPrice,
  defaultMaxNumberOfPlayers,
  defaultDate,
} = defaultTournamentValues;

describe('Abstract Tournament', () => {
  class TestTournament extends Tournament<PlayersController> {
    protected participants = new PlayersController();
    schedule() {}
    newSchedule() {}
    resetSchedule() {}
  }
  let tournament: TestTournament;
  let tournamentWithParams: TestTournament;
  const defaultParams = {
    name: 'Name',
    price: 99,
    date: new Date(),
    maxNumberOfPlayers: 99,
    location: 'Location',
  };

  beforeEach(() => {
    tournament = new TestTournament();
    tournamentWithParams = new TestTournament(defaultParams);
  });

  it('should have default values', () => {
    expect(tournament.name).toBe(defaultName);
    expect(tournament.price).toBe(defaultPrice);
    expect(tournament.location).toBe(defaultLocation);
    expect(tournament.date).toBe(defaultDate);
    expect(tournament.maxNumberOfPlayers).toBe(defaultMaxNumberOfPlayers);
  });

  it('should allow to pass params as default values', () => {
    expect(tournamentWithParams.info).toEqual(defaultParams);
  });
});
