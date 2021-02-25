import {
  ParticipantParams,
  ParticipantMap,
  isAscending,
  ASCENDING,
} from '@interfaces/interfaces';
import { TIEBREAKER_ORDER, SORTABLE } from '@interfaces/constants';

export default class Leaderboard {
  public static sortBy(
    participants: ParticipantMap,
    sortable: keyof ParticipantParams,
    isAscending?: isAscending,
  ) {
    const sorted = [...participants.values()];

    return sorted.sort((a: ParticipantParams, b: ParticipantParams) => {
      return Leaderboard.sortingLogic(a, b, sortable, isAscending);
    });
  }

  // In case sorted player has same number of wins
  // sortingLogic will then compare next comparison value
  // fixed by TIEBREAKER_ORDER
  public static sortingLogic(
    a: ParticipantParams,
    b: ParticipantParams,
    sortable: keyof ParticipantParams,
    isAscending: isAscending | undefined,
  ): number {
    if (typeof a[sortable] === 'string') {
      if (isAscending === ASCENDING) {
        return String(a[sortable]).localeCompare(String(b[sortable]));
      }

      return String(b[sortable]).localeCompare(String(a[sortable]));
    } else if (typeof a[sortable] === 'number') {
      const ascending = isAscending === ASCENDING ? 1 : -1;

      let valueA = Number(a[sortable]);
      let valueB = Number(b[sortable]);

      if (valueA === valueB) {
        const tiebreakerIndex = TIEBREAKER_ORDER.indexOf(sortable) + 1;
        const newSortable: SORTABLE = TIEBREAKER_ORDER[tiebreakerIndex];
        return this.sortingLogic(a, b, newSortable, isAscending);
      }

      return ascending * (valueA - valueB);
    }

    throw `Cannot compare property ${sortable}`;
  }
}
