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
    public home: Team,
    public away: Team,
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
    this.scoreboard = scoreboard;
    MatchController.updatePlayersAndTeams(this.home, this.away, scoreboard);
  }
}
