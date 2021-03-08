import RoundRobinScheduler from '@roundrobin/helpers/RoundRobinScheduler';
import {
  buildOpponentsGraph,
  buildPartneredGraph,
  getTeams,
} from '@tests/MockData/ParticipantsHelper';
import { Teams } from '@interfaces/interfaces';

describe('Fixed Teams Round Robin', () => {
  it('should have one team playing against each other once', () => {
    const fourTeams: Teams = getTeams(4);
    const tournament = RoundRobinScheduler.fixedTeams(fourTeams);

    const opponentsGraph: any = {};
    const expectedOpponentsGraph: any = {};

    for (let [teamA, _] of fourTeams) {
      opponentsGraph[teamA] = {};
      expectedOpponentsGraph[teamA] = {};

      for (let [teamB, _] of fourTeams) {
        if (teamA !== teamB) {
          if (expectedOpponentsGraph[teamA][teamB]) {
            expectedOpponentsGraph[teamA][teamB] =
              expectedOpponentsGraph[teamA][teamB] + 1;
          } else {
            expectedOpponentsGraph[teamA][teamB] = 1;
          }
        }
      }
    }

    for (let round of tournament.schedule) {
      for (let match of round) {
        const home = match.home;
        const away = match.away;

        updatePlayerGraph(opponentsGraph[home.id], [away.id]);
        updatePlayerGraph(opponentsGraph[away.id], [home.id]);
      }
    }

    expect(opponentsGraph).toEqual(expectedOpponentsGraph);
  });
});

interface OpponentCounter {
  [key: string]: any;
}

function updatePlayerGraph(root: OpponentCounter, opponents: string[]): void {
  for (let opponent of opponents) {
    root[opponent] = root[opponent] ? root[opponent] + 1 : 1;
  }
}
