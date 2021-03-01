import TeamsController from '@controllers/TeamsController';
import { Teams } from '@interfaces/interfaces';
import { getTeams } from '@tests/MockData/ParticipantsHelper';
import Player from '@/Models/Player';

describe('Teams Controller', () => {
  let teams: Teams;
  let teamsController: TeamsController;

  beforeEach(() => {
    teams = getTeams(4);
    teamsController = new TeamsController(teams);
  });

  it('should throw error when trying to retrieve non existant team', () => {
    expect(() => teamsController.team('non-existant-team')).toThrow();
  });

  it('should contain initially added teams', () => {
    expect(teamsController.teams).toEqual(teams);
  });

  it('should create an empty map of teams by default', () => {
    const teams: Teams = new Map();
    const teamsController = new TeamsController();
    expect(teamsController.teams).toEqual(teams);
  });

  it('should throw error when adding a team of STRING and PLAYER', () => {
    const one = 'one';
    const two = new Player('two');

    //@ts-expect-error
    expect(() => teamsController.addTeam([one, two])).toThrow();
  });

  it('should add one team given two string names', () => {
    const one = 'one';
    const two = 'two';
    const team = teamsController.addTeam([one, two]);

    // checks team has been added
    const retrievedTeam = teamsController.team(team.id);
    expect(retrievedTeam).toBeTruthy();

    // checks correct player names
    const [firstPlayer, secondPlayer] = retrievedTeam.players;
    expect(firstPlayer.name).toBe(one);
    expect(secondPlayer.name).toBe(two);

    // checking on participants method
    expect(teamsController.participants()).toEqual(teamsController.teams);

    const defaultParticipantParams = {
      wins: 0,
      losses: 0,
      games: 0,
      sets: 0,
    };

    expect(retrievedTeam.stats).toEqual(defaultParticipantParams);
    expect(firstPlayer.stats).toEqual(defaultParticipantParams);
    expect(secondPlayer.stats).toEqual(defaultParticipantParams);
  });

  it('should add one team give two Players', () => {
    const one = new Player('one');
    const two = new Player('two');
    const team = teamsController.addTeam([one, two]);

    // checks team has been added
    const retrievedTeam = teamsController.team(team.id);
    expect(retrievedTeam).toBeTruthy();

    // checks correct player names
    const [firstPlayer, secondPlayer] = retrievedTeam.players;
    expect(firstPlayer.name).toBe(one.name);
    expect(secondPlayer.name).toBe(two.name);

    const defaultParticipantParams = {
      wins: 0,
      losses: 0,
      games: 0,
      sets: 0,
    };

    expect(retrievedTeam.stats).toEqual(defaultParticipantParams);
    expect(firstPlayer.stats).toEqual(defaultParticipantParams);
    expect(secondPlayer.stats).toEqual(defaultParticipantParams);
  });

  it('should add various teams of PLAYERS at once', () => {
    const one = new Player('one');
    const two = new Player('two');
    const three = new Player('three');
    const four = new Player('four');

    const pairOfPlayersOne: [Player, Player] = [one, two];
    const pairOfPlayersTwo: [Player, Player] = [three, four];

    const [teamOne, teamTwo] = teamsController.addTeams([
      pairOfPlayersOne,
      pairOfPlayersTwo,
    ]);

    expect(teamsController.team(teamOne.id)).toBeTruthy();
    expect(teamsController.team(teamTwo.id)).toBeTruthy();

    const [playerOne, playerTwo] = teamsController.team(teamOne.id).players;
    const [playerThree, playerFour] = teamsController.team(teamTwo.id).players;

    expect(playerOne).toEqual(one);
    expect(playerTwo).toEqual(two);
    expect(playerThree).toEqual(three);
    expect(playerFour).toEqual(four);
  });

  it('should add various teams of STRINGS at once', () => {
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';

    const pairOfPlayersOne: [string, string] = [one, two];
    const pairOfPlayersTwo: [string, string] = [three, four];

    const [teamOne, teamTwo] = teamsController.addTeams([
      pairOfPlayersOne,
      pairOfPlayersTwo,
    ]);

    expect(teamsController.team(teamOne.id)).toBeTruthy();
    expect(teamsController.team(teamTwo.id)).toBeTruthy();

    const [playerOne, playerTwo] = teamsController.team(teamOne.id).players;
    const [playerThree, playerFour] = teamsController.team(teamTwo.id).players;

    expect(playerOne.name).toBe(one);
    expect(playerTwo.name).toBe(two);
    expect(playerThree.name).toBe(three);
    expect(playerFour.name).toBe(four);
  });

  it('should throw error when adding a player of type STRING and another type PLAYER', () => {
    const one = 'one';
    const two = new Player('two');

    expect(() => {
      //@ts-expect-error
      teamsController.addTeam([one, two]);
    }).toThrow();
  });
});
