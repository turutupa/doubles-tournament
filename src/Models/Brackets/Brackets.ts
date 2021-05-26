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
  implements ITournament
{
  constructor(
    scheduler: (teams: Teams) => ScheduleInfo,
    params?: TournamentParams,
  ) {
    super(new TeamsController(), scheduler, params);
  }

  readonly team = this.participants.team;
  readonly teams = this.participants.teams;
  readonly addTeam = this.participants.addTeam;
  readonly addTeams = this.participants.addTeams;
}
