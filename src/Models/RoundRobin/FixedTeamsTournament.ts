import Tournament from '@models/Tournament';
import TeamsController from '@controllers/TeamsController';
import Match from '@models/Match';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import {
  ITournament,
  TournamentParams,
  ScheduleInfo,
} from '@interfaces/interfaces';

export default class FixedTeamsTournament
  extends Tournament<TeamsController>
  implements ITournament {
  protected participants = new TeamsController();
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };
  private _scheduleBuilder = RoundRobinScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;

  public schedule() {}

  public newSchedule() {}
  public resetSchedule() {}

  // private createSchedule(): Match[][] {
  //   this._schedule =  this._scheduleBuilder.fixedTeams(this.participants.teams);

  //   return this._schedule
  // }
}
