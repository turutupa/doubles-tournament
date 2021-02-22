import Player from '@models/Player';
import { Players } from '@interfaces/interfaces';

it('Just added this to prevent error from showing up in report', () => {});

// Creates a Players map for n participants
export function getPlayers(n: number) {
  const players: Players = new Map();
  for (let i = 0; i < n; i++) {
    players.set(playerNames[i], new Player(playerNames[i]));
  }

  return players;
}

interface PlayersOpponents {
  [key: string]: number;
}

interface PlayersGraph {
  [key: string]: PlayersOpponents;
}

// n = number of players
// m = number of encounters
function buildGraph(n: number, m: number) {
  const graph: PlayersGraph = {};

  for (let i = 0; i < n; i++) {
    const currentPlayer = playerNames[i];
    graph[currentPlayer] = {};

    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      const opponent = playerNames[j];
      graph[currentPlayer][opponent] = m;
    }
  }

  return graph;
}

// this graph is used to check each player plays AGAINST each other player twice
export function buildOpponentsGraph(n: number) {
  return buildGraph(n, 2);
}

// this graph is used to check each player plays WITH each other player once
export function buildPartneredGraph(n: number) {
  return buildGraph(n, 1);
}

const playerNames = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'eigtheen',
  'nineteen',
  'twenty',
  'twentyOne',
  'twentyTwo',
  'twentyThree',
  'twentyFour',
];
