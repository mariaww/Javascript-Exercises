// Javascript - Team Stats - arrays and objects
/* We want to create, retrieve, and add information about your favorite sports team. */


  // players have an object containing three properties
const team = {
  _players:[
   { firstName: 'Novak', lastName: 'Djokovic', age: 38}, 
   { firstName: 'Qinwen', lastName: 'Zheng', age: 21},
    { firstName: 'Lionel', lastName: 'Messi', age: 38}
  ],

  // Each game should be an object containing three properties
  _games:[ 
    {opponent: 'Giant', teamPoints: 40, opponentPoints: 25 },
    {opponent: 'Eagle', teamPoints: 45, opponentPoints: 12},
    {opponent: 'Lion', teamPoints: 30, opponentPoints: 10}
  ],

// getter method called players to retrieve the _players property
  get players(){
    return this._players;
  },
// getter method called games to retrieve the _games property
  get games(){
    return this._games;
  },

// this is .addPlayer() method
// create a player object with three parameters to be the values for the object’s three properties:: firstName, lastName, age
  addPlayer(newFirstName,newLastName,newAge){
let player = {
  firstName: newFirstName,
  lastName: newLastName,
  age: newAge
};

// add the new player object to the team‘s _players array
this.players.push(player)
  },

// this is .addGame() method
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent:newOpponent, 
      teamPoints:newTeamPoints, 
      opponentPoints:newOpponentPoints
    };
    
    this.games.push(game)
  }
};


// try .addPlayer() method to add a new player
team.addPlayer('John', 'Bush', 19);
// log the team‘s _players property to check that our new player was added
console.log(team.players);
// try .addGame() method to add a new game
team.addGame('Titans', 100, 98);
console.log(team.games);
