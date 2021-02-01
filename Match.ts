import Team from './Team';

export default class Match {
  public score: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor(
    public id: string,
    public locals: Team,
    public visitors: Team,
    public court?: string,
    public time?: string
  ) {
    this.id = id;
    this.locals = locals;
    this.visitors = visitors;
    this.court = court || undefined;
    this.time = time || undefined;
  }
}
