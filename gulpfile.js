var gulp = require('gulp');
var merge = require('gulp-merge-json');

var fs = require('fs');
var path = require('path');

// Add more languages if needed
var languages = 'en,de,it,es,fr'.split(',');

//The i18n folder source
var i18n_source = 'resources/i18n';

//The destination of the merged json file
var i18n_dest = 'src/assets/i18n';


/**
 * Use the following functions if you have Ionic 3 - The Gulp Task will be automatically executed on watch and build
 */

/* gulp.task('ionic:watch:before', function () {
  i18n();
});

gulp.task('ionic:build:before', function () {
  i18n();
}); */


// i18n Task
gulp.task('i18n', i18n);

// Merge multiple i18n json files together
function i18n() {
  return languages.map(function (lang) {
    return gulp.src(`${i18n_source}/*/${lang}.json`)
      .pipe(merge({
        fileName: `${lang}.json`
      }))
      .pipe(gulp.dest(i18n_dest));
  });
}
