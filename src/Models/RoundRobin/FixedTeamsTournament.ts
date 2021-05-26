import Tournament from '@models/Tournament';
import TeamsController from '@controllers/TeamsController';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import { ITournament, TournamentParams } from '@interfaces/interfaces';

export default class FixedTeamsTournament
  extends Tournament<TeamsController>
  implements ITournament
{
  constructor(params?: TournamentParams) {
    super(new TeamsController(), RoundRobinScheduler.fixedTeams, params);
  }

  readonly team = this.participants.team;
  readonly teams = this.participants.teams;
  readonly addTeam = this.participants.addTeam;
  readonly addTeams = this.participants.addTeams;
  readonly importTeams = this.participants.import;
}
