import React from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }
  handleChange(inputValue) {
    console.log(inputValue);
  }
  render() {
    return (
      <div>
        <Celsius
          scale="c"
          temperature={celsius}
          CelTemperature={this.state.temperature}
          handleChange={this.handleChange}
        />
        <Fahrenheit
          scale="f"
          temperature={fahrenheit}
          FarTemperature={this.state.temperature}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TemperatureInput;
