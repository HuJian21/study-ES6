const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');

// 编译压缩js
gulp.task('covertJs', () => {
    return gulp.src('app/js/*.js')
      .pipe(babel(
          { presets: ['es2015'] }
      ))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
});

// 合并压缩css
gulp.task('covertCss', () => {
    return gulp.src('app/scss/*.scss')
      .pipe(concat('app.css'))
      .pipe(sass())
      .pipe(cssnano())
      .pipe(rename((path) => {
          path.basename += '.min';
      }))
      .pipe(gulp.dest('dist/css'));
});

// 监视文件变化
gulp.task('watch', () => {
    gulp.watch('app/scss/*.scss', ['covertCss']);
    gulp.watch('app/js/*.js', ['covertJs']);
});

// browserify
// gulp.task('browserify', () => {
//     let b = browserify({
//         entries: 'dist/js/app.js'
//     });   
//     return b.bundle()
//       .pipe(source('bundle.js'))
//       .pipe(gulp.dest('dist/js'));
// });

gulp.task('start', ['covertCss', 'covertJs', 'watch']);