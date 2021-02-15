import SwitchCalculator from '@roundrobin/SwitchPartnersScheduler';
import { ScheduleInfo } from '@interfaces/interfaces';
import { eightPlayers } from '@tests/MockData';

describe('Switch Partners Round Robin Tournament', () => {
  let tournament: ScheduleInfo;

  beforeEach(() => {
    tournament = SwitchCalculator.calculate(eightPlayers);
  });
  it('for eight players should calculate raw Schedule correctly', () => {
    expect(tournament.rawSchedule).toEqual(eightPlayerTournament);
  });

  it('should have each player partners up ONCE with each plaeyr and play TWICE against each other', () => {
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

    expect(opponentsGraph).toEqual(eightPlayerOpponentsGraph);
    expect(partneredGraph).toEqual(eightPlayerPartneredGraph);
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

const eightPlayerOpponentsGraph = {
  one: { two: 2, three: 2, four: 2, five: 2, six: 2, seven: 2, eight: 2 },
  two: { one: 2, three: 2, four: 2, five: 2, six: 2, seven: 2, eight: 2 },
  three: { one: 2, two: 2, four: 2, five: 2, six: 2, seven: 2, eight: 2 },
  four: { one: 2, two: 2, three: 2, five: 2, six: 2, seven: 2, eight: 2 },
  five: { one: 2, two: 2, three: 2, four: 2, six: 2, seven: 2, eight: 2 },
  six: { one: 2, two: 2, three: 2, four: 2, five: 2, seven: 2, eight: 2 },
  seven: { one: 2, two: 2, three: 2, four: 2, five: 2, six: 2, eight: 2 },
  eight: { one: 2, two: 2, three: 2, four: 2, five: 2, six: 2, seven: 2 },
};

const eightPlayerPartneredGraph = {
  one: { two: 1, three: 1, four: 1, five: 1, six: 1, seven: 1, eight: 1 },
  two: { one: 1, three: 1, four: 1, five: 1, six: 1, seven: 1, eight: 1 },
  three: { one: 1, two: 1, four: 1, five: 1, six: 1, seven: 1, eight: 1 },
  four: { one: 1, two: 1, three: 1, five: 1, six: 1, seven: 1, eight: 1 },
  five: { one: 1, two: 1, three: 1, four: 1, six: 1, seven: 1, eight: 1 },
  six: { one: 1, two: 1, three: 1, four: 1, five: 1, seven: 1, eight: 1 },
  seven: { one: 1, two: 1, three: 1, four: 1, five: 1, six: 1, eight: 1 },
  eight: { one: 1, two: 1, three: 1, four: 1, five: 1, six: 1, seven: 1 },
};

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
