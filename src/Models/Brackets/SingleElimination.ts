import BracketsScheduler from '@brackets/helpers/BracketsScheduler';
import TeamsController from '@controllers/TeamsController';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import Tournament from '@models/Tournament';

export default class BracketsSingleElimination
  extends Tournament<TeamsController>
  implements ITournament
{
  constructor(params?: TournamentParams) {
    super(new TeamsController(), BracketsScheduler.singleElimination, params);
  }

  readonly team = this.participants.team;
  readonly teams = this.participants.teams;
  readonly addTeam = this.participants.addTeam;
  readonly addTeams = this.participants.addTeams;
  readonly importTeams = this.participants.import;
}
