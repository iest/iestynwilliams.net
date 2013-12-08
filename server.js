var
express = require('express'),
  app = express(),
  poet = require('poet')(app),
  moment = require('moment');

poet
  .init();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(app.router);

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

app.listen(3000);
console.log('Server running, listening on 3000');