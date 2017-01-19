> A Timer class to help with debugging long functions

## Usage

```js
const TimerLite = require( 'timer-lite' );

let debugTimer = new TimerLite();

debugTimer.startTime = //epoch time

debugTimer.events;
//=> []

debugTimer.addEvent( 'title' );
debugTimer.addEvent( 'another title', { 'whatever' : 'you would like' } );
debugTimer.events;
//=> [ { 'title' : 'title' }, { 'title' : 'another title', 'optionalData' : { 'whatever' : 'you would like' } } ]
```

## License

MIT © [Matthew Young]( mashu.daishi@gmail.com )
