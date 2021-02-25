import RoundRobinFactory from '@roundrobin/RoundRobinFactory';
import Brackets from '@brackets/Brackets';

export default class TournamentFactory {
  public static get RoundRobin() {
    return new RoundRobinFactory();
  }

  public static get Brackets() {
    return new Brackets();
  }
}
