import Tournament from '@models/TournamentFactory';
import Team from '@models/Team';
import TeamsController from '@/Controllers/TeamsController';
import RRFixedTeams from '@roundrobin/FixedTeamsTournament';
import { Teams, TournamentParams } from '@interfaces/interfaces';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';

describe('Fixed Round Robin Tournament', () => {
  let teams: Teams;
  let tournament: RRFixedTeams;

  const numberOfPlayers = 16;

  const { name, price, location, maxNumberOfPlayers, date } = tournamentInfo;

  const tournamentParams: TournamentParams = { ...tournamentInfo };

  beforeEach(() => {
    tournament = Tournament.RoundRobin.fixedTeams();
  });

  it('', () => {});
});
