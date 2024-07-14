const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCats = async () => {
    try {
        const response = await fetch(catsAPI);
        if (!response.ok) {
            throw new Error('Failed to fetch cat data');
        }
        const cats = await response.json();
      
        const catNames = cats.map(cat => cat.name);
       
        console.log('Cat Names:', catNames);
 
        return catNames;
        
    } catch (error) {
        console.error('Error fetching cat data:', error);
        return []; 
    }
};

fetchCats();
