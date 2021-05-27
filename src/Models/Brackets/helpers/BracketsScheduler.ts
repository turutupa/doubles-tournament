import {
  MatchesMap,
  RawSchedule,
  ScheduleInfo,
  Teams,
} from '@interfaces/interfaces';
import Team from '@models/Team';
import Match from '@models/Match';

class BracketsScheduler {
  public static singleElimination(
    teams: Teams,
    schedule?: ScheduleInfo,
  ): ScheduleInfo {
    const scheduler = new BracketsScheduler();
    if (!schedule || !schedule.schedule.length) {
      const listOfTeams: Team[] = scheduler.listOfTeams(teams);
      const initSchedule =
        scheduler.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
          listOfTeams,
        );
      return initSchedule;
    }

    const lastRound: Match[] = [
      ...schedule.schedule[schedule.schedule.length - 1],
    ];
    const listOfWinnersOfLastRound: Team[] =
      scheduler.getWinnersOfRound(lastRound);
    const updatedSchedule =
      scheduler.createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
        listOfWinnersOfLastRound,
        schedule,
      );
    return updatedSchedule;
  }

  public static doubleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [] as Match[][],
      matches: {},
      rawSchedule: [],
    };
  }

  private getWinnersOfRound(round: Match[]): Team[] {
    const winners: Team[] = [];
    for (let match of round) {
      const winner = match.getWinner();
      if (winner) {
        winners.push(winner);
      }
    }
    return winners;
  }

  private createScheduleInfoFromListOfTeamsAndUpdateScheduleInfo(
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

    // if (isOddNumberOfTeams) {
    //   const oddTeam: Team = teams[teams.length - 1];
    //   const oddMatch: Match = new Match(oddTeam, null);
    //   round.push(oddMatch);
    //   roundOfIDs.push(oddMatch.id);
    // }

    schedule.schedule.push(round);
    schedule.rawSchedule.push(roundOfIDs);

    return schedule;
  }

  private listOfTeams(teams: Teams): Team[] {
    const teamsList: Team[] = [];
    for (let [_, team] of teams) {
      teamsList.push(team);
    }
    return teamsList;
  }
}

export default BracketsScheduler;
