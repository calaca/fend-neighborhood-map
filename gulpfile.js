var gulp         = require('gulp');
var clean        = require('gulp-clean');
var uglify       = require('gulp-uglify');
var cssmin       = require('gulp-cssmin');
var usemin       = require('gulp-usemin');
var browserSync  = require('browser-sync');
var jshint       = require('gulp-jshint');
var stylish      = require('jshint-stylish');
var csslint      = require('gulp-csslint');
var autoprefixer = require('gulp-autoprefixer');

csslint.addFormatter('csslint-stylish');

gulp.task('default', ['copy'], function() {
  gulp.start('usemin');
});

gulp.task('copy', ['clean'], function() {
  return gulp.src('src/**/*')
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist').pipe(clean());
});

gulp.task('usemin', function() {
  gulp.src('dist/**/*.html')
      .pipe(usemin({
        'js': [uglify],
        'css': [autoprefixer, cssmin]
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './src',
      routes : {
        '/node_modules/': 'node_modules'
      }
    }
  });

  gulp.watch('src/js/**/*.js').on('change', function(event) {
    gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
  });

  gulp.watch('src/css/**/*.css').on('change', function(event) {
    gulp.src(event.path)
        .pipe(csslint())
        .pipe(csslint.formatter('stylish'));
  });

  gulp.watch('src/**/*').on('change', browserSync.reload);
});
