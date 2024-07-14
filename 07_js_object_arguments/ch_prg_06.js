var emptyBox = function (width) {
    width = Math.max(0, width);
    width = Math.min(40, width);
    
    var topBottom = "=".repeat(width);
    var middle = "=" + spaces(width - 2) + "=";

    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};



emptyBox(12);


