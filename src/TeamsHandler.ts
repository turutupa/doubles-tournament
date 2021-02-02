import Player from './Player';

export default class TeamsHandler {
  private teams: [Player, Player][] = [];

  addTeam(team: [Player, Player]): void {
    this.teams = [...this.teams, team];
  }

  getTeams(): [Player, Player][] {
    return this.teams;
  }
}
