var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber < secret) {
        return "Too low!";
      } else {
        return "Too high!";
      }
    };
  };
  



var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber < secret) {
        return "Too low!";
      } else {
        return "Too high!";
      }
    };
  };
  
  var guess = getGuesser();
  
  // Testing the function
  console.log(guess(5));  // Example output: "Too low!"
  console.log(guess(8));  // Example output: "Well done!"
  console.log(guess(10)); // Example output: "Too high!"
  