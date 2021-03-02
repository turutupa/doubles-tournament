import SequenceGenerator from '@roundrobin/helpers/SequenceGenerator';
import Player from '@models/Player';
import Team from '@models/Team';
import { getPlayers, getTeams } from '@tests/MockData/ParticipantsHelper';
import { ParticipantMap } from '@interfaces/interfaces';

function generateParticipantList<T extends ParticipantMap>(
  participants: T,
): (Player | Team)[] {
  const list = [];
  for (let [_, participant] of participants) {
    list.push(participant);
  }

  return list;
}

describe('Round Robin Sequence Generator', () => {
  const eighParticipantSequence = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 2, 3, 4, 5, 6, 7, 1],
    [0, 3, 4, 5, 6, 7, 1, 2],
    [0, 4, 5, 6, 7, 1, 2, 3],
    [0, 5, 6, 7, 1, 2, 3, 4],
    [0, 6, 7, 1, 2, 3, 4, 5],
    [0, 7, 1, 2, 3, 4, 5, 6],
  ];

  it('should create correct sequence for 8 players', () => {
    const players = getPlayers(8);
    const listOfPlayers = generateParticipantList(players);

    expect(SequenceGenerator.calculate(listOfPlayers)).toEqual(
      eighParticipantSequence,
    );
  });

  it('should create correct sequence for 8 teams', () => {
    const teams = getTeams(8);
    const listOfTeams = generateParticipantList(teams);

    expect(SequenceGenerator.calculate(listOfTeams)).toEqual(
      eighParticipantSequence,
    );
  });

  it('should create correct sequence for 13 players', () => {
    const players = getPlayers(13);
    const listOfPlayers = generateParticipantList(players);

    const baseSequence = [3, 4, 2, 8, 5, 7, 10, 1, 9, 12, 6, 11, 0];
    const sequence: number[][] = [baseSequence];

    for (let i = 1; i < 13; i++) {
      sequence.push(new Array(13).fill(1));

      for (let j = 0; j < 13; j++) {
        sequence[i][j] = sequence[i - 1][j] + 1;
      }
    }

    expect(SequenceGenerator.calculate(listOfPlayers)).toEqual(sequence);
  });

  it('should throw error for odd number of players that doesnt have a calclated table', () => {
    const players = getPlayers(9);
    const listOfPlayers = generateParticipantList(players);

    expect(() => SequenceGenerator.calculate(listOfPlayers)).toThrow();
  });
});
