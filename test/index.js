'use strict';

require( 'should' );

let timer = require( '../index' );

describe( 'Timer', () => {
	describe( 'Basic', () => {
		let timerPrime, timerDelta;

		before( function ( done ) {
			timerPrime = new timer();

			setTimeout(function () {
		        timerDelta = new timer();
		        done();
		    }, 100);
		} );

		it( '-- should be a function', () => {
			timerPrime.should.be.a.function;
			timerPrime.should.have.property( 'startTime' );
			timerPrime.should.have.property( 'events' );
			timerPrime.should.have.property( 'addEvent' );
			timerPrime.should.have.property( 'showEvents' );
		} );

		it( '-- should have different startTimes', () => {
			timerDelta.should.have.property( 'startTime' );
			timerDelta.startTime.should.not.equal( timerPrime.startTime );
		} );
	} );

	describe( 'Events', () => {
		let testTimer, optionalData;

		optionalData = { 'key' : 'value' };

		before( function ( done ) {
			testTimer = new timer();

			setTimeout(function () {
		        testTimer.addEvent( 'This is the first event' )

		        setTimeout(function () {
			        testTimer.addEvent( 'This is the first event', { 'key' : 'value' } );
			        done();
			    }, 100);
		    }, 100);
		} );

		it( '-- should add events', () => {
			testTimer.events.should.be.an.array;
			testTimer.events.length.should.equal( 2 );

			it( '-- should populate data', () => {
				it( '-- No optionalData', () => {
					testTimer.events[ 0 ].should.be.an.object;
					testTimer.events[ 0 ].should.have.property( 'time' );
					testTimer.events[ 0 ].should.have.property( 'title' );
					testTimer.events[ 0 ].should.have.property( 'timeFromStart' );
					testTimer.events[ 0 ].should.not.have.property( 'optionalData' );
				} );

				it( '-- optionalData', () => {
					testTimer.events[ 1 ].should.be.an.object;
					testTimer.events[ 1 ].should.have.property( 'time' );
					testTimer.events[ 1 ].should.have.property( 'title' );
					testTimer.events[ 1 ].should.have.property( 'timeFromStart' );
					testTimer.events[ 1 ].should.have.property( 'optionalData' ).and.equal( optionalData );
				} );
			} );
		} );
	} );
} );
