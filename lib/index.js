"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tournament_1 = __importDefault(require("./Tournament"));
var rr = Tournament_1.default.roundRobin.switchPartners({
    price: 15,
    name: 'Benissa Padel Tour',
    date: new Date(),
});
rr.addPlayers(['Alejandra', 'Sergio', 'Ganian', 'Dario', 'Victor', 'Andrea', 'Paula', 'Wain']);
// console.log(rr.players());
// rr.addPlayers(['alberto', 'ganian', 'juan', 'more', 'time']);
// rr.logPlayers;
// console.log(rr.newSchedule());
rr.newSchedule();
// console.log(JSON.stringify(rr.schedule, null, 2));
var schedule = rr.schedule.map(function (round, index) {
    return round.map(function (match) {
        var _a = __read(match.locals.getTeam(), 2), localOne = _a[0], localTwo = _a[1];
        var _b = __read(match.visitors.getTeam(), 2), visitorOne = _b[0], visitorTwo = _b[1];
        return " Round " + (index + 1) + "\n        " + localOne.name + " & " + localTwo.name + "\n        " + visitorOne.name + " & " + visitorTwo.name + "\n      ";
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
