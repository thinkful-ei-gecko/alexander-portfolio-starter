/* eslint-disable strict */

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create();

sass.compiler = require('sass');

var paths = {
  styles: {
    src:'src/styles/scss/**/*.scss',
    dest: 'src/styles/css'
  }
};

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe (sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch('src/*.html').on('change', browserSync.reload);
}

exports.watch = watch;

exports.style = style;

const build = gulp.parallel(style, watch);

gulp.task('default', build);