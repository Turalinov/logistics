const gulp = require("gulp");
const rev = require("gulp-rev");

module.exports = function hash() {
  return gulp.src(['docs/css/*.css', 'docs/js/*.js'], { base: 'src' })
    .pipe(gulp.dest('./docs/'))
    .pipe(rev())
    .pipe(gulp.dest('./docs/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./docs/'))
}
