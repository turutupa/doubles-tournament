import { ScheduleInfo, Teams } from '@interfaces/interfaces';
import SingleEliminationScheduler from '@models/Brackets/helpers/SingleEliminationScheduler';
import DoubleEliminationScheduler from './DoubleEliminationScheduler';

class BracketsScheduler {
  public static singleElimination(
    teams: Teams,
    schedule?: ScheduleInfo,
  ): ScheduleInfo {
    return SingleEliminationScheduler.calculate(teams, schedule);
  }

  public static doubleElimination(
    teams: Teams,
    schedule?: ScheduleInfo,
  ): ScheduleInfo {
    return DoubleEliminationScheduler.calculate(teams, schedule);
  }
}

export default BracketsScheduler;
