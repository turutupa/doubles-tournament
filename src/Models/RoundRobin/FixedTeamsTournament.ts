import Tournament from '@models/Tournament';
import TeamsController from '@controllers/TeamsController';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import Match from '@models/Match';

export default class FixedTeamsTournament
  extends Tournament<TeamsController>
  implements ITournament
{
  constructor(params?: TournamentParams) {
    super(new TeamsController(), RoundRobinScheduler.fixedTeams, params);
  }

  public get schedule(): Match[][] {
    return this._schedule.schedule;
  }
  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
