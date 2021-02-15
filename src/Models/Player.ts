import Participant from '@models/Participant';
import { ParticipantParams, MatchResults } from '@interfaces/interfaces';

export default class Player extends Participant implements ParticipantParams {
  public wins: number = 0;
  public losses: number = 0;
  public games: number = 0;
  public sets: number = 0;
  public id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  public get name(): string {
    return this.id;
  }

  public get stats(): MatchResults {
    return {
      wins: this.wins,
      losses: this.losses,
      games: this.games,
      sets: this.sets,
    };
  }

  public setName(name: string): Player {
    this.id = name;
    return this;
  }
}
