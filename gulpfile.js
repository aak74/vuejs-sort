'use strict';

var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var babelify = require("babelify");
var vueify = require("vueify");
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['js']);

gulp.task('js', function(){
    return browserify({
            entries: [
                './src/app.js',
                // './src/QuickSort.js'
            ]
        })
        .transform(vueify)
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch', ['js'], function() {
    gulp.watch('./src/*', ['js']);
});

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        server: "./",
        reloadDelay: 1000
    });

    gulp.watch('./src/*').on('change', browserSync.reload);
});
