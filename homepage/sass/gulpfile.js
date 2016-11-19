var gulp=require('gulp');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');

gulp.task('sass',function() {
	gulp.src('app/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefixer({		//自动添加前缀
		browers:['5%','Android >=2.3']
	}))
	.pipe(gulp.dest('app/css'));
})
gulp.task('watch',function(){
	gulp.watch('app/sass/*',['sass']);
})

gulp.task('default',['sass','watch']);