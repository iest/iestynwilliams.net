/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require("react-simple-router");

var NotFound = require('components/NotFound');
var Navigation = require('components/Navigation');
var Home = require('components/Home');

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
    var router = Router.Component;

    var title;
    switch(this.props.path) {
      case "/about":
        title = "About";
        break;
      case "/":
        title = "Home";
        break;
      default:
        title = "blergh";
    }

    title = "iest.co | " + title;

    return (
      <html>
        <head>
          <title>{title}</title>
          <link href="/iwnet.css" rel="stylesheet" />
          <script async src="/bundle.js"></script>
          <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/>
          <meta name="description" content="Iestyn Williams is a web designer and engineer based in London"/>
        </head>
        <body>
          <Navigation activePath={this.props.path} />
          <router path={this.props.path} routes={_routes} notFound={NotFound}/>
        </body>
      </html>
      );
  }
});

// If we're in the browser, render the app
if (typeof window !== 'undefined') {
  var app = React.renderComponent(App({
    path: window.location.pathname
  }), document);

  Router.Navigator.onNavigate(function(newPath){
    app.setProps({ path: newPath });
  });
}

module.exports = App;
