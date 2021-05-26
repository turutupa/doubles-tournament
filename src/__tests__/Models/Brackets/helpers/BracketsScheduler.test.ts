import { getTeams } from '@tests/MockData/ParticipantsHelper';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
import Tournament from '@models/TournamentFactory';
import BracketsSingleElimination from '@models/Brackets/SingleElimination';
import BracketsDoubleElimination from '@models/Brackets/DoubleElimination';
import { ScheduleInfo, Teams } from '@interfaces/interfaces';
import Match from '@models/Match';

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

  // it('[SingleElimination] should create a second round of matches with the winners of previous round', () => {
  //   const schedule: Match[][] = singleElimination.newSchedule();
  //   const firstRound = schedule[0];
  //   // update matches results
  //   firstRound.forEach((match) => {
  //     match.addResults([
  //       [6, 6, 3],
  //       [3, 3, 6],
  //     ]);
  //   });

  //   const secondRound = singleElimination.schedule;
  //   const expectedNumberOfRounds = Math.ceil(Math.ceil(teams.length / 2) / 2);
  //   expect(secondRound.length).toBe(expectedNumberOfRounds);
  // });

  // it('[DoubleElimination] should create a first round of matches', () => {});
});
