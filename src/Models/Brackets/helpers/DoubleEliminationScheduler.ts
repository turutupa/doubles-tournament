import {
  Teams,
  ScheduleInfo,
  ScheduleInfoDoubleElimination,
} from '@interfaces/interfaces';
import Match from '@models/Match';
import SchedulerHelper from '@models/Brackets/helpers/SchedulerHelper';
import Team from '@models/Team';
import BracketsScheduler from './BracketsScheduler';

export default class DoubleEliminationScheduler {
  public static calculate(teams: Teams, schedule?: ScheduleInfo): ScheduleInfo {
    if (!schedule) {
      schedule = {
        schedule: [],
        matches: {},
        rawSchedule: [],
        winners: [],
        losers: [],
      };
    }

    if (!schedule.schedule.length) {
      const listOfTeams: Team[] = SchedulerHelper.listOfTeams(teams);
      // first round is exactly like single elimination
      // therefore it is calculated same way. From first
      // round on calculate using double elimination method
      const initSchedule = SchedulerHelper.updateScheduleSingleElimination(
        listOfTeams,
        schedule,
      );
      initSchedule.winners?.push(initSchedule.schedule[0]);
      return initSchedule;
    }

    const lastRound: Match[] = [
      ...schedule.schedule[schedule.schedule.length - 1],
    ];

    const listOfWinnersOfLastRound: Team[] =
      SchedulerHelper.getWinnersOfRound(lastRound);
    const lastRoundWinners: Match[] = this.getLastRoundOfWinners(schedule);
    const lastRoundLosers: Match[] = this.getLastRoundOfLosers(schedule);
    const winnersRoundIsComplete =
      SchedulerHelper.isRoundComplete(lastRoundWinners);
    const losersRoundIsComplete =
      SchedulerHelper.isRoundComplete(lastRoundLosers);

    if (!winnersRoundIsComplete || !losersRoundIsComplete) return schedule;

    const listOfWinnersInWinnersBracket: Team[] =
      SchedulerHelper.getWinnersOfRound(lastRoundWinners);
    const listOfLosersInWinnersBracket: Team[] =
      SchedulerHelper.getLosersOfRound(lastRoundWinners);
    const listOfWinnersInLosersBracket: Team[] =
      SchedulerHelper.getWinnersOfRound(lastRoundLosers);

    // to finish:
    // create round for winners of winners bracket
    // create round for losers of winners bracket + winners of losers bracket

    return schedule;
  }

  private static getLastRoundOfWinners(schedule: ScheduleInfo): Match[] {
    return (
      (schedule.winners && [
        ...schedule.winners[schedule.winners.length - 1],
      ]) ||
      []
    );
  }

  private static getLastRoundOfLosers(schedule: ScheduleInfo): Match[] {
    return (
      (schedule.winners && [
        ...schedule.winners[schedule.winners.length - 1],
      ]) ||
      []
    );
  }
}
