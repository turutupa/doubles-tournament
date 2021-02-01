import Player from './Player';
import Team from './Team';
import Match from './Match';
import PlayersHandler from './PlayersHandler';

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
  players?: PlayersHandler;
  name?: string;
  date?: Date;
  price?: number;
  maxNumberOfPlayers?: number;
};

export interface TournamentBuilder {
  getSchedule(players: Players | Teams): ScheduleInformation;
}

export interface MatchesMap {
  [key: string]: Match;
}

export interface ScheduleInformation {
  schedule: string[][];
  matches: MatchesMap;
}

export type Players = Map<string, Player>;
export type Teams = Team[];

export type isAscending = boolean | 'ascending' | 'descending';
