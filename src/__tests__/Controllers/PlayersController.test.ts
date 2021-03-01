import PlayersController from '@controllers/PlayersController';

describe('Players controller', () => {
  let playersController: PlayersController;

  beforeEach(() => {
    playersController = new PlayersController();
  });

  it('should add new player', () => {
    const player = playersController.addPlayer('one');
    expect(playersController.player('one')).toEqual(player);
  });

  it('should add players', () => {
    const one = 'one';
    const two = 'two';
    const three = 'three';

    const [playerOne, playerTwo, playerThree] = playersController.addPlayers([
      one,
      two,
      three,
    ]);

    expect(playersController.player(one)).toEqual(playerOne);
    expect(playersController.player(two)).toEqual(playerTwo);
    expect(playersController.player(three)).toEqual(playerThree);
  });

  it('should throw error if an existing player is trying to be added', () => {
    const one = 'one';
    playersController.addPlayer(one);

    expect(() => playersController.addPlayer(one)).toThrow();
  });

  it('should throw error if adding several players at once and a name is repeated', () => {
    const one = 'one';
    const two = 'two';
    const three = 'three';

    expect(() =>
      playersController.addPlayers([one, two, three, one]),
    ).toThrow();
  });
});
