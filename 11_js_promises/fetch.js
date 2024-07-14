const url = 'https://restcountries.com/v2/all'; // URL of the countries API

fetch(url) // Initiating the fetch request
  .then(response => response.json()) // Converting response to JSON format
  .then(data => {
    // Accessing the data
    console.log(data); // Logging the data to the console
  })
  .catch(error => console.error(error)); // Handling any errors that occur during fetch
