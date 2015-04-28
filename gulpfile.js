var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app/ch_01"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/**/*.html").on('change', reload);
    gulp.watch("app/**/*.js").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);