var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var del = require("del");
var run = require("run-sequence");


gulp.task("style", function() {
  return gulp.src("src/sass/style.scss")
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("src/css"))
    .pipe(minify())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("src/css"));
});

gulp.task("serve", function() {
    server.init({
      server: "src/"
    });

  gulp.watch("src/sass/**/*.scss", ["style"])
    .on("change", server.reload);
});
