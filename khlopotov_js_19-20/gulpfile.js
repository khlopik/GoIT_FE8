var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	spritesmith = require('gulp.spritesmith'),
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
		scss: 'src/scss/style.scss',
		img: 'src/img/*.*',
		sprites: 'src/img/sprites/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: { // За изменениями каких файлов нужно следить
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		scss: 'src/scss/**/*.scss',
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
				.pipe(gulp.dest(path.dist.html))
				.pipe(reload({stream: true}));
});

gulp.task('js:build', function() {
	return gulp.src(path.src.js)
				.pipe(babel({
					presets: ['es2015']
				}))
				.pipe(gulp.dest(path.dist.js))
				.pipe(reload({stream: true}));
});

gulp.task('scss:build', function() {
	return gulp.src(path.src.scss)
				.pipe(sass())
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

gulp.task('sprite:build', function() {
    var spriteData = gulp.src(path.src.sprites) // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }));

    spriteData.img.pipe(gulp.dest(path.dist.img)); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(path.dist.css)); // путь, куда сохраняем стили
});

gulp.task('fonts:build', function() {
	return gulp.src(path.src.fonts)
				.pipe(gulp.dest(path.dist.fonts));
});

gulp.task('build', [
	'html:build',
	'js:build',
	'scss:build',
	'fonts:build',
	'image:build',
	'sprite:build'
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