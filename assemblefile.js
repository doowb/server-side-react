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

var exec   = require('child_process').exec;
var serveStatic = require('serve-static');
var reload = require('gulp-livereload');
var connect = require('connect');
var bodyParser = require('body-parser')
var api = require('./src/server/api');


assemble.engine('.jsx', engine);
assemble.option('layout', 'default');
assemble.option('assets', 'site/assets');
assemble.create('app');
assemble.layouts('src/templates/layouts/*.hbs');

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

assemble.task('site', ['client'], function () {
  assemble.apps('src/client/apps/*.jsx');
  return assemble.src('src/templates/pages/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('site'))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(reload());
});

assemble.task('server', ['site'], function (done) {
  var server = connect();
  server.use(bodyParser.json());
  server.use('/api', api());
  server.use(serveStatic('site'));
  server.listen(3000, function () {
    exec('open http://localhost:3000/index.html', done);
  });
});


assemble.task('watch', ['default', 'server'], function () {
  reload.listen();
  assemble.watch(['src/**/*.*', '!src/server/**/*.*'], ['default']);
});

assemble.task('dev', ['watch']);
assemble.task('default', ['copy', 'styles', 'client', 'site']);
