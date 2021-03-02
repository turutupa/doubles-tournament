import Tournament from '@models/Tournament';
import {
  ITournament,
  TournamentParams,
  Scheduler,
  Teams,
  ScheduleInfo,
} from '@interfaces/interfaces';
import TeamsController from '@controllers/TeamsController';
import DoubleEliminationScheduler from '@brackets/helpers/DoubleEliminationScheduler';

export default class BracketsSingleElimination
  extends Tournament<TeamsController>
  implements ITournament {
  protected participants: TeamsController = new TeamsController();
  private _schedule: ScheduleInfo = { schedule: [], matches: {} };
  private doubleEliminationScheduler = DoubleEliminationScheduler;

  constructor(params?: TournamentParams) {
    super(params);
  }

  public schedule() {}
  public resetSchedule() {}
  public newSchedule() {}
}
