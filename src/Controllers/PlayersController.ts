import { Players, GetParticipants } from '@interfaces/interfaces';
import Player from '@models/Player';

export default class PlayersController implements GetParticipants {
  private _players: Players = new Map<string, Player>();

  public participants(): Players {
    return this._players;
  }

  public player = (name: string): Player => {
    const existingPlayer = this._players.get(name);
    if (!existingPlayer) throw new Error(`Oops! Player ${name} doesn't exist!`);
    return existingPlayer;
  };

  public get players(): Players {
    return this._players;
  }

  public addPlayers = (players: string[]): Players => {
    // Before adding players first check if
    // all players are unique and also it
    // doesn't already exist in this._players
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
}
