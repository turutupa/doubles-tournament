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
    if (!schedule || !schedule.schedule.length) {
      const listOfTeams: Team[] = SchedulerHelper.listOfTeams(teams);
      const initSchedule =
        this.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
          listOfTeams,
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
    const updatedSchedule =
      this.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
        listOfWinnersOfLastRound,
        schedule,
      );
    return updatedSchedule;
  }

  private static createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
    teams: Team[],
    scheduleInfo?: ScheduleInfo,
  ): ScheduleInfo {
    const round: Match[] = [];
    const roundOfIDs: string[] = [];
    const schedule = {
      schedule: [] as Match[][],
      matches: {} as MatchesMap,
      rawSchedule: [] as RawSchedule,
    };

    if (scheduleInfo) {
      const { schedule: s, matches: m, rawSchedule: r } = scheduleInfo;
      schedule.schedule = [...s];
      schedule.matches = { ...m };
      schedule.rawSchedule = [...r];
    }

    for (let i = 0; i < teams.length; i = i + 2) {
      const home: Team = teams[i];
      const away: Team = teams[i + 1];
      const newMatch = new Match(home, away);
      // update matches and add match and Id to current Round
      schedule.matches[newMatch.id] = newMatch;
      roundOfIDs.push(newMatch.id);
      round.push(newMatch);
    }

    schedule.schedule.push(round);
    schedule.rawSchedule.push(roundOfIDs);

    return schedule;
  }
}
