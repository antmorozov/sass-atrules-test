var gulp = require('gulp');
var sassLs = require('gulp-sass');
var sassRuby = require('gulp-ruby-sass');
var gutil = require('gulp-util');

gulp.task('sass-ruby', function() {
    return sassRuby('test.scss')
        .on('error', function(err) {
            gutil.log('Error!', err.message);
            process.exit(1);
        })
        .pipe(gulp.dest('dist/ruby/'));
});

gulp.task('sass-libsass', function() {
    return gulp.src('test.scss')
        .pipe(sassLs().on('error', sassLs.logError))
        .pipe(gulp.dest('dist/libsass/'));
});

gulp.task('default', ['sass-libsass', 'sass-ruby']);
