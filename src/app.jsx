var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'this is a default prop',
      cat: 0
    };
  },
  propTypes: {
    text: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render: function(){
    var text = this.props.text;
    return (
      <div>
        <b>BOLD</b>
        <h1>{text}</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('content')
);
