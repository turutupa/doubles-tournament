import Tournament from '@models/Tournament';
import TeamsController from '@controllers/TeamsController';
import Match from '@models/Match';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import MatchController from '@controllers/MatchController';
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
  private roundRobinScheduler = RoundRobinScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public team = this.participants.team;
  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;

  public schedule(): Match[][] {
    return this.roundRobinScheduler.translateMatchIDsToMatches(this._schedule);
  }

  public newSchedule(): Match[][] {
    if (this._schedule.schedule.length > 0) {
      throw new Error(`
        There is an ongoing tournament.
        If you want to restart the tournament
        with same players use resetTournament
      `);
    }

    return this.createSchedule();
  }

  private createSchedule(): Match[][] {
    this._schedule = this.roundRobinScheduler.switchPartners(
      this.participants.teams,
    );

    return this.roundRobinScheduler.translateMatchIDsToMatches(this._schedule);
  }

  public resetSchedule(): Match[][] {
    return this.createSchedule();
  }

  public addResults(matchId: string, results: number[][]): void {
    MatchController.update(this._schedule.matches, matchId, results);
  }
}
