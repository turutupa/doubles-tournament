import Tournament from './doubles-tournament';

const { RoundRobin } = Tournament;

const t = RoundRobin.switchPartners({
  price: 15,
  name: 'Padeliers',
  location: 'LaMaso',
});

const s = Tournament.Brackets.singleElimination();

t.addPlayers(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
console.log(t.leaderboard('losses', 'descending').map((player) => player.id));
// const rr = Tournament.roundRobin.switchPartners({
//   price: 15,
//   name: 'Benissa Padel Tour',
//   date: new Date(),
// });

// rr.log;

// rr.addPlayers(['Alejandra', 'Sergio', 'Ganian', 'Dario', 'Victor', 'Andrea', 'Paula', 'Wain']);
// console.log(rr.players());
// rr.addPlayers(['alberto', 'ganian', 'juan', 'more', 'time']);
// rr.logPlayers;
// console.log(rr.newSchedule());
// rr.newSchedule();

// const schedule = rr.schedule.map((round, index) => {
//   return round.map((match) => {
//     const [localOne, localTwo] = match.locals.getTeam();
//     const [visitorOne, visitorTwo] = match.visitors.getTeam();

//     return ` Round ${index + 1}
//         ${localOne.name} & ${localTwo.name}
//         ${visitorOne.name} & ${visitorTwo.name}
//       `;
//   });
// });

// console.log(schedule);

// console.log(rr.leaderboard('wins'));

// const brackets = Tournament.brackets.singleElimination({
//   price: 10,
//   name: 'Calperros Brackets Tour',
//   date: new Date(),
//   maxNumberOfPlayers: 8,
// });

// rr.log;
// brackets.log;
// rr.addPlayer('Albertico');
// rr.addPlayer('DiCorleone');
// console.log(rr.getPlayers());
// console.log(rr.getSchedule());

// console.log('schedule', tournament.getSchedule());
// tournament.log;
