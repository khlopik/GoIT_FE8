'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	cssmin = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	rimraf = require('rimraf'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var path = {
	dist: {	//Куда складываем файлы после сборки
		html: 'dist/',
		js: 'dist/js/',
		css: 'dist/css/',
		img: 'dist/img/',
		fonts: 'dist/fonts',
	},
	src: { // Пути, где лежат исходники
		html: 'src/*.html',
		js: 'src/js/script.js',
		css: 'src/css/style.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: { // За изменениями каких файлов нужно следить
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		css: 'src/css/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './dist'
};

var config = {
	server: {
		baseDir: './dist'
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: 'Frontend_Devil'
};



gulp.task('html:build', function(e) {
	return gulp.src(path.src.html)
				.pipe(rigger())
				.pipe(gulp.dest(path.dist.html))
				.pipe(reload({stream: true}));
});

gulp.task('js:build', function() {
	return gulp.src(path.src.js)
				.pipe(rigger())
				.pipe(sourcemaps.init())
				.pipe(uglify())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.dist.js))
				.pipe(reload({stream: true}));
});

gulp.task('css:build', function() {
	return gulp.src(path.src.css)
				.pipe(sourcemaps.init())
				.pipe(sass())
				.pipe(prefixer())
				.pipe(cssmin())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.dist.css))
				.pipe(reload({stream: true}));
});

gulp.task('image:build', function() {
	return gulp.src(path.src.img)
				.pipe(imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()],
					interlaced: true
				}))
				.pipe(gulp.dest(path.dist.img))
				.pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
	return gulp.src(path.src.fonts)
				.pipe(gulp.dest(path.dist.fonts));
});

gulp.task('build', [
	'html:build',
	'js:build',
	'css:build',
	'fonts:build',
	'image:build'
]);

gulp.task('watch', function() {
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});

	watch([path.watch.css], function(event, cb) {
		gulp.start('css:build');
	});

	watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});

	watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});

	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
});

gulp.task('webserver', function() {
	return browserSync(config);
});

gulp.task('clean', function(cb) {
	rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);