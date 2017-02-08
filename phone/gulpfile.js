var gulp = require("gulp");
var connect = require("gulp-connect");
var autoprefixer = require("gulp-autoprefixer");
gulp.task("default", function() {
    connect.server({
        port: '8080',
        root: 'app/'
    })
})
gulp.task("aa", function() {
    gulp.src("app/css/index.css").pipe(autoprefixer({
        browsers: ['last 20 versions']
    })).pipe(gulp.dest("app/css/"))
})
