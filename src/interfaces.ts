import Player from './Player';
import Team from './Team';
import Match from './Match';
import PlayersHandler from './PlayersHandler';
import TeamsHandler from './TeamsHandler';

export interface HasID {
  id: string;
}

export type TournamentDetails = {
  id?: string;
  players?: PlayersHandler;
  name?: string;
  date?: Date;
  price?: number;
  maxNumberOfPlayers?: number;
};

export type TournamentParams = {
  id?: string;
  name?: string;
  date?: Date;
  price?: number;
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

export type ParticipantHandler = PlayersHandler | TeamsHandler;
export interface GetParticipants {
  participants(): Players | Teams;
}

export interface MatchesMap {
  [key: string]: Match;
}

export interface ScheduleInfo {
  rawSchedule?: [string, string][][][];
  schedule: string[][];
  matches: MatchesMap;
}

export type Players = Map<string, Player>;
export type Teams = Map<string, Team>;
export type IsParticipant = Players | Teams;

export type isAscending = 'ascending' | 'descending';
export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';
