// Load the countries data from countries_data.js
const countriesData = require('./data/countries_data');

// Function to sort countries by name
function sortCountriesByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to sort countries by capital
function sortCountriesByCapital(countries) {
  return countries.sort((a, b) => a.capital.localeCompare(b.capital));
}

// Function to sort countries by population
function sortCountriesByPopulation(countries) {
  return countries.sort((a, b) => b.population - a.population);
}

// Example usage
const sortedByName = sortCountriesByName(countriesData);
const sortedByCapital = sortCountriesByCapital(countriesData);
const sortedByPopulation = sortCountriesByPopulation(countriesData);

console.log('Countries sorted by name:', sortedByName.map(country => country.name));
console.log('Countries sorted by capital:', sortedByCapital.map(country => country.capital));
console.log('Countries sorted by population:', sortedByPopulation.map(country => `${country.name} - ${country.population}`));

function mostSpokenLanguages(countries, count) {
    // Collect all languages into a single array
    let languages = [];
    countries.forEach(country => {
      if (country.languages) {
        languages = languages.concat(country.languages);
      }
    });
  
    // Count occurrences of each language
    const languageCount = languages.reduce((acc, language) => {
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});
  
    // Convert to array of objects and sort by count descending
    const sortedLanguages = Object.keys(languageCount)
      .map(language => ({ language, count: languageCount[language] }))
      .sort((a, b) => b.count - a.count);
  
    // Return the top 'count' languages
    return sortedLanguages.slice(0, count);
  }
  
  // Example usage
  console.log(mostSpokenLanguages(countriesData, 10));
  console.log(mostSpokenLanguages(countriesData, 3));

  function mostPopulatedCountries(countries, count) {
    // Sort countries by population descending
    const sortedCountries = countries.sort((a, b) => b.population - a.population);
  
    // Return the top 'count' countries with country and population
    return sortedCountries.slice(0, count).map(country => ({ country: country.name, population: country.population }));
  }
  
  // Example usage
  console.log(mostPopulatedCountries(countriesData, 10));
  console.log(mostPopulatedCountries(countriesData, 3));
  