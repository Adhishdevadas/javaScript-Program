var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

console.log("$" + totalCost(30, 40, 12)); // Output: $510

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    if (discount > 0) {
        total -= discount;
    }
    return total;
};

console.log("$" + totalCost(30, 40, 3, 20)); // Output: $130 for 3 hours with a $20 discount coupon



var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    if (discount > 0) {
        total -= discount;
    }
    return total;
};

console.log("$" + totalCost(30, 40, 3, 20)); // Output: $130 for 3 hours with a $20 discount coupon
