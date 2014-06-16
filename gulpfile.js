var gulp = require('gulp');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');

var nib = require('nib');
var rupture = require('rupture');

gulp.task('styles', function () {
  return gulp.src('./stylesheets/iwnet.styl')
    .pipe(stylus({use: [nib(), rupture()]}))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./stylesheets/**/*.styl', ['styles']);
});

gulp.task('default', ['styles', 'watch']);