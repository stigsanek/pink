var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var del = require("del");
var run = require("run-sequence");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");


gulp.task("style", function() {
  return gulp.src("src/sass/style.scss")
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()

]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    "src/js/**",
    "src/*.html"
  ], {
    base: "src"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "webp",
    "images",
    "style",
    done
  );
});

gulp.task("serve", function() {
    server.init({
      server: "src/"
    });

  gulp.watch("src/sass/**/*.scss", ["style"])
    .on("change", server.reload);
  gulp.watch("src/*.html", ["build"])
    .on("change", server.reload);
  gulp.watch("src/img/**", ["build"])
    .on("change", server.reload);
  gulp.watch("src/js/**", ["build"])
    .on("change", server.reload);
});
