//Find and Display the Sum of a Different Pair of Numbers:
var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var sum1 = add(50, 23);
console.log(sum1); // Output: 73

var sum2 = add(10, 5);
console.log(sum2); // Output: 15

// Change the Display Format Using add Function:
var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var sum = add(50, 23);
console.log("The sum of " + 50 + " and " + 23 + " is " + sum); // Output: The sum of 50 and 23 is 73
