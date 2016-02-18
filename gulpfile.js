var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var reactify = require('reactify');

var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('styles',function() {
  // move over fonts
  /*gulp.src('css/fonts/**.*')
    .pipe(gulp.dest('build/css/fonts'))*/

  // Compiles SCSS
  gulp.src('src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream:true}));
});

gulp.task('images',function(){
  //gulp.src('./src/vectors')
  //  .pipe(gulp.dest('./build/vectors'));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy : 'http://localhost:3000',
        middleware : [ historyApiFallback() ],
        ghostMode : false,
    });
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  var props = {
    entries: ['./' + file],
    debug : true,
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      //.pipe(buffer())
      //.pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./build'))
      .pipe(reload({stream:true}));
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('/src/app.jsx', false);
});

gulp.task('default', ['images','styles','scripts','browser-sync'], function() {
  gulp.watch('src/**/*.scss', ['styles']);
  return buildScript('/src/app.jsx', true);
});
