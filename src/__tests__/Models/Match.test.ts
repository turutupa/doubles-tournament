import Match from '@models/Match';
import Team from '@models/Team';
import Player from '@models/Player';
import { uuid } from '@utils/uuid';

describe('Team', () => {
  let playerOne: Player;
  let playerTwo: Player;
  let playerThree: Player;
  let playerFour: Player;
  let localTeam: Team;
  let visitorTeam: Team;
  let match: Match;
  let randomID: string;

  beforeEach(() => {
    playerOne = new Player('playerOne');
    playerTwo = new Player('playerTwo');
    playerThree = new Player('playerThree');
    playerFour = new Player('playerFour');

    localTeam = new Team([playerOne, playerTwo]);
    visitorTeam = new Team([playerThree, playerFour]);
    randomID = String(uuid());

    match = new Match(localTeam, visitorTeam);
  });

  it('has a generated random ID', () => {
    expect(match.id).toBeTruthy();
  });

  it('should have 2 players in locals and 2 players in visitors', () => {
    expect(match.home.team.length).toBe(2);
    expect(match.away.team.length).toBe(2);
  });

  it('should have unique players', () => {
    const [firstHome, secondHome] = match.home.team;
    const [firstAway, secondAway] = match.away.team;

    const idSet = new Set([
      firstHome.id,
      secondHome.id,
      firstAway.id,
      secondAway.id,
    ]);
    expect(idSet.size).toBe(4);
  });
});
