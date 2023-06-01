const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js') // aqui eu seleciono os arquivos fontes
        .pipe(uglify()) // aqui eu minifico eles
        .pipe(obfuscate()) // aqui eu deixo eles ilegiveis/mascaro os arquivos
        .pipe(gulp.dest('./build/scripts')) //aqui eu passo eles minificados para o arquivo final
}

function compilaSass(){
    
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./soruce/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}

exports.javascript = comprimeJavaScript;