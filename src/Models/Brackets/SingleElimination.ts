import BracketsScheduler from '@brackets/helpers/BracketsScheduler';
import TeamsController from '@controllers/TeamsController';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import Brackets from '@models/Brackets/Brackets';
import Tournament from '@models/Tournament';
import Match from '@models/Match';

export default class BracketsSingleElimination
  extends Brackets
  implements ITournament
{
  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
