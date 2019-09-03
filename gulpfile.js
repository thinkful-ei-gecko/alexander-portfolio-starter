/* eslint-disable strict */
// Based on: https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

const sassSrc = './styles/scss';
const cssSrc = './styles/css';

gulp.task('sass', function() {
  return gulp.src(sassSrc)
    .pipe(sass())
    .pipe(gulp.dest(cssSrc))
    .pipe(browserSync.reload({
      stream:true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });
});

gulp.task('watch', gulp.series('browserSync', 'sass', function(cb) {
  gulp.watch(sassSrc, gulp.series('sass'));
  cb();
}));