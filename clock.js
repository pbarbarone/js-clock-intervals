// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360




var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");


var secondDegrees = 6;
var minuteDegrees = 6;
var hourDegrees = 30;

var startLocation = 0;


var minuteInterval = function() {
	startLocation += minuteDegrees;
	minuteHand.style.transform = "rotate(" + startLocation + "deg)";

};
var secondInterval = function() {

	startLocation += secondDegrees;
	secondHand.style.transform = "rotate(" + startLocation+ "deg)";

};
var hourInterval = function(){
	startLocation += hourDegrees;
	hourHand.style.transform = "rotate(" + startLocation + "deg)";
};

setInterval(secondInterval, 1000);
setInterval(minuteInterval, 60000);
setInterval(hourInterval, 3600000);





