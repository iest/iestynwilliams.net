var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var fs = require('fs');

var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');

gulp.task('styles', function() {
  return gulp.src('./stylesheets/iwnet.styl')
    .pipe(stylus({
      use: [nib(), rupture(), jeet()]
    }))
    .pipe(gulp.dest('./public/css'));
    // .pipe(livereload());
});

gulp.task('build', function() {
  return browserify("./client")
    .require("react-simple-router")
    .require("react")
    .bundle()
    .on("end", function() {
      // Livereload here
    })
    .pipe(fs.createWriteStream("./public/bundle.js"));
});

gulp.task('watch', function() {
  gulp.watch(['./stylesheets/**/*.styl', './views/**/*.jade'], ['styles']);
  gulp.watch('./client/**/*.js', ['build']);
});

gulp.task('default', ['styles', 'build', 'watch']);