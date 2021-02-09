import { TournamentBuilder, ScheduleInfo, Teams } from 'interfaces';

export default class RoundRobinFixedTeams implements TournamentBuilder {
  getSchedule(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
    };
  }
}
