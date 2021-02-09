import { TournamentBuilder, ScheduleInfo, Players } from 'interfaces';
import RRSwitchCalculator from './SwitchCalculator';

export default class RoundRobinSwitchPartners implements TournamentBuilder {
  getSchedule(players: Players): ScheduleInfo {
    return RRSwitchCalculator.calculate(players);
  }
}
