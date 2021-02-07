interface Team {
  [key: string]: string | null;
}
export type Table = [Team, Team];
interface Tables {
  [key: string]: Table[];
}

const tables: Tables = {
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

export default tables;
