import { MatchResults } from '@interfaces/interfaces';

export default abstract class Participant {
  public wins: number = 0;
  public losses: number = 0;
  public games: number = 0;
  public sets: number = 0;

  public get stats(): MatchResults {
    return {
      wins: this.wins,
      losses: this.losses,
      games: this.games,
      sets: this.sets,
    };
  }

  public addWonGames(games: number): this {
    this.games = this.games + games;
    return this;
  }

  public addWonSets(sets: number): this {
    this.sets = this.sets + sets;
    return this;
  }

  public addWonMatch(wins?: number): this {
    if (wins) {
      this.wins = this.wins + wins;
      return this;
    }

    this.wins++;
    return this;
  }

  public addLostMatch(losses?: number): this {
    if (losses) {
      this.losses = this.losses + losses;
      return this;
    }

    this.losses++;
    return this;
  }

  // I hate this implementation but I didn't know
  // how to add a class indexer
  public addResults(results: MatchResults): this {
    if (results.wins) {
      this.wins = this.wins + results.wins;
    }

    if (results.losses) {
      this.losses = this.losses + results.losses;
    }

    if (results.games) {
      this.games = this.games + results.games;
    }

    if (results.sets) {
      this.sets = this.sets + results.sets;
    }

    return this;
  }
}
