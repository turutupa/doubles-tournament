import { TournamentParams } from '@interfaces/interfaces';
import RRSwitchPartners from '@roundrobin/SwitchPartnersTournament';
import RRFixedTeams from '@roundrobin/FixedTeamsTournament';
import { ITournament } from '@interfaces/interfaces';

export default class RoundRobin {
  public switchPartners(params?: TournamentParams): ITournament {
    return new RRSwitchPartners(params);
  }

  public fixedTeams(params?: TournamentParams): ITournament {
    return new RRFixedTeams(params);
  }
}
