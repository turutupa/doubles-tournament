import { MatchesMap, Players, ScheduleInfo } from '@interfaces/interfaces';
import Match from '@models/Match';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import {
  buildOpponentsGraph,
  buildPartneredGraph,
  getPlayers,
} from '@tests/MockData/ParticipantsHelper';

describe('Switch Partners Round Robin Scheduler', () => {
  let tournament: ScheduleInfo;
  let eightPlayers: Players = getPlayers(8);

  beforeEach(() => {
    tournament = RoundRobinScheduler.switchPartners(eightPlayers);
  });
  it('for eight players should calculate raw Schedule correctly', () => {
    const matchesCopy: MatchesMap = { ...tournament.matches };
    for (let round of tournament.rawSchedule) {
      for (let matchId of round) {
        delete matchesCopy[matchId];
      }
    }
    expect(Object.keys(matchesCopy).length).toBe(0);
  });

  it('for 30 players should give an error as there nos no way to calculate it', () => {
    const manyPlayers = getPlayers(30);
    expect(() => RoundRobinScheduler.switchPartners(manyPlayers)).toThrow();
  });

  it('(8 players) should have each player partners up ONCE with each player and play TWICE against each other', () => {
    const opponentsGraph: PlayersGraph = {};
    const partneredGraph: PlayersGraph = {};
    for (let [name, _] of eightPlayers) {
      opponentsGraph[name] = {};
      partneredGraph[name] = {};
    }

    if (!tournament.rawSchedule) return;
    for (let round of tournament.rawSchedule) {
      for (let matchId of round) {
        const match: Match = tournament.matches[matchId];

        const [{ id: firstLocal }, { id: secondLocal }] = match.home.players;
        const [
          { id: firstVisitor },
          { id: secondVisitor },
        ] = match.away.players;

        // updated played against graph
        updatePlayerGraph(opponentsGraph[firstLocal], [
          firstVisitor,
          secondVisitor,
        ]);

        updatePlayerGraph(opponentsGraph[secondLocal], [
          firstVisitor,
          secondVisitor,
        ]);
        updatePlayerGraph(opponentsGraph[firstVisitor], [
          firstLocal,
          secondLocal,
        ]);
        updatePlayerGraph(opponentsGraph[secondVisitor], [
          firstLocal,
          secondLocal,
        ]);

        // update partnered up graph
        updatePlayerGraph(partneredGraph[firstLocal], [secondLocal]);
        updatePlayerGraph(partneredGraph[secondLocal], [firstLocal]);
        updatePlayerGraph(partneredGraph[firstVisitor], [secondVisitor]);
        updatePlayerGraph(partneredGraph[secondVisitor], [firstVisitor]);
      }
    }

    expect(opponentsGraph).toEqual(buildOpponentsGraph(8, 2));
    expect(partneredGraph).toEqual(buildPartneredGraph(8, 1));
  });
});

interface OpponentCounter {
  [key: string]: number;
}

interface PlayersGraph {
  [key: string]: OpponentCounter;
}

function updatePlayerGraph(root: OpponentCounter, opponents: string[]): void {
  for (let opponent of opponents) {
    root[opponent] = root[opponent] ? root[opponent] + 1 : 1;
  }
}

const eightPlayerTournament = [
  [
    [
      ['three', 'four'],
      ['five', 'seven'],
    ],
    [
      ['two', 'six'],
      ['one', 'eight'],
    ],
  ],
  [
    [
      ['two', 'three'],
      ['four', 'six'],
    ],
    [
      ['eight', 'five'],
      ['one', 'seven'],
    ],
  ],
  [
    [
      ['eight', 'two'],
      ['three', 'five'],
    ],
    [
      ['seven', 'four'],
      ['one', 'six'],
    ],
  ],
  [
    [
      ['seven', 'eight'],
      ['two', 'four'],
    ],
    [
      ['six', 'three'],
      ['one', 'five'],
    ],
  ],
  [
    [
      ['six', 'seven'],
      ['eight', 'three'],
    ],
    [
      ['five', 'two'],
      ['one', 'four'],
    ],
  ],
  [
    [
      ['five', 'six'],
      ['seven', 'two'],
    ],
    [
      ['four', 'eight'],
      ['one', 'three'],
    ],
  ],
  [
    [
      ['four', 'five'],
      ['six', 'eight'],
    ],
    [
      ['three', 'seven'],
      ['one', 'two'],
    ],
  ],
];
