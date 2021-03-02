import Tournament from '@models/Tournament';
import {
  ITournament,
  TournamentParams,
  Scheduler,
  Teams,
  ScheduleInfo,
} from '@interfaces/interfaces';
import TeamsController from '@controllers/TeamsController';
import SingleEliminationScheduler from '@brackets/helpers/SingleEliminationScheduler';

export default class BracketsSingleElimination
  extends Tournament<TeamsController>
  implements ITournament {
  protected participants: TeamsController = new TeamsController();
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };
  private singleEliminationScheduler = SingleEliminationScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;

  public schedule() {}
  public resetSchedule() {}
  public newSchedule() {}
}
