import Tournament from '@models/Tournament';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import PlayersController from '@controllers/PlayersController';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import Match from '@models/Match';

export default class SwitchTournament
  extends Tournament<PlayersController>
  implements ITournament
{
  constructor(params?: TournamentParams) {
    super(new PlayersController(), RoundRobinScheduler.switchPartners, params);
  }

  public get schedule(): Match[][] {
    return this._schedule.schedule;
  }
  public player = this.participants.player;
  public players = this.participants.players;
  public addPlayer = this.participants.addPlayer;
  public addPlayers = this.participants.addPlayers;
}
