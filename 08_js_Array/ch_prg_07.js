

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function(itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);




items.push("The Taj Mahal");
items[3] = "Machu Picchu";


items.forEach(showInfo);


showInfo = function(itemToShow) {
    console.log(itemToShow + " - Number of letters: " + itemToShow.length);
};

items.forEach(showInfo);


var getTotalLetters = function() {
    var total = 0;
    items.forEach(function(item) {
        total += item.length;
    });
    return total;
};

console.log("Total number of letters in all items: " + getTotalLetters());
