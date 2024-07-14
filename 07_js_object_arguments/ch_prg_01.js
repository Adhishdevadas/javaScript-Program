var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));

var planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389,
    sizeRank: 7
};
console.log(getPlanetInfo(planet2));

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
           ", type: " + planet.type +
           ", radius: " + planet.radius + " km";
};
console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
