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
  private _scheduleBuilder = RoundRobinScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public player = this.participants.player;
  public players = this.participants.players;
  public addPlayer = this.participants.addPlayer;
  public addPlayers = this.participants.addPlayers;

  public schedule(): Match[][] {
    this.updatePlayersAndMatchesStats();
    return this.translateMatchIDsToMatches(this._schedule);
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
    this._schedule = this._scheduleBuilder.switchPartners(
      this.participants.players,
    );

    return this.translateMatchIDsToMatches(this._schedule);
  }

  public resetSchedule(): Match[][] {
    return this.createSchedule();
  }

  // Perhaps this doesn't belong here?
  // Match Model has its own method to add
  // results to scoreboard
  public addResults(matchId: string, results: number[][]): void {
    MatchController.update(this._schedule.matches, matchId, results);
  }

  private updatePlayersAndMatchesStats(): void {
    this._schedule.schedule.forEach((round: string[]) => {
      round.forEach((matchID: string) => {
        const match = this._schedule.matches[matchID];
        const { home, away, scoreboard } = match;

        MatchController.updatePlayersAndTeams(home, away, scoreboard);
      });
    });
  }

  private translateMatchIDsToMatches(scheduleInfo: ScheduleInfo): Match[][] {
    return scheduleInfo.schedule.map((round: string[]) => {
      return round.map((matchID: string) => {
        const match = scheduleInfo.matches[matchID];
        return match;
      });
    });
  }
}
