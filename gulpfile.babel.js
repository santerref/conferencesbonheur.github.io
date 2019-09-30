import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import uglify from 'gulp-uglify';
import del from 'del';
import autoprefixer from 'autoprefixer';

const server = browserSync.create();
const clean = () => del(['dist']);

function sassTask() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
}

function serveTask(done) {
    server.init({
        server: {
            baseDir: '.'
        }
    });
    done();
}

function javascriptTask() {
    return gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("js"))
        .pipe(server.stream());
}

function reloadTask(done) {
    server.reload();
    done();
}

function watchTask() {
    gulp.watch("src/scss/*.scss", sassTask);
    gulp.watch("src/js/*.js", javascriptTask);
    gulp.watch("*.html", reloadTask);
}

const dev = gulp.series(clean, sassTask, javascriptTask, serveTask, watchTask);
export default dev;
