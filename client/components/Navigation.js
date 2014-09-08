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

module.exports = Navigation;