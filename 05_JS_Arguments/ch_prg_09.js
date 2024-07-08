var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo = playerName + ": health " + playerHealth + ".";
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.


showPlayerHealth("John", 65);  
showPlayerHealth("Jane", 30);  
