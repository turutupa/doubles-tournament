import Team from '@models/Team';
import Player from '@models/Player';
import { Players, Teams } from '@interfaces/interfaces';

it('Just added this to prevent error from showing up in report', () => {});

// Creates a Players map for n participants
export function getPlayers(n: number) {
  const players: Players = new Map();
  for (let i = 0; i < n; i++) {
    players.set(playerNames[i], new Player(playerNames[i]));
  }

  return players;
}

// Creates n Teams
export function getTeams(n: number) {
  const teams: Teams = new Map();

  for (let i = 0; i < 2 * n; i = i + 2) {
    const playerOne = new Player(playerNames[i]);
    const playerTwo = new Player(playerNames[i + 1]);

    const team = new Team([playerOne, playerTwo]);

    teams.set(team.id, team);
  }

  return teams;
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
export function buildOpponentsGraph(
  numberOfPlayers: number,
  numberOfTimesPlayed: number,
) {
  return buildGraph(numberOfPlayers, numberOfTimesPlayed);
}

// this graph is used to check each player plays WITH each other player once
export function buildPartneredGraph(
  numberOfPlayers: number,
  numberOfTimesPartnered: number,
) {
  return buildGraph(numberOfPlayers, numberOfTimesPartnered);
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
