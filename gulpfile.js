const { src, dest, parallel, series, watch } = require("gulp");
const gcmq = require("gulp-group-css-media-queries");

const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
sass.compiler = require("node-sass");

const gulp = require("gulp");
function testTask() {
  return gulp.src("./src/script.js").pipe(gulp.dest("./src/build"));
}

const styles = () => {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass())
    .pipe(gcmq())
    .pipe(gulp.dest("./src/build"));
};
exports.default = styles;
