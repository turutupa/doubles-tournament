import {
  ParticipantParams,
  IsParticipant,
  isAscending,
  ASCENDING,
} from '@interfaces/interfaces';

export default class Leaderboard {
  static sortBy(
    participants: IsParticipant,
    sortable: keyof ParticipantParams,
    isAscending?: isAscending,
  ) {
    const sorted = [...participants.values()];

    return sorted.sort((a: ParticipantParams, b: ParticipantParams) => {
      if (typeof a[sortable] === 'string') {
        if (isAscending === ASCENDING) {
          return String(a[sortable]).localeCompare(String(b[sortable]));
        }

        return String(b[sortable]).localeCompare(String(a[sortable]));
      } else if (typeof a[sortable] === 'number') {
        const ascending = isAscending === ASCENDING ? 1 : -1;

        return ascending * (Number(a[sortable]) - Number(b[sortable]));
      }

      throw `Cannot compare property ${sortable}`;
    });
  }
}
