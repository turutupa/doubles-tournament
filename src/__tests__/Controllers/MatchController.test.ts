import Player from '@models/Player';
import Team from '@models/Team';
import MatchController from '@controllers/MatchController';
import Match from '@models/Match';
import { MatchesMap } from '@interfaces/interfaces';
import { uuid } from '@utils/uuid';

describe('Match Controller', () => {
  let one: Player;
  let two: Player;
  let three: Player;
  let four: Player;

  let home: Team;
  let away: Team;

  let firstMatch: Match;
  let secondMatch: Match;

  let matchesMap: MatchesMap;

  const matchID = String(uuid());
  const secondMatchID = String(uuid());

  // first game scoreboard
  const firstResult = [
    [1, 5, 6],
    [6, 6, 3],
  ];

  // second game scoreboard
  const secondResult = [
    [6, 6, 3],
    [5, 5, 6],
  ];

  // result after first match
  const homeResult = {
    wins: 0,
    losses: 1,
    games: 12,
    sets: 1,
  };

  const awayResult = {
    wins: 1,
    losses: 0,
    games: 15,
    sets: 2,
  };

  // result after adding first result and second result
  const homeResultSecondMatch = {
    wins: 1,
    losses: 1,
    games: 27,
    sets: 3,
  };

  const awayResultSecondMatch = {
    wins: 1,
    losses: 1,
    games: 31,
    sets: 3,
  };

  beforeEach(() => {
    one = new Player('one');
    two = new Player('two');
    three = new Player('three');
    four = new Player('four');

    home = new Team([one, two]);
    away = new Team([three, four]);
    firstMatch = new Match(home, away);
    secondMatch = new Match(home, away);

    matchesMap = {};
    matchesMap[matchID] = firstMatch;
    matchesMap[secondMatchID] = secondMatch;
  });

  it('should retrieve targeted MatchID and update result', () => {
    MatchController.update(matchesMap, matchID, firstResult);
    MatchController.update(matchesMap, secondMatchID, secondResult);

    expect(matchesMap[matchID].scoreboard).toEqual(firstResult);
    expect(matchesMap[secondMatchID].scoreboard).toEqual(secondResult);
  });

  it('should update match results to player stats correctly', () => {
    MatchController.update(matchesMap, matchID, firstResult);

    expect(one.stats).toEqual(homeResult);
    expect(two.stats).toEqual(homeResult);
    expect(three.stats).toEqual(awayResult);
    expect(four.stats).toEqual(awayResult);
  });

  it('should update match results to teams correctly', () => {
    MatchController.update(matchesMap, matchID, firstResult);

    expect(home.stats).toEqual(homeResult);
    expect(away.stats).toEqual(awayResult);
  });

  it('should update a second match to players correctly', () => {
    MatchController.update(matchesMap, matchID, firstResult);
    MatchController.update(matchesMap, secondMatchID, secondResult);

    expect(one.stats).toEqual(homeResultSecondMatch);
    expect(two.stats).toEqual(homeResultSecondMatch);
    expect(three.stats).toEqual(awayResultSecondMatch);
    expect(four.stats).toEqual(awayResultSecondMatch);
  });

  it('should update a second match to teams correctly', () => {
    MatchController.update(matchesMap, matchID, firstResult);
    MatchController.update(matchesMap, secondMatchID, secondResult);

    expect(home.stats).toEqual(homeResultSecondMatch);
    expect(away.stats).toEqual(awayResultSecondMatch);
  });
});
