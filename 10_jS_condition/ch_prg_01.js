var secret = 8;

var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  }
};


guess(5);  
guess(10); 
guess(8);  
