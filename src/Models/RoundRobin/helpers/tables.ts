export type IsTable = TableOfTeams | TableOfPlayers;
type TableOfTeams = [Team];

export const tablesForFixedRR = function (
  numberOfTeams: number,
): TableOfTeams[] {
  const tables: TableOfTeams[] = [];

  for (let i = 0; i < Math.floor(numberOfTeams / 2); i++) {
    let table: Team = {};
    table[i] = null;
    table[i - 1] = null;
    tables.push([table]);
  }

  return tables;
};

interface Team {
  [key: string]: string | null;
}

export type TableOfPlayers = [Team, Team];

interface Tables {
  [key: string]: TableOfPlayers[];
}

export const tablesForSwitchRR: Tables = {
  8: [
    [
      { 2: null, 3: null },
      { 4: null, 6: null },
    ],
    [
      { 5: null, 1: null },
      { 7: null, 0: null },
    ],
  ],
};
