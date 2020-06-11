import React, { Component } from "react";

class Button extends Component {
  state = {
    isToggleOn: true,
  };
  toggleButton = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };
  render() {
    return (
      <button onClick={this.toggleButton}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Button;
