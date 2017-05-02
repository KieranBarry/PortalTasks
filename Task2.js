function calEvent(name, startDate, endDate) {
	this.name = name;
	this.startDate = new Date(startDate);
	this.endDate = new Date(endDate);
}

var interview = new calEvent('Interview at The Portal', 'Feb 24, 2017 15:00', 'Feb 24, 2017 16:30');
var lunch = new calEvent('Lunch with Cindy', 'Feb 25, 2017 12:00', 'Feb 25, 2017 1:00');
var dinner = new calEvent('Dinner with John', 'Feb 24, 2017 17:00', 'Feb 24, 2017 17:30');
var conference = new calEvent('Conference', 'Feb 24, 2017 11:00', 'Feb 24, 2017 17:30');
var outside = new calEvent('Be Outside', 'Feb 26, 2017 12:00', 'Feb 26, 2017 13:30');
var work = new calEvent('Work Work Work', 'Feb 26, 2017 13:00', 'Feb 26, 2017 16:30');
var random = new calEvent('Do Something Random', 'Feb 27, 2017 15:00', 'Feb 27, 2017 16:30');
var coffee = new calEvent('Be Caffeinated', 'Feb 27, 2017 8:00', 'Feb 27, 2017 20:00');

var allEvents = [interview, lunch, dinner, conference, outside, work, random, coffee];

var checkForConflicts = function(event) {
	var conflicts = [];
	console.log("checking");
	for (var i in allEvents) {
		for (var j = Number(i)+1; j < allEvents.length; j++) {
			if (allEvents[i].startDate.getDate() === allEvents[j].getDate()){
				if ((allEvents[i].startDate < allEvents[j].endDate) && (allEvents[i].endDate > allEvents[j].startDate)) {
					if (!conflicts.includes(allEvents[i])) {
						conflicts.push(allEvents[i]);
					}
					if (!conflicts.includes(allEvents[j])) {
						conflicts.push(allEvents[j]);
					}
				}
			}
		}
	}
	for (var i in conflicts) {
		console.log(conflicts[i]);
	}

};


window.onload = function(e) {
	document.getElementById('task2-button').addEventListener('click', checkForConflicts);
};
