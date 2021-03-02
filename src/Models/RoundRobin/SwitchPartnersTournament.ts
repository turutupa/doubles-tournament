import Tournament from '@models/Tournament';
import Match from '@models/Match';
import {
  ITournament,
  TournamentParams,
  ScheduleInfo,
} from '@interfaces/interfaces';
import PlayersController from '@controllers/PlayersController';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import MatchController from '@controllers/MatchController';
export default class SwitchTournament
  extends Tournament<PlayersController>
  implements ITournament {
  protected participants = new PlayersController();
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };
  private roundRobinScheduler = RoundRobinScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public player = this.participants.player;
  public players = this.participants.players;
  public addPlayer = this.participants.addPlayer;
  public addPlayers = this.participants.addPlayers;

  public schedule(): Match[][] {
    this.roundRobinScheduler.updatePlayersAndMatchesStats(this._schedule);
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
      this.participants.players,
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
