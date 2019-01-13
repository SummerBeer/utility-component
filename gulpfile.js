const concat = require("gulp-concat")
const gulp = require("gulp")
const uglify = require("gulp-uglify")
const sass = require("gulp-sass")

gulp.task("js-handle", () => {
    return gulp.src("src/**/*.js")
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest("dist/"))
})

gulp.task("css-handle", () => {
    return gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("dist/"))
})

gulp.task("default", () => {
    gulp.watch(["src/**/*.js"], ["js-handle"])
    gulp.watch(["src/**/*.scss"], ["css-handle"])
})