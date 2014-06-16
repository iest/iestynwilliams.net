var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles', function () {
  return gulp.src('./css/one.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./stylesheets/**/*.styl', ['styles']);
});

gulp.task('default', ['styles', 'watch']);