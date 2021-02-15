"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = exports.Team = exports.Player = void 0;
var TournamentFactory_1 = require("./Models/TournamentFactory");
var Player_1 = require("./Models/Player");
exports.Player = Player_1.default;
var Team_1 = require("./Models/Team");
exports.Team = Team_1.default;
var Match_1 = require("./Models/Match");
exports.Match = Match_1.default;
exports.default = TournamentFactory_1.default;
console.log('hell yeah');
// const { RoundRobin } = Tournament;
// const t = RoundRobin.switchPartners({
//   price: 15,
//   name: 'Padeliers',
//   location: 'LaMaso',
// });
// const s = Tournament.Brackets.singleElimination();
// t.addPlayers(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
// console.log(t.leaderboard('losses', 'descending').map((player) => player.id));
var rr = TournamentFactory_1.default.RoundRobin.switchPartners({
    price: 15,
    name: 'Benissa Padel Tour',
    date: new Date(),
});
rr.log;
// rr.addPlayers(['turutupa', 'Sergio', 'Ganian', 'Dario', 'Victor', 'Andrea', 'Paula', 'Wain']);
// rr.addPlayers(['alberto', 'ganian', 'juan', 'more', 'time']);
// console.log(rr.players);
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

//# sourceMappingURL=index.js.map
