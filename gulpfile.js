var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return sass('./src/scss/', { sourcemap: false, style: 'compressed' })
  .on('error', function(err) {
    console.log(err.message);
  })
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./www/css'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
  return gulp.src(['./src/js/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./www/js/'));
});

gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: 'www'
    }
  });
  gulp.start('sass');
  gulp.start('js');
  gulp.watch('./www/index.html').on('change', browserSync.reload);
});

gulp.watch(['./src/js/*.js'], function() {
  gulp.start('js');
});

gulp.watch('./src/scss/**/*.scss', function() {
  gulp.start('sass');
});