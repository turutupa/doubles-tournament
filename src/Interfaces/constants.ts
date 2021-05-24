export const WINS = 'wins';
export const LOSSES = 'losses';
export const GAMES = 'games';
export const SETS = 'sets';
export const ID = 'id';

export const TIEBREAKER_ORDER: SORTABLE[] = [WINS, SETS, GAMES, LOSSES, ID];
export type SORTABLE =
  | typeof WINS
  | typeof LOSSES
  | typeof GAMES
  | typeof SETS
  | typeof ID;
