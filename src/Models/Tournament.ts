import Leaderboard from '@controllers/Leaderboard';
import {
  TournamentParams,
  ParticipantsController,
  ParticipantParams,
  isAscending,
  DESCENDING,
  ITournament,
} from '@interfaces/interfaces';
import { WINS } from '@interfaces/constants';
import { uuid } from '@utils/uuid';
import { defaultTournamentValues } from '@utils/constants';

const {
  defaultName,
  defaultPrice,
  defaultLocation,
  defaultDate,
  defaultMaxNumberOfPlayers,
} = defaultTournamentValues;

export default abstract class Tournament<T extends ParticipantsController>
  implements ITournament {
  public id: string;
  public name: string;
  public date: Date;
  public price: number;
  public maxNumberOfPlayers: number;
  public location: string;
  private params?: TournamentParams;

  constructor(params?: TournamentParams) {
    this.id = uuid();
    this.name = params?.name || defaultName;
    this.date = params?.date || defaultDate;
    this.price = params?.price || defaultPrice;
    this.maxNumberOfPlayers =
      params?.maxNumberOfPlayers || defaultMaxNumberOfPlayers;
    this.location = params?.location || defaultLocation;
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
      return Leaderboard.sortBy.call(this, participants, WINS, DESCENDING);
    } else if (!ascending) {
      return Leaderboard.sortBy.call(this, participants, sortable, DESCENDING);
    }

    return Leaderboard.sortBy.call(this, participants, sortable, ascending);
  }
}
