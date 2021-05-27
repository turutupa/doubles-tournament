import {
  Teams,
  ScheduleInfo,
  MatchesMap,
  RawSchedule,
} from '@interfaces/interfaces';
import Team from '@models/Team';
import Match from '@models/Match';

export default class SingleEliminationScheduler {
  public static calculate(teams: Teams, schedule?: ScheduleInfo) {
    if (!schedule || !schedule.schedule.length) {
      const listOfTeams: Team[] = this.listOfTeams(teams);
      const initSchedule =
        this.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
          listOfTeams,
        );
      return initSchedule;
    }

    const lastRound: Match[] = [
      ...schedule.schedule[schedule.schedule.length - 1],
    ];
    const lastRoundIsComplete = this.isRoundComplete(lastRound);
    if (!lastRoundIsComplete) return schedule;

    const listOfWinnersOfLastRound: Team[] = this.getWinnersOfRound(lastRound);
    const updatedSchedule =
      this.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
        listOfWinnersOfLastRound,
        schedule,
      );
    return updatedSchedule;
  }

  private static isRoundComplete(lastRound: Match[]) {
    return lastRound.every((match: Match) => {
      const winner = match.getWinner();
      return winner;
    });
  }

  private static getWinnersOfRound(round: Match[]): Team[] {
    const winners: Team[] = [];
    for (let match of round) {
      const winner = match.getWinner();
      if (winner) {
        winners.push(winner);
      }
    }
    return winners;
  }

  private static createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
    teams: Team[],
    scheduleInfo?: ScheduleInfo,
  ): ScheduleInfo {
    const isOddNumberOfTeams = teams.length % 2 !== 0;
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

  private static listOfTeams(teams: Teams): Team[] {
    const teamsList: Team[] = [];
    for (let [_, team] of teams) {
      teamsList.push(team);
    }
    return teamsList;
  }
}
