import {
  Teams,
  ScheduleInfo,
  MatchesMap,
  RawSchedule,
} from '@interfaces/interfaces';
import Team from '@models/Team';
import Match from '@models/Match';
import SchedulerHelper from './SchedulerHelper';

export default class SingleEliminationScheduler {
  public static calculate(teams: Teams, schedule?: ScheduleInfo) {
    if (!schedule) {
      schedule = {
        schedule: [],
        rawSchedule: [],
        matches: {},
      };
    }

    if (!schedule.schedule.length) {
      const listOfTeams: Team[] = SchedulerHelper.listOfTeams(teams);
      const initSchedule = SchedulerHelper.updateScheduleSingleElimination(
        listOfTeams,
        schedule,
      );
      return initSchedule;
    }

    const lastRound: Match[] = [
      ...schedule.schedule[schedule.schedule.length - 1],
    ];
    const lastRoundIsComplete = SchedulerHelper.isRoundComplete(lastRound);
    if (!lastRoundIsComplete) return schedule;

    const listOfWinnersOfLastRound: Team[] =
      SchedulerHelper.getWinnersOfRound(lastRound);
    const updatedSchedule = SchedulerHelper.updateScheduleSingleElimination(
      listOfWinnersOfLastRound,
      schedule,
    );
    return updatedSchedule;
  }
}
