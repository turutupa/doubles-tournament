import { TournamentDetails } from 'interfaces';
import RRSwitchPartners from 'SwitchTournament';
import RRFixedTeams from 'FixedTeamsTournament';

export default class RoundRobin {
  switchPartners(params?: TournamentDetails) {
    return new RRSwitchPartners(params);
  }

  fixedTeams(params?: TournamentDetails) {
    return RRFixedTeams;
  }
}
