import PlayersController from '@controllers/PlayersController';
import { TournamentParams } from '@interfaces/interfaces';
import Tournament from '@models/Tournament';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
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
    constructor(params?: TournamentParams) {
      super(
        new PlayersController(),
        RoundRobinScheduler.switchPartners,
        params,
      );
    }

    public get schedule() {
      return [];
    }
  }
  let tournament: TestTournament;
  let tournamentWithParams: TestTournament;

  beforeEach(() => {
    tournament = new TestTournament();
    tournamentWithParams = new TestTournament(tournamentInfo);
  });

  it('should have default values', () => {
    expect(tournament.name).toBe(defaultName);
    expect(tournament.price).toBe(defaultPrice);
    expect(tournament.location).toBe(defaultLocation);
    expect(tournament.date).toBe(defaultDate);
    expect(tournament.maxNumberOfPlayers).toBe(defaultMaxNumberOfPlayers);
  });

  it('should allow to pass params as default values', () => {
    expect(tournamentWithParams.info).toEqual(tournamentInfo);
  });

  it('should allow to modify tournament price', () => {
    tournament.price = 20;
    expect(tournament.price).toBe(20);
  });
});
