import Match from '@models/Match';
import { MatchesMap, Players, IsParticipant } from '@interfaces/interfaces';
import Player from '@models/Player';
import Team from '@models/Team';

export default class MatchController {
  public static update(matches: MatchesMap, id: string, results: number[][]) {
    // update match
    const match: Match = matches[id];
    match.scoreboard = results;

    this.updatePlayersAndTeams(match.home, match.away, results);
  }

  private static updatePlayersAndTeams(
    home: Team,
    away: Team,
    results: number[][],
  ) {
    const [firstHome, secondHome] = home.team;
    const [firstAway, secondAway] = away.team;

    const homeScore = results[0];
    const awayScore = results[1];

    const homeWonGames = this.calculateGames(homeScore);
    const awayWonGames = this.calculateGames(awayScore);

    let homeSets = 0;
    let awaySets = 0;

    for (let i = 0; i < results[0].length; i++) {
      if (homeScore[i] > awayScore[i]) {
        homeSets++;
      } else {
        awaySets++;
      }
    }

    const homeResults = {
      wins: homeSets > awaySets ? 1 : 0,
      losses: homeSets > awaySets ? 0 : 1,
      games: homeWonGames,
      sets: homeSets,
    };

    const awayResults = {
      wins: awaySets > homeSets ? 1 : 0,
      losses: awaySets > homeSets ? 0 : 1,
      games: awayWonGames,
      sets: awaySets,
    };

    // update home players
    firstHome.addResults(homeResults);
    secondHome.addResults(homeResults);

    // update away players
    firstAway.addResults(awayResults);
    secondAway.addResults(awayResults);

    // update home team
    home.addResults(homeResults);
    away.addResults(awayResults);
  }

  private static calculateGames(results: number[]): number {
    return results.reduce((a, b) => a + b, 0);
  }
}
