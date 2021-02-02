"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tournament_1 = __importDefault(require("./Tournament"));
const rr = Tournament_1.default.roundRobin.switchPartners({
    price: 15,
    name: 'Benissa Padel Tour',
    date: new Date(),
});
rr.addPlayers([
    'Alejandra',
    'Sergio',
    'Ganian',
    'Dario',
    'Victor',
    'Andrea',
    'Paula',
    'Wain',
]);
// console.log(rr.players());
// rr.addPlayers(['alberto', 'ganian', 'juan', 'more', 'time']);
// rr.logPlayers;
// console.log(rr.newSchedule());
rr.newSchedule();
// console.log(JSON.stringify(rr.schedule, null, 2));
const schedule = rr.schedule.map((round, index) => {
    return round.map((match) => {
        const [localOne, localTwo] = match.locals.getTeam();
        const [visitorOne, visitorTwo] = match.visitors.getTeam();
        return ` Round ${index + 1}
        ${localOne.name} & ${localTwo.name}
        ${visitorOne.name} & ${visitorTwo.name}
      `;
    });
});
console.log(schedule);
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
