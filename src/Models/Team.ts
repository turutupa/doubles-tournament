import Player from '@models/Player';
import { ParticipantParams } from '@interfaces/interfaces';
import { uuid } from '@utils/uuid';
export default class Team implements ParticipantParams {
  public id: string;
  public team: [Player, Player];
  public wins: number = 0;
  public losses: number = 0;
  public games: number = 0;
  public sets: number = 0;

  constructor(private players: [Player, Player], id?: string) {
    const [firstPlayer, secondPlayer] = players;
    this.team = [firstPlayer, secondPlayer];
    this.id = id ? String(id) : String(uuid());
  }
}
