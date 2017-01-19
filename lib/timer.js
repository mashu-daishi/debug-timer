let event = require( './event' );

let timer = function() {
	this.startTime = new Date().getTime();

	this.events = [];

	this.addEvent = function( name, data ) {
		thisObject = this;

		thisObject.events.push( new event( this, name, data ) );
	}

	this.showEvents = function() {
		let previousTime = this.startTime;

		console.log( 'Showing Timer Events' );

		this.events.forEach( function ( value, index ) {
			console.log( '   ', index, '-', value.title );
			console.log( '      ', value.time, '-', value.time - previousTime );
			if ( value.data ) {
				console.log( '      ', value.data );
			}

			previousTime = value.time;
		} );
	}
}

module.exports = timer;
