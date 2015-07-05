/* jslint node: true */
var
	gulp        = require('gulp'),
	gutil       = require('gulp-util'),
	prefix      = require('gulp-autoprefixer'),
	rename      = require('gulp-rename'),
	sass        = require('gulp-sass'),
	sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function() {
	gulp.src('scss/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true,
			style: 'compressed'
		}))
		.pipe(prefix('last 2 versions'))
		.pipe(sourcemaps.write())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);