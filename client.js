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

var PageOne = React.createClass({
  render: function(){
    return PageAny({pageNumber: 1});
  }
});

var PageAny = React.createClass({
  render: function(){

    var anotherPage = "/page/"+Math.floor(Math.random()*1000);

    return React.DOM.div(null,
      React.DOM.h1(null, "Page "+this.props.pageNumber+"! "),
      React.DOM.p(null, React.DOM.a({href: "/not_found_here" }, "404")),
      React.DOM.p(null, React.DOM.a({href: anotherPage }, anotherPage)),
      React.DOM.p(null, React.DOM.a({href: "https://google.com"}, "external link")),
      React.DOM.p({onClick: this.programmaticNavigate, style: { "cursor": "pointer" }}, "home (n.b. this is clickable)")
    );
  },
  programmaticNavigate: function(ev){
    ev.preventDefault();
    Router.Navigator.navigate("/");
  }
});

var _routes = [
  { pattern:"/", handler: PageOne },
  { pattern:"/page/:pageNumber", handler: PageAny}
];

var App = React.createClass({
  render: function(){
    return Router.Component({
      path: this.props.path,
      routes: _routes,
      notFound: NotFound
    });
  }
});

if (typeof window !== 'undefined') {
  var app = React.renderComponent(App({
    path: window.location.pathname
  }), document.body);

  Router.Navigator.onNavigate(function(newPath){
    app.setProps({ path: newPath });
  });
}

module.exports = App;
