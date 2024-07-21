const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
};

function imagens() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/imagemin'));
};



exports.default = gulp.series(styles, imagens);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
};
