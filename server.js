var _ = require('lodash');
var serve = require('koa-static');
var route = require('koa-route');
var views = require('co-views');
var logger = require('koa-logger');
var koa = require('koa');
var app = koa();
var derp = require('derpjs');

// Global variables
var port = process.argv[2] || 3000;

// Middleware
app.use(logger());
app.use(serve(__dirname + '/public'));

// Setup derp
derp.setup();

var render = views(__dirname + "/views", {
  default: "jade"
}); 

// 404 handler
app.use(function * pageNotFound(next) {
  yield next;
  if (this.body) return;
  this.status = 404;
  this.body = yield render('404');
});

// Locals injector
app.use(function * locals(next) {
  this.locals = {
    moment: require('moment'),
    path: this.request.path
  };
  yield next;
});

// Routes
app.use(route.get('/', function * list() {
  this.body = yield render('list', _.extend(this.locals, {
    posts: derp.getAllPosts()
  }));
}));
app.use(route.get('/:url', function * show(url) {
  var post = derp.getPost(url);
  if (!post) return;

  if (post.page) {
    this.body = yield render('page', _.extend(this.locals, {
      post: post
    }));  
  } else {
    this.body = yield render('post', _.extend(this.locals, {
      post: post
    }));
  }
}));

// Now do the work and run the server
app.listen(port);
console.log('Listening on port', port);