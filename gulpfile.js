"use strict";

let gulp = require("gulp");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let pump = require("pump");
let sass = require("gulp-ruby-sass");

gulp.task("sass", function() {
  return sass("app/style/*.scss")
    .pipe(gulp.dest("app/style/"))
    .pipe(reload({ stream: true }));
});

gulp.task("concat", function() {
  return gulp
    .src("app/js/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("app/js"));
});

gulp.task("minify", function(cb) {
  pump([gulp.src("app/js/main.js"), uglify(), gulp.dest("dist/js/")], cb);
});
