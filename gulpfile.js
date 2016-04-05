var gulp     = require("gulp");
gutil        = require("gulp-util");
connect      = require("gulp-connect");
concat       = require("gulp-concat");
sass         = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
plumber      = require("gulp-plumber");
imagemin     = require("gulp-imagemin");
pngquant     = require('imagemin-pngquant');

// error alert
var onError = function (err) {
	gutil.beep();
	console.log(err);
};

// update
gulp.task("update", function() {
	gulp.src("build/*.html")
	.pipe(plumber({errorHandler: onError}))
	.pipe(gulp.dest("./"))
});

// sass
gulp.task("sass", function() {
	gulp.src("build/sass/**/*.scss")
	.pipe(plumber({errorHandler: onError}))
	.pipe(autoprefixer(
		"> 1%",
		"last 3 version",
		"safari >= 5",
		"ie >= 8",
		"ie_mob >= 10",
		"opera 12.1",
		"ios >= 6",
		"android >= 4",
		"ff >= 30",
		"Firefox ESR",
		"bb >= 10"))
	.pipe(sass())
	.pipe(concat ("site.css"))
	.pipe(gulp.dest("build/sass/vendor/"))
});

// concat css
gulp.task("concat", function() {
	gulp.src(["build/sass/vendor/site.css"])
	.pipe(plumber({errorHandler: onError}))
	.pipe(concat("site.css"))
	.pipe(gulp.dest("./"))
});

// js
gulp.task("js", function() {
	gulp.src(["build/js/vendor/jquery-1.11.3.js", "build/js/scripts.js"])
	.pipe(plumber({errorHandler: onError}))
	.pipe(concat("site.js"))
	.pipe(gulp.dest("./"))
});

// connect
gulp.task('connect', function() {
	connect.server();
});

// img-compress
gulp.task("img-compress", function() {
	gulp.src("build/image/*")
	.pipe(imagemin({
		progressive: true,
		use: [pngquant()]}))
	.pipe(gulp.dest("./img/"));
});

//watch
gulp.task("watch", function() {
	gulp.watch("build/*.html", 		      ["update"]);
	gulp.watch("build/sass/**/*.scss",    ["sass"]);
	gulp.watch("build/sass/vendor/*.css", ["concat"]);
	gulp.watch("build/js/**/*.js",        ["js"]);
	gulp.watch("build/image/*",           ["img-compress"]);
});

gulp.task("default", ["img-compress", "watch", "sass", "js", "concat", "connect"]);


