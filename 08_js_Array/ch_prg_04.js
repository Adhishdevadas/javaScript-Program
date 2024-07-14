

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] );     
console.log( days[dayInWeek - 1] ); 


dayInWeek = 2;
console.log( days[dayInWeek] );     
console.log( days[dayInWeek - 1] ); 


var getDay = function(dayIndex) {
    return days[dayIndex];
};


console.log( getDay(4) ); 
