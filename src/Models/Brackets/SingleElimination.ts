import Tournament from '@models/Tournament';
import {
  ITournament,
  TournamentParams,
  Scheduler,
  Teams,
  ScheduleInfo,
} from '@interfaces/interfaces';
import TeamsController from '@controllers/TeamsController';
import BracketsScheduler from '@brackets/helpers/BracketsScheduler';

export default class BracketsSingleElimination
  extends Tournament<TeamsController>
  implements ITournament {
  constructor(params?: TournamentParams) {
    super(new TeamsController(), BracketsScheduler.singleElimination, params);
  }

  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
