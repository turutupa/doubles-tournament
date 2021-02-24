import RRFixedTeamsScheduler from '@models/RoundRobin/helpers/RoundRobinScheduler';
import {
  buildOpponentsGraph,
  buildPartneredGraph,
  getTeams,
} from '@tests/MockData';

describe('Fixed Teams Round Robin', () => {
  beforeEach(() => {
    const teams = getTeams(4);
    console.log('teams', teams);
  });

  it('should have one team playing against each other once', () => {
    let opponentsGraph;

    expect(opponentsGraph).toEqual(buildOpponentsGraph(4, 1));
  });
});
