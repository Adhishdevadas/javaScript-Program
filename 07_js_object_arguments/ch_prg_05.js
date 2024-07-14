var showLarger = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);    // Output: 12 is larger than 3
showLarger(-10, 3);   // Output: 3 is larger than -10
