const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function logItem(item) {
    console.log(item);
  }
  
  
  numbers.forEach(logItem); 
  countries.forEach(country => console.log(country));
  names.forEach(name => console.log(name));
  numbers.forEach(number => console.log(number));

  const concatenatedSentence = countries.reduce((acc, country, index, arr) => {
    if (index === arr.length - 1) {
      return acc + 'and ' + country + ' are north European countries';
    } else {
      return acc + country + ', ';
    }
  }, '');
  
  console.log(concatenatedSentence);
  