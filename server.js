var React = require('react');
// var derp = require('derpjs');
require('node-jsx').install();

var Server = require('express')();
var url = require('url');
var fs = require('fs');

var App = require('./client');
var port = process.argv[2] || 3000;

Server.get('*', function(req, res) {
  var path = url.parse(req.url).path;

  if (path === "/favicon.ico") {
    return res.end();
  }

  if (path === "/bundle.js") {
    return fs.createReadStream("bundle.js").pipe(res);
  }

  res.send(React.renderComponentToString(App({path: path})));
});

var server = Server.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});