var gulp=require('gulp');
var connect=require('gulp-connect');	//建立服务器并自动刷新
var rename=require('gulp-rename');		//重命名
var uglify=require('gulp-uglify');			//js压缩
var minifyCss=require('gulp-minify-css');	//css压缩
var concat=require('gulp-concat');		//文件合并
var jshint=require('gulp-jshint');		//js代码检测
var autoprefixer=require('gulp-autoprefixer');	//自动处理浏览器前缀


//搭建服务器并自动刷新
gulp.task('webserver',function() {
	connect.server({
		livereload:true
	})
});

//刷新页面
gulp.task('reload',function(){
	gulp.src('app/*')
	.pipe(connect.reload());
})

//css自动添加前缀，整合，压缩
gulp.task('concat-css',function(){

	gulp.src('app/src/css/*.css')
	.pipe(concat('all.css'))		//合并css并命名为all.css
	.pipe(gulp.dest('app/dist/css'))	//目标路径
	.pipe(autoprefixer({		//自动添加前缀
		browers:['5%','Android >=2.3']
	}))
	.pipe(rename('allAuto.css'))
	.pipe(gulp.dest('app/dist/css'))
	.pipe(minifyCss())			//压缩
	.pipe(rename('all.min.css'))	//重命名
	.pipe(gulp.dest('app/dist/css'));
});

//js整合压缩
gulp.task('concat-js',function(){
	gulp.src('app/src/js/*.js')
	.pipe(concat('all.js'))		//合并js并命名为all.js
	.pipe(gulp.dest('app/dist/js'))	//目标路径
	.pipe(uglify())		//压缩
	.pipe(rename('all.min.js'))		//重命名
	.pipe(gulp.dest('app/dist/js'));

})

//js代码检查
gulp.task('jsHint',function(){
	gulp.src('app/src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter());	// 输出检查结果
});


//监听文件变化
gulp.task('watch',function(){
	gulp.watch('app/src/js/*.js',['concat-js','jsHint']);
	gulp.watch('app/src/css/*.css',['concat-css','min-css']);
	gulp.watch('app/*',['reload']);
});

gulp.task('default',['webserver','concat-css','concat-js','watch']);