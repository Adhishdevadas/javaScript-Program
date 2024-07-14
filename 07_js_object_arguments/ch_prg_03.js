var buildCar = function (make, model, year, color) {
    return {
        make: make,
        model: model,
        year: year,
        color: color
    };
};
var getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + " (" + car.color + ")";
};
var car1 = buildCar("Toyota", "Camry", 2023, "Silver");
var car2 = buildCar("Tesla", "Model S", 2022, "Red");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
