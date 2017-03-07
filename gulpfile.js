var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');
	
var autoprefixerOptions = {
	browsers: ['last 2 versions'],
    cascade: false
};

gulp.task('sass', function(){
	gulp.src('./scss/app.scss')
	.pipe(sass())
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(gulp.dest('./css'))
});	
	
gulp.task('js', function() {
  return gulp.src('app/**/*.js')               
        .pipe(print())                          
        .pipe(babel({ presets: ['es2015'] }))    
        .pipe(gulp.dest('build'));               
})

gulp.task("watch:sass", function(){
	gulp.watch('./scss/*.scss', ['sass'])
});
