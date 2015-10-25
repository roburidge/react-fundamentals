var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function(){
    return {
      text: 'the state text'
    };
  },
  update: function(e){
    this.setState({text: e.target.value});
  },
  render: function(){
    return (
      <div>
        <input type="text" onChange={this.update} />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <App text="This is the text prop" />,
  document.getElementById('content')
);
