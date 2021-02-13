import { TournamentParams } from '@interfaces/interfaces';
import RRSwitchPartners from '@roundrobin/SwitchTournament';
import RRFixedTeams from '@roundrobin/FixedTeamsTournament';

export default class RoundRobin {
  public switchPartners(params?: TournamentParams) {
    return new RRSwitchPartners(params);
  }

  public fixedTeams(params?: TournamentParams) {
    return new RRFixedTeams(params);
  }
}
