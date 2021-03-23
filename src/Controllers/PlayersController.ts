import { GetParticipants, Players } from '@interfaces/interfaces';
import Player from '@models/Player';

export default class PlayersController implements GetParticipants {
  private _players: Players;

  constructor(players?: Players) {
    this._players = players ?? (new Map() as Players);
  }

  public get participants(): Players {
    return this._players ?? (new Map() as Players);
  }

  public player = (name: string): Player => {
    const existingPlayer = this._players.get(name);
    if (!existingPlayer) throw new Error(`Oops! Player ${name} doesn't exist!`);
    return existingPlayer;
  };

  public get players(): Players {
    return this._players;
  }

  public addPlayers = (players: string[]): Player[] => {
    // Before adding players first check if
    // all players are unique and also that it
    // doesn't already exist in this._players
    if (players.length != new Set(players).size) {
      throw `Please provide unique names of players`;
    }

    for (let player of players) {
      if (this._players.get(player)) {
        throw new Error(`Player ${player} already exists! Please, try again.`);
      }
    }

    const newPlayers: Player[] = [];
    players.forEach((player) => {
      const newPlayer = new Player(player);
      this._players.set(player, newPlayer);
      newPlayers.push(newPlayer);
    });

    return newPlayers;
  };

  public addPlayer = (name: string): Player => {
    if (this._players.get(name)) {
      throw `Player ${name} already exists`;
    }

    const player = new Player(name);
    this._players.set(name, player);
    return player;
  };
}
