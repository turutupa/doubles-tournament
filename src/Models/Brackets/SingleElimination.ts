import Tournament from '@models/Tournament';
import { TournamentParams, Scheduler, Teams, ScheduleInfo } from '@interfaces/interfaces';
import TeamsHandler from '@controllers/TeamsController';

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
