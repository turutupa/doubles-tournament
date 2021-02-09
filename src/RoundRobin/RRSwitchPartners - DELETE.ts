import { Scheduler, ScheduleInfo, Players } from 'interfaces';
import RRSwitchCalculator from './SwitchCalculator';

export default class RoundRobinSwitchPartners implements Scheduler {
  getSchedule(players: Players): ScheduleInfo {
    return RRSwitchCalculator.calculate(players);
  }
}
