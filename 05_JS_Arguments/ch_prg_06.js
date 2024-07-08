var showSum;

showSum = function (number1, number2) {
  var total = number1 + number2;
  console.log("The sum is " + total);
};

showSum(30, 23);    // Output: The sum is 53
showSum(2.8, -5);   // Output: The sum is -2.2

// Further Adventures

// 1) Using showSum to add 56 and 74
showSum(56, 74);    // Output: The sum is 130

// 2) Creating showProduct function for multiplication
var showProduct = function (number1, number2) {
  var product = number1 * number2;
  console.log("The product is " + product);
};

// 3) Using showProduct to multiply three pairs of numbers
showProduct(5, 10);    // Output: The product is 50
showProduct(-3, 7);    // Output: The product is -21
showProduct(2.5, 4);   // Output: The product is 10

// 4) Creating showDifference function for subtraction
var showDifference = function (number1, number2) {
  var difference = number1 - number2;
  console.log("The difference is " + difference);
};

// Testing showDifference function
showDifference(10, 5);   // Output: The difference is 5
showDifference(20, 8);   // Output: The difference is 12
showDifference(-3, -7);  // Output: The difference is 4

// 5) Creating showQuotient function for division
var showQuotient = function (number1, number2) {
  var quotient = number1 / number2;
  console.log("The quotient is " + quotient);
};

// Testing showQuotient function
showQuotient(10, 2);    // Output: The quotient is 5
showQuotient(15, 3);    // Output: The quotient is 5
showQuotient(-20, 4);   // Output: The quotient is -5
