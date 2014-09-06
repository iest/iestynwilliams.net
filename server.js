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
  console.time("rendering App");
  var ctx = this;
  var path = this.path;
  var app = App({
    path: path
  });
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      console.log(err);
      return;
    }
    ctx.body = '<!doctype html>\n' + markup;
    console.timeEnd("rendering App");
  });
  yield next;
}

function * api(next) {
  var ctx = this;
  ctx.body = "api!";
  yield next;
}

derp.setup();

var app = koa({
  proxy: true
});

app.use(reqLogger());
app.use(logger());

if (development) {
  app.use(route.get('/bundle.js', function * bundle(next) {
    var b = browserify();
    b.add('./client.js');
    b.transform(reactify);
    this.body = b.bundle();
    yield next;
  }));
}

app.use(serve(__dirname + '/public'));
// app.use(route.get('/api/:postid', api));

// Need API for:
// - Get all posts
// - Get single post
// - Get posts by tag
// - Get posts by date?

app.use(renderApp);

app.listen(port, function() {
  console.log('Listening on port', port);
});
