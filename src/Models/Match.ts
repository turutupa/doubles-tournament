import Team from '@models/Team';
import { uuid } from '@utils/uuid';

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
}
