var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.showPlanet(); 


var planet2 = new Planet("Mars", 4, "Terrestrial");


planet2.showPlanet(); 