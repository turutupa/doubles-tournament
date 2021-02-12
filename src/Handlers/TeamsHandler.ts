import Player from '@models/Player';
import Team from '@models/Team';
import { GetParticipants, Teams } from '@interfaces/interfaces';
import { uuid } from '@helpers/uuid';

export default class TeamsHandler implements GetParticipants {
  private _teams: Teams = new Map();

  public participants(): Teams {
    return this._teams;
  }

  public teams(): Teams {
    return this._teams;
  }

  public addTeams() {}

  public addTeam(team: [Player, Player]): void {
    const teamID = String(uuid());
    this._teams.set(teamID, new Team(team, teamID));
  }
}
