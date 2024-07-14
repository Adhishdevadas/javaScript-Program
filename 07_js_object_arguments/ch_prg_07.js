var getBig = function (str) {
    return str.toUpperCase();
};

// Test getBig function
var planet = "Jupiter";
var bigPlanet = getBig(planet);
console.log(planet + " becomes " + bigPlanet);  // Output: Jupiter becomes JUPITER

var getSmall = function (str) {
    return str.toLowerCase();
};

// Test getSmall function
var country = "UNITED STATES";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);  // Output: UNITED STATES becomes united states
