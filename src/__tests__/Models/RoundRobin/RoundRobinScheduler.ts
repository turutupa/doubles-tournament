import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import { ScheduleInfo, Players } from '@interfaces/interfaces';
import {
  getPlayers,
  buildOpponentsGraph,
  buildPartneredGraph,
} from '@tests/MockData';

describe('Switch Partners Round Robin Tournament', () => {
  let tournament: ScheduleInfo;
  let eightPlayers: Players = getPlayers(8);

  beforeEach(() => {
    tournament = RoundRobinScheduler.switchPlayers(eightPlayers);
  });
  it('for eight players should calculate raw Schedule correctly', () => {
    expect(tournament.rawSchedule).toEqual(eightPlayerTournament);
  });

  it('(8 players ) should have each player partners up ONCE with each player and play TWICE against each other', () => {
    const opponentsGraph: PlayersGraph = {};
    const partneredGraph: PlayersGraph = {};
    for (let [name, _] of eightPlayers) {
      opponentsGraph[name] = {};
      partneredGraph[name] = {};
    }

    if (!tournament.rawSchedule) return;
    for (let round of tournament.rawSchedule) {
      for (let match of round) {
        const [firstLocal, secondLocal] = match[0];
        const [firstVisitor, secondVisitor] = match[1];

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
