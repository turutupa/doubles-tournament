import RoundRobin from './RoundRobin';
import Brackets from './Brackets';
import Player from './Player';
import PlayersHandler from './PlayersHandler';
import TeamsHandler from './TeamsHandler';
import Match from './Match';
import Leaderboard from './Leaderboard';
import { TournamentParams, TournamentBuilder, isAscending, ScheduleInfo } from './interfaces';
import { inAWeekFromDateNow } from './constants';

type ParticipantsHandler = PlayersHandler | TeamsHandler;

export default class Tournament {
  static get roundRobin(): RoundRobin {
    return new RoundRobin();
  }

  static get brackets() {
    return new Brackets();
  }

  public id: string;
  public name: string;
  public date: Date;
  public price: number;
  public maxNumberOfPlayers: number;
  private tournament: TournamentBuilder;
  private _players: PlayersHandler | TeamsHandler;
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };

  constructor(private params: TournamentParams) {
    this.name = params.name || 'Please, set a name';
    this.date = params.date || inAWeekFromDateNow;
    this.price = params.price || 0;
    this.maxNumberOfPlayers = params.maxNumberOfPlayers || 15;
    this._players = params.players;
    this.id = 'this is for database identification right?';
    this.tournament = params.tournament;
  }

  // get players() {
  //   return this._players.players;
  // }

  // get addPlayer() {
  //   return this._players.addPlayer;
  // }

  // get addPlayers() {
  //   return this._players.addPlayers;
  // }

  private convertScheduleInfoToSchedule(scheduleInfo: ScheduleInfo): Match[][] {
    return scheduleInfo.schedule.map((round: string[]) => {
      return round.map((match: string) => {
        return this._schedule.matches[match];
      });
    });
  }

  public newSchedule(): Match[][] {
    if (this._schedule.schedule.length > 0) {
      throw new Error(`
        There is an ongoing tournament.
        If you want to restart the tournament
        with same players use resetTournament
      `);
    }
    this._schedule = this.tournament.getSchedule(this._players.players());

    return this.convertScheduleInfoToSchedule(this._schedule);
  }

  get schedule() {
    return this.convertScheduleInfoToSchedule(this._schedule);
  }

  get log(): Tournament {
    console.log(`
      name: ${this.name}
      date: ${this.date}
      price: ${this.price}
      size: ${this.maxNumberOfPlayers} players
      tournament: ${JSON.stringify(this.tournament, null, 2)}
    `);
    return this;
  }

  get logPlayers(): Tournament {
    console.log(this._players.players());
    return this;
  }

  setName(name: string): void {
    this.name = name;
  }

  leaderboard(sortable?: keyof Player, ascending?: isAscending) {
    const players = this._players.players();
    if (!sortable) {
      return Leaderboard.sortBy.call(this, players, 'name', 'descending');
    }

    return Leaderboard.sortBy.call(this, players, sortable, ascending);
  }
}
