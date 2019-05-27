const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    file = require('gulp-file'),
    process = require('process'),
    inject = require('gulp-inject-string');

function serve() {
    return connect.server({
        root: './app',
        livereload: true
    })
}

function create() {
    let nameFormated = process.argv[4].charAt(0).toUpperCase() + process.argv[4].slice(1),
        controllerTmp = `(function(){\n     'use strict';\n     \n     angular\n         .module('app.${process.argv[4]}')\n         .controller('${nameFormated}Controller', ${nameFormated}Controller);\n         \n     ${nameFormated}Controller.$inject = [];\n     \n     /* @ngInject */\n     \n     function ${nameFormated}Controller(){\n         const vm = this;\n     }\n })();`,
        moduleTmp = `(function() {\n    'use strict';\n\n    angular.module('app.${process.argv[4]}', [\n    ]);\n})();`,
        routeTmp = `(function () {\n    angular\n        .module('app.${process.argv[4]}')\n        .config(${nameFormated}Route);\n\n    ${nameFormated}Route.$inject = ['$stateProvider'];\n\n    function ${nameFormated}Route($stateProvider) {\n        $stateProvider.state('${process.argv[4]}', {\n            url: '/${process.argv[4]}',\n            templateUrl: "app/${process.argv[4]}/${process.argv[4]}.tmp.html",\n            controller: '${nameFormated}Controller',\n            controllerAs: 'vm'\n        })\n    }\n})();`,
        emptyTmp = ``;

    addModule(process.argv[4]);
    addIndex(process.argv[4]);

    return file(`${process.argv[4]}.controller.js`, controllerTmp)
        .pipe(file(`${process.argv[4]}.module.js`, moduleTmp))
        .pipe(file(`${process.argv[4]}.route.js`, routeTmp))
        .pipe(file(`${process.argv[4]}.tmp.html`, emptyTmp))
        .pipe(file(`${process.argv[4]}.scss`, emptyTmp))
        .pipe(file(`${process.argv[4]}.css`, emptyTmp))
         .pipe(gulp.dest(`./app/${process.argv[4]}`))
}

function addIndex(name) {
    let importsScriptsTmp = `\n    <script src="./app/${name}/${name}.module.js"></script>\n    <script src="./app/${name}/${name}.controller.js"></script>\n    <script src="./app/${name}/${name}.route.js"></script>\n`,
        importsLinks = `\n    <link rel="stylesheet" href="./app/${name}/${name}.css">`;
    return gulp.src('./app/index.html')
        .pipe(inject.after('<!--ImportsModule-->', importsScriptsTmp))
        .pipe(inject.after('<!--ImportsCss-->', importsLinks))
        .pipe(gulp.dest('./app'));
}

function addModule(name) {
    return gulp.src('./app/app.module.js')
        .pipe(inject.after('//NewModule', `\n        'app.${name}',\n`))
        .pipe(gulp.dest('./app'));
    
}

function reloadServe() {
    return gulp.src('./app/index.html')
        .pipe(connect.reload());
}

function html() {
    return gulp.src(['./app/**/*.html', './app/*.js'])
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
}

function css() {
    return gulp.src(['./app/**/*.scss', './app/*.scss', '!./app/style/*', '!./app/style/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
}

function js() {
    return gulp.src(['./app/**/*.js', './app/*.js'], { sourcemaps: true })
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./prod/js', { sourcemaps: true }))
}

function run() {
    serve();
    gulp.watch(['./app/**/*.scss', './app/*.scss'], gulp.series('css'));
    gulp.watch(['./app/**/*.js', './app/*.js'], gulp.series('reloadServe'));
    gulp.watch(['./app/**/*.html','./*.html', './app/*.html'], gulp.series('reloadServe'));
}

exports.serve = serve;
exports.reloadServe = reloadServe;
exports.addIndex = addIndex;
exports.addModule = addModule;
exports.html = html;
exports.js = js;
exports.css = css;
exports.run = run;
exports.create = create;
// exports.default = parallel(css, js);