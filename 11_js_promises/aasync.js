// Using async and await to fetch API data

const url = 'https://restcountries.com/v2/all';

// Promise method
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('===== Promise method');
    console.log(data);
  })
  .catch(error => console.error(error));


// Async and await method
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log('===== Async and await method');
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};

fetchData(); // Call the async function to initiate the API fetch
