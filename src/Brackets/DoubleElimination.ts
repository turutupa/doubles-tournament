import { Scheduler, Teams, ScheduleInfo } from 'interfaces';

export default class BracketsDoubleElimination implements Scheduler {
  public getSchedule(players: Teams): ScheduleInfo {
    const scheduleInfo: ScheduleInfo = {
      schedule: [],
      matches: {},
    };
    return scheduleInfo;
  }
}
