import Player from './Player';
import Team from 'Team';
import { GetParticipants, Teams } from 'interfaces';
import { uuid } from 'helpers';

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
