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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBb0Q7QUFDcEQsMENBQXFDO0FBSzVCLGlCQUxGLGdCQUFNLENBS0U7QUFKZixzQ0FBaUM7QUFJaEIsZUFKVixjQUFJLENBSVU7QUFIckIsd0NBQW1DO0FBR1osZ0JBSGhCLGVBQUssQ0FHZ0I7QUFENUIsa0JBQWUsMkJBQVUsQ0FBQztBQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLHFDQUFxQztBQUVyQyx3Q0FBd0M7QUFDeEMsZUFBZTtBQUNmLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLHFEQUFxRDtBQUVyRCxrRkFBa0Y7QUFDbEYsaUZBQWlGO0FBQ2pGLElBQU0sRUFBRSxHQUFHLDJCQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxvQkFBb0I7SUFDMUIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0NBQ2pCLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFUCxpR0FBaUc7QUFDakcsZ0VBQWdFO0FBQ2hFLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBRXBCLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEMsMkRBQTJEO0FBQzNELGlFQUFpRTtBQUVqRSxrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCxXQUFXO0FBQ1gsUUFBUTtBQUNSLE1BQU07QUFFTix5QkFBeUI7QUFFekIsdUNBQXVDO0FBRXZDLDJEQUEyRDtBQUMzRCxlQUFlO0FBQ2YscUNBQXFDO0FBQ3JDLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsTUFBTTtBQUVOLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBRWpDLHFEQUFxRDtBQUNyRCxrQkFBa0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG91cm5hbWVudCBmcm9tICcuL01vZGVscy9Ub3VybmFtZW50RmFjdG9yeSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vTW9kZWxzL1BsYXllcic7XG5pbXBvcnQgVGVhbSBmcm9tICcuL01vZGVscy9UZWFtJztcbmltcG9ydCBNYXRjaCBmcm9tICcuL01vZGVscy9NYXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IFRvdXJuYW1lbnQ7XG5leHBvcnQgeyBQbGF5ZXIsIFRlYW0sIE1hdGNoIH07XG5cbmNvbnNvbGUubG9nKCdoZWxsIHllYWgnKTtcblxuLy8gY29uc3QgeyBSb3VuZFJvYmluIH0gPSBUb3VybmFtZW50O1xuXG4vLyBjb25zdCB0ID0gUm91bmRSb2Jpbi5zd2l0Y2hQYXJ0bmVycyh7XG4vLyAgIHByaWNlOiAxNSxcbi8vICAgbmFtZTogJ1BhZGVsaWVycycsXG4vLyAgIGxvY2F0aW9uOiAnTGFNYXNvJyxcbi8vIH0pO1xuXG4vLyBjb25zdCBzID0gVG91cm5hbWVudC5CcmFja2V0cy5zaW5nbGVFbGltaW5hdGlvbigpO1xuXG4vLyB0LmFkZFBsYXllcnMoWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnLCAnc2V2ZW4nLCAnZWlnaHQnXSk7XG4vLyBjb25zb2xlLmxvZyh0LmxlYWRlcmJvYXJkKCdsb3NzZXMnLCAnZGVzY2VuZGluZycpLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpKTtcbmNvbnN0IHJyID0gVG91cm5hbWVudC5Sb3VuZFJvYmluLnN3aXRjaFBhcnRuZXJzKHtcbiAgcHJpY2U6IDE1LFxuICBuYW1lOiAnQmVuaXNzYSBQYWRlbCBUb3VyJyxcbiAgZGF0ZTogbmV3IERhdGUoKSxcbn0pO1xuXG5yci5sb2c7XG5cbi8vIHJyLmFkZFBsYXllcnMoWyd0dXJ1dHVwYScsICdTZXJnaW8nLCAnR2FuaWFuJywgJ0RhcmlvJywgJ1ZpY3RvcicsICdBbmRyZWEnLCAnUGF1bGEnLCAnV2FpbiddKTtcbi8vIHJyLmFkZFBsYXllcnMoWydhbGJlcnRvJywgJ2dhbmlhbicsICdqdWFuJywgJ21vcmUnLCAndGltZSddKTtcbi8vIGNvbnNvbGUubG9nKHJyLnBsYXllcnMpO1xuLy8gY29uc29sZS5sb2cocnIubmV3U2NoZWR1bGUoKSk7XG4vLyByci5uZXdTY2hlZHVsZSgpO1xuXG4vLyBjb25zdCBzY2hlZHVsZSA9IHJyLnNjaGVkdWxlLm1hcCgocm91bmQsIGluZGV4KSA9PiB7XG4vLyAgIHJldHVybiByb3VuZC5tYXAoKG1hdGNoKSA9PiB7XG4vLyAgICAgY29uc3QgW2xvY2FsT25lLCBsb2NhbFR3b10gPSBtYXRjaC5sb2NhbHMuZ2V0VGVhbSgpO1xuLy8gICAgIGNvbnN0IFt2aXNpdG9yT25lLCB2aXNpdG9yVHdvXSA9IG1hdGNoLnZpc2l0b3JzLmdldFRlYW0oKTtcblxuLy8gICAgIHJldHVybiBgIFJvdW5kICR7aW5kZXggKyAxfVxuLy8gICAgICAgICAke2xvY2FsT25lLm5hbWV9ICYgJHtsb2NhbFR3by5uYW1lfVxuLy8gICAgICAgICAke3Zpc2l0b3JPbmUubmFtZX0gJiAke3Zpc2l0b3JUd28ubmFtZX1cbi8vICAgICAgIGA7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKHNjaGVkdWxlKTtcblxuLy8gY29uc29sZS5sb2cocnIubGVhZGVyYm9hcmQoJ3dpbnMnKSk7XG5cbi8vIGNvbnN0IGJyYWNrZXRzID0gVG91cm5hbWVudC5icmFja2V0cy5zaW5nbGVFbGltaW5hdGlvbih7XG4vLyAgIHByaWNlOiAxMCxcbi8vICAgbmFtZTogJ0NhbHBlcnJvcyBCcmFja2V0cyBUb3VyJyxcbi8vICAgZGF0ZTogbmV3IERhdGUoKSxcbi8vICAgbWF4TnVtYmVyT2ZQbGF5ZXJzOiA4LFxuLy8gfSk7XG5cbi8vIHJyLmxvZztcbi8vIGJyYWNrZXRzLmxvZztcbi8vIHJyLmFkZFBsYXllcignQWxiZXJ0aWNvJyk7XG4vLyByci5hZGRQbGF5ZXIoJ0RpQ29ybGVvbmUnKTtcbi8vIGNvbnNvbGUubG9nKHJyLmdldFBsYXllcnMoKSk7XG4vLyBjb25zb2xlLmxvZyhyci5nZXRTY2hlZHVsZSgpKTtcblxuLy8gY29uc29sZS5sb2coJ3NjaGVkdWxlJywgdG91cm5hbWVudC5nZXRTY2hlZHVsZSgpKTtcbi8vIHRvdXJuYW1lbnQubG9nO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIifQ==
