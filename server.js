/**
  Imports & confg
*/
var
util = require('util'),
  express = require('express'),
  app = express(),
  poet = require('poet')(app),
  moment = require('moment'),
  color = require('colors'),
  marked = require('marked'),
  port = process.argv[2];

// Setup syntax highlighting when using marked
marked.setOptions({
  highlight: function(code) {
    return require('highlight.js')
      .highlightAuto(code)
      .value;
  }
});

// Start poet
poet
  .watch()
  .init();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.locals.moment = moment;

app.get('/', function(req, res) {
  res.render('index');
});

app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', {
      url: req.url
    });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({
      error: 'Not found'
    });
    return;
  }

  // default to plain-text. send()
  res.type('txt')
    .send('Not found');
});

app.listen(port || 3000);
console.log(util.format('Server running on port %s'.green, port));