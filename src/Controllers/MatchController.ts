import { MatchesMap, MatchResults } from '@interfaces/interfaces';
import Match from '@models/Match';
import Player from '@models/Player';
import Team from '@models/Team';

export default class MatchController {
  public static update(
    matches: MatchesMap,
    id: string,
    results: number[][],
  ): void {
    // update match
    const match: Match = matches[id];
    match.scoreboard = results;

    this.updatePlayersAndTeams(match.home, match.away, results);
  }

  public static updatePlayersAndTeams(
    home: Team,
    away: Team,
    results: number[][],
  ): void {
    const [firstHome, secondHome]: [Player, Player] = home.players;
    const [firstAway, secondAway]: [Player, Player] = away.players;

    const homeScore = results[0];
    const awayScore = results[1];

    const homeWonGames = this.calculateGames(homeScore);
    const awayWonGames = this.calculateGames(awayScore);

    let homeSets = 0;
    let awaySets = 0;

    for (let i = 0; i < results[0].length; i++) {
      if (homeScore[i] > awayScore[i]) {
        homeSets++;
      } else if (awayScore[i] > homeScore[i]) {
        awaySets++;
      }
    }

    const homeResults: MatchResults = {
      wins: homeSets > awaySets ? 1 : 0,
      losses: homeSets > awaySets ? 0 : 1,
      games: homeWonGames,
      sets: homeSets,
    };

    const awayResults: MatchResults = {
      wins: awaySets > homeSets ? 1 : 0,
      losses: awaySets > homeSets ? 0 : 1,
      games: awayWonGames,
      sets: awaySets,
    };

    if (homeSets === 0 && awaySets === 0) {
      delete homeResults.wins;
      delete homeResults.losses;
      delete awayResults.wins;
      delete awayResults.losses;
    }

    // update home players
    firstHome.addResults(homeResults);
    secondHome.addResults(homeResults);

    // update away players
    firstAway.addResults(awayResults);
    secondAway.addResults(awayResults);

    // update teams
    home.addResults(homeResults);
    away.addResults(awayResults);
  }

  private static calculateGames(results: number[]): number {
    return results.reduce((a, b) => a + b, 0);
  }
}
