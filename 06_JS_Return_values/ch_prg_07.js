getPlayerName = function (playerName) {
    var prefix = "==== ";
    var suffix = " ====";
    return prefix + playerName + suffix;
};

console.log(getPlayerName("Kiki"));    // Output: ==== Kiki ====
console.log(getPlayerName("Mahesha")); // Output: ==== Mahesha ====

getPlayerName = function (playerName) {
    var border = "|";
    var prefix = " ";
    var suffix = " ";
    return border + "\n" + border + prefix + playerName + suffix + "\n" + border;
};

console.log(getPlayerName("Jahver"));
// Output:
// |
// | Jahver
// |
