var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');


gulp.task('clean', function () {
    gulp.src('dist').pipe(clean());
});

gulp.task('copy', function () {
    gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
})
gulp.task('clean-build', function(){
    gulp.src('dist/img/sprite', 'dist/css/*.less')
        .pipe(clean());
})

gulp.task('min-build', function(){
    gulp.src('src/index.html')
    .pipe(usemin({
      css: [  minifyCss(), 'concat', rev()],      
      js: [ uglify(), rev() ]     
    }))
    .pipe(gulp.dest('build/'));
})

gulp.task('build', ['clean', 'copy', 'min-build','clean-build']);

gulp.task('less', function () {
    return gulp.src('src/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('serve', ['less'], function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/css/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/**/*.js").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);