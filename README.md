> A Timer class to help with debugging long functions

## Usage

```js
const TimerLite = require( 'timer-lite' );

let debugTimer = new TimerLite();

debugTimer.startTime // outputs, in epoch time, when the timer started

debugTimer.events;
//=> []

debugTimer.addEvent( 'title' );
debugTimer.addEvent( 'another title', { 'whatever' : 'you would like' } );
debugTimer.events;
//=> [ { 'title' : 'title' }, { 'title' : 'another title', 'optionalData' : { 'whatever' : 'you would like' } } ]

debugTimer.showEvents() // Will output the events, and the time between the event and the previous event.
```

## License

MIT © [Matthew Young]( mashu.daishi@gmail.com )
