import RoundRobin from 'RoundRobin/RoundRobin';
import Brackets from 'Brackets';
import { TournamentParams } from 'interfaces';

export default class TournamentFactory {
  static RoundRobin(params?: TournamentParams) {
    return RoundRobin;
  }

  static Brackets(params?: TournamentParams) {
    return Brackets;
  }
}
