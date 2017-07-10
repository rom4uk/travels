var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
//var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gulpSequence = require('gulp-sequence');





// add task less, concat
gulp.task('less', function () {
	return gulp.src('less/*.less')
	.pipe(less())
	//.pipe(concat('style.css'))
	.pipe(gulp.dest('./style'))
	.pipe(browserSync.stream())
});

gulp.task('livereload', ['less'], function(){
	browserSync.init({
		server: './'
	})
	gulp.watch('less/*.less', ['less'])
	gulp.watch('*.html').on('change', browserSync.reload)
})

gulp.task('default', function(){
	gulp.watch('less/.*', ['less'])
})