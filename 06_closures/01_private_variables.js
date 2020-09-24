function playerFactory(name) {
  function getName() {
    return name;
  }

  return { getName };
}

const sunil = playerFactory("Sunil");
sunil.name; //undefined
sunil.getName(); // "Sunil"
// sunil.name doesn't exist because the name was made private
// when the playerFactory created the new player.
// this is because the factory only returns the getName() function, and nothing else.
