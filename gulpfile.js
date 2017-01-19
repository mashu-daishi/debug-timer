const gulp = require('gulp');
const mocha = require('gulp-mocha');

let mochaOptions = {
	'ui'       : 'bdd',
	'reporter' : 'spec',
	'timeout'  : 5000
};

gulp.task( 'test', () =>
    gulp.src( 'test/**/*.js', { read: false } )
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe( mocha( mochaOptions ) )
);
