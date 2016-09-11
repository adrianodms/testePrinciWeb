var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');


gulp.task('clean', function () {
    gulp.src('dist')
        .pipe(clean());
});

gulp.task('copy', ['clean'], function(){

	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));

});

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

gulp.task('usemin', function(){
	gulp.src('dist/**/*.html')
	.pipe(usemin({
		'js':[uglify],
        'css':[autoprefixer, minifyCss]	
	}))
	.pipe(gulp.dest('dist'))
});

gulp.task('build', ['copy'], function(){
    gulp.start('usemin');
    console.log('A versão de produção está pronta. Mas é recomenado rodar a task "clean-after-build" para remover os arquivos desnecessários.')  
});

gulp.task('clean-build-sprites', function(){    
    gulp.src('dist/img/sprite').pipe(clean()); 
});

gulp.task('clean-build-css', function(){    
    gulp.src(['dist/css/**.less', 'dist/css/vendor', 'dist/css/main.css']).pipe(clean());     
})

gulp.task('clean-build-js', function(){    
    gulp.src(['dist/js/main.js', 'dist/js/vendor']).pipe(clean()); 
})

gulp.task('clean-after-build', ['clean-build-sprites', 'clean-build-js', 'clean-build-css']);

gulp.task('default', ['serve']);