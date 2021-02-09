import Tournament from 'Tournament';
import { TournamentParams } from 'interfaces';
import TeamsHandler from 'TeamsHandler';

export default class FixedTeamsTournament extends Tournament<TeamsHandler> {
  protected participants = new TeamsHandler();

  constructor(params: TournamentParams) {
    super(params);
  }

  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;

  public schedule() {}
  public newSchedule() {}
  public resetSchedule() {}
}
