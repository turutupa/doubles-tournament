import SWitchCalculator from '../RoundRobin/SwitchCalculator';
import Player from '../Player';
import { Players } from '../interfaces';

test('Switch Round Robin for eight players should equal', () => {
  const p: Players = new Map();
  p.set('one', new Player('one'));
  p.set('two', new Player('two'));
  p.set('three', new Player('three'));
  p.set('four', new Player('four'));
  p.set('five', new Player('five'));
  p.set('six', new Player('six'));
  p.set('seven', new Player('seven'));
  p.set('eight', new Player('eight'));

  const tournament = SWitchCalculator.calculate(p);
  expect(tournament.rawSchedule).toEqual(eightPlayerTounrament);
});

const eightPlayerTounrament = [
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
