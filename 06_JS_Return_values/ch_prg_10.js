var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: "a rusty key, a piece of cheese"
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    items: "a magic wand, a potion"
};
var getPlayerItems = function (playerName, items) {
    return playerName + " carries " + items;
};
var getPlayerInfo = function (playerName, playerPlace, playerHealth, items) {
//     var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();     playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
     playerInfo += "\n" + getPlayerItems(playerName, items); // New line for items
    playerInfo += "\n" + getBorder();
   playerInfo += "\n";

  return playerInfo;
};
// console.log(getPlayerInfo(player1.name, player1.place, player1.health, player1.items));
// console.log(getPlayerInfo(player2.name, player2.place, player2.health, player2.items));
