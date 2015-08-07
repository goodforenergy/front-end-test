'use strict';

var gulp = require('gulp'),
	rimraf = require('rimraf'),
	uglify = require('gulp-uglify'),
	argv = require('yargs').argv,
	gulpif = require('gulp-if'),
	jshint = require('gulp-jshint'),
	gulpif = require('gulp-if'),
	minifyCSS = require('gulp-minify-css'),
	prefix = require('gulp-autoprefixer'),
	pixrem = require('gulp-pixrem'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver'),

	destRoot = './build';

gulp.task('build', ['html', 'fonts', 'js', 'libjs', 'css', 'libcss']);

gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest(destRoot));
});

gulp.task('fonts', function() {
	return gulp.src('src/lib/fonts/**')
		.pipe(gulp.dest(destRoot + '/fonts'));
});

gulp.task('js', function() {
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(gulpif(argv.prod, uglify()))
		.pipe(gulp.dest(destRoot + '/js'));
});

gulp.task('libjs', function() {
	return gulp.src('src/lib/*.js')
		.pipe(gulp.dest(destRoot + '/js'));
});

gulp.task('css', function() {
	return gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(prefix('last 2 versions', 'ie 9'))
		.pipe(gulpif(argv.prod, minifyCSS()))
		.pipe(pixrem())
		.pipe(gulp.dest(destRoot + '/css'));
});

gulp.task('libcss', function() {
	return gulp.src('src/lib/*.css')
		.pipe(gulp.dest(destRoot + '/css'));
});

gulp.task('clean', function(cb) {
	rimraf(destRoot, cb);
});

gulp.task('serve', ['build'], function() {
	gulp.src(destRoot)
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('watch', ['serve'], function() {
	gulp.watch('src/**/*.scss', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/*.html', ['html']);
});
