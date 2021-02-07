# doubles-tournament 
*by Alberto Delgado*

## Table of Contents
- About
- How-to: Round Robin
- How-to: Brackets
- Collaboration

## About
**Short Background**: I wanted to create a doubles tournament with my friends in which we played WITH each ther once, aka **Switch Doubles Round Robin Tournament**. Creating a round robin was easy enough but the rotating partners feature was more difficult than expected. If you want to learn about sequences and combinatorics check out [this site](http://www.durangobill.com/BridgeCyclicSolutions.html).

### What can you do?
Doubles tournament is a simple library to create and manage tournaments for tenis-like sports (tenis, padel tenis, doubles table tenis🤫)

#### Features
- Create tournament schedule (see below modes)
- Add/Remove players
- Add tournament price
- Add tournament location
- Get leaderboard - you can sort it by player name, wins, losses, games, sets

####  Modes
There are two modes:
- Round Robin: each player plays every other player. In this mode you can actually choose between Switch Partners (each game you play with a different player) and Fixed Teams (you always play with the same partner)
- Brackets: the old classic tournament, win and move forward in the tournament. But lose, and you are out. You can actually choose between Single Elimination and Double Elimination.

## Round Robin
Play against every player at least once. For Round Robin tournaments you simply have to access the method *roundRobin* in *Tournament* (see examples below). 

###  Switch Partners Round Robin
Pair up with a different player each game! Most fun and suitable IMO to meet new people, or for groups of players with different levels. 

Example (with default values): 

    import { Tournament } from 'doubles-tournament';

    const tournament = Tournament.roundRobin.switchPartners();

Example (with optional parameters)

    import { Tournament } from 'doubles-tournament';

    const tournament = Tournament.roundRobin.switchPartners({
      price: 15, // number
      name: 'The Michael Scott Padel Company',
      date: new Date(Date.now() & (6.048 ** 8)) // Date, this will create a tournament in a week
      maxNumberOfPlayers: 16 // number
    })