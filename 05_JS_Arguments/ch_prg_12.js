var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place); // Output: K is in The Dungeon of Doom
showPlayerPlace(player2.name, player2.place); // Output: D is in The Old Library

 // You can change the value (0,2)
// var showPlayerPlace;

// showPlayerPlace = function (playerName, playerPlace) {
//     console.log(playerName.substring(0, 2) + " is in " + playerPlace);
// };

// showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: Ka is in The Dungeon of Doom
// showPlayerPlace("Dax", "The Old Library");        // Output: Da is in The Old Library

 // You can change the value (0,3)


// showPlayerPlace = function (playerName, playerPlace) {
//     console.log(playerName.substring(0, 3) + " is in " + playerPlace);
// };

// showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: Kan is in The Dungeon of Doom
// showPlayerPlace("Dax", "The Old Library");        // Output: Dax is in The Old Library

// You can change the value (1,2)

// showPlayerPlace = function (playerName, playerPlace) {
//     console.log(playerName.substring(1, 2) + " is in " + playerPlace);
// };

// showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: a is in The Dungeon of Doom
// showPlayerPlace("Dax", "The Old Library");        // Output: a is in The Old Library

// You can change the value (1,3)

// showPlayerPlace = function (playerName, playerPlace) {
//     console.log(playerName.substring(1, 3) + " is in " + playerPlace);
// };

// showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: an is in The Dungeon of Doom
// showPlayerPlace("Dax", "The Old Library");        // Output: ax is in The Old Library
