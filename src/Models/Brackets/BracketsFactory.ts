import { TournamentParams } from '@interfaces/interfaces';
import Brackets from '@brackets/Brackets';
import BracketsScheduler from '@brackets/helpers/BracketsScheduler';

export default class BracketsFactory {
  public singleElimination(params?: TournamentParams) {
    return new Brackets(BracketsScheduler.singleElimination, params);
  }

  public doubleElimination(params?: TournamentParams) {
    return new Brackets(BracketsScheduler.doubleElimination, params);
  }
}
