const Event = function( timer, title, data ) {
	this.time = new Date().getTime();
	this.title = title;
	this.optionalData = data;
	this.timeFromStart = this.time - timer.startTime;
}

module.exports = Event;
