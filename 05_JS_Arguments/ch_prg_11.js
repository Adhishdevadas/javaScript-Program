var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[0] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: K is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: D is in The Old Library

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[1] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: a is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: a is in The Old Library

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom"); // Output: d is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: undefined is in The Old Library
