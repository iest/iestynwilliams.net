var NotFound = React.createClass({
  render: function(){
    return <div>{"Page Not Found: " + this.props.path}</div>;
  }
});

module.exports = NotFound;