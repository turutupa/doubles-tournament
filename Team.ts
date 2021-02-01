import Player from './Player';

export default class Team {
  constructor(private firstPlayer: Player, private secondPlayer: Player) {}

  getTeam(): [Player, Player] {
    return [this.firstPlayer, this.secondPlayer];
  }
}
