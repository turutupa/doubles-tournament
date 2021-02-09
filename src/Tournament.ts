import Leaderboard from 'Leaderboard/Leaderboard';
import { TournamentParams, ParticipantHandler, ParticipantParams, isAscending } from './interfaces';
import { inAWeekFromDateNow } from './constants';

export default abstract class Tournament<T extends ParticipantHandler> {
  public id: string;
  public name: string;
  public date: Date;
  public price: number;
  public maxNumberOfPlayers: number;
  public location: string;

  constructor(private params?: TournamentParams) {
    this.id = 'this is for database identification right?';
    this.name = params?.name || 'Please, set a name';
    this.date = params?.date || inAWeekFromDateNow;
    this.price = params?.price || 0;
    this.maxNumberOfPlayers = params?.maxNumberOfPlayers || 15;
    this.location = params?.location || 'Please, set a location';
  }

  protected abstract participants: T;
  public abstract schedule(): void;
  public abstract newSchedule(): void;
  public abstract resetSchedule(): void;

  get log(): Tournament<T> {
    console.log(`
    name: ${this.name}
      date: ${this.date}
      price: ${this.price}
      size: ${this.maxNumberOfPlayers} players
    `);
    return this;
  }

  setName(name: string): void {
    this.name = name;
  }

  leaderboard(sortable?: keyof ParticipantParams, ascending?: isAscending) {
    const participants = this.participants.participants();

    if (!sortable) {
      // provide default sortable key
      return Leaderboard.sortBy.call(this, participants, 'wins', 'descending');
    }

    return Leaderboard.sortBy.call(this, participants, sortable, ascending);
  }
}
