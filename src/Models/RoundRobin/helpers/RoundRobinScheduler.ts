import Player from '@models/Player';
import {
  Teams,
  Players,
  ScheduleInfo,
  MatchesMap,
} from '@interfaces/interfaces';
import SequenceGenerator from '@roundrobin/helpers/SequenceGenerator';
import {
  IsTable,
  tablesForFixedRR,
  tablesForSwitchRR,
} from '@roundrobin/helpers/tables';
import Match from '@models/Match';
import Team from '@models/Team';

// this is disgusting right? I hate myself
type GenericMap = Map<string, any>;

export default class SwitchRoundRobinScheduler {
  public static fixedTeams(teams: Teams) {
    const listOfTeams: Team[] = this.calculateListOfParticipants<Teams>(teams);

    let rawSchedule: [string, string][][] = [];
    let schedule: string[][] = [];
    let matches: MatchesMap = {};

    const positionsMatrix: number[][] = SequenceGenerator.calculate(
      listOfTeams,
    );

    const tables = tablesForFixedRR(listOfTeams.length);

    for (let i = 0; i < listOfTeams.length; i++) {
      const roundSequence = positionsMatrix[i];

      for (let j = 0; j < listOfTeams.length / 2; j++) {
        // const home = positionsMatrix[]
      }
    }
  }

  public static switchPlayers(players: Players): ScheduleInfo {
    const listOfPlayers: Player[] = this.calculateListOfParticipants<Players>(
      players,
    );

    let rawSchedule: [string, string][][][] = [];
    let schedule: string[][] = []; // Rounds with ID's of the matches
    let matches: MatchesMap = {}; // Map of matches stored by ID
    const positionsMatrix: number[][] = SequenceGenerator.calculate(
      listOfPlayers,
    );

    if (!tablesForSwitchRR[players.size]) {
      throw new Error(
        `Tables for ${players.size} number of players not calculated`,
      );
    }

    const tables = [...tablesForSwitchRR[players.size]];

    // Each Round players are assigned to their respective table
    // When tables are calculated the round is pushed to schedule
    for (let i = 0; i < positionsMatrix.length; i++) {
      const roundSequence = positionsMatrix[i];

      for (let j = 0; j < listOfPlayers.length; j++) {
        const player = listOfPlayers[j];
        const playerPosition = roundSequence[j];
        this.sitParticipantInTable(player, playerPosition, tables);
      }

      const round = this.translateTablesToMatches(tables);
      const roundOfIDs = this.createMatches(players, round, matches);
      schedule.push(roundOfIDs);
      rawSchedule.push(round);
    }

    return {
      rawSchedule,
      schedule,
      matches,
    };
  }

  private static calculateListOfParticipants<T extends GenericMap>(
    participants: T,
  ) {
    const listOfPlayers = [];

    for (let [_, participant] of participants) {
      listOfPlayers.push(participant);
    }

    return listOfPlayers;
  }

  private static sitParticipantInTable(
    player: Player,
    playerPosition: number,
    tables: IsTable[],
  ): void {
    for (let table of tables) {
      for (let team of table) {
        if (team.hasOwnProperty(playerPosition)) {
          team[playerPosition] = player.name;
        }
      }
    }
  }

  private static translateTablesToMatches(
    tables: IsTable[],
  ): [string, string][][] {
    return tables.map((match) => {
      return match.map((team) => {
        const keys = Object.keys(team);
        const firstPlayer: string | null = team[keys[0]];
        const secondPlayer: string | null = team[keys[1]];

        if (!firstPlayer || !secondPlayer)
          throw new Error('Missing player in a team');
        return [firstPlayer, secondPlayer];
      });
    });
  }

  private static createMatches(
    players: Players,
    round: [string, string][][],
    matchesMap: MatchesMap,
  ) {
    const roundOfIDs = [];

    for (let match of round) {
      const localsArr: [string, string] = match[0];
      const visitorsArr: [string, string] = match[1];

      const firstLocal: Player = players.get(localsArr[0])!;
      const secondLocal: Player = players.get(localsArr[1])!;
      const firstVisitor: Player = players.get(visitorsArr[0])!;
      const secondVisitor: Player = players.get(visitorsArr[1])!;

      if (!firstLocal || !secondLocal || !firstVisitor || !secondVisitor)
        throw new Error(
          `Something went wrong getting players while creating matches`,
        );

      const locals: Team = new Team([firstLocal, secondLocal]);
      const visitors: Team = new Team([firstVisitor, secondVisitor]);

      // Create new match and assign to matchesMap and add to roundOfIDs
      const newMatch: Match = new Match(locals, visitors);

      matchesMap[newMatch.id] = newMatch;
      roundOfIDs.push(String(newMatch.id));
    }

    return roundOfIDs;
  }
}
