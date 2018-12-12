const Event = require( './Event' );

function uuid (a) {
    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

const Timer = function() {
	this.id = uuid();

	this.startTime = new Date().getTime();

	this.events = [];

	this.addEvent = function( name, data ) {
		thisObject = this;

		thisObject.events.push( new Event( this, name, data ) );
	}
};

Timer.prototype.addEvent = function () {
	this.events.push( new Event( this, name, data ) );
};

Timer.prototype.showEvents = function () {
	let previousTime = this.startTime;

	console.log( 'Showing Timer Events' );

	this.events.forEach( function ( value, index ) {
		console.log( `    Event index: ${ index } - Event Title: ${ value.title }` );
		console.log( `      ${ value.time - previousTime }` );

		if ( value.data ) {
			console.log( `      ${value.data}` );
		}

		previousTime = value.time;
	} );
};

module.exports = Timer;
