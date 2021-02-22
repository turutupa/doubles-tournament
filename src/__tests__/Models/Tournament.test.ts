import Tournament from '@models/Tournament';
import PlayersController from '@controllers/PlayersController';
import { inAWeekFromDateNow } from '@utils/constants';

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
    expect(tournament.name).toBe('Please, set a name');
    expect(tournament.price).toBe(0);
    expect(tournament.location).toBe('Please, set a location');
    expect(tournament.date).toBe(inAWeekFromDateNow);
    expect(tournament.maxNumberOfPlayers).toBe(15);
  });

  it('should allow to pass params as default values', () => {
    expect(tournamentWithParams.info).toEqual(defaultParams);
  });
});
