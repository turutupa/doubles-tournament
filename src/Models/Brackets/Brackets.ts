import TeamsController from '@controllers/TeamsController';
import {
  ITournament,
  ScheduleInfo,
  Teams,
  TournamentParams,
} from '@interfaces/interfaces';
import Tournament from '@models/Tournament';

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
