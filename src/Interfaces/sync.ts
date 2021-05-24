import { ParticipantParams, TournamentParams } from '@interfaces/interfaces';

export interface SyncablePlayers {
  [key: string]: ParticipantParams;
}

export interface SyncableTeams {
  [key: string]: ParticipantParams;
}

interface SyncableMatch {
  home: [string, string];
  away: [string, string];
  scoreboard: number[][];
  court: string | undefined;
  time: string | undefined;
}

export interface SyncableMatches {
  [key: string]: SyncableMatch;
}

export type SyncableSchedule = string[][];

export interface Syncable extends TournamentParams {
  matches: SyncableMatches;
  schedule: SyncableSchedule;
  participants: SyncablePlayers | SyncableTeams;
}
