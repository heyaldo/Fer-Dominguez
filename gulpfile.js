const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. where is my css file
    return gulp.src('src/scss/**/*.scss')
    // 2. pass that file though sass compiler, compressed and concat
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    // 3. where do i save the compiled CSS?
    .pipe(gulp.dest('src/css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

// add bootstrap 4 
function bootstrap() {
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function js() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'src/app.js',
    ])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
       server: {
           baseDir: './src'
       } 
    });
    gulp.watch('src/scss/**/*.scss', style).on('change', browserSync.reload);
    gulp.watch('node_modules/bootstrap/scss/bootstrap.scss', bootstrap);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/app.js',js).on('change', browserSync.reload);
}

function deploy() {
    runSequence('style', 'fonts');
}

function fontawesome () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'))
}

function fonts() {
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'))
}

function flagscss () {
    return gulp.src('node_modules/flag-icon-css/css/flag-icon.css')
    .pipe(gulp.dest('src/css'))
}

function flag1x1 () {
    return gulp.src('node_modules/flag-icon-css/flags/1x1/*.svg')
    .pipe(gulp.dest('src/img/flags'))
}

exports.style = style;
exports.bootstrap = bootstrap;
exports.js = js;
exports.watch = watch;
exports.fontawesome = fontawesome;
exports.fonts = fonts;
exports.flagscss = flagscss;
exports.flag1x1 = flag1x1;
exports.deploy = deploy;