var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();
    };

    this.showMoons = function () {
        this.moons.forEach(function (moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    this.getMoon = function (index) {
        return this.moons[index];
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Proteus");

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("Phobos");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});

console.log(planet1.getMoon(1)); 
