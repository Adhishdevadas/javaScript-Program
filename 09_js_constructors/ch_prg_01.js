var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};
var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);
console.log(planet2.name);  
console.log(planet2.type);  
