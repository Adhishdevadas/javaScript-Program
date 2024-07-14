var getGuesser = function (range, offset) {
    var secret = Math.floor(Math.random() * range) + offset;
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      }
      
      var message = (userNumber > secret) ? "Too high!" : "Too low!";
      return message;
    };
  };
  
  var guess = getGuesser(20, 10); 
  

  var getGuesser = function (range) {
    var secret = Math.floor(Math.random() * range + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      }
      
      var message = (userNumber > secret) ? "Too high!" : "Too low!";
      return message;
    };
  };
  
  var guess = getGuesser(10); // Example with range 10
  