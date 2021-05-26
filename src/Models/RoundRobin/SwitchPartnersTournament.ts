import Tournament from '@models/Tournament';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import PlayersController from '@controllers/PlayersController';
import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
export default class SwitchTournament
  extends Tournament<PlayersController>
  implements ITournament
{
  constructor(params?: TournamentParams) {
    super(new PlayersController(), RoundRobinScheduler.switchPartners, params);
  }

  readonly player = this.participants.player;
  readonly players = this.participants.players;
  readonly addPlayer = this.participants.addPlayer;
  readonly addPlayers = this.participants.addPlayers;
  readonly importPlayers = this.participants.import;
}
