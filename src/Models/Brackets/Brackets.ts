import Tournament from '@models/Tournament';
import {
  ITournament,
  TournamentParams,
  Teams,
  ScheduleInfo,
} from '@interfaces/interfaces';
import TeamsController from '@controllers/TeamsController';

export default class BracketsSingleElimination
  extends Tournament<TeamsController>
  implements ITournament {
  constructor(
    scheduler: (teams: Teams) => ScheduleInfo,
    params?: TournamentParams,
  ) {
    super(new TeamsController(), scheduler, params);
  }

  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
