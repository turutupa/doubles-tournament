import Player from '@models/Player';
import Team from '@models/Team';
import { GetParticipants, Teams } from '@interfaces/interfaces';
import { uuid } from '@utils/uuid';

export default class TeamsController implements GetParticipants {
  private _teams: Teams = new Map();

  constructor(teams?: Teams) {
    this._teams = teams || new Map();
  }

  public team = (teamID: string): Team => {
    const t = this._teams.get(teamID);
    if (!t) throw new Error(`Team ${teamID} not found!`);

    return t;
  };

  public participants(): Teams {
    return this._teams;
  }

  public get teams(): Teams {
    return this._teams;
  }

  public addTeams(teams: ([string, string] | [Player, Player])[]): Team[] {
    const addedTeams: Team[] = teams.map(this.addTeam);

    return addedTeams;
  }

  public addTeam = (team: [string, string] | [Player, Player]): Team => {
    let firstPlayer: Player;
    let secondPlayer: Player;
    const teamID = uuid();

    if (typeof team[0] === 'string' && typeof team[1] === 'string') {
      firstPlayer = new Player(team[0]);
      secondPlayer = new Player(team[1]);

      const players: [Player, Player] = [firstPlayer, secondPlayer];
      const newTeam: Team = new Team(players, teamID);

      this._teams.set(newTeam.id, newTeam);
      return newTeam;
    }

    // this is a mess just to check if both
    // players are in fact players. Is there cleaner solution?

    firstPlayer = team[0] instanceof Player ? team[0] : null!;
    secondPlayer = team[1] instanceof Player ? team[1] : null!;

    if (!firstPlayer || !secondPlayer) {
      throw new Error('Players are not of type string nor type player');
    }

    const players: [Player, Player] = [firstPlayer, secondPlayer];
    const newTeam: Team = new Team(players, teamID);

    this._teams.set(newTeam.id, newTeam);
    return newTeam;
  };
}
