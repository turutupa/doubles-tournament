import Team from '@models/Team';
import Match from '@models/Match';
import {
  Teams,
  ScheduleInfo,
  MatchesMap,
  RawSchedule,
} from '@interfaces/interfaces';

export default class SchedulerHelper {
  public static listOfTeams(teams: Teams): Team[] {
    const teamsList: Team[] = [];
    for (let [_, team] of teams) {
      teamsList.push(team);
    }
    return teamsList;
  }

  public static isRoundComplete(round: Match[]) {
    return round.every((match: Match) => {
      const winner = match.getWinner();
      return winner;
    });
  }

  public static getWinnersOfRound(round: Match[]): Team[] {
    const winners: Team[] = [];
    for (let match of round) {
      const winner = match.getWinner();
      if (winner) {
        winners.push(winner);
      }
    }
    return winners;
  }

  public static getLosersOfRound(round: Match[]): Team[] {
    const losers: Team[] = [];
    for (let match of round) {
      const loser = match.getLoser();
      if (loser) {
        losers.push(loser);
      }
    }
    return losers;
  }

  public static updateScheduleSingleElimination(
    teams: Team[],
    scheduleInfo: ScheduleInfo,
  ): ScheduleInfo {
    const round: Match[] = [];
    const roundOfIDs: string[] = [];
    const { schedule: s, rawSchedule: r, matches: m } = scheduleInfo;
    const schedule: ScheduleInfo = {
      schedule: [...s],
      rawSchedule: [...r],
      matches: { ...m },
    };

    for (let i = 0; i < teams.length; i = i + 2) {
      const home: Team = teams[i];
      const away: Team = teams[i + 1];
      const newMatch: Match = new Match(home, away);
      // update matches and add match and Id to current Round
      schedule.matches[newMatch.id] = newMatch;
      roundOfIDs.push(newMatch.id);
      round.push(newMatch);
    }

    schedule.schedule.push(round);
    schedule.rawSchedule.push(roundOfIDs);

    return schedule;
  }

  public static updateScheduleDoubleElimination(
    teams: Team[],
    scheduleInfo: ScheduleInfo,
  ): ScheduleInfo {
    const round: Match[] = [];
    const roundOfIDs: string[] = [];

    const { schedule: s, rawSchedule: r, matches: m } = scheduleInfo;
    const schedule: ScheduleInfo = {
      schedule: [...s],
      rawSchedule: [...r],
      matches: { ...m },
    };

    for (let i = 0; i < teams.length; i = i + 2) {
      const home: Team = teams[i];
      const away: Team = teams[i + 1];
      const newMatch: Match = new Match(home, away);

      schedule.matches[newMatch.id] = newMatch;
      roundOfIDs.push(newMatch.id);
      round.push(newMatch);
    }

    schedule.schedule.push(round);
    schedule.rawSchedule.push(roundOfIDs);

    return schedule;
  }
}
