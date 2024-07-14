const countriesAPI = 'https://restcountries.com/v2/all';

const fetchCountriesAndCountLanguages = async () => {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Failed to fetch countries data');
        }
        const countries = await response.json();

        // Use a Set to store unique official languages
        const officialLanguages = new Set();

        // Iterate through each country and add its official languages to the Set
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (language.official) {
                    officialLanguages.add(language.name);
                }
            });
        });

        console.log(`Total number of official languages in the world: ${officialLanguages.size}`);

        return officialLanguages.size;

    } catch (error) {
        console.error('Error fetching countries data:', error);
        return 0;
    }
};

// Call the function to fetch countries data and count official languages
fetchCountriesAndCountLanguages();
