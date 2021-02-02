import {
  TournamentDetails,
  TournamentBuilder,
  Players,
  Teams,
  ScheduleInformation,
  MatchesMap,
} from './interfaces';
import Tournament from './Tournament';
import Match from './Match';
import Player from './Player';
import Team from './Team';

export default class RoundRobin {
  switchPartners(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      tournament: new RoundRobinSwitchPartners(),
    });
  }

  fixedTeams(params?: TournamentDetails): Tournament {
    return new Tournament({
      ...params,
      tournament: new RoundRobinFixedTeams(),
    });
  }
}

class RoundRobinSwitchPartners implements TournamentBuilder {
  getSchedule(players: Players): ScheduleInformation {
    return createTeamsFromPlayers(players);
  }
}

class RoundRobinFixedTeams implements TournamentBuilder {
  getSchedule(teams: Teams): ScheduleInformation {
    return {
      schedule: [],
      matches: {},
    };
  }
}

function createTeamsFromPlayers(p: Players): ScheduleInformation {
  let players: Player[] = [];
  for (let [_, player] of p) {
    players.push(player);
  }

  if (players.length % 4 != 0) throw `Must be multiple of 4 players`;

  const center: number = Math.ceil(players.length / 2);
  let firstHalf = [...players.slice(0, center)];
  let secondHalf = [...players.slice(center)].reverse();
  let matchId = 1;
  let matches: MatchesMap = {};

  const schedule: string[][] = [];

  for (let i = 0; i < players.length - 1; i++) {
    const rotatingPlayer: Player = secondHalf[0];
    const excludedFirstHalfPlayer: Player = firstHalf[firstHalf.length - 1];

    firstHalf = [
      firstHalf[0],
      rotatingPlayer,
      ...firstHalf.slice(1, center - 1),
    ];

    secondHalf = [...secondHalf.slice(1), excludedFirstHalfPlayer];

    for (let j = 0; j < Math.floor(firstHalf.length); j = j + 2) {
      const locals = new Team(firstHalf[j], secondHalf[j]);
      const visitors = new Team(firstHalf[j + 1], secondHalf[j + 1]);
      const stringifiedMatchId: string = String(matchId);
      const match = new Match(stringifiedMatchId, locals, visitors);
      matches[stringifiedMatchId] = match;
      matchId++;

      if (j === 0) {
        schedule[i] = [stringifiedMatchId];
      } else {
        schedule[i] = [...schedule[i], stringifiedMatchId];
      }
    }
  }

  return {
    schedule,
    matches,
  };
}

function createMatchesFromPlayers() {}
