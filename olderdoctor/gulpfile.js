var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('default',['look'],function(){
	return connect.server({
		root:'./',
		port:'8888'
	});
})
gulp.task('less',function(){
	gulp.src('less/*.less')
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./dest'))
})
gulp.task('look',function(){
	gulp.watch('less/*.less',['less']);
})
