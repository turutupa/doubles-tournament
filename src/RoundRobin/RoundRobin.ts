import { TournamentParams } from 'interfaces';
import RRSwitchPartners from 'SwitchTournament';
import RRFixedTeams from 'FixedTeamsTournament';

export default class RoundRobin {
  public switchPartners(params?: TournamentParams) {
    return new RRSwitchPartners(params);
  }

  public fixedTeams(params?: TournamentParams) {
    return new RRFixedTeams(params);
  }
}
