import { ScheduleInfo, Teams } from '@interfaces/interfaces';

export default class BracketsScheduler {
  public static singleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
      rawSchedule: [],
    };
  }

  public static doubleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [],
      matches: {},
      rawSchedule: [],
    };
  }
}
