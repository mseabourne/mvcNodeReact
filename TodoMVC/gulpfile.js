var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('transpile', function () {
	return gulp.src('Scripts/app.jsx')
		.pipe(babel({ presets: ['react'] }))
		.pipe(gulp.dest('Scripts/'))
});

gulp.task('bundle', ['transpile'], function(){
	return browserify('Scripts/client.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('Scripts/'))
});