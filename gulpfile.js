const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    file = require('gulp-file'),
    process = require('process');

function serve() {
    return connect.server({
        root: 'app',
        livereload: true
    })
}

function createModule() {
    let nameFormated = process.argv[4].charAt(0).toUpperCase() + process.argv[4].slice(1),
        controllerTmp = `(function(){\n     'use strict';\n     \n     angular\n         .module('app.${process.argv[4]}')\n         .controller('${nameFormated}Controller', ${nameFormated}Controller);\n         \n     ${nameFormated}Controller.$inject = [];\n     \n     /* @ngInject */\n     \n     function ${nameFormated}Controller(){\n         const vm = this;\n     }\n });`,
        moduleTmp = `(function() {\n    'use strict';\n\n    angular.module('app.${process.argv[4]}', [\n    ]);\n})();`,
        routeTmp = `(function () {\n    angular\n        .module('app.${process.argv[4]}')\n        .config(${nameFormated}Route);\n\n    ${nameFormated}Route.$inject = ['$stateProvider'];\n\n    function ${nameFormated}Route($stateProvider) {\n        $stateProvider.state('${process.argv[4]}', {\n            url: '/${process.argv[4]}',\n            templateUrl: "modules/${process.argv[4]}/${process.argv[4]}.tmp.html",\n            controller: '${nameFormated}Controller',\n            controllerAs: 'vm'\n        })\n    }\n})();`,
        htmlTmp = ``;

    return file(`${process.argv[4]}.controller.js`, controllerTmp)
        .pipe(file(`${process.argv[4]}.module.js`, moduleTmp))
        .pipe(file(`${process.argv[4]}.route.js`, routeTmp))
        .pipe(file(`${process.argv[4]}.tmp.html`, htmlTmp))
         .pipe(gulp.dest(`./app/${process.argv[4]}`))
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
exports.createModule = createModule;
// exports.default = parallel(css, js);