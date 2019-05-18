const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

function serve() {
    return connect.server({
        root: 'app',
        livereload: true
    })
}

function reloadServe() {
    return gulp.src('./app/index.html')
        .pipe(connect.reload());
}

function html() {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
}

function css() {
    return gulp.src('./app/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
}

function js() {
    return gulp.src('./app/**/*.js', { sourcemaps: true })
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./prod/js', { sourcemaps: true }))
}

function watcher() {
    serve();
    gulp.watch('./app/**/*.scss', gulp.series('css'));
    gulp.watch('./app/**/*.js', gulp.series('reloadServe'));
    gulp.watch('./app/**/*.html', gulp.series('reloadServe'));
}

exports.serve = serve;
exports.reloadServe = reloadServe;
exports.html = html;
exports.js = js;
exports.css = css;
exports.watcher = watcher;
// exports.default = parallel(css, js);