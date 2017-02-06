var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
gulp.task('connect', function() {
    return gulp.src('css/index.less')
    	.pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(concat('index.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('css/'))
})
var connect = require('gulp-connect');
gulp.task('default',function(){
	connect.server({
		root:'./',
		port:'8080'
	})
})
