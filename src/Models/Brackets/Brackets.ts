import { TournamentParams } from '@interfaces/interfaces';
import SingleElimination from '@brackets/SingleElimination';
import DoubleElimination from '@brackets/DoubleElimination';

export default class Brackets {
  public singleElimination(params?: TournamentParams) {
    return new SingleElimination(params);
  }

  public doubleElimination() {
    return new DoubleElimination();
  }
}
