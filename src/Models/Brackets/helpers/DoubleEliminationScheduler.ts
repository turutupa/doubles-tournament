import { Teams, ScheduleInfo } from '@interfaces/interfaces';
import Match from '@models/Match';
import SchedulerHelper from '@models/Brackets/helpers/SchedulerHelper';

export default class DoubleEliminationScheduler {
  public static calculate(teams: Teams, schedule?: ScheduleInfo) {
    if (!schedule || !schedule.schedule)
      return {
        schedule: [] as Match[][],
        matches: {},
        rawSchedule: [],
      };
  }
}
