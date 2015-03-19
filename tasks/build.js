var gulp = require('gulp');
var concat = require('gulp-concat');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('build-highlight', function () {
  return gulp.src('dist/public/index.html')
    .pipe(plugins.highlight())
    .pipe(gulp.dest('dist/public'));
});

gulp.task('build-all', function(cb) {
  runSequence('build-scripts', 'build', 'build-highlight', cb);
});

gulp.task('build-scripts', ['aui:build:globals'], function() {
  return gulp.src(['node_modules/closure-templates/soyutils.js', 'dist/public/scripts/!(*.soy).js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/public/scripts'));
});
