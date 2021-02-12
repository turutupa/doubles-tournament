import { TournamentParams } from '@interfaces/interfaces';
import SingleElimination from './SingleElimination';
import DoubleElimination from './DoubleElimination';

export default class Brackets {
  public singleElimination(params?: TournamentParams) {
    return new SingleElimination(params);
  }

  public doubleElimination() {
    return new DoubleElimination();
  }
}
