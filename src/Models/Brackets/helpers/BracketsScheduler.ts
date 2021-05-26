import { ScheduleInfo, Teams } from '@interfaces/interfaces';
import Team from '@models/Team';
import Match from '@models/Match';

export default class BracketsScheduler {
  public static singleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [] as Match[][],
      matches: {},
      rawSchedule: [],
    };
  }

  public static doubleElimination(teams: Teams): ScheduleInfo {
    return {
      schedule: [] as Match[][],
      matches: {},
      rawSchedule: [],
    };
  }

  private static listOfTeams(teams: Teams): Team[] {
    const listOfTeams: Team[] = [];
    for (let [_, team] of teams) {
      listOfTeams.push(team);
    }
    return listOfTeams;
  }
}
