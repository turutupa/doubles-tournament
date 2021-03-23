import {
  MatchesMap,
  Participant,
  ParticipantMap,
  Players,
  ScheduleInfo,
  Teams,
} from '@interfaces/interfaces';
import Match from '@models/Match';
import Player from '@models/Player';
import Team from '@models/Team';
import SequenceGenerator from '@roundrobin/helpers/SequenceGenerator';
import {
  IsTable,
  tablesForFixedRR,
  tablesForSwitchRR,
} from '@roundrobin/helpers/tables';

export default class RoundRobinScheduler {
  public static fixedTeams(teams: Teams): ScheduleInfo {
    const tables = tablesForFixedRR(teams.size);

    return RoundRobinScheduler.calculate<Teams>(teams, tables);
  }

  public static switchPartners(players: Players): ScheduleInfo {
    if (!tablesForSwitchRR[players.size]) {
      throw new Error(
        `Tables for ${players.size} number of players not calculated`,
      );
    }

    const tables = [...tablesForSwitchRR[players.size]];
    return RoundRobinScheduler.calculate<Players>(players, tables);
  }

  public static calculate<T extends ParticipantMap>(
    participants: T,
    tables: IsTable[],
  ): ScheduleInfo {
    const listOfParticipants: Participant[] = this.calculateListOfParticipants<T>(
      participants,
    );

    let rawSchedule: [string, string][][][] = [];
    let schedule: Match[][] = []; // Rounds with ID's of the matches
    let matches: MatchesMap = {}; // Map of matches stored by ID
    const positionsMatrix: number[][] = SequenceGenerator.calculate(
      listOfParticipants,
    );

    // Each Round players are assigned to their respective table
    // When tables are calculated the round is pushed to schedule
    for (let i = 0; i < positionsMatrix.length; i++) {
      const roundSequence = positionsMatrix[i];

      for (let j = 0; j < listOfParticipants.length; j++) {
        const participant = listOfParticipants[j];
        const playerPosition = roundSequence[j];
        this.sitParticipantInTable(participant, playerPosition, tables);
      }

      const round = this.translateTablesToMatches(tables);
      const roundOfIDs = this.createMatches(participants, round, matches);
      schedule.push(roundOfIDs);
      rawSchedule.push(round);
    }

    return {
      rawSchedule,
      schedule,
      matches,
    };
  }

  private static calculateListOfParticipants<T extends ParticipantMap>(
    participants: T,
  ) {
    const listOfPlayers = [];

    for (let [_, participant] of participants) {
      listOfPlayers.push(participant);
    }

    return listOfPlayers;
  }

  private static sitParticipantInTable(
    participant: Participant,
    participantPosition: number,
    tables: IsTable[],
  ): void {
    for (let table of tables) {
      for (let team of table) {
        if (team.hasOwnProperty(participantPosition)) {
          team[participantPosition] = participant.name;
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
        const firstParticipant: string = team[keys[0]]!;
        const secondParticipant: string = team[keys[1]]!;

        if (!firstParticipant || !secondParticipant)
          throw new Error('Missing player in a team');
        return [firstParticipant, secondParticipant];
      });
    });
  }

  private static createMatches<T extends Teams | Players>(
    participants: T,
    round: [string, string][][],
    matchesMap: MatchesMap,
  ): Match[] {
    const roundOfMatches: Match[] = [];

    for (let match of round) {
      let newMatch: Match | undefined;

      if (participants.get(match[0][0]) instanceof Player) {
        const homeArr: [string, string] = match[0];
        const awayArr: [string, string] = match[1];

        const firstHome: Player = participants.get(homeArr[0])!;
        const secondHome: Player = participants.get(homeArr[1])!;
        const firstAway: Player = participants.get(awayArr[0])!;
        const secondAway: Player = participants.get(awayArr[1])!;

        if (!firstHome || !secondHome || !firstAway || !secondAway) {
          throw new Error(
            `Something went wrong retrieving players while creating matches`,
          );
        }

        const home = new Team([firstHome, secondHome]);
        const away = new Team([firstAway, secondAway]);

        newMatch = new Match(home, away);
      } else if (participants.get(match[0][0]) instanceof Team) {
        const teams: [string, string] = match[0];

        const home = participants.get(teams[0]);
        const away = participants.get(teams[1]);

        if (
          !home ||
          !away ||
          !(home instanceof Team) ||
          !(away instanceof Team)
        ) {
          throw new Error(
            `Something went wrong retrieving teams while creating matches`,
          );
        }

        newMatch = new Match(home, away);
      }

      if (!newMatch) throw new Error(`No match was created!!`);

      matchesMap[newMatch.id] = newMatch;
      roundOfMatches.push(newMatch);
    }

    return roundOfMatches;
  }
}
