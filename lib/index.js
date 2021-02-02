class RoundSequence {
  static calculate(players) {
    if (players.size % 4 === 0) return this.case4NPlayers(players);
    return this.case4Nplus1Players(players);
  }

  static case4NPlayers(players) {
    let matrix = [];
    const max = players.size;

    for (let i = 0; i < players.size; i++) {
      for (let j = 0; j < players.size; j++) {
        if (!matrix[i]) matrix.push([]);
        if (i === 0) {
          matrix[i][j] = j;
        } else if (j === 0) {
          matrix[i][j] = 0;
        } else {
          const sumPrev = matrix[i - 1][j] + 1;
          matrix[i][j] = sumPrev >= max ? 1 : sumPrev;
        }
      }
    }

    return matrix;
  }

  static case4Nplus1Players(players) {
    let matrix = [];
    const max = players.size;

    // this should be imported from somewhere else;
    // InitialPositions for 4N + 1 players
    const initialPositions = {
      5: [2, 3, 4, 1, 0],
      13: [3, 4, 2, 8, 5, 7, 10, 1, 9, 12, 6, 11, 0],
    };

    const firstRow = initialPositions[players.size];
    if (!firstRow) throw `Not yet implemented for #${players.size} players;`;

    matrix.push(firstRow);

    for (let i = 1; i < players.size; i++) {
      for (let j = 0; j < players.size; j++) {
        if (!matrix[i]) matrix.push([]);
        if (i === 0) {
          matrix[i][j] = j;
        } else {
          const sumPrev = matrix[i - 1][j] + 1;
          matrix[i][j] = sumPrev >= max ? 1 : sumPrev;
        }
      }
    }
    console.log(matrix);
    return matrix;
  }
}

// Given the round sequence and the tables get the matches
// Tables in this case means Padel Courts
// Tables comes originally from Bridge card game)
function createGamesFromRound(playersList, round, tables) {
  // horrific - plainly awful
  for (let i = 0; i < round.length; i++) {
    const playerPosition = round[i];
    for (let table of tables) {
      for (team of table) {
        if (team.hasOwnProperty(playerPosition)) {
          team[playerPosition] = playersList[i];
        }
      }
    }
  }

  const schedule = [];
  for (let table of tables) {
    const match = getMatch(table);
    schedule.push(match);
  }

  return schedule;
}

function getMatch(table) {
  return Array.from(table).map((team) => {
    const t = [];
    for (let [_, value] of Object.entries(team)) {
      t.push(value);
    }
    return t;
  });
}

const GAME_COMBINATIONS = {
  4: [
    [
      { 0: null, 2: null },
      { 1: null, 3: null },
    ],
  ],
  5: [
    [
      { 2: null, 3: null },
      { 4: null, 1: null },
    ],
    [{ 0: null }],
  ],
  8: [
    [
      { 2: null, 3: null },
      { 4: null, 6: null },
    ],
    [
      { 0: null, 7: null },
      { 1: null, 5: null },
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
  13: [
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
};

function schedule(players) {
  const tables = GAME_COMBINATIONS[players.size];

  if (!tables)
    throw new Error(`Tournament not defined for #${players.size} players`);

  const schedule = [];
  // get id of player which is name and coincides with object key
  const playersList = Array.from(players).map((player) => player[0]);

  const playersPositions = RoundSequence.calculate(players);
  for (let i = 0; i < playersPositions.length; i++) {
    const round = createGamesFromRound(
      playersList,
      playersPositions[i],
      tables
    );
    schedule.push(round);
  }

  return schedule;
}

const players = new Map();
players.set(1, 1);
players.set(2, 2);
players.set(3, 3);
players.set(4, 4);
players.set(5, 5);
players.set(6, 6);
players.set(7, 7);
players.set(8, 8);
// players.set(9, 9);
// players.set(10, 10);
// players.set(11, 11);
// players.set(12, 12);

schedule = schedule(players);
schedule.map((round, i) => {
  console.log(`Round ${i + 1}`, round);
});
