import { ScheduleInfo, Teams } from '@interfaces/interfaces';
import Match from '@models/Match';
import SingleEliminationScheduler from '@models/Brackets/helpers/SingleEliminationScheduler';

class BracketsScheduler {
  public static singleElimination(
    teams: Teams,
    schedule?: ScheduleInfo,
  ): ScheduleInfo {
    return SingleEliminationScheduler.calculate(teams, schedule);
  }

  public static doubleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [] as Match[][],
      matches: {},
      rawSchedule: [],
    };
  }
}

export default BracketsScheduler;
