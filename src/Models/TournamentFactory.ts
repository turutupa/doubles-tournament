import BracketsFactory from '@brackets/BracketsFactory';
import RoundRobinFactory from '@roundrobin/RoundRobinFactory';

export default class TournamentFactory {
  public static get RoundRobin() {
    return new RoundRobinFactory();
  }

  public static get Brackets() {
    return new BracketsFactory();
  }
}
