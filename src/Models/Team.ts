import Participant from '@models/Participant';
import Player from '@models/Player';
import { ParticipantParams } from '@interfaces/interfaces';
import { uuid } from '@utils/uuid';
export default class Team extends Participant implements ParticipantParams {
  public id: string;
  public team: [Player, Player];

  constructor(private players: [Player, Player], id?: string) {
    super();
    const [firstPlayer, secondPlayer] = players;
    this.team = [firstPlayer, secondPlayer];
    this.id = id ? String(id) : String(uuid());
  }

  public get name(): string {
    return this.id;
  }

  public setTeamName(name: string): Team {
    this.id = name;
    return this;
  }

  public setPlayerName(updateablePlayer: string, newName: string): this {
    const [firstPlayer, secondPlayer] = this.team;
    if (firstPlayer.name === updateablePlayer) {
      firstPlayer.setName(newName);
      return this;
    }

    if (secondPlayer.name === updateablePlayer) {
      secondPlayer.setName(newName);
      return this;
    }

    throw new Error(`No player named ${updateablePlayer} exists in team`);
  }
}
