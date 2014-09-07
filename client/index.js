/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require("react-simple-router");

var NotFound = React.createClass({
  render: function(){
    return <div>{"Page Not Found: " + this.props.path}</div>;
  }
});

var Navigation = React.createClass({
  render: function() {

    return (
      <ul>
        <li>{this.props.activePath}</li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog/first">First</a></li>
        <li><a href="/blog/second">second</a></li>
      </ul>
      );
  }
});

var Home = React.createClass({
  render: function(){
    return <h1>Home</h1>;
  }
});

var About = React.createClass({
  render: function() {
    return <h1>About</h1>;
  }
});

var BlogPost = React.createClass({
  render: function() {
    return <p>Post name would be: {this.props.postName}</p>;
  }
});

var _routes = [{
  pattern: "/",
  handler: Home
}, {
  pattern: "/blog/:postName",
  handler: BlogPost
}, {
  pattern: "/about",
  handler: About
}, ];

var App = React.createClass({
  render: function(){
    var route = Router.Component;
    return (
      <html>
        <head>
          <link href="/iwnet.css" rel="stylesheet" />
          <script async src="/bundle.js"></script>
          <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/>
          <meta name="description" content="Iestyn Williams is a web designer and engineer based in London"/>
        </head>
        <body>
          <Navigation activePath={this.props.path} />
          <route path={this.props.path} routes={_routes} notFound={NotFound}/>
        </body>
      </html>
      );
  }
});

if (typeof window !== 'undefined') {
  var app = React.renderComponent(App({
    path: window.location.pathname
  }), document);

  Router.Navigator.onNavigate(function(newPath){
    app.setProps({ path: newPath });
  });
}

module.exports = App;
