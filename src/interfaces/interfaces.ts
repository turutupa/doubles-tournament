import Player from '@models/Player';
import Team from '@models/Team';
import Match from '@models/Match';
import PlayersController from '@controllers/PlayersController';
import TeamsController from '@controllers/TeamsController';

export interface ITournament {
  id: string;
  name: string;
  date: Date;
  price: number;
  maxNumberOfPlayers: number;
  location: string;
  log: void;
  schedule(): void;
  newSchedule(): void;
  resetSchedule(): void;
  leaderboard(): void;
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
  participants(): Players | Teams;
}

export type RawSchedule = [string, string][][][];

export interface MatchesMap {
  [key: string]: Match;
}

// freakin weird syntax I chose:
// rawSchedule gives rounds with player names
// schedule gives rounds with matchIDs
// matches is a map with key/value => matchId/match
export interface ScheduleInfo {
  rawSchedule?: RawSchedule;
  schedule: string[][];
  matches: MatchesMap;
}

export type ParticipantMap = Map<string, Participant>;
export type Players = Map<string, Player>;
export type Teams = Map<string, Team>;
export type Participant = Player | Team;

export type isAscending = 'ascending' | 'descending';
export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';
