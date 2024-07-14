const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] }
  ];
  
  function countLanguages(countries) {
    const languageSet = new Set();
    
    countries.forEach(country => {
      country.languages.forEach(language => {
        languageSet.add(language);
      });
    });
    
    return languageSet.size;
  }
  
  const languageCount = countLanguages(countries);
  console.log("Number of languages in countries:", languageCount); 

  
  function mostSpokenLanguages(countries, n) {
    const languageMap = new Map();
    
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageMap.has(language)) {
          languageMap.set(language, languageMap.get(language) + 1);
        } else {
          languageMap.set(language, 1);
        }
      });
    });
    
    const sortedLanguages = [...languageMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(entry => {
        const obj = {};
        obj[entry[0]] = entry[1];
        return obj;
      });
    
    return sortedLanguages;
  }
  
  // Test cases
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  