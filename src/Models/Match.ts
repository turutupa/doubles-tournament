import Team from '@models/Team';
import { uuid } from '@utils/uuid';
import MatchController from '@controllers/MatchController';

export default class Match {
  public id: string;
  public scoreboard: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor(
    public home: Team | null,
    public away: Team | null,
    public court?: string,
    public time?: string,
  ) {
    this.id = String(uuid());
    this.home = home;
    this.away = away;
    this.court = court || undefined;
    this.time = time || undefined;
  }

  public addResults(scoreboard: number[][]): void {
    if (!this.home || !this.away)
      throw new Error('Cannot add results to a match with an empty team');
    this.scoreboard = scoreboard;
    MatchController.updatePlayersAndTeams(this.home, this.away, scoreboard);
  }

  public getWinner(): Team | null {
    if (!this.home && !this.away) return null;
    if (!this.home && this.away) return this.away;
    if (this.home && !this.away) return this.home;

    let homeSets = 0;
    let awaySets = 0;
    for (let i = 0; i < this.scoreboard[0].length; i++) {
      const homeScoreboard = this.scoreboard[0];
      const awayScoreboard = this.scoreboard[1];

      // doing double IF to avoid mistakenly possible ties in a given set
      if (homeScoreboard[i] > awayScoreboard[i]) {
        homeSets++;
      }

      if (awayScoreboard[i] > homeScoreboard[i]) {
        awaySets++;
      }
    }

    if (homeSets > awaySets) return this.home;
    if (awaySets > homeSets) return this.away;
    return null;
  }

  public getLoser(): Team | null {
    const winner = this.getWinner();
    if (!winner) return null;
    if (winner === this.home) return this.away;
    if (winner === this.away) return this.home;
    return null;
  }
}
