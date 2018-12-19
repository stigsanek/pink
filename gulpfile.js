var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var del = require("del");
var run = require("run-sequence");
var uglify = require("gulp-uglify");


gulp.task("style", function () {
  gulp.src("src/sass/style.scss")
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
]))
    .pipe(gulp.dest("src/img"));
});

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("src/img"));
});

gulp.task("copy", function () {
  return gulp.src([
      "src/fonts/**/*.{woff,woff2}",
      "src/**/*.html",
      "src/img/**"
    ], {
      base: "src"
})
    .pipe(gulp.dest("build"));
});

gulp.task("copy-js", function () {
  return gulp.src("src/js/*.js", {base: "src"})
    .pipe(gulp.dest("build"))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "copy-js",
    "style",
    done
); });

gulp.task("serve", function () {
  server.init({
    server: "build/"
  });

  gulp.watch("src/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("src/*.html", ["style"]);
  gulp.watch("src/*.js", ["style"]);
});
