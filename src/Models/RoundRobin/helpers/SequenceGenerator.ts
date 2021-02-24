export default class SequenceGenerator {
  static calculate<T>(participants: T[]): number[][] {
    if (participants.length % 4 === 0) return this.players4N(participants);

    return this.players4Nplus1(participants);
  }

  static players4N<T>(participants: T[]): number[][] {
    let matrix: number[][] = [];
    const numberOfPlayers = participants.length;

    // There are numberOfPlayers - 1 number of rounds
    for (let i = 0; i < numberOfPlayers - 1; i++) {
      matrix.push([]);
      for (let j = 0; j < numberOfPlayers; j++) {
        // first row goes 0,1,2,3,4...
        // and first column is all 0's
        if (i === 0) {
          matrix[i][j] = j;
        } else if (j === 0) {
          matrix[i][j] = 0;
        } else {
          // Rest of rows are calculated based on prev row
          const currentSum = matrix[i - 1][j] + 1;
          matrix[i][j] = currentSum >= numberOfPlayers ? 1 : currentSum;
        }
      }
    }

    return matrix;
  }

  // Here I have to add particular cases for 5,9,13, etc players
  static players4Nplus1<T>(participants: T[]): number[][] {
    return [];
  }
}
