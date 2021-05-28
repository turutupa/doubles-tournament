import { ITournament } from '@interfaces/interfaces';
import Brackets from '@models/Brackets/Brackets';

export default class BracketsDoubleElimination
  extends Brackets
  implements ITournament
{
  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
