import Team from '@models/Team';
import Match from '@models/Match';
import { Teams } from '@interfaces/interfaces';

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
}
