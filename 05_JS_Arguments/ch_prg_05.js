var square;

square = function (numberToSquare) {
  var result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);  
square(-2);   
square(1111); 
square(0.5);  

var cube = function (numberToCube) {
  var result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " ^ 3 = " + result);
};

cube(3);  
cube(5);   
cube(-2); 
cube(0.5); 


var squareRoot = function (numberToRoot) {
  var result = Math.sqrt(numberToRoot);
  console.log("The square root of " + numberToRoot + " is " + result);
};


squareRoot(9);   
squareRoot(16);  
squareRoot(25);  
squareRoot(2);  
