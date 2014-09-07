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
    return res.sendFile(__dirname + "/public/bundle.js");
  }

  if (path === "/iwnet.css") {
    return res.sendFile(__dirname + "/public/css/iwnet.css");
  }

  var renderedApp = React.renderComponentToString(App({path: path}));
  res.send("<!doctype html>" + renderedApp);
});

var server = Server.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});