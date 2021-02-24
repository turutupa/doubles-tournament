import Team from '@models/Team';
import Player from '@models/Player';
import { uuid, randomMultiplier } from '@utils/uuid';

describe('Team', () => {
  let playerOne: Player;
  let playerTwo: Player;
  let team: Team;

  beforeEach(() => {
    playerOne = new Player('playerOne');
    playerTwo = new Player('playerTwo');
    team = new Team([playerOne, playerTwo]);
  });

  it('should allow to create team with given ID', () => {
    const randomID = String(uuid());
    const team = new Team([playerOne, playerTwo], randomID);
    expect(team.name).toBe(randomID);
  });

  it('should create random ID for newly created team', () => {
    expect(Number(team.id)).toBeGreaterThan(randomMultiplier / 10);
  });

  it('should allow to change name', () => {
    const newName = 'apandadores!';
    team.setTeamName(newName);

    expect(team.name).toBe(newName);
  });

  it('should allow to add players', () => {
    const team = new Team([playerOne, playerTwo]);
    expect(team.players).toEqual([playerOne, playerTwo]);
  });

  it('should have unique players', () => {
    const [playerOne, playerTwo] = team.players;
    expect(playerOne.name).not.toBe(playerTwo.name);
  });

  it(`should update player name and if it doesn't exist it should throw error`, () => {
    expect(() => team.setPlayerName('none existant', 'new name!')).toThrowError(
      `No player named none existant exists in team`,
    );

    expect(team.setPlayerName('playerTwo', 'twoPlayer').players[1].name).toBe(
      'twoPlayer',
    );

    expect(team.setPlayerName('playerOne', 'onePlayer').players[0].name).toBe(
      'onePlayer',
    );
  });

  it('should add results at once', () => {
    const results = {
      wins: 1,
      losses: 2,
      games: 3,
      sets: 4,
    };
    team.addResults(results);

    expect(team.stats).toEqual(results);
  });

  it('should let chain results', () => {
    team
      .addWonMatch(2)
      .addWonMatch()
      .addLostMatch(2)
      .addLostMatch()
      .addWonGames(3)
      .addWonSets(3);

    expect(team.stats).toEqual({
      wins: 3,
      losses: 3,
      games: 3,
      sets: 3,
    });
  });
});
