import BracketsScheduler from '@brackets/helpers/BracketsScheduler';
import TeamsController from '@controllers/TeamsController';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import Tournament from '@models/Tournament';

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
