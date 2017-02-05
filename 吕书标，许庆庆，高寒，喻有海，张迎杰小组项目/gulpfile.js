var gulp = require('gulp');
var connect = require('gulp-connect');
// 启动服务器
gulp.task('default', function() {
    connect.server({
        root: './',
        port: '8080'
    });
});
