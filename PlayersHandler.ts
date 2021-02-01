import { Players } from './interfaces';
import Player from './Player';

export default class PlayersHandler {
  private _players: Players = new Map<string, Player>();

  addPlayers = (players: string[]): Players => {
    // Before adding players first check if
    // all players are unique and also don't
    // have already existing player in this._players
    if (players.length != new Set(players).size) {
      throw `Please provide unique names of players`;
    }

    for (let player of players) {
      if (this._players.get(player)) {
        throw new Error(`Player ${player} already exists! Please, try again.`);
      }
    }

    players.forEach((player) => {
      this._players.set(player, new Player(player));
    });

    return this._players;
  };

  addPlayer = (name: string): Players => {
    if (this._players.get(name)) {
      throw `Player ${name} already exists`;
    } else {
      this._players.set(name, new Player(name));
    }

    return this._players;
  };

  players = (): Players => {
    return this._players;
  };
}
