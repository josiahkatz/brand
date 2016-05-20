var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src("lib/scss/**/*.*")
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('lib/css'))
});

gulp.task('default', ['sass'], function () {
    gulp.watch("lib/scss/**/*.*", ['sass']);
});
