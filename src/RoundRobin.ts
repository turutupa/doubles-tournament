import { TournamentDetails, TournamentBuilder, Teams, ScheduleInfo, MatchesMap } from './interfaces';
import Tournament from './Tournament';
import PlayersHandler from './PlayersHandler';
import RoundRobinSwitchPartners from 'RoundRobin/RRSwitchPartners';
import RoundRobinFixedTeams from 'RoundRobin/RRFixedTeams';

export default class RoundRobin {
  switchPartners(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      players: new PlayersHandler(),
      tournament: new RoundRobinSwitchPartners(),
    });
  }

  fixedTeams(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      players: new PlayersHandler(),
      tournament: new RoundRobinFixedTeams(),
    });
  }
}
