

var getVisitorReport = function(visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report); 




var fridayReport = getVisitorReport(visitors, 5);
console.log(fridayReport); 


var getVisitorReportExtended = function(visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};


var getVisitorReportForDay = function(monthArray, weekIndex, dayIndex) {
  return getVisitorReportExtended(monthArray[weekIndex], dayIndex);
};


var week1 = [354, 132, 210, 221, 481, 312, 279];
var week2 = [400, 180, 300, 250, 500, 350, 400];
var week3 = [300, 150, 280, 200, 450, 280, 300];
var week4 = [380, 160, 270, 230, 480, 320, 350];

var monthArray = [week1, week2, week3, week4];


var reportWeek2Wednesday = getVisitorReportForDay(monthArray, 1, 3); 
console.log(reportWeek2Wednesday); 
