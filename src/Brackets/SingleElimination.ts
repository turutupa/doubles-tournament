import Tournament from 'Tournament';
import { TournamentParams, Scheduler, Teams, ScheduleInfo } from 'interfaces';
import TeamsHandler from 'TeamsHandler';

export default class BracketsSingleElimination extends Tournament<TeamsHandler> {
  public participants: TeamsHandler = new TeamsHandler();

  constructor(params?: TournamentParams) {
    super(params);
  }

  public schedule() {}
  public resetSchedule() {}
  public newSchedule() {}

  public getSchedule(players: Teams): ScheduleInfo {
    const scheduleInfo: ScheduleInfo = {
      schedule: [],
      matches: {},
    };
    return scheduleInfo;
  }
}
