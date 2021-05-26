import { getTeams } from '@tests/MockData/ParticipantsHelper';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';
import BracketsSingleElimination from '@models/Brackets/SingleElimination';
import BracketsDoubleElimination from '@models/Brackets/DoubleElimination';
import { ScheduleInfo, Teams } from '@interfaces/interfaces';
import Match from '@models/Match';

describe('Brackets Scheduler', () => {
  let singleElimination: BracketsSingleElimination;
  let doubleElimination: BracketsDoubleElimination;

  beforeEach(() => {
    singleElimination = new BracketsSingleElimination(tournamentInfo);
    doubleElimination = new BracketsDoubleElimination(tournamentInfo);

    const teams: Teams = getTeams(8);
    singleElimination.importTeams(teams);
    doubleElimination.importTeams(teams);
  });

  it('should create a first round of matches', () => {
    const singleEliminationSchedule: Match[][] =
      singleElimination.newSchedule();
    const doubleEliminationSchedule: Match[][] =
      doubleElimination.newSchedule();

    const singleEliminationFirstRound = singleEliminationSchedule[0];
    const doubleEliminationFirstRound = doubleEliminationSchedule[0];

    expect(singleEliminationFirstRound.length).toBe(4);
    expect(doubleEliminationFirstRound.length).toBe(4);
  });
});
