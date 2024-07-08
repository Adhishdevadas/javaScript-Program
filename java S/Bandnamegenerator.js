function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function generateBandName() {
    const adjectives = ["Electric", "Blue", "Dark", "Mystic", "Silent", "Raging", "Neon", "Cosmic"];
    const nouns = ["Waves", "Dreams", "Eagles", "Phantoms", "Rebels", "Storm", "Fire", "Riders"];
  
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
  
    return `${adjective} ${noun}`;
  }
  

  console.log(generateBandName());
  console.log(generateBandName());
  console.log(generateBandName());
  