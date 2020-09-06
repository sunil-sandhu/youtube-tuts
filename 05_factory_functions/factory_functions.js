function playerFactory(name) {
  function getName() {
    return name;
  }

  return { getName };
}

function teamFactory(name) {
  let players = [];

  function addPlayer(player) {
    players.push(player);
    return players;
  }

  function getPlayers() {
    return players;
  }

  function getName() {
    return name;
  }

  return { addPlayer, getName, getPlayers };
}

// Create players
const sunil = playerFactory("Sunil");
const origi = playerFactory("Origi");
const mane = playerFactory("Mane");
const salah = playerFactory("Salah");

// Create team
const liverpool = teamFactory("Liverpool FC");

// Add some players to team
liverpool.addPlayer(sunil);
liverpool.addPlayer(salah);

liverpool.substitution(salah, origi);
