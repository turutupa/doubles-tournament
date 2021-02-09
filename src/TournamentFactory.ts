import RoundRobin from 'RoundRobin/RoundRobin';
import Brackets from 'Brackets/Brackets';

export default class TournamentFactory {
  public static get RoundRobin() {
    return new RoundRobin();
  }

  public static get Brackets() {
    return new Brackets();
  }
}
