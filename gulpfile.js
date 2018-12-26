var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var nested = require('postcss-nested');
// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

})

// Default task
gulp.task('default', ['vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});


gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch('./*.html', function() {
    browserSync.reload();
  });

  watch('./css/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('styles', function() {
  return gulp.src('./css/style.css')
    .pipe(postcss([nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./css/temp/styles'));
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./css/temp/styles.css')
    .pipe(browserSync.stream());
});