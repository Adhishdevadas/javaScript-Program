var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var eventString = [
            this.title + ":",
            this.startDate,
            "-",
            "(" + this.startTime + " - " + this.endTime + ")"
        ].join(" ");
      
        console.log(eventString);
    };
};

// Testing the updated CalendarEvent

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent.showEvent();

var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/8/16",
    "10.00am",
    "11.00am"
);

calEvent2.showEvent();
