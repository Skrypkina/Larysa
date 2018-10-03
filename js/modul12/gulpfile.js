'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const sequence = require('gulp-sequence').use(gulp);

//const handlebars = require('gulp-handlebars');
//const wrap  = require('gulp-wrap');
//const declare = require('gulp-declare');



gulp.task('html', function(){
    return  gulp.src('src/index.html')
    .pipe(rigger())
    .pipe(
        htmlmin({
            collapseWhitespace: true,
        }),
    ) 
    .pipe(gulp.dest('./build'));
});

// gulp.task('default', ['html']);


gulp.task('styles', () => 
  gulp
     .src('./src/scss/styles.scss')
     .pipe(plumber())
     .pipe(sass())
     .pipe(autoprefixer())
     .pipe(gulp.dest('./build/css'))
     .pipe(cssnano())
     .pipe(rename('styles.min.css'))
     .pipe(gulp.dest('./build/css'))
     .pipe(browserSync.stream()),

);


gulp.task('scripts', () => 
  gulp
     .src('./src/**/*.js')
     .pipe(plumber())
     .pipe(
         babel({
           
             presets: ["@babel/preset-env"],
         }),
     )
     .pipe(concat('scripts.js'))
     .pipe(gulp.dest('./build/js'))
     .pipe(uglify())
     .pipe(rename('scripts.min.js'))
     .pipe(gulp.dest('./build/js'))
     .pipe(browserSync.stream()),
);

gulp.task('watch', () => {
     gulp.watch('src/index.html', ['html']).on('change', browserSync.reload);
     gulp.watch('src/scss/styles.scss', ['styles']);
     gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('serve', ['styles'], () => 
   browserSync.init({
       server: './build',
       notify: false,
       open: true,
       cors: true,
       ui: false,
       logPrefix: 'DevServer',
       host: 'localhost',
       port: 5500,
       browser: "google chrome",
   }),

);

gulp.task('del:build', () => del('./build'));

gulp.task('build', cb => 
  sequence(
      'del:build',
      'styles',
      'html',
      'scripts',
      cb,
  ),
);


/*gulp.task('templates', function(){
    gulp.src('src/templates/*.html')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'MyApp.templates',
        noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('build/js/'));
  });
*/
//gulp.task('start', cb => sequence('build', 'serve','watch'));

// var gulpSequence = require('gulp-sequence').use(gulp)
gulp.task('start', sequence('build','serve','watch'));
