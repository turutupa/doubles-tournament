import { TournamentDetails, TournamentBuilder, Teams, ScheduleInfo, MatchesMap } from './interfaces';
import Tournament from './Tournament';
import TeamsHandler from './TeamsHandler';

export default class Brackets {
  singleElimination(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      players: new TeamsHandler(),
      tournament: new BracketsSingleElimination(),
    });
  }

  doubleElimination(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      players: new TeamsHandler(),
      tournament: new BracketsDoubleElimination(),
    });
  }
}

class BracketsSingleElimination implements TournamentBuilder {
  getSchedule(players: Teams): ScheduleInfo {
    const scheduleInfo: ScheduleInfo = {
      schedule: [],
      matches: {},
    };
    return scheduleInfo;
  }
}

class BracketsDoubleElimination implements TournamentBuilder {
  getSchedule(players: Teams): ScheduleInfo {
    const scheduleInfo: ScheduleInfo = {
      schedule: [],
      matches: {},
    };
    return scheduleInfo;
  }
}
