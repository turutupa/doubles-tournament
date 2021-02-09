import { Scheduler, ScheduleInfo, Teams } from 'interfaces';

export default class RoundRobinFixedTeams implements Scheduler {
  getSchedule(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
    };
  }
}
