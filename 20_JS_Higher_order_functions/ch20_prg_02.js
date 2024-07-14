const totalPrice = products
  .filter(product => typeof product.price === 'number' && !isNaN(product.price))
  .map(product => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log('Total Price:', totalPrice); // Output: 27 (sum of valid prices: 3 + 6 + 8 + 10)

function categorizeCountries(pattern) {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
  }
  
  console.log('Countries with pattern "land":', categorizeCountries('land')); // Output: ['Finland', 'IceLand']
  console.log('Countries with pattern "ia":', categorizeCountries('ia')); // Output: ['Sweden']
  console.log('Countries with pattern "stan":', categorizeCountries('stan')); // Output: []
  

function mostUsedStartingLetter(arr) {
    const startingLetters = arr.map(item => item[0].toUpperCase());
    const letterCount = startingLetters.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  
    let mostUsedLetter = '';
    let maxCount = 0;
  
    for (const letter in letterCount) {
      if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        mostUsedLetter = letter;
      }
    }
  
    return mostUsedLetter;
  }
  
  console.log('Most used starting letter:', mostUsedStartingLetter(countries)); // Output: 'I' (IceLand, Iceland)
  