import { Syncable, SyncablePlayers } from '@/interfaces/sync';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import Tournament from '@models/TournamentFactory';
import { getPlayers, getTeams } from '@tests/MockData/ParticipantsHelper';
import { tournamentInfo } from '@tests/MockData/TournamentInitialParams';

describe('Sync', () => {
  // rr stands for RoundRobin
  // b stands for Brackets
  let rrFixedTeams: ITournament;
  let rrSwitchPartners: ITournament;
  let bSingleElimination: ITournament;
  let bDoubleElimination: ITournament;
  const defaultTournamentValues: TournamentParams = { ...tournamentInfo };

  beforeEach(() => {
    rrSwitchPartners = Tournament.RoundRobin.switchPartners(
      defaultTournamentValues,
    );
    rrFixedTeams = Tournament.RoundRobin.fixedTeams(defaultTournamentValues);
    bSingleElimination = Tournament.Brackets.singleElimination(
      defaultTournamentValues,
    );
    bDoubleElimination = Tournament.Brackets.doubleElimination(
      defaultTournamentValues,
    );
  });

  it('should export tournament with players', () => {
    const eightTeams = getTeams(8);
    const eightPlayers = getPlayers(8);

    let eightPlayersObject: SyncablePlayers = {};
    for (let [name, player] of eightPlayers) {
      eightPlayersObject[name] = {
        wins: player.wins,
        losses: player.losses,
        games: player.games,
        sets: player.sets,
        id: player.id,
      };
    }

    // missing players, matches and schedule
    const tournamentParams: Syncable = {
      ...defaultTournamentValues,
    } as Syncable;

    // expect(rrSwitchPartners.export()).toEqual(tournamentParams);
  });
});
