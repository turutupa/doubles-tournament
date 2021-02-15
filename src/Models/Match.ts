import Team from '@models/Team';
import { uuid } from '@utils/uuid';

export default class Match {
  public id: string;
  public score: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor(
    public locals: Team,
    public visitors: Team,
    public court?: string,
    public time?: string,
  ) {
    this.id = String(uuid());
    this.locals = locals;
    this.visitors = visitors;
    this.court = court || undefined;
    this.time = time || undefined;
  }
}
