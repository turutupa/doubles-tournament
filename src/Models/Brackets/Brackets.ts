import TeamsController from '@controllers/TeamsController';
import {
  ITournament,
  ScheduleInfo,
  Teams,
  TournamentParams,
} from '@interfaces/interfaces';
import Tournament from '@models/Tournament';
import Match from '@models/Match';

export default class Brackets
  extends Tournament<TeamsController>
  implements ITournament
{
  constructor(
    scheduler: (teams: Teams) => ScheduleInfo,
    params?: TournamentParams,
  ) {
    super(new TeamsController(), scheduler, params);
  }

  public get schedule(): Match[][] {
    this._schedule = this.tournamentScheduler(this.teams, this._schedule);
    return this._schedule.schedule;
  }

  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;
}
