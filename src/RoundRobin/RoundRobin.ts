import { TournamentParams } from 'interfaces';
import RRSwitchPartners from 'RoundRobin/SwitchTournament';
import RRFixedTeams from 'RoundRobin/FixedTeamsTournament';

export default class RoundRobin {
  public switchPartners(params?: TournamentParams) {
    return new RRSwitchPartners(params);
  }

  public fixedTeams(params?: TournamentParams) {
    return new RRFixedTeams(params);
  }
}
