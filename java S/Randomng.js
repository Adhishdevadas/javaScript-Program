function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomNumber(30, 40)); 
  console.log(getRandomNumber(90, 100)); 
  console.log(getRandomNumber(-10, 10)); 
  