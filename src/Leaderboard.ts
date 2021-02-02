import Player from './Player';
import { Players, isAscending } from './interfaces';

export default class Leaderboard {
  static sortBy(players: Players, sortable: keyof Player, isAscending?: isAscending): Player[] {
    const sorted = Array.from(players, ([_, value]) => value);

    return sorted.sort((a: Player, b: Player) => {
      if (typeof a[sortable] === 'string') {
        if (isAscending) {
          return String(a[sortable]).localeCompare(String(b[sortable]));
        }

        return String(b[sortable]).localeCompare(String(a[sortable]));
      } else if (typeof a[sortable] === 'number') {
        const ascending = isAscending ? 1 : -1;

        return ascending * (Number(a[sortable]) - Number(b[sortable]));
      }

      throw `Cannot compare property ${sortable}`;
    });
  }
}
