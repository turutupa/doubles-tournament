import { Teams, ScheduleInfo } from '@interfaces/interfaces';

export default class BracketsScheduler {
  public static singleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
    };
  }

  public static doubleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
    };
  }
}
