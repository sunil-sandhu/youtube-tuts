// How it is called:
// bind(context)
// context can often be things such as 'this', or simply the object you want it to be called on

// Bind creates a copy of what it is bound to and can then be executed.

class Player {
  constructor(name) {
    this.name = name;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
    return this.players;
  }
}

// remove function picked up from https://mariusschulz.com/blog/removing-elements-from-javascript-arrays
function substitution(playerOut, playerIn) {
  function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
  remove(this.players, playerOut);
  this.players.push(playerIn);
  return this.players;
}

// Create players
const sunil = new Player("Sunil");
const origi = new Player("Origi");
const mane = new Player("Mane");
const salah = new Player("Salah");

// Create team
const liverpool = new Team("Liverpool FC");

// Add some players to team
liverpool.addPlayer(sunil);
liverpool.addPlayer(salah);

// Here we bind our function to the context of liverpool.
// Therefore, when we refer to 'this' in our substitution function, the context of 'this' is now our liverpool team
const makeSub = substitution.bind(liverpool);
makeSub(salah, origi);

// here is also an alternative way that we could write the above function
substitution.bind(liverpool)(sunil, mane);
// however, in the case of making subs, which can occur several times in a game, the first approach would make more sense.
