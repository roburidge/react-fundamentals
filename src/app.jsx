var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <b>BOLD</b>
        <h1>Hello World</h1>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.body);
