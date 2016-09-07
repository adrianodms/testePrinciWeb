var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();


gulp.task('clean', function(){
	return gulp.src('dist').pipe(clean());
});

gulp.task('build', ['clean'], function(){
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('less', function(){
    return gulp.src('src/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/css/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);