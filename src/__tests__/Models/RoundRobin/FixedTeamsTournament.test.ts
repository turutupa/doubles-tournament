import Tournament from '@models/TournamentFactory';
import RRFixedTeams from '@roundrobin/FixedTeamsTournament';
import { TournamentParams } from '@interfaces/interfaces';
import { defaultTournamentValues } from '@utils/constants';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
import Match from '@models/Match';

const {
  defaultName,
  defaultLocation,
  defaultPrice,
  defaultMaxNumberOfPlayers,
  defaultDate,
} = defaultTournamentValues;

describe('Fixed Round Robin Tournament', () => {
  let tournament: RRFixedTeams;
  const { name, price, location, maxNumberOfPlayers, date } = tournamentInfo;
  const tournamentParams: TournamentParams = { ...tournamentInfo };

  beforeEach(() => {
    tournament = Tournament.RoundRobin.fixedTeams(tournamentParams);
    tournament.addTeams([
      ['one', 'two'],
      ['three', 'four'],
      ['five', 'six'],
      ['seven', 'eight'],
      ['nine', 'ten'],
      ['eleven', 'twelve'],
      ['thirteen', 'fourteen'],
      ['fifteen', 'sixteen'],
    ]);
  });

  it('should add default values to empty tournament', () => {
    const tournament = Tournament.RoundRobin.fixedTeams();
    expect(tournament.name).toBe(defaultName);
    expect(tournament.date).toBe(defaultDate);
    expect(tournament.location).toBe(defaultLocation);
    expect(tournament.price).toBe(defaultPrice);
    expect(tournament.maxNumberOfPlayers).toBe(defaultMaxNumberOfPlayers);
  });

  it('should add initial params to tournament', () => {
    expect(tournament.name).toBe(name);
    expect(tournament.price).toBe(price);
    expect(tournament.location).toBe(location);
    expect(tournament.maxNumberOfPlayers).toBe(maxNumberOfPlayers);
    expect(tournament.date).toBe(date);
  });

  it('should allow to upate initial params', () => {
    const name = 'name';
    const price = 5;
    const date = new Date();
    const location = 'location';
    const maxNumberOfPlayers = 64;

    const params = { name, price, date, location, maxNumberOfPlayers };
    const tournament = Tournament.RoundRobin.fixedTeams(params);

    expect(tournament.info).toEqual(params);
  });

  it('should throw error when creating tournament when on-going tournament', () => {
    tournament.newSchedule();
    expect(() => tournament.newSchedule()).toThrow();
  });

  it('should add results to specified match ID', () => {
    const scoreboard = [
      [6, 4, 5],
      [5, 6, 6],
    ];

    const schedule: Match[][] = tournament.newSchedule();
    const match: Match = schedule[0][0];
    tournament.addResults(match.id, scoreboard);

    expect(match.scoreboard).toEqual(scoreboard);
  });

  it('schedule method should return schedule with updated stats of teams', () => {
    const scoreboard = [
      [6, 4, 5],
      [5, 6, 6],
    ];

    const newSchedule: Match[][] = tournament.newSchedule();
    const match: Match = newSchedule[0][0];
    const { home, away } = match;

    tournament.addResults(match.id, scoreboard);

    const homeResults = {
      wins: 0,
      losses: 1,
      games: 15,
      sets: 1,
    };

    const awayResults = {
      wins: 1,
      losses: 0,
      games: 17,
      sets: 2,
    };

    expect(home.stats).toEqual(homeResults);
    expect(away.stats).toEqual(awayResults);

    // Testing schedule method to check result matches
    const schedule: Match[][] = tournament.schedule();
    const firstMatch: Match = schedule[0][0];

    expect(firstMatch.scoreboard).toEqual(scoreboard);
    expect(firstMatch.home.stats).toEqual(homeResults);
    expect(firstMatch.away.stats).toEqual(awayResults);
  });

  it('leaderboard should return winning team up in the winners board', () => {
    const scoreboard = [
      [6, 4, 5],
      [5, 6, 6],
    ];

    const schedule = tournament.newSchedule();
    const match = schedule[0][0];
    match.addResults(scoreboard);

    const { home, away } = match;

    const winnersLeaderboard = tournament.leaderboard();
    expect(winnersLeaderboard[0]).toEqual(away);
    expect(winnersLeaderboard[1]).toEqual(home);
  });
});
