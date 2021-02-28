import Leaderboard from '@controllers/Leaderboard';
import {
  TournamentParams,
  ParticipantHandler,
  ParticipantParams,
  isAscending,
  DESCENDING,
} from '@interfaces/interfaces';
import { inAWeekFromDateNow } from '@utils/constants';
import { uuid } from '@utils/uuid';

export default abstract class Tournament<T extends ParticipantHandler> {
  public id: string;
  public name: string;
  public date: Date;
  public price: number;
  public maxNumberOfPlayers: number;
  public location: string;

  constructor(private params?: TournamentParams) {
    this.id = String(uuid());
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

  public get info() {
    return {
      name: this.name,
      price: this.price,
      date: this.date,
      maxNumberOfPlayers: this.maxNumberOfPlayers,
      location: this.location,
    };
  }

  public get log(): void {
    console.log(`
    name: ${this.name}
    date: ${this.date}
    price: ${this.price}
    size: ${this.maxNumberOfPlayers} players
    location: ${this.location}
    `);
    return;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public setLocation(location: string): void {
    this.location = location;
  }

  public setMaxNumberOfPlayers(maxNumberOfPlayers: number): void {
    this.maxNumberOfPlayers = maxNumberOfPlayers;
  }

  public leaderboard(
    sortable?: keyof ParticipantParams,
    ascending?: isAscending,
  ) {
    const participants = this.participants.participants();

    if (!sortable) {
      // provide default sortable key
      return Leaderboard.sortBy.call(this, participants, 'wins', DESCENDING);
    } else if (!ascending) {
      return Leaderboard.sortBy.call(this, participants, sortable, DESCENDING);
    }

    return Leaderboard.sortBy.call(this, participants, sortable, ascending);
  }
}
