import { TournamentDetails, TournamentBuilder, Teams, ScheduleInfo, MatchesMap } from './interfaces';
import Tournament from './Tournament';
import PlayersHandler from './PlayersHandler';
import RoundRobinSwitchPartners from './RoundRobin/RRSwitchPartners';

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

class RoundRobinFixedTeams implements TournamentBuilder {
  getSchedule(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
    };
  }
}
