var GreeterComponent = React.createClass({displayName: "GreeterComponent",

  getInitialState: function() {
    return(
      {name: this.props.name || 'World'}
    );
  },

  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("p", null, "I am the greeter component."), 
        React.createElement("p", null, "Hello, ", this.state.name, "!")
      )
    );
  }
});
