import Player from '@models/Player';

describe('Player', () => {
  let name: string;
  let player: Player;

  beforeEach(() => {
    name = 'Name';
    player = new Player(name);
  });

  it('should add a win and return instance of Player', () => {
    expect(player.addWonMatch()).toBeInstanceOf(Player);
  });

  it('should have name and id, and both should be the same', () => {
    expect(player.name).toBe(name);
    expect(player.id).toBe(name);
  });

  it('should have by defualt 0 wins, 0 losses, 0 games and 0 sets', () => {
    expect(player.wins).toBe(0);
    expect(player.losses).toBe(0);
    expect(player.games).toBe(0);
    expect(player.sets).toBe(0);
  });

  it('should be able to update name', () => {
    const otherName = 'OtherName';

    player.setName(otherName);
    expect(player.name).toBe(otherName);
  });

  it('should be able to update wins, losses, games, sets all at once', () => {
    const results = {
      wins: 1,
      losses: 3,
      games: 25,
      sets: 15,
    };

    player.addResults(results);
    expect(player.stats).toEqual(results);
  });

  it('should be able to add some results at once', () => {
    player.addResults({ wins: 1 });
    player.addResults({ losses: 1 });
    player.addResults({ games: 1 });
    player.addResults({ sets: 1 });

    expect(player.stats).toEqual({
      wins: 1,
      losses: 1,
      games: 1,
      sets: 1,
    });
  });

  it('should be able to add wins, losses, games and sets individually', () => {
    player.addWonMatch(1).addWonMatch();

    player.addLostMatch(2);
    player.addLostMatch();

    player.addWonGames(3);
    player.addWonSets(4);

    expect(player.wins).toBe(2);
    expect(player.losses).toBe(3);
    expect(player.games).toBe(3);
    expect(player.sets).toBe(4);
  });
});
