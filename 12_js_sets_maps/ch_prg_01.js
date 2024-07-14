const countriesMap = new Map();

countriesMap.forEach(country => {
  countriesMap.set(country, country.length);
});

console.log(countriesMap);

const setB = new Set();

for (let i = 0; i <= 10; i++) {
  setB.add(i);
}

console.log(setB); 

