import Player from './Player';
import Team from './Team';
import Match from './Match';
import PlayersHandler from './PlayersHandler';
import TeamsHandler from './TeamsHandler';

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
  tournament: TournamentBuilder;
  players: PlayersHandler | TeamsHandler;
  name?: string;
  date?: Date;
  price?: number;
  maxNumberOfPlayers?: number;
};

export interface TournamentBuilder {
  getSchedule(players: Players | Teams): ScheduleInfo;
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
export type Teams = Team[];

export type isAscending = boolean | 'ascending' | 'descending';
