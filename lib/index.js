"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = exports.Team = exports.Player = void 0;
var TournamentFactory_1 = require("./Views/TournamentFactory");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBbUQ7QUFDbkQsMENBQXFDO0FBSzVCLGlCQUxGLGdCQUFNLENBS0U7QUFKZixzQ0FBaUM7QUFJaEIsZUFKVixjQUFJLENBSVU7QUFIckIsd0NBQW1DO0FBR1osZ0JBSGhCLGVBQUssQ0FHZ0I7QUFENUIsa0JBQWUsMkJBQVUsQ0FBQztBQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLHFDQUFxQztBQUVyQyx3Q0FBd0M7QUFDeEMsZUFBZTtBQUNmLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLHFEQUFxRDtBQUVyRCxrRkFBa0Y7QUFDbEYsaUZBQWlGO0FBQ2pGLElBQU0sRUFBRSxHQUFHLDJCQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxvQkFBb0I7SUFDMUIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0NBQ2pCLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFUCxpR0FBaUc7QUFDakcsZ0VBQWdFO0FBQ2hFLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBRXBCLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEMsMkRBQTJEO0FBQzNELGlFQUFpRTtBQUVqRSxrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCxXQUFXO0FBQ1gsUUFBUTtBQUNSLE1BQU07QUFFTix5QkFBeUI7QUFFekIsdUNBQXVDO0FBRXZDLDJEQUEyRDtBQUMzRCxlQUFlO0FBQ2YscUNBQXFDO0FBQ3JDLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsTUFBTTtBQUVOLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBRWpDLHFEQUFxRDtBQUNyRCxrQkFBa0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG91cm5hbWVudCBmcm9tICcuL1ZpZXdzL1RvdXJuYW1lbnRGYWN0b3J5JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9Nb2RlbHMvUGxheWVyJztcbmltcG9ydCBUZWFtIGZyb20gJy4vTW9kZWxzL1RlYW0nO1xuaW1wb3J0IE1hdGNoIGZyb20gJy4vTW9kZWxzL01hdGNoJztcblxuZXhwb3J0IGRlZmF1bHQgVG91cm5hbWVudDtcbmV4cG9ydCB7IFBsYXllciwgVGVhbSwgTWF0Y2ggfTtcblxuY29uc29sZS5sb2coJ2hlbGwgeWVhaCcpO1xuXG4vLyBjb25zdCB7IFJvdW5kUm9iaW4gfSA9IFRvdXJuYW1lbnQ7XG5cbi8vIGNvbnN0IHQgPSBSb3VuZFJvYmluLnN3aXRjaFBhcnRuZXJzKHtcbi8vICAgcHJpY2U6IDE1LFxuLy8gICBuYW1lOiAnUGFkZWxpZXJzJyxcbi8vICAgbG9jYXRpb246ICdMYU1hc28nLFxuLy8gfSk7XG5cbi8vIGNvbnN0IHMgPSBUb3VybmFtZW50LkJyYWNrZXRzLnNpbmdsZUVsaW1pbmF0aW9uKCk7XG5cbi8vIHQuYWRkUGxheWVycyhbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCddKTtcbi8vIGNvbnNvbGUubG9nKHQubGVhZGVyYm9hcmQoJ2xvc3NlcycsICdkZXNjZW5kaW5nJykubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZCkpO1xuY29uc3QgcnIgPSBUb3VybmFtZW50LlJvdW5kUm9iaW4uc3dpdGNoUGFydG5lcnMoe1xuICBwcmljZTogMTUsXG4gIG5hbWU6ICdCZW5pc3NhIFBhZGVsIFRvdXInLFxuICBkYXRlOiBuZXcgRGF0ZSgpLFxufSk7XG5cbnJyLmxvZztcblxuLy8gcnIuYWRkUGxheWVycyhbJ3R1cnV0dXBhJywgJ1NlcmdpbycsICdHYW5pYW4nLCAnRGFyaW8nLCAnVmljdG9yJywgJ0FuZHJlYScsICdQYXVsYScsICdXYWluJ10pO1xuLy8gcnIuYWRkUGxheWVycyhbJ2FsYmVydG8nLCAnZ2FuaWFuJywgJ2p1YW4nLCAnbW9yZScsICd0aW1lJ10pO1xuLy8gY29uc29sZS5sb2cocnIucGxheWVycyk7XG4vLyBjb25zb2xlLmxvZyhyci5uZXdTY2hlZHVsZSgpKTtcbi8vIHJyLm5ld1NjaGVkdWxlKCk7XG5cbi8vIGNvbnN0IHNjaGVkdWxlID0gcnIuc2NoZWR1bGUubWFwKChyb3VuZCwgaW5kZXgpID0+IHtcbi8vICAgcmV0dXJuIHJvdW5kLm1hcCgobWF0Y2gpID0+IHtcbi8vICAgICBjb25zdCBbbG9jYWxPbmUsIGxvY2FsVHdvXSA9IG1hdGNoLmxvY2Fscy5nZXRUZWFtKCk7XG4vLyAgICAgY29uc3QgW3Zpc2l0b3JPbmUsIHZpc2l0b3JUd29dID0gbWF0Y2gudmlzaXRvcnMuZ2V0VGVhbSgpO1xuXG4vLyAgICAgcmV0dXJuIGAgUm91bmQgJHtpbmRleCArIDF9XG4vLyAgICAgICAgICR7bG9jYWxPbmUubmFtZX0gJiAke2xvY2FsVHdvLm5hbWV9XG4vLyAgICAgICAgICR7dmlzaXRvck9uZS5uYW1lfSAmICR7dmlzaXRvclR3by5uYW1lfVxuLy8gICAgICAgYDtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coc2NoZWR1bGUpO1xuXG4vLyBjb25zb2xlLmxvZyhyci5sZWFkZXJib2FyZCgnd2lucycpKTtcblxuLy8gY29uc3QgYnJhY2tldHMgPSBUb3VybmFtZW50LmJyYWNrZXRzLnNpbmdsZUVsaW1pbmF0aW9uKHtcbi8vICAgcHJpY2U6IDEwLFxuLy8gICBuYW1lOiAnQ2FscGVycm9zIEJyYWNrZXRzIFRvdXInLFxuLy8gICBkYXRlOiBuZXcgRGF0ZSgpLFxuLy8gICBtYXhOdW1iZXJPZlBsYXllcnM6IDgsXG4vLyB9KTtcblxuLy8gcnIubG9nO1xuLy8gYnJhY2tldHMubG9nO1xuLy8gcnIuYWRkUGxheWVyKCdBbGJlcnRpY28nKTtcbi8vIHJyLmFkZFBsYXllcignRGlDb3JsZW9uZScpO1xuLy8gY29uc29sZS5sb2cocnIuZ2V0UGxheWVycygpKTtcbi8vIGNvbnNvbGUubG9nKHJyLmdldFNjaGVkdWxlKCkpO1xuXG4vLyBjb25zb2xlLmxvZygnc2NoZWR1bGUnLCB0b3VybmFtZW50LmdldFNjaGVkdWxlKCkpO1xuLy8gdG91cm5hbWVudC5sb2c7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYiJ9
