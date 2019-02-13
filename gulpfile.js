var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

sass.compiler = require('node-sass');
var reload = browserSync.reload;
var exec = require('child_process').exec;


gulp.task('sass', function () {
    return gulp.src('./static/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./static/css/'))
        .pipe(livereload());
});
// Uglify javascript
gulp.task('scripts', function () {
    gulp.src('./static/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'))
});

// Run Flask server
gulp.task('runserver', function () {
    var proc = exec('python flaskblog.py');
});

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['runserver'], function () {
    livereload.listen();
    browserSync({
        notify: false,
        proxy: "127.0.0.1:5000"
    });
    gulp.watch(['templates/*.*'], reload);
    gulp.watch('./static/sass/**/*.scss', ['sass'], reload);

});