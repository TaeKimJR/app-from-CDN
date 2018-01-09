var SimpleComponent = React.createClass({displayName: "SimpleComponent",

  getInitialState: function() {
    return(
      {value: ''}
    );
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("p", null, "I am a simple component."), 
        React.createElement("p", null, "My input value is: ", React.createElement("strong", null, this.state.value)), 
        React.createElement("input", {type: "text", value: this.state.value, onChange: this.handleChange})
      )
    );
  }
});
