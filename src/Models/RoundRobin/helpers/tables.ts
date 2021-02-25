export type IsTable = TableOfTeams | TableOfPlayers;
type TableOfTeams = [Team];

export const tablesForFixedRR = function (
  numberOfTeams: number,
): TableOfTeams[] {
  const tables: TableOfTeams[] = [];

  for (let i = 0; i < Math.floor(numberOfTeams / 2); i++) {
    let table: Team = {};
    table[i] = null;
    table[numberOfTeams - i - 1] = null;
    tables.push([table]);
  }

  return tables;
};

interface Team {
  [key: string]: string | null;
}

export type TableOfPlayers = [Team, Team];

export interface Tables {
  [key: string]: TableOfPlayers[] | TableOfTeams[];
}

export const tablesForSwitchRR: Tables = {
  4: [
    [
      { 1: null, 2: null },
      { 3: null, 0: null },
    ],
  ],
  5: [
    [
      { 2: null, 3: null },
      { 4: null, 1: null },
    ],
  ],

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
  9: [
    [
      { 3: null, 4: null },
      { 2: null, 8: null },
    ],
    [
      { 5: null, 7: null },
      { 10: null, 1: null },
    ],
    [
      { 9: null, 12: null },
      { 6: null, 11: null },
    ],
  ],
  12: [
    [
      { 2: null, 3: null },
      { 1: null, 6: null },
    ],
    [
      { 8: null, 10: null },
      { 4: null, 7: null },
    ],
    [
      { 5: null, 9: null },
      { 11: null, 0: null },
    ],
  ],
  16: [
    [
      { 12: null, 13: null },
      { 3: null, 9: null },
    ],
    [
      { 4: null, 6: null },
      { 14: null, 2: null },
    ],
    [
      { 7: null, 11: null },
      { 5: null, 10: null },
    ],
    [
      { 1: null, 8: null },
      { 15: null, 0: null },
    ],
  ],
  20: [
    [
      { 14: null, 15: null },
      { 19: null, 0: null },
    ],
    [
      { 16: null, 18: null },
      { 1: null, 10: null },
    ],
    [
      { 4: null, 7: null },
      { 6: null, 13: null },
    ],
    [
      { 5: null, 9: null },
      { 12: null, 17: null },
    ],
    [
      { 2: null, 8: null },
      { 3: null, 11: null },
    ],
  ],
  24: [
    [
      { 17: null, 18: null },
      { 3: null, 13: null },
    ],
    [
      { 20: null, 22: null },
      { 6: null, 9: null },
    ],
    [
      { 15: null, 19: null },
      { 8: null, 16: null },
    ],
    [
      { 5: null, 10: null },
      { 2: null, 11: null },
    ],
    [
      { 21: null, 4: null },
      { 23: null, 0: null },
    ],
    [
      { 7: null, 14: null },
      { 1: null, 12: null },
    ],
  ],
  28: [
    [
      { 22: null, 23: null },
      { 1: null, 14: null },
    ],
    [
      { 5: null, 7: null },
      { 8: null, 17: null },
    ],
    [
      { 9: null, 12: null },
      { 4: null, 11: null },
    ],
    [
      { 21: null, 25: null },
      { 10: null, 18: null },
    ],
    [
      { 19: null, 24: null },
      { 3: null, 15: null },
    ],
    [
      { 20: null, 26: null },
      { 6: null, 16: null },
    ],
    [
      { 2: null, 13: null },
      { 27: null, 0: null },
    ],
  ],
};

// A solution for 8 Bridge Tables (32 players)
// Table 1    24 and 25  vs.  31 and  0
// Table 2     9 and 11  vs.  28 and  5
// Table 3    10 and 13  vs.  22 and 26
// Table 4     7 and 12  vs.   2 and 15
// Table 5    21 and 27  vs.  20 and 29
// Table 6    23 and 30  vs.   8 and 19
// Table 7     4 and 14  vs.   3 and 17
// Table 8     6 and 18  vs.   1 and 16

// A solution for 9 Bridge Tables (36 players)
// Table 1    26 and 27  vs.  11 and 22
// Table 2    29 and 31  vs.   3 and 19
// Table 3     9 and 12  vs.   6 and 20
// Table 4    10 and 14  vs.  23 and 30
// Table 5    28 and 33  vs.   4 and 16
// Table 6     7 and 13  vs.   8 and 21
// Table 7    24 and 32  vs.  25 and 34
// Table 8     5 and 15  vs.   1 and 18
// Table 9     2 and 17  vs.  35 and  0

// A solution for 10 Bridge Tables (40 players)
// Table 1    33 and 34  vs.   5 and 17
// Table 2    29 and 31  vs.  11 and 24
// Table 3    12 and 15  vs.  26 and 36
// Table 4     9 and 13  vs.   6 and 22
// Table 5    27 and 32  vs.  28 and 35
// Table 6    10 and 16  vs.   4 and 18
// Table 7    30 and 38  vs.   3 and 21
// Table 8    37 and  7  vs.   8 and 23
// Table 9    14 and 25  vs.   1 and 20
// Table 10    2 and 19  vs.  39 and  0

// A solution for 11 Bridge Tables (44 players)
// Table 1     9 and 10  vs.   5 and 19
// Table 2    33 and 35  vs.   4 and 20
// Table 3    12 and 15  vs.   1 and 22
// Table 4    13 and 17  vs.  30 and 38
// Table 5    32 and 37  vs.  11 and 26
// Table 6    36 and 42  vs.  34 and 41
// Table 7    31 and 40  vs.  16 and 28
// Table 8    29 and 39  vs.   2 and 21
// Table 9     7 and 18  vs.  14 and 27
// Table 10    8 and 25  vs.   6 and 24
// Table 11    3 and 23  vs.  43 and  0

// A solution for 12 Bridge Tables (48 players)
// Table 1    35 and 36  vs.  19 and 31
// Table 2    37 and 39  vs.   4 and 22
// Table 3    12 and 15  vs.   5 and 21
// Table 4    13 and 17  vs.   2 and 23
// Table 5    40 and 45  vs.  32 and 43
// Table 6    38 and 44  vs.  10 and 18
// Table 7    34 and 41  vs.  16 and 30
// Table 8    33 and 42  vs.  11 and 28
// Table 9    46 and  9  vs.   8 and 27
// Table 10    7 and 20  vs.  47 and  0
// Table 11   14 and 29  vs.   6 and 26
// Table 12    3 and 25  vs.   1 and 24

// A solution for 13 Bridge Tables (52 players)
// Table 1    41 and 42  vs.  39 and 48
// Table 2    38 and 40  vs.  12 and 15
// Table 3    13 and 17  vs.   2 and 25
// Table 4    45 and 50  vs.  36 and 46
// Table 5    43 and 49  vs.  14 and 31
// Table 6    37 and 44  vs.   4 and 24
// Table 7    10 and 18  vs.   1 and 26
// Table 8     9 and 20  vs.  19 and 33
// Table 9    35 and 47  vs.   6 and 28
// Table 10   21 and 34  vs.  51 and  0
// Table 11    7 and 22  vs.   3 and 27
// Table 12   16 and 32  vs.  11 and 30
// Table 13    5 and 23  vs.   8 and 29

// A solution for 14 Bridge Tables (56 players)
// Table 1    44 and 45  vs.   5 and 25
// Table 2    41 and 43  vs.  15 and 18
// Table 3    13 and 17  vs.   3 and 29
// Table 4    48 and 53  vs.  40 and 47
// Table 5    46 and 52  vs.   1 and 28
// Table 6    12 and 20  vs.  38 and 50
// Table 7    42 and 51  vs.  55 and  0
// Table 8    39 and 49  vs.   6 and 30
// Table 9    54 and 10  vs.   8 and 31
// Table 10    9 and 22  vs.  14 and 33
// Table 11   23 and 37  vs.  16 and 34
// Table 12   21 and 36  vs.  19 and 35
// Table 13    7 and 24  vs.   2 and 27
// Table 14   11 and 32  vs.   4 and 26

// A solution for 15 Bridge Tables (60 players)
// Table 1    17 and 18  vs.  49 and 57
// Table 2    56 and 58  vs.   2 and 29
// Table 3    44 and 47  vs.   3 and 31
// Table 4    46 and 50  vs.   9 and 25
// Table 5    15 and 20  vs.  11 and 34
// Table 6    42 and 48  vs.  41 and 51
// Table 7    45 and 52  vs.  59 and  0
// Table 8    13 and 22  vs.  14 and 35
// Table 9    12 and 23  vs.   8 and 33
// Table 10   43 and 55  vs.   7 and 26
// Table 11   40 and 53  vs.   4 and 28
// Table 12   10 and 24  vs.  16 and 36
// Table 13   39 and 54  vs.  19 and 37
// Table 14   21 and 38  vs.   5 and 27
// Table 15    6 and 32  vs.   1 and 30

// A solution for 16 Bridge Tables (64 players)
// Table 1    60 and 61  vs.  18 and 20
// Table 2    49 and 52  vs.   3 and 33
// Table 3    46 and 50  vs.  43 and 54
// Table 4    48 and 53  vs.  10 and 26
// Table 5    17 and 23  vs.  13 and 25
// Table 6    15 and 22  vs.   9 and 27
// Table 7    51 and 59  vs.   6 and 34
// Table 8    47 and 56  vs.  16 and 38
// Table 9    45 and 55  vs.  21 and 40
// Table 10   62 and 12  vs.  11 and 36
// Table 11   44 and 58  vs.  14 and 37
// Table 12   42 and 57  vs.   7 and 28
// Table 13   24 and 41  vs.   8 and 35
// Table 14   19 and 39  vs.   4 and 30
// Table 15    5 and 29  vs.   2 and 31
// Table 16    1 and 32  vs.  63 and  0

// A solution for 17 Bridge Tables (68 players)
// Table 1    65 and 66  vs.  49 and 60
// Table 2    18 and 20  vs.   2 and 33
// Table 3    50 and 53  vs.   6 and 36
// Table 4    51 and 55  vs.  15 and 22
// Table 5    52 and 57  vs.  54 and 63
// Table 6    17 and 23  vs.  13 and 25
// Table 7    56 and 64  vs.   7 and 30
// Table 8    48 and 58  vs.  12 and 26
// Table 9    46 and 59  vs.   1 and 34
// Table 10   47 and 62  vs.   4 and 32
// Table 11   45 and 61  vs.  19 and 41
// Table 12   27 and 44  vs.  67 and  0
// Table 13   10 and 28  vs.  21 and 42
// Table 14   24 and 43  vs.   5 and 31
// Table 15    9 and 29  vs.   8 and 37
// Table 16   16 and 40  vs.   3 and 35
// Table 17   14 and 39  vs.  11 and 38
