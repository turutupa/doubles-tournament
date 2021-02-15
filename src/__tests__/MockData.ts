import Player from '@models/Player';
import { Players } from '@interfaces/interfaces';

it('Just added this to prevent error from showing up in report', () => {});

export const eightPlayers: Players = new Map();
eightPlayers.set('one', new Player('one'));
eightPlayers.set('two', new Player('two'));
eightPlayers.set('three', new Player('three'));
eightPlayers.set('four', new Player('four'));
eightPlayers.set('five', new Player('five'));
eightPlayers.set('six', new Player('six'));
eightPlayers.set('seven', new Player('seven'));
eightPlayers.set('eight', new Player('eight'));
