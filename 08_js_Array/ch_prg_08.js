

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

items.forEach(function(item) {
	console.log(" – " + item);
});





console.log("Number of dream destinations: " + items.length);
items.forEach(function(item, index) {
	console.log("Destination #" + (index + 1) + ": " + item);
});


var showItems = function() {
	console.log("Dream destinations:");
	items.forEach(function(item, index) {
		console.log("Destination #" + (index + 1) + ": " + item);
	});
};

