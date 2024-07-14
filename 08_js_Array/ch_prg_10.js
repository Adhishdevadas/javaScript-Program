

[ "Dax", "Jahver", "Kandra" ].forEach(function(item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
});
  
  

var rectangles = [
    { length: 5, width: 3 },
    { length: 7, width: 2 },
    { length: 4, width: 4 }
];


var assignArea = function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};


var showInfo = function(rectangle) {
    console.log("Rectangle - Length: " + rectangle.length + ", Width: " + rectangle.width + ", Area: " + rectangle.area);
};


 
rectangles.forEach(function(rectangle) {
    assignArea(rectangle);
    showInfo(rectangle);
});
