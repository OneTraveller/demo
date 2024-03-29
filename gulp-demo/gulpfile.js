const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('js', () => {
  return gulp
    .src(['./src/js/**/*.js'])
    //.pipe(concat('bundle.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('default', ['js']);
