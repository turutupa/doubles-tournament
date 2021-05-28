import PlayersController from '@controllers/PlayersController';
import TeamsController from '@controllers/TeamsController';
import Match from '@models/Match';
import Player from '@models/Player';
import Team from '@models/Team';
import { Syncable } from './sync';

export interface ITournament {
  id: string;
  name: string;
  date: Date;
  price: number;
  maxNumberOfPlayers: number;
  location: string;
  schedule: Match[][];
  newSchedule(): Match[][];
  resetSchedule(): Match[][];
  leaderboard(): void;
  export(): Syncable;
  import(params: Syncable): TournamentParams;
}

export interface HasID {
  id: string;
}

export type TournamentParams = {
  id?: string;
  name?: string;
  date?: Date;
  price?: number;
  location?: string;
  maxNumberOfPlayers?: number;
};

export interface Scheduler {
  getSchedule(players: Players | Teams): ScheduleInfo;
}

export interface ParticipantParams extends HasID {
  wins: number;
  losses: number;
  games: number;
  sets: number;
}

export interface MatchResults {
  wins?: number;
  losses?: number;
  games?: number;
  sets?: number;
}

export type ParticipantsController = PlayersController | TeamsController;
export interface GetParticipants {
  participants: Players | Teams;
}

export type RawSchedule = string[][];

export interface MatchesMap {
  [key: string]: Match;
}

// Freakin weird syntax I chose:
// rawSchedule has rounds of match IDs. That is, it only contains the ID of the match (string fomart)
// schedule is a matrix of Matches
// matches is a Map with key:value => matchId:match
export interface ScheduleInfo {
  rawSchedule: RawSchedule;
  schedule: Match[][];
  matches: MatchesMap;
}

export interface ScheduleInfoDoubleElimination {
  rawSchedule: RawSchedule;
  schedule: DoubleEliminationSchedule;
  matches: MatchesMap;
}

interface DoubleEliminationSchedule {
  winners: Match[][];
  losers: Match[][];
}

export type ParticipantMap = Map<string, Participant>;
export type Players = Map<string, Player>;
export type Teams = Map<string, Team>;
export type Participant = Player | Team;

export type isAscending = 'ascending' | 'descending';
export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';
