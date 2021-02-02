import { TournamentDetails, TournamentBuilder, Teams, ScheduleInformation, MatchesMap } from './interfaces';
import Tournament from './Tournament';

export default class Brackets {
  singleElimination(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      tournament: new BracketsSingleElimination(),
    });
  }

  doubleElimination(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      tournament: new BracketsDoubleElimination(),
    });
  }
}

class BracketsSingleElimination implements TournamentBuilder {
  getSchedule(players: Teams): ScheduleInformation {
    const scheduleInformation: ScheduleInformation = {
      schedule: [],
      matches: {},
    };
    return scheduleInformation;
  }
}

class BracketsDoubleElimination implements TournamentBuilder {
  getSchedule(players: Teams): ScheduleInformation {
    const scheduleInformation: ScheduleInformation = {
      schedule: [],
      matches: {},
    };
    return scheduleInformation;
  }
}
