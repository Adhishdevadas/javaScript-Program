// Array of countries with name and population
const countries = [
    { name: 'China', population: 1444216107, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png' },
    { name: 'India', population: 1339180127, flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png?20230723002237' },
    { name: 'United States', population: 324459463, flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041' },
    { name: 'Indonesia', population: 263991379, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png?20200822164827' },
    { name: 'Brazil', population: 209288278, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png?20240706070120' },
    { name: 'Pakistan', population: 197015955, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png?20121030192132' },
    { name: 'Nigeria', population: 190886311, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Nigeria_%28state%29.svg/800px-Flag_of_Nigeria_%28state%29.svg.png' },
    { name: 'Bangladesh', population: 164669751, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png?20230930051247' },
    { name: 'Russia', population: 146599183, flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png?20120812153731' },
    { name: 'Mexico', population: 129163276, flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png' }
];

// Function to create and display countries
function displayCountries() {
    const container = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        const countryInfoDiv = document.createElement('div');
        countryInfoDiv.classList.add('country-info');

        const flagImg = document.createElement('img');
        flagImg.src = country.flag;
        flagImg.alt = `${country.name} flag`;
        countryInfoDiv.appendChild(flagImg);

        const countryName = document.createElement('span');
        countryName.classList.add('country-name');
        countryName.textContent = country.name;
        countryInfoDiv.appendChild(countryName);

        countryDiv.appendChild(countryInfoDiv);

        const populationSpan = document.createElement('span');
        populationSpan.classList.add('country-population');
        populationSpan.textContent = `Population: ${country.population.toLocaleString()}`;
        countryDiv.appendChild(populationSpan);

        container.appendChild(countryDiv);
    });
}

// Call the function to display countries when the page loads
displayCountries();
