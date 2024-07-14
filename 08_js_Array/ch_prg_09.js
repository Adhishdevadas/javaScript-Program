

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

showArguments = function(item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);



players.push("Blinky", "Finn");

players.forEach(showArguments);


showArguments = function(item, index, wholeArray) {
  console.log("Current item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
