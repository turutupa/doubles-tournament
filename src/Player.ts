import { ParticipantParams, MatchResults } from 'interfaces';

export default class Player implements ParticipantParams {
  public wins: number;
  public losses: number;
  public games: number;
  public sets: number;
  public id: string;

  constructor(id: string) {
    this.id = id;
    this.wins = 0;
    this.losses = 0;
    this.games = 0;
    this.sets = 0;
  }

  public get name(): string {
    return this.id;
  }

  public setName(name: string): Player {
    this.id = name;
    return this;
  }

  public addWonGames(games: number): Player {
    this.games = this.games + games;
    return this;
  }

  public addWonSets(sets: number): Player {
    this.sets = this.sets + sets;
    return this;
  }

  public addMatchWin(wins?: number): Player {
    if (wins) {
      this.wins = this.wins + wins;
      return this;
    }

    this.wins++;
    return this;
  }

  public addMatchLosses(losses?: number): Player {
    if (losses) {
      this.losses = this.losses + losses;
      return this;
    }

    this.losses++;
    return this;
  }

  // i hate this implementation but I didn't know
  // how to add class indexer
  public addResults(results: MatchResults): Player {
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
