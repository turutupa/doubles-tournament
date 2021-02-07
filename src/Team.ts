import Player from './Player';
import { uuid } from './helpers';

export default class Team {
  public id: number = uuid();
  public wins?: number = 0;
  public losses?: number = 0;
  public team: [Player, Player];
  constructor(private firstPlayer: Player, private secondPlayer: Player) {
    this.team = [firstPlayer, secondPlayer];
  }
}
