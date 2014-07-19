var _ = require('lodash');
var serve = require('koa-static');
var logger = require('koa-logger');
var koa = require('koa');
var route = require('koa-route');
var derp = require('derpjs');
var reqLogger = require('./lib/requestLogger');
var browserify = require('browserify');
var reactify = require('reactify');
var ReactAsync = require('react-async');
var nodejsx = require('node-jsx')
  .install();

var App = require('./client');
var port = process.argv[2] || 3000;
var development = process.env.NODE_ENV !== 'production';

function * renderApp(next) {
  var path = this.path;
  var app = App({
    path: path
  });
  var ctx = this;
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      console.log(err);
      return;
    }
    ctx.body = '<!doctype html>\n' + markup;
  });
}

derp.setup();

var app = koa({
  proxy: true
});

// app.use(browserify({
//   root: 'client',
//   debug: true,
//   transform: reactify,
//   production: true
// }));

function * bundle(next) {
  var b = browserify();
  b.add('./client.js');
  b.transform(reactify);
  this.body = b.bundle();
}

app.use(reqLogger());
app.use(logger());

if (development) {
  app.use(route.get('/public/bundle.js', bundle));
}

app.use(serve(__dirname + '/public'));
app.use(renderApp);

app.listen(port, function() {
  console.log('Listening on port', port);
});