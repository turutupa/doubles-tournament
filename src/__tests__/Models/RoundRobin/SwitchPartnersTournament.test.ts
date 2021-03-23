import Leaderboard from '@controllers/Leaderboard';
import { GAMES, ID, LOSSES, SETS, WINS } from '@interfaces/constants';
import {
  ASCENDING,
  DESCENDING,
  TournamentParams,
} from '@interfaces/interfaces';
import Player from '@models/Player';
import Tournament from '@models/TournamentFactory';
import RRSwitchPartners from '@roundrobin/SwitchPartnersTournament';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';

describe('Switch Partners Round Robin', () => {
  let tournament: RRSwitchPartners;
  let listOfPlayers: Player[];
  const numberOfPlayers = 8;

  const { name, date, location, price, maxNumberOfPlayers } = tournamentInfo;

  const tournamentParams: TournamentParams = {
    name,
    date,
    location,
    price,
    maxNumberOfPlayers,
  };

  beforeEach(() => {
    tournament = Tournament.RoundRobin.switchPartners(tournamentParams);
    tournament.addPlayers([
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
    ]);

    const schedule = tournament.newSchedule();

    for (let round of schedule) {
      for (let match of round) {
        let results: number[][] = [];
        const homeResult: number[] = [];
        const awayResult: number[] = [];

        for (let i = 0; i < 3; i++) {
          let homeSet = Math.floor(Math.random() * 7);
          let awaySet = Math.floor(Math.random() * 7);

          if (homeSet > awaySet) {
            homeSet = 6;
            awaySet = Math.floor(Math.random() * 6);
          } else {
            awaySet = 6;
            homeSet = Math.floor(Math.random() * 6);
          }
          homeResult.push(homeSet);
          awayResult.push(awaySet);
        }

        results = [homeResult, awayResult];

        tournament.addResults(match.id, results);
      }
    }

    listOfPlayers = [];
    for (let [_, player] of tournament.players) {
      listOfPlayers.push(player);
    }
  });

  it('should have added correct tournament initial params', () => {
    const info = tournament.info;

    expect(info).toEqual(tournamentInfo);

    expect(tournament.name).toBe(name);
    expect(tournament.date).toBe(date);
    expect(tournament.location).toBe(location);
    expect(tournament.price).toBe(price);
    expect(tournament.maxNumberOfPlayers).toBe(maxNumberOfPlayers);
  });

  it('should allow to update tournament details (price,date, location...)', () => {
    const name = 'Name';
    const price = 35;
    const date = new Date();
    const location = 'La Maso';
    const maxNumberOfPlayers = 65;

    tournament.name = name;
    tournament.price = price;
    tournament.date = date;
    tournament.location = location;
    tournament.maxNumberOfPlayers = maxNumberOfPlayers;

    expect(tournament.info).toEqual({
      name,
      price,
      date,
      location,
      maxNumberOfPlayers,
    });
  });

  it('should have added players correctly', () => {
    expect(tournament.players.size).toBe(numberOfPlayers);
  });

  it('should throw error when creating a new schedule when already existing one', () => {
    expect(() => tournament.newSchedule()).toThrow();
  });

  it('should reset schedule', () => {
    tournament.resetSchedule();

    // yep, a very nasty nesting loop
    for (let round of tournament.schedule) {
      for (let match of round) {
        for (let teamResult of match.scoreboard) {
          expect(teamResult.every((r: number) => r === 0)).toBeTruthy();
        }
      }
    }
  });

  it('should throw error when adding already existing player name', () => {
    expect(() => tournament.addPlayer('one')).toThrow();
  });

  it('should throw error when adding none-unique name players', () => {
    const name = 'Name';
    const duplicate = 'Name';
    const one = 'one';

    expect(() => tournament.addPlayers([name, duplicate])).toThrow();
    expect(() => tournament.addPlayers([one])).toThrow();
  });

  it('should be able to add new player', () => {
    const newPlayer = 'RubertuCarlus';
    tournament.addPlayer(newPlayer);

    expect(tournament.player(newPlayer)).toBeTruthy();
  });

  it('should be able to add new players', () => {
    const firstAddition = 'RubertuCarlus';
    const secondAddition = 'CarlusRubertu';

    tournament.addPlayers([firstAddition, secondAddition]);

    expect(tournament.player(firstAddition)).toBeTruthy();
    expect(tournament.player(secondAddition)).toBeTruthy();
  });

  it('should throw error when trying to retrieve none-existant player', () => {
    expect(() => tournament.player('RANDOM')).toThrow();
  });

  // From here to the end
  // all tests are related
  // to the Leaderboard calculation

  it('should return the leaderboard sorted by id', () => {
    const leaderboardByName = tournament.leaderboard(ID, ASCENDING);
    listOfPlayers.sort((a, b) => a.name.localeCompare(b.name));
    expect(leaderboardByName).toEqual(listOfPlayers);
  });

  it('should return the leaderboard sorted by wins', () => {
    // descending
    const leaderboardByWins = tournament.leaderboard();
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, WINS, DESCENDING),
    );
    expect(leaderboardByWins).toEqual(listOfPlayers);

    // ascending
    const leaderboardByWinsReversed = tournament.leaderboard(WINS, ASCENDING);
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, WINS, ASCENDING),
    );
    expect(leaderboardByWinsReversed).toEqual(listOfPlayers);
  });

  it('should return the leaderboard sorted by losses', () => {
    // descending
    const leaderboardByLosses = tournament.leaderboard(LOSSES);
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, LOSSES, DESCENDING),
    );
    expect(leaderboardByLosses).toEqual(listOfPlayers);

    // ascending
    const leaderboardByLossesReversed = tournament.leaderboard(
      LOSSES,
      ASCENDING,
    );
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, LOSSES, ASCENDING),
    );
    expect(leaderboardByLossesReversed).toEqual(leaderboardByLossesReversed);
  });

  it('should return the leaderboard sorted by sets', () => {
    // descending
    const leaderboardBySets = tournament.leaderboard(SETS);
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, SETS, DESCENDING),
    );
    expect(leaderboardBySets).toEqual(listOfPlayers);

    // ascending
    const leaderboardBySetsReversed = tournament.leaderboard(SETS, ASCENDING);
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, SETS, ASCENDING),
    );
    expect(leaderboardBySetsReversed).toEqual(listOfPlayers);
  });

  it('should return the leaderboard sorted by games', () => {
    // ascending
    const leaderboardByGames = tournament.leaderboard(GAMES, ASCENDING);
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, GAMES, ASCENDING),
    );
    expect(leaderboardByGames).toEqual(listOfPlayers);

    // descending
    const leaderboardByGamesReversed = tournament.leaderboard(
      GAMES,
      DESCENDING,
    );
    listOfPlayers.sort((a, b) =>
      Leaderboard.sortingLogic(a, b, GAMES, DESCENDING),
    );
    expect(leaderboardByGamesReversed).toEqual(listOfPlayers);
  });
});
