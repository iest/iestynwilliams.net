/**
 * @jsx React.DOM
 */
var React = require('react');
var ReactAsync = require('react-async');
var ReactRouter = require('react-router-component');
var superagent = require('superagent');

var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var Pages = ReactRouter.Pages;
var Page = ReactRouter.Page;
var NotFound = ReactRouter.NotFound;
var Link = ReactRouter.Link;

var HomePage = React.createClass({
  getInitialState: function() {
    return {words: "Nothing yet"};
  },
  render: function() {
    return(
      <div>
        <h1>{this.state.words}</h1>
        <SuperButton number="0" />
      </div>
    );
  },
  componentDidMount: function() {
    this.setState({words: "Javascript did this"});
  }
});

var SuperButton = React.createClass({
  getInitialState: function() {
    return {number: 0};
  },
  render: function() {
    return(
      <button onClick={this.handleClick}>
        Moar! {this.state.number}
      </button>
    );
  },
  handleClick: function() {
    var number = this.state.number;
    this.setState({number: number + 1});
  }
});

var NotFoundHandler = React.createClass({
  render: function() {
    return (
      <p>Page not found</p>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/test">Test</Link></li> 
      </ul>
    );
  }
});

var Test = React.createClass({
  render: function() {
    return (
      <p>This is the test page!</p>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/iwnet.css" />
        </head>
        <body>
          <Nav />
          <Locations className="App" path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/test" handler={Test} />
            <NotFound handler={NotFoundHandler} />
          </Locations>
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  };
}