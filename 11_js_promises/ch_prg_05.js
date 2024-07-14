const countriesAPI = 'https://restcountries.com/v2/all';

const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const countries = await response.json();
        
        // Iterate over each country
        countries.forEach(country => {
            const name = country.name;
            const capital = country.capital;
            const languages = country.languages.map(lang => lang.name).join(', ');
            const population = country.population.toLocaleString();
            const area = country.area.toLocaleString(); // Assuming area is provided and numeric
            
            // Print information
            console.log(`Country: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languages}`);
            console.log(`Population: ${population}`);
            console.log(`Area: ${area} square kilometers`);
            console.log('---------------------------');
        });
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
