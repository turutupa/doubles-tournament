import RoundRobinFactory from '@roundrobin/RoundRobinFactory';
import BracketsFactory from '@brackets/BracketsFactory';

export default class TournamentFactory {
  public static get RoundRobin() {
    return new RoundRobinFactory();
  }

  public static get Brackets() {
    return new BracketsFactory();
  }
}
