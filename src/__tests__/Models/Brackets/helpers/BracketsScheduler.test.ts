import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
import Tournament from '@models/TournamentFactory';
import BracketsSingleElimination from '@models/Brackets/SingleElimination';
import BracketsDoubleElimination from '@models/Brackets/DoubleElimination';
import Match from '@models/Match';
import Team from '@models/Team';

const results = [
  [6, 6, 3],
  [3, 3, 6],
];
const addResults = (match: Match, _: number): void => {
  if (!match.home || !match.away) return;
  match.addResults(results);
};

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
  let doubleElimination: BracketsDoubleElimination;

  beforeEach(() => {
    singleElimination = Tournament.Brackets.singleElimination(tournamentInfo);
    doubleElimination = Tournament.Brackets.doubleElimination(tournamentInfo);

    singleElimination.addTeams(teams);
    doubleElimination.addTeams(teams);
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

    // trigger this to check no matter how many times
    // you call .schedule it doesn't break the schedudle:
    singleElimination.schedule;
    singleElimination.schedule;
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

  it('[SingleElimination] should have a winner after 3 rounds of 7 players', () => {
    singleElimination.newSchedule();

    const firstRound = singleElimination.schedule[0];
    firstRound.forEach(addResults);
    const secondRound = singleElimination.schedule[1];
    secondRound.forEach(addResults);
    const thirdRound = singleElimination.schedule[2];
    thirdRound.forEach(addResults);

    const winner: Team = thirdRound[0].home!;
    const { wins, losses, sets, games } = winner;
    expect(wins).toBe(3);
    expect(losses).toBe(0);
    expect(sets).toBe(2 * 3); // 2 sets won for 3 matches played
    expect(games).toBe(15 * 3); // 15 games won for 3 matches played
  });

  it('[DoubleElimination] should create a first round of matches', () => {
    const firstRound = doubleElimination.newSchedule()[0];

    expect(firstRound.length).toBe(4);
  });

  // it('[DoubleElimination] should create a second round of matches. Formed by winners plus losers', () => {
  //   const firstRound = doubleElimination.newSchedule()[0];
  //   firstRound.forEach(addResults);

  //   const secondRound = doubleElimination.schedule[1];
  //   expect(secondRound.length).toBe(4);
  // });
});
