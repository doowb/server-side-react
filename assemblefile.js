'use strict';

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var less = require('gulp-less');
var assemble = require('assemble');
var reactify = require('reactify');
var extname = require('gulp-extname');
var engine = require('engine-react');
var browserify = require('browserify');

assemble.engine('.jsx', engine);
assemble.option('layout', 'default');
assemble.option('assets', 'site/assets');
assemble.create('app');
assemble.layouts('src/templates/layouts/*.hbs');

assemble.task('site', ['client'], function () {
  assemble.apps('src/client/apps/*.jsx');
  return assemble.src('src/templates/pages/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('site'))
    .on('error', function (err) {
      console.log(err);
    });
});

assemble.task('client', ['styles'], function (done) {
  var dest = './site/assets/js/app.js';
  var destFolder = path.resolve(path.dirname(dest));
  if (!fs.existsSync(destFolder)) {
    mkdirp(destFolder);
  }
  browserify('./main.js', { basedir: path.join(__dirname, 'src/client'), debug: true })
    .transform(reactify)
    .bundle(function (err, results) {
      if (err) return console.log('Bundle Error:', err);
      fs.writeFileSync(path.resolve(dest), results);
      done();
    });
});

assemble.task('copy', function () {
  assemble.copy('src/client/styles/*.css', 'site/assets/css');
  return assemble.copy('node_modules/bootstrap/dist/js/bootstrap.js', 'site/assets/js');
});

assemble.task('styles', ['copy'], function () {
  return assemble.src('node_modules/bootstrap/less/bootstrap.less')
    .pipe(less({
      paths: ['node_modules/bootstrap/less']
    }))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(assemble.dest('site/assets/css'));
});

assemble.task('default', ['copy', 'styles', 'client', 'site']);
