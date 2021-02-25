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
    expect(match.home.players.length).toBe(2);
    expect(match.away.players.length).toBe(2);
  });

  it('should have unique players', () => {
    const [firstHome, secondHome] = match.home.players;
    const [firstAway, secondAway] = match.away.players;

    const idSet = new Set([
      firstHome.id,
      secondHome.id,
      firstAway.id,
      secondAway.id,
    ]);
    expect(idSet.size).toBe(4);
  });

  it('should add new scoreboard to Match and update Players and Teams', () => {
    const scoreboard = [
      [6, 5, 1],
      [5, 6, 6],
    ];

    match.addResults(scoreboard);
    // home results verification
    expect(match.home.wins).toBe(0);
    expect(match.home.losses).toBe(1);
    expect(match.home.sets).toBe(1);
    expect(match.home.games).toBe(12);

    expect(playerOne.wins).toBe(0);
    expect(playerOne.losses).toBe(1);
    expect(playerOne.sets).toBe(1);
    expect(playerOne.games).toBe(12);

    expect(playerTwo.wins).toBe(0);
    expect(playerTwo.losses).toBe(1);
    expect(playerTwo.sets).toBe(1);
    expect(playerTwo.games).toBe(12);

    // away results verification
    expect(match.away.wins).toBe(1);
    expect(match.away.losses).toBe(0);
    expect(match.away.sets).toBe(2);
    expect(match.away.games).toBe(17);

    expect(playerThree.wins).toBe(1);
    expect(playerThree.losses).toBe(0);
    expect(playerThree.sets).toBe(2);
    expect(playerThree.games).toBe(17);

    expect(playerFour.wins).toBe(1);
    expect(playerFour.losses).toBe(0);
    expect(playerFour.sets).toBe(2);
    expect(playerFour.games).toBe(17);
  });
});
