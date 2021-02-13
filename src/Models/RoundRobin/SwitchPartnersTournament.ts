import Tournament from '@models/Tournament';
import Match from '@models/Match';
import { TournamentParams, ScheduleInfo } from '@interfaces/interfaces';
import PlayersHandler from '@controllers/PlayersController';
import SwitchScheduler from '@roundrobin/SwitchPartnersScheduler';
export default class SwitchTournament extends Tournament<PlayersHandler> {
  protected participants = new PlayersHandler();
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };
  private _scheduleBuilder = SwitchScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public players = this.participants.players;
  public addPlayer = this.participants.addPlayer;
  public addPlayers = this.participants.addPlayers;

  public schedule(): Match[][] {
    return this.convertScheduleInfoToSchedule(this._schedule);
  }

  public newSchedule(): Match[][] {
    if (this._schedule.schedule.length > 0) {
      throw new Error(`
        There is an ongoing tournament.
        If you want to restart the tournament
        with same players use resetTournament
      `);
    }
    this._schedule = this._scheduleBuilder.calculate(this.participants.players);

    return this.convertScheduleInfoToSchedule(this._schedule);
  }

  public resetSchedule() {}

  private convertScheduleInfoToSchedule(scheduleInfo: ScheduleInfo): Match[][] {
    return scheduleInfo.schedule.map((round: string[]) => {
      return round.map((match: string) => {
        return this._schedule.matches[match];
      });
    });
  }
}
