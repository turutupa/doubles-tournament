import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
import Tournament from '@models/TournamentFactory';
import BracketsSingleElimination from '@models/Brackets/SingleElimination';
import BracketsDoubleElimination from '@models/Brackets/DoubleElimination';
import Match from '@models/Match';
import Team from '@models/Team';

describe('Brackets Scheduler', () => {
  const teams: [string, string][] = [
    ['one', 'two'],
    ['three', 'four'],
    ['five', 'six'],
    ['seven', 'eight'],
    ['nine', 'ten'],
    ['eleven', 'twelve'],
    ['thirteen', 'fourteen'],
  ];
  let singleElimination: BracketsSingleElimination;
  // let doubleElimination: BracketsDoubleElimination;

  beforeEach(() => {
    singleElimination = Tournament.Brackets.singleElimination(tournamentInfo);
    // doubleElimination = new BracketsDoubleElimination(tournamentInfo);

    singleElimination.addTeams(teams);
    // doubleElimination.importTeams(teams);
  });

  it('[SingleElimination] should create a first round of matches', () => {
    const schedule: Match[][] = singleElimination.newSchedule();

    const firstRound = schedule[0];
    expect(firstRound.length).toBe(Math.ceil(teams.length / 2));
    // for 7 teams, first round is expected to have 4 matches
  });

  it('[SingleElimination] should create a second round of matches with the winners of previous round', () => {
    const results = [
      [6, 6, 3],
      [3, 3, 6],
    ];

    const schedule: Match[][] = singleElimination.newSchedule();
    const firstRound = schedule[0];
    // update matches results
    firstRound.forEach((match: Match) => {
      if (!match.home || !match.away) return;
      match.addResults(results);
    });

    const secondRound = singleElimination.schedule[1];
    secondRound.forEach((match) => {
      if (!match.home || !match.away) return;

      match.addResults(results);
    });

    const expectedNumberOfRounds = Math.ceil(Math.ceil(teams.length / 2) / 2);
    expect(secondRound.length).toBe(expectedNumberOfRounds);

    // lets check the values of a winning team
    const firstTeam: Team = secondRound[0].home!;
    const { wins, losses, games, sets } = firstTeam;

    expect(wins).toBe(2);
    expect(losses).toBe(0);
    expect(games).toBe((6 + 6 + 3) * 2); // number of games won per match times 2 matches
    expect(sets).toBe(2 * 2); // number of sets won per match times 2 matches
  });
  // it('[DoubleElimination] should create a first round of matches', () => {});
});
